import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { 
  Users, AlertTriangle, CalendarClock, Bell, PlusCircle, 
  Activity, TrendingUp, MapPin, RefreshCcw, FileDown 
} from "lucide-react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function Dashboard() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [stats, setStats] = useState({ total: 0, highRisk: 0, unSynced: 0 });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("offline_patients") || "[]");
    const highRiskCount = localData.filter(p => p.riskResult === "High").length;
    const unSyncedCount = localData.filter(p => !p.synced).length;
    
    setStats({ total: localData.length, highRisk: highRiskCount, unSynced: unSyncedCount });
    setPatients(localData);
  }, []);

  // ✅ PDF Download Logic (Multilingual)
  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // PDF Title & Date
    doc.setFontSize(18);
    doc.text(t('app_title'), 14, 20);
    doc.setFontSize(10);
    doc.text(`${t('report_generated')} ${new Date().toLocaleString()}`, 14, 28);

    // Table Columns (Multilingual)
    const tableColumn = [t('table_name'), t('aadhaar'), t('age'), t('table_risk')];
    const tableRows = patients.map(p => [
      p.name, p.aadhaar, p.age, p.riskResult === "High" ? t('high_risk') : t('low_risk')
    ]);

    doc.autoTable({
      startY: 35,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      headStyles: { fillColor: [5, 150, 105] }, // Emerald-600
    });

    doc.save(`GraminSetu_Report_${new Date().getTime()}.pdf`);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-6 space-y-10">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">{t('dashboard_title')}</h1>
            <p className="text-slate-500 font-medium">{t('dashboard_subtitle')}</p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={downloadPDF}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
            >
              <FileDown className="h-5 w-5 text-emerald-600" />
              {t('download_report')}
            </button>
            <button
              onClick={() => navigate("/doctorLogin")}
              className="flex-1 md:flex-none h-11 px-6 rounded-xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
            >
              {t('doctor_login_btn')}
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500 p-2 rounded-lg animate-pulse">
                <RefreshCcw className="h-4 w-4 text-white" />
              </div>
              <span className="text-emerald-900 font-bold text-sm">
                {stats.unSynced} {t('sync_btn')} {t('pending_sync') || 'Pending'}
              </span>
            </div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Village: Rampur</span>
          </motion.div>
        </div>

        {/* KPI Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <KpiCard title={t('total_patients')} value={stats.total} trend={t('month_growth')} icon={<Users />} accent="emerald" />
          <KpiCard title={t('high_risk_patients')} value={stats.highRisk} trend={t('critical_count')} icon={<AlertTriangle />} accent="red" />
          <KpiCard title={t('upcoming_followups')} value="7" trend={t('next_days')} icon={<CalendarClock />} accent="amber" />
          <KpiCard title={t('community_alerts')} value="3" trend={t('seasonal_rise')} icon={<Bell />} accent="blue" />
        </div>

        {/* Health Intelligence */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <InsightCard title={t('trend_title')} description={t('trend_desc')} icon={<TrendingUp />} />
          <InsightCard title={t('focus_title')} description={t('focus_desc')} icon={<MapPin />} />
          <InsightCard title={t('ai_obs_title')} description={t('ai_obs_desc')} icon={<Activity />} />
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto space-y-4">
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight ml-1">{t('quick_actions')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <QuickAction title={t('action_add_title')} description={t('action_add_desc')} icon={<PlusCircle />} onClick={() => navigate("/add-patient")} />
            <QuickAction title={t('action_risk_title')} description={t('action_risk_desc')} icon={<AlertTriangle />} onClick={() => navigate("/review-high-risk")} />
            <QuickAction title={t('action_followup_title')} description={t('action_followup_desc')} icon={<CalendarClock />} onClick={() => navigate("/Follow-up-management")} />
          </div>
        </div>
      </div>
    </>
  );
}

// --- Reusable Internal Components ---

function KpiCard({ title, value, trend, icon, accent }) {
  const accentMap = {
    emerald: "from-emerald-500/10 border-emerald-100 text-emerald-600",
    red: "from-red-500/10 border-red-100 text-red-600",
    amber: "from-amber-500/10 border-amber-100 text-amber-600",
    blue: "from-blue-500/10 border-blue-100 text-blue-600",
  };

  return (
    <motion.div whileHover={{ y: -5 }} className={`rounded-3xl bg-white border-2 p-6 shadow-sm bg-gradient-to-br ${accentMap[accent]} to-transparent`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">{title}</p>
          <p className="text-4xl font-black text-slate-900 mt-2">{value}</p>
          <p className="text-xs mt-2 font-bold opacity-80">{trend}</p>
        </div>
        <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

function InsightCard({ title, description, icon }) {
  return (
    <div className="rounded-3xl bg-white border-2 border-slate-100 p-6 shadow-sm hover:border-emerald-200 transition-all group">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
          {icon}
        </div>
        <div>
          <h3 className="font-black text-slate-900 uppercase text-sm tracking-tight">{title}</h3>
          <p className="text-sm text-slate-500 mt-1 font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ title, description, icon, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      className="rounded-3xl bg-white border-2 border-slate-100 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500 cursor-pointer group transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
          {icon}
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-lg tracking-tight">{title}</h3>
          <p className="text-sm text-slate-500 font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}