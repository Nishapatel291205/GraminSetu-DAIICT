import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AshaWorker() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ashaId: "", password: "" });

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    if (form.ashaId && form.password) navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-xl p-8 relative">
        
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-6">
          <ArrowLeft className="h-4 w-4" /> <span className="text-sm">Back to Selection</span>
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <User className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-bold text-slate-900">ASHA Worker Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Worker ID:-</label>
            <input type="text" className="w-full rounded-lg border border-slate-300 p-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" required />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Password:-</label>
            <input type="password" className="w-full rounded-lg border border-slate-300 p-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" required />
          </div>
          <button type="submit" onClick={() => navigate('/dashboard')} className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 p-3 text-white font-semibold hover:bg-emerald-700">
            Login <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-sm text-center">New ASHA? <button onClick={() => navigate("/signup")} className="text-emerald-600 font-bold underline">Register Here</button></p>
      </div>
    </div>
  );
}