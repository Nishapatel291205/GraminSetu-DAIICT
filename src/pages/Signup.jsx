import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Signup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [role, setRole] = useState('asha');
  const [formData, setFormData] = useState({ 
    name: '', 
    masterKey: '', 
    phone: '', 
    village: '', 
    password: '' 
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const generatePassword = () => {
    const randomPass = Math.random().toString(36).slice(-8);
    setFormData({ ...formData, password: randomPass });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role }),
      });
      const data = await response.json();
      
      if (response.ok) {
        alert("Registration Successful");
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Registration failed. Check server connection.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 border border-slate-200">
        {/* Header Text from Wireframe */}
        <h2 className="text-center text-slate-800 text-sm mb-6 font-medium">
          For New Registration of Asha worker Or Doctor
        </h2>

        {/* Role Selector Tabs */}
        <div className="flex bg-slate-50 p-2 gap-2 rounded-2xl mb-8 border border-slate-200">
          <button 
            type="button"
            onClick={() => setRole('asha')} 
            className={`flex-1 py-2 rounded-xl font-bold transition-all uppercase text-xs tracking-wider ${
              role === 'asha' ? 'bg-white shadow-md text-emerald-600 border border-slate-100' : 'text-slate-400'
            }`}
          >
            {t('Asha Worker') || 'ASHA WORKER'}
          </button>
          <button 
            type="button"
            onClick={() => setRole('doctor')} 
            className={`flex-1 py-2 rounded-xl font-bold transition-all uppercase text-xs tracking-wider ${
              role === 'doctor' ? 'bg-white shadow-md text-emerald-600 border border-slate-100' : 'text-slate-400'
            }`}
          >
            {t('Doctor') || 'DOCTOR'}
          </button>
        </div>

        {/* Registration Form aligned as per sketch */}
        <form onSubmit={handleRegister} className="space-y-5 text-sm font-semibold">
          
          <div className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-slate-700">Name:-</span> 
            <input 
              name="name" 
              placeholder="Enter Your Name"
              onChange={handleChange} 
              className="flex-1 p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" 
              required 
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-slate-700">Master Key:-</span> 
            <input 
              name="masterKey" 
              onChange={handleChange} 
              className="flex-1 p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" 
              required 
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-slate-700">Phone No.:-</span> 
            <input 
              name="phone" 
              onChange={handleChange} 
              className="flex-1 p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" 
              required 
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-slate-700">Village:-</span> 
            <input 
              name="village" 
              onChange={handleChange} 
              className="flex-1 p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" 
              required 
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-slate-700">Password:-</span> 
            <div className="flex-1 flex gap-2">
              <input 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className="flex-1 p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" 
                required 
              />
              <button 
                type="button" 
                onClick={generatePassword} 
                className="border-2 border-slate-800 px-3 py-1 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 transition-colors"
              >
                Auto
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center pt-6">
            <button 
              type="submit"
              className="px-10 py-2.5 border-2 border-slate-800 rounded-xl font-bold bg-white hover:bg-slate-800 hover:text-white transition-all transform active:scale-95 shadow-sm"
            >
              Register Now
            </button>
            
            <p 
              onClick={() => navigate('/login')} 
              className="mt-6 text-blue-600 font-bold cursor-pointer hover:underline text-xs tracking-wide"
            >
              Already have an ID? Login Here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}