// src/Pages/LearnMore.jsx

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Target, Brain, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"

function LearnMore() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 shadow-md bg-white sticky top-0 z-20">
        <h1 className="text-3xl font-extrabold tracking-widest text-emerald-700">YODA</h1>
        <Button
          variant="outline"
          className="border-emerald-600 text-emerald-700 hover:bg-emerald-100"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 space-y-4">
        <Sparkles className="w-10 h-10 text-emerald-600 mx-auto animate-pulse" />
        <h2 className="text-5xl font-bold text-emerald-700">Learn More</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
          YODA is more than just a productivity app — it’s your personal Jedi master, guiding you to balance,
          focus, and growth in every aspect of life.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16">
        {[
          {
            icon: <Book className="w-10 h-10 text-emerald-600" />,
            title: "Knowledge & Wisdom",
            desc: "Access curated lessons and timeless Jedi philosophy to boost clarity and decision-making.",
          },
          {
            icon: <Target className="w-10 h-10 text-emerald-600" />,
            title: "Goal Tracking",
            desc: "Set your path, track your missions, and achieve victories step by step.",
          },
          {
            icon: <Brain className="w-10 h-10 text-emerald-600" />,
            title: "Mind & Balance",
            desc: "Daily exercises to reduce stress, improve focus, and strengthen your inner Force.",
          },
          {
            icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
            title: "Gamified Progress",
            desc: "Level up as a Padawan to Jedi Master with streaks, achievements, and Force scores.",
          },
        ].map((item, idx) => (
          <Card
            key={idx}
            className="bg-white border border-emerald-200 rounded-2xl shadow-md hover:scale-105 transform transition"
          >
            <CardContent className="p-6 space-y-3 text-center">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-700">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-emerald-50">
        <h3 className="text-3xl font-bold text-emerald-700 mb-4">
          Ready to Begin Your Jedi Journey?
        </h3>
        <p className="text-slate-600 mb-6">
          Join thousands of Padawans mastering productivity and balance with YODA.
        </p>
        <Button
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
          onClick={() => navigate("/login")}
        >
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-emerald-200 bg-white">
        <p className="text-slate-500">© 2025 YODA — May the Focus Be With You</p>
      </footer>
    </div>
  )
}

export default LearnMore
