// src/Pages/Insights.jsx

import React from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const wellbeingData = [
  { subject: "Focus", A: 8, fullMark: 10 },
  { subject: "Energy", A: 7, fullMark: 10 },
  { subject: "Stress", A: 4, fullMark: 10 },
  { subject: "Sociality", A: 6, fullMark: 10 },
  { subject: "Creativity", A: 9, fullMark: 10 },
];

const forceData = [
  { name: "Mind", value: 35 },
  { name: "Body", value: 25 },
  { name: "Spirit", value: 40 },
];

const COLORS = ["#10b981", "#34d399", "#6ee7b7"];

const Insights = () => {
  const handleDownloadPDF = () => {
    alert("📄 Downloading stats as PDF... (hook up real export here)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50 p-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-emerald-700">Insights</h1>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition"
        >
          <Download size={18} /> Download PDF
        </button>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Radar Chart */}
        <Card className="bg-white border border-emerald-200 rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-emerald-700 mb-4">
              Holistic Wellbeing Radar
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={wellbeingData}>
                <PolarGrid stroke="#d1fae5" />
                <PolarAngleAxis dataKey="subject" stroke="#047857" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke="#34d399" />
                <Radar
                  name="Wellbeing"
                  dataKey="A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Donut Chart */}
        <Card className="bg-white border border-emerald-200 rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-emerald-700 mb-4">
              Force Energy Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={forceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={5}
                >
                  {forceData.map((_, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="bg-white border border-emerald-200 rounded-2xl shadow-lg md:col-span-2 lg:col-span-1">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-emerald-700">
              AI-Powered Recommendations
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                🌿 Practice 10 min mindfulness to balance stress levels.
              </li>
              <li className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                🏋️ Add light exercise to boost your energy distribution.
              </li>
              <li className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                ✍️ Journal creativity sparks daily to keep force strong.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Insights;
