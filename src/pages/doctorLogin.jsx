// import { Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";
// import { useState } from "react";

// export default function DoctorLogin() {
//   const [form, setForm] = useState({
//     aadhaar: "",
//     phone: "",
//     name: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ⚠️ TEMP LOGIC — Replace with API validation
//     if (
//       form.aadhaar === "123412341234" &&
//       form.phone === "9876543210" &&
//       form.name.toLowerCase() === "ramesh kumar"
//     ) {
//       alert("Patient verified. Access granted.");
//       // navigate("/doctor/patient-view");
//     } else {
//       alert("Patient details do not match our records.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-sm p-8">

//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
//             <Stethoscope className="h-5 w-5 text-emerald-700" />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold text-slate-900">
//               Doctor Access Portal
//             </h1>
//             <p className="text-sm text-slate-600">
//               Patient-specific secure verification
//             </p>
//           </div>
//         </div>

//         {/* Info Box */}
//         <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-slate-700 flex gap-2">
//           <ShieldCheck className="h-4 w-4 text-blue-600 mt-0.5" />
//           <span>
//             Access is granted only when patient Aadhaar, phone number,
//             and name exactly match existing records.
//           </span>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//             label="Patient Full Name"
//             name="name"
//             placeholder="As per health record"
//             value={form.name}
//             onChange={handleChange}
//           />
//              <Input
//             label="Patient Phone Number"
//             name="phone"
//             placeholder="Registered mobile number"
//             value={form.phone}
//             onChange={handleChange}
//           />

//           <Input
//             label="Patient Aadhaar Number"
//             name="aadhaar"
//             placeholder="12-digit Aadhaar"
//             value={form.aadhaar}
//             onChange={handleChange}
//           />                

//           <button
//             type="submit"
//             className="
//               w-full mt-4 flex items-center justify-center gap-2
//               rounded-xl bg-emerald-600 px-4 py-3
//               text-white font-semibold
//               hover:bg-emerald-700 transition
//               focus:outline-none focus:ring-2 focus:ring-emerald-500
//             "
//           >
//             Verify & Access Patient
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </form>

//         {/* Footer Note */}
//         <p className="mt-6 text-xs text-slate-500 text-center">
//           This access is logged and monitored for patient safety and audit
//           purposes.
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- Input Component ---------------- */

// function Input({ label, name, value, onChange, placeholder }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-slate-700 mb-1">
//         {label}
//       </label>
//       <input
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="
//           w-full rounded-lg border border-slate-300
//           px-3 py-2 text-sm
//           focus:outline-none focus:ring-2 focus:ring-emerald-500
//         "
//         required
//       />
//     </div>
//   );
// }

import { Stethoscope, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const navigate = useNavigate();
  const [role, setRole] = useState("DOCTOR"); // State to handle the toggle from your sketch
  const [form, setForm] = useState({
    aadhaar: "",
    phone: "",
    name: "",
    password: "", // Field present in your sketch
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.aadhaar === "123412341234" &&
      form.phone === "9876543210" &&
      form.name.toLowerCase() === "ramesh kumar"
    ) {
      alert("Patient verified. Access granted.");
      navigate("/Dashboard"); // Navigates based on your file structure
    } else {
      alert("Patient details do not match our records.");
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

        {/* Role Toggle Tabs - From your sketch */}
        <div className="flex p-1 bg-slate-100 rounded-xl mb-8 border border-slate-200">
          <button 
            type="button"
            onClick={() => setRole("ASHA WORKER")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === "ASHA WORKER" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500"}`}
          >
            ASHA WORKER
          </button>
          <button 
            type="button"
            onClick={() => setRole("DOCTOR")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === "DOCTOR" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500"}`}
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
            <h1 className="text-xl font-bold text-slate-900">
              Doctor Access Portal
            </h1>
            <p className="text-sm text-slate-600 uppercase tracking-tighter font-semibold">
              {role} Login
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-slate-700 flex gap-2">
          <ShieldCheck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <span>
            Access is granted only when patient Aadhaar, phone number,
            and name exactly match existing records.
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Phone No"
            name="phone"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />

          {/* Verification Fields */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Verification Required</p>
            <div className="space-y-4">
               <Input
                label="Patient Full Name"
                name="name"
                placeholder="As per health record"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                label="Patient Aadhaar Number"
                name="aadhaar"
                placeholder="12-digit Aadhaar"
                value={form.aadhaar}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="
                w-2/3 mt-4 flex items-center justify-center gap-2
                rounded-xl bg-emerald-600 px-4 py-3
                text-white font-semibold
                hover:bg-emerald-700 transition shadow-lg shadow-emerald-100
              "
            >
              Login
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Footer Link - From your sketch */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate("/DoctorSignup")}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium underline underline-offset-4"
          >
            No account? Register Here
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Input Component ---------------- */
function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}:-
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full rounded-lg border border-slate-300
          px-3 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          shadow-sm transition-all
        "
        required
      />
    </div>
  );
}