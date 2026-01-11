import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReviewHighRiskPage from "./pages/review-high-risk";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import AddPatient from "./pages/AddPatient";
import PatientAnalysis from "./pages/PatientAnalysis";
import PatientProfileAsha from "./pages/viewProfileAsha";
import DoctorDashboard from "./pages/DoctorDashboard";
import FollowUpManagement from "./pages/Follow-up-management";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/patients" element={
          <ProtectedRoute><Patients /></ProtectedRoute>
        } />
        <Route path="/add-patient" element={
          <ProtectedRoute><AddPatient /></ProtectedRoute>
        } />
        <Route path="/analysis/:aadhaar" element={
          <ProtectedRoute><PatientAnalysis /></ProtectedRoute>
        } />
        <Route path="/asha/patient/:aadhaar" element={
          <ProtectedRoute><PatientProfileAsha /></ProtectedRoute>
        } />
        <Route path="/review-high-risk" element={
          <ProtectedRoute><ReviewHighRiskPage /></ProtectedRoute>
        } />

        <Route path="/doctor/dashboard" element={
          <ProtectedRoute><DoctorDashboard /></ProtectedRoute>
        } />
        <Route path="/doctor/dashboard/:aadhaar" element={
          <ProtectedRoute><DoctorDashboard /></ProtectedRoute>
        } />
        <Route path="DoctorPatientProfile" element={
          <ProtectedRoute><FollowUpManagement /></ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;