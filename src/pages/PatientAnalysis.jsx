import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { HeartPulse, Droplet, Activity, Scale } from "lucide-react";

const data = [
  { date: "Jan", sugar: 180, bp: 120, heart: 78, bmi: 24 },
  { date: "Feb", sugar: 200, bp: 130, heart: 80, bmi: 24.5 },
  { date: "Mar", sugar: 240, bp: 140, heart: 85, bmi: 25 },
  { date: "Apr", sugar: 220, bp: 135, heart: 82, bmi: 24.8 },
];

export default function PatientHealthAnalysis() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-600">
          Health Monitoring System
        </h1>

        <div className="flex gap-6 text-slate-700 font-medium">
          <Link to="/dashboard" className="hover:text-emerald-600">
            Dashboard
          </Link>
          <Link to="/add-patient" className="hover:text-emerald-600">
            Add Patient
          </Link>
          <Link to="/patients" className="hover:text-emerald-600">
            Patients
          </Link>
          <Link to="/" className="text-red-500">
            Logout
          </Link>
        </div>
      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <div className="max-w-7xl mx-auto p-8 space-y-10">

        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Patient Health Analysis
          </h2>
          <p className="text-slate-600 mt-1">
            Aadhaar: <span className="font-semibold">123417478256</span>
          </p>
        </div>

        {/* ================= GRAPHS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <HealthCard title="Blood Sugar" icon={<Droplet />}>
            <Chart data={data} dataKey="sugar" color="#10b981" />
          </HealthCard>

          <HealthCard title="Blood Pressure" icon={<HeartPulse />}>
            <Chart data={data} dataKey="bp" color="#ef4444" />
          </HealthCard>

          <HealthCard title="Heart Rate" icon={<Activity />}>
            <Chart data={data} dataKey="heart" color="#3b82f6" />
          </HealthCard>

          <HealthCard title="BMI" icon={<Scale />}>
            <Chart data={data} dataKey="bmi" color="#f59e0b" />
          </HealthCard>

        </div>

        {/* ================= OVERALL REPORT ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            Overall Health Report
          </h3>

          <p className="text-lg">
            Risk Level:{" "}
            <span className="font-bold text-green-600">NORMAL</span>
          </p>

          <p className="text-slate-600">
            Vitals are stable. Maintain a healthy routine and monitor vitals regularly.
          </p>

          <div>
            <h4 className="font-semibold text-slate-800 mt-4">
              Suggestions
            </h4>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              <li>Reduce sugar intake</li>
              <li>Daily walking (30 minutes)</li>
              <li>Regular BP monitoring</li>
              <li>Follow-up with physician</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function HealthCard({ title, icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Chart({ data, dataKey, color }) {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
