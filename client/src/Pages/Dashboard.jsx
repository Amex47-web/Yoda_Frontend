// src/Pages/Dashboard.jsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Pie,
  Cell,
  PieChart as RePieChart,
} from "recharts";
import {
  Menu,
  User,
  Flame,
  Calendar,
  PieChart as PieChartIcon,
  Bot,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// ------- Sample data -------
const weekData = [
  { name: "Mon", stress: 40, focus: 70, sleep: 7, energy: 8 },
  { name: "Tue", stress: 55, focus: 60, sleep: 6, energy: 7 },
  { name: "Wed", stress: 30, focus: 80, sleep: 7.5, energy: 8.5 },
  { name: "Thu", stress: 50, focus: 65, sleep: 6.2, energy: 7.2 },
  { name: "Fri", stress: 20, focus: 90, sleep: 8, energy: 9 },
  { name: "Sat", stress: 35, focus: 75, sleep: 7.2, energy: 8 },
  { name: "Sun", stress: 25, focus: 85, sleep: 7.8, energy: 8.6 },
];

// Donut gauge data (Daily Productivity)
const productivity = 75; // %
const donutData = [
  { name: "Productive", value: productivity },
  { name: "Remaining", value: 100 - productivity },
];
const DONUT_COLORS = ["#16a34a", "#e5e7eb"];

// Skill progress demo
const skills = [
  { label: "Focus", value: 78 },
  { label: "Strength", value: 64 },
  { label: "Sociality", value: 58 },
  { label: "Calm", value: 72 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session/local storage if you later add auth
    navigate("/"); // back to landing/login
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50 text-slate-800">
      {/* Sidebar (full height) */}
      <aside className="w-72 h-screen sticky top-0 flex-shrink-0 bg-white/80 backdrop-blur border-r border-emerald-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-emerald-700">
            Yoda 
          </h2>
        </div>
        <nav className="px-3 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition">
            <Menu size={18} className="text-emerald-600" />
            <span className="font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => navigate("/schedule")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            <Calendar size={18} className="text-emerald-600" />
            <span className="font-medium">Schedule</span>
          </button>
          <button
            onClick={() => navigate("/insights")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            <PieChartIcon size={18} className="text-emerald-600" />
            <span className="font-medium">Insights</span>
          </button>
          <button
            onClick={() => navigate("/chatbot")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            <Bot size={18} className="text-emerald-600" />
            <span className="font-medium">Chatbot</span>
          </button>
          <button
            onClick={() => navigate("/help")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            <HelpCircle size={18} className="text-emerald-600" />
            <span className="font-medium">Help</span>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition mt-8"
          >
            <User size={18} className="text-emerald-600" />
            <span className="font-medium">Profile</span>
          </button>
        </nav>
      </aside>

      {/* Main (scrollable only) */}
      <div className="flex-1 h-screen overflow-y-auto">
        {/* Topbar */}
        <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-emerald-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Welcome, Padawan 👋</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <Flame className="text-amber-500" />
                <span className="font-medium">Streak: 5 days</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              >
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stress vs Focus (Line) */}
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-5">
            <h2 className="text-lg font-semibold mb-3 text-emerald-800">
              Stress vs Focus Balance
            </h2>
            <ResponsiveContainer width="100%" height={310}>
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#065f46" />
                <YAxis stroke="#065f46" />
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "1px solid #d1fae5",
                    color: "#065f46",
                  }}
                />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="focus" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

         

          {/* Daily Productivity Gauge (Donut) */}
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-5">
            <h2 className="text-lg font-semibold mb-3 text-emerald-800">
              Daily Productivity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={donutData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={4}
                      startAngle={90}
                      endAngle={-270}
                    >
                      {donutData.map((entry, idx) => (
                        <Cell key={`c-${idx}`} fill={DONUT_COLORS[idx % DONUT_COLORS.length]} />
                      ))}
                    </Pie>
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-slate-500 mb-1">Completion</p>
                <p className="text-4xl font-extrabold text-emerald-700">{productivity}%</p>
                <p className="text-slate-600 mt-2">
                  Great pace! You’re on track to finish your priority tasks today.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Progress Bars */}
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-5">
            <h2 className="text-lg font-semibold mb-5 text-emerald-800">Skill Progress</h2>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">{s.label}</span>
                    <span className="text-slate-500">{s.value}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-emerald-100">
                    <div
                      className="h-3 rounded-full bg-emerald-500"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleep vs Energy (Dual Axis) */}
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-5">
            <h2 className="text-lg font-semibold mb-3 text-emerald-800">
              Sleep vs Energy Balance
            </h2>
            <ResponsiveContainer width="100%" height={310}>
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#065f46" />
                <YAxis
                  yAxisId="left"
                  stroke="#0ea5e9"
                  label={{ value: "Sleep (hrs)", angle: -90, position: "insideLeft", fill: "#0ea5e9" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#f59e0b"
                  label={{ value: "Energy (1-10)", angle: 90, position: "insideRight", fill: "#f59e0b" }}
                />
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "1px solid #d1fae5",
                    color: "#065f46",
                  }}
                />
                <Line yAxisId="left" type="monotone" dataKey="sleep" stroke="#0ea5e9" strokeWidth={2} dot />
                <Line yAxisId="right" type="monotone" dataKey="energy" stroke="#f59e0b" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
