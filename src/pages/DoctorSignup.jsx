import { Stethoscope, ShieldCheck, ArrowRight, RefreshCcw, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorSignup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("DOCTOR");
  const [form, setForm] = useState({
    name: "",
    masterKey: "",
    phone: "",
    village: "",
    aadhaar: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGeneratePassword = () => {
    const randomPass = Math.random().toString(36).slice(-8);
    setForm({ ...form, password: randomPass });
    alert(`Generated Password: ${randomPass}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for Doctor Registration
    if (form.masterKey === "DOC123") { // Example Master Key check
      alert("Registration Successful!");
      navigate("/doctorlogin");
    } else {
      alert("Invalid Master Key. Please contact Health Department.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-xl p-8 relative">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-6 group"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Role Toggle - Click ASHA to go to ASHA signup */}
        <div className="flex p-1 bg-slate-100 rounded-xl mb-8 border border-slate-200">
          <button 
            type="button"
            onClick={() => navigate("/signup")} 
            className="flex-1 py-2 text-sm font-bold rounded-lg transition-all text-slate-500"
          >
            ASHA WORKER
          </button>
          <button 
            type="button"
            className="flex-1 py-2 text-sm font-bold rounded-lg transition-all bg-white text-emerald-700 shadow-sm"
          >
            DOCTOR
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Stethoscope className="h-5 w-5 text-emerald-700" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Doctor Registration</h1>
            <p className="text-sm text-slate-600 uppercase font-semibold tracking-tighter">New Account</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-slate-700 flex gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <span>Requires Medical License (Master Key) verification.</span>
        </div>

        {/* Form - Matching image sequence */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Name" name="name" placeholder="Dr. Full Name" value={form.name} onChange={handleChange} />
          
          <Input label="Master Key" name="masterKey" type="password" placeholder="Enter Registration Key" value={form.masterKey} onChange={handleChange} />
          
          <Input label="Phone No" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} />
          
          <Input label="Village / Area" name="village" placeholder="Assigned Area" value={form.village} onChange={handleChange} />

          <Input label="Aadhaar No" name="aadhaar" placeholder="12-digit Aadhaar" value={form.aadhaar} onChange={handleChange} />

          <div className="space-y-1">
            <label className="block text-sm font-medium text-slate-700">Password:-</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
              <button 
                type="button" 
                onClick={handleGeneratePassword}
                className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold flex items-center gap-1 hover:bg-slate-100 transition-colors"
              >
                <RefreshCcw className="h-3 w-3" /> Auto
              </button>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-2/3 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-white font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-100"
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center border-t pt-6">
          <button 
            onClick={() => navigate("/doctorlogin")} 
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium underline underline-offset-4"
          >
            Already have an ID? Login Here
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reusable Input Component ---------------- */
function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">
        {label}:-
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm transition-all"
        required
      />
    </div>
  );
}