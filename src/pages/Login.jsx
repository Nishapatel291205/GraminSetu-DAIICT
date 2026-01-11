import { User, Stethoscope, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-xl p-10 text-center">
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Gramin Setu</h1>
        <p className="text-slate-500 mb-8 text-sm">Please select your role to continue</p>

        <div className="space-y-4">
          {/* ASHA Worker Selection */}
          <button
            onClick={() => navigate("/ashaworker")}
            className="w-full flex items-center gap-4 p-5 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
          >
            <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <User className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900">ASHA Worker</h3>
              <p className="text-xs text-slate-500">Login for village health worker portal</p>
            </div>
          </button>

          {/* Doctor Selection */}
          <button
            onClick={() => navigate("/doctorlogin")}
            className="w-full flex items-center gap-4 p-5 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
          >
            <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900">Doctor</h3>
              <p className="text-xs text-slate-500">Access medical consultation portal</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}