import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ ADD NAVBAR

export default function AddPatient() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    aadhaar: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    ap_hi: "",
    ap_lo: "",
    cholesterol_mg: "",
    glucose_mg: "",
    is_fasting: false,
    smoke: 0,
    alco: 0,
    active: 1,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/analysis/${formData.aadhaar}`, {
      state: formData,
    });
  };

  return (
    <>
      {/* ✅ NAVBAR */}
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Add Patient Health Record
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl grid grid-cols-2 gap-6"
        >
          {/* Basic Info */}
          <Input label="Patient Name" name="name" onChange={handleChange} />
          <Input label="Aadhaar Number" name="aadhaar" onChange={handleChange} />
          <Input label="Age (in days)" name="age" onChange={handleChange} />

          <Select label="Gender" name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Female</option>
            <option value="2">Male</option>
          </Select>

          {/* Body Metrics */}
          <Input label="Height (cm)" name="height" onChange={handleChange} />
          <Input label="Weight (kg)" name="weight" onChange={handleChange} />

          {/* Blood Pressure */}
          <Input label="Systolic BP (ap_hi)" name="ap_hi" onChange={handleChange} />
          <Input label="Diastolic BP (ap_lo)" name="ap_lo" onChange={handleChange} />

          {/* Lab Values */}
          <Input
            label="Cholesterol (mg/dL)"
            name="cholesterol_mg"
            onChange={handleChange}
          />
          <Input
            label="Glucose (mg/dL)"
            name="glucose_mg"
            onChange={handleChange}
          />

          {/* Lifestyle */}
          <Select label="Smoking" name="smoke" onChange={handleChange}>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </Select>

          <Select label="Alcohol Consumption" name="alco" onChange={handleChange}>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </Select>

          <Select label="Physically Active" name="active" onChange={handleChange}>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Select>

          {/* Fasting */}
          <div className="flex items-center gap-3 col-span-2">
            <input
              type="checkbox"
              name="is_fasting"
              checked={formData.is_fasting}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <span className="font-medium">Fasting Blood Sugar</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="col-span-2 bg-black text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            Submit & Analyze Patient
          </button>
        </form>
      </div>
    </>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, name, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        onChange={onChange}
        required
        className="w-full p-3 border rounded-lg"
      />
    </div>
  );
}

function Select({ label, name, onChange, children }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        name={name}
        onChange={onChange}
        className="w-full p-3 border rounded-lg"
      >
        {children}
      </select>
    </div>
  );
}
