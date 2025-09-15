// src/Pages/Landing.jsx

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Star, Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 shadow-md bg-white sticky top-0 z-20">
        <h1 className="text-3xl font-extrabold tracking-widest text-emerald-700">YODA</h1>
        <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-100">
          Join the Force
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-6">
        <Sparkles className="w-10 h-10 text-emerald-600 animate-pulse" />
        <h2 className="text-5xl md:text-6xl font-bold text-emerald-700 leading-snug">
          “Do or do not. <span className="text-emerald-500">There is no try.</span>”
        </h2>
        <p className="max-w-2xl text-lg text-slate-600">
          Welcome, Padawan. YODA helps you master productivity, career wisdom, and balance — 
          the Jedi way.
        </p>
        <div className="flex space-x-4">
          <Button 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="border-emerald-600 text-emerald-700 hover:bg-emerald-100" 
            onClick={() => navigate("/learn-more")}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-16">
        {[
          { title: "Force Guidance", desc: "Channel Jedi focus with mindful productivity." },
          { title: "Balance & Clarity", desc: "Like the Force, balance your tasks and life." },
          { title: "Wisdom of Yoda", desc: "Timeless advice to keep you motivated." }
        ].map((feature, idx) => (
          <Card key={idx} className="bg-white border border-emerald-200 rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-3 text-center">
              <Star className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-semibold text-emerald-700">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Accordion FAQ */}
      <section className="px-10 py-16">
        <h3 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto bg-white border border-emerald-200 rounded-xl shadow-md">
          <AccordionItem value="1">
            <AccordionTrigger>Is YODA only for Star Wars fans?</AccordionTrigger>
            <AccordionContent>
              No, young Padawan. Wisdom and productivity are for all.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>How do I start my training?</AccordionTrigger>
            <AccordionContent>
              Simple. Press “Get Started” and join the path of productivity.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Reviews Section */}
      <section className="px-10 py-20 bg-emerald-50">
        <h3 className="text-3xl font-bold text-emerald-700 mb-12 text-center">
          ⭐ What People Say About Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Luke Skywalker", feedback: "YODA taught me discipline and focus. My productivity has reached Jedi Knight levels!", role: "Jedi Knight" },
            { name: "Leia Organa", feedback: "Balancing tasks and leadership felt impossible until I followed YODA’s wisdom.", role: "General" },
            { name: "Darth Vader", feedback: "Even on the Dark Side, clarity and balance are essential. YODA guided me… in unexpected ways.", role: "Sith Lord" },
          ].map((review, idx) => (
            <Card key={idx} className="bg-white border border-emerald-200 shadow-md rounded-2xl hover:scale-105 transform transition duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <p className="text-slate-600 italic">“{review.feedback}”</p>
                <div className="mt-4">
                  <h4 className="text-emerald-600 font-semibold">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-10 py-20 text-center">
        <h3 className="text-3xl font-bold text-emerald-700 mb-4">Stay in the Jedi Order</h3>
        <p className="text-slate-600 mb-6">Receive wisdom and updates from Master Yoda himself.</p>
        <div className="flex justify-center space-x-3 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="border-emerald-400 bg-white text-slate-700" />
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-emerald-200 bg-white">
        <p className="text-slate-500">© 2025 YODA — A Jedi’s Guide to Productivity</p>
      </footer>
    </div>
  )
}

export default Landing
