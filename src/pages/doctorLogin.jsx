import { Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function DoctorLogin() {
  const [form, setForm] = useState({
    aadhaar: "",
    phone: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚠️ TEMP LOGIC — Replace with API validation
    if (
      form.aadhaar === "123412341234" &&
      form.phone === "9876543210" &&
      form.name.toLowerCase() === "ramesh kumar"
    ) {
      alert("Patient verified. Access granted.");
      // navigate("/doctor/patient-view");
    } else {
      alert("Patient details do not match our records.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-sm p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Stethoscope className="h-5 w-5 text-emerald-700" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Doctor Access Portal
            </h1>
            <p className="text-sm text-slate-600">
              Patient-specific secure verification
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-slate-700 flex gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-600 mt-0.5" />
          <span>
            Access is granted only when patient Aadhaar, phone number,
            and name exactly match existing records.
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
            label="Patient Full Name"
            name="name"
            placeholder="As per health record"
            value={form.name}
            onChange={handleChange}
          />
             <Input
            label="Patient Phone Number"
            name="phone"
            placeholder="Registered mobile number"
            value={form.phone}
            onChange={handleChange}
          />

          <Input
            label="Patient Aadhaar Number"
            name="aadhaar"
            placeholder="12-digit Aadhaar"
            value={form.aadhaar}
            onChange={handleChange}
          />                

          <button
            type="submit"
            className="
              w-full mt-4 flex items-center justify-center gap-2
              rounded-xl bg-emerald-600 px-4 py-3
              text-white font-semibold
              hover:bg-emerald-700 transition
              focus:outline-none focus:ring-2 focus:ring-emerald-500
            "
          >
            Verify & Access Patient
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Footer Note */}
        <p className="mt-6 text-xs text-slate-500 text-center">
          This access is logged and monitored for patient safety and audit
          purposes.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Input Component ---------------- */

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full rounded-lg border border-slate-300
          px-3 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-emerald-500
        "
        required
      />
    </div>
  );
}