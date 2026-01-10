import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  Users,
  AlertTriangle,
  CalendarClock,
  Bell,
  PlusCircle,
  Activity,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ NAVBAR */}
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-6 space-y-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              ASHA Worker Dashboard
            </h1>
            <p className="text-slate-600 mt-1">
              Real-time overview of patients, risks, and community health
            </p>
          </div>

          {/* Logout Button */}
          {/* doctor login Button */}
          <button
  className="
    h-10 px-6 rounded-xl
    border border-emerald-300
    bg-emerald-50/80 backdrop-blur
    text-emerald-700 font-semibold tracking-tight
    shadow-sm
    hover:bg-emerald-100 hover:shadow-md
    active:scale-[0.98]
    transition-all duration-200
    focus:outline-none focus-visible:ring-2
    focus-visible:ring-emerald-500
    focus-visible:ring-offset-2
  "
  onClick={() => navigate("/doctorLogin")}
>
  Doctor Login
</button>
        </div>

        {/* KPI Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <KpiCard
            title="Total Patients"
            value="128"
            trend="+6% this month"
            icon={<Users className="h-6 w-6" />}
            accent="emerald"
          />

          <KpiCard
            title="High-Risk Patients"
            value="12"
            trend="2 critical"
            icon={<AlertTriangle className="h-6 w-6" />}
            accent="red"
          />

          <KpiCard
            title="Upcoming Follow-ups"
            value="7"
            trend="Next 3 days"
            icon={<CalendarClock className="h-6 w-6" />}
            accent="amber"
          />

          <KpiCard
            title="Community Alerts"
            value="3"
            trend="Seasonal rise"
            icon={<Bell className="h-6 w-6" />}
            accent="blue"
          />
        </div>

        {/* Health Intelligence */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <InsightCard
            title="Health Trend"
            description="Rising BP and sugar levels observed in the last 2 weeks"
            icon={<TrendingUp className="h-6 w-6" />}
          />

          <InsightCard
            title="Village Focus"
            description="Village Rampur shows delayed follow-ups"
            icon={<MapPin className="h-6 w-6" />}
          />

          <InsightCard
            title="AI Observation"
            description="3 patients moved from Amber to Red risk"
            icon={<Activity className="h-6 w-6" />}
          />
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <QuickAction
              title="Add New Patient"
              description="Register a new patient profile"
              icon={<PlusCircle className="h-6 w-6" />}
              onClick={() => navigate("/add-patient")}
            />

            <QuickAction
  title="Review High-Risk"
  description="View urgent patient cases"
  icon={<AlertTriangle className="h-6 w-6" />}
  onClick={() => navigate("/review-high-risk")}
/>


            <QuickAction
              title="Manage Follow-ups"
              description="Track visits and reminders"
              icon={<CalendarClock className="h-6 w-6" />}
              onClick={() => navigate("Follow-up-management")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- KPI CARD ---------------- */

function KpiCard({ title, value, trend, icon, accent }) {
  const accentMap = {
    emerald: "from-emerald-500/10",
    red: "from-red-500/10",
    amber: "from-amber-500/10",
    blue: "from-blue-500/10",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`rounded-2xl bg-white border p-6 shadow-sm bg-gradient-to-br ${accentMap[accent]} to-transparent`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          <p className="text-xs text-slate-500 mt-1">{trend}</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 text-slate-700">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- INSIGHT CARD ---------------- */

function InsightCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- QUICK ACTION ---------------- */

function QuickAction({ title, description, icon, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
