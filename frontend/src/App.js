import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Subscriptions from "./components/Subscriptions";
import Reports from "./components/Reports";
import MonthlyTrends from "./components/MonthlyTrends";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/monthly-trends" element={<MonthlyTrends />} />
      </Routes>
    </BrowserRouter>
  );
}