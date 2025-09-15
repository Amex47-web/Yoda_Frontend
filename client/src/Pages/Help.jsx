// src/Pages/Help.jsx
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { HelpCircle, Mail, MessageSquare, BookOpen } from "lucide-react"

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 shadow-sm bg-white">
        <div className="flex items-center gap-3">
          <HelpCircle className="text-emerald-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-emerald-700">Help & Support</h1>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-8 py-12">
        {/* FAQ Section */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-emerald-700 mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white border border-emerald-200 rounded-xl shadow-sm"
          >
            <AccordionItem value="1">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                Go to your Profile settings, and under Security you can reset
                your password.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Can I export my progress?</AccordionTrigger>
              <AccordionContent>
                Yes. In Insights, you’ll find an option to download your stats as
                PDF or CSV.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Is this app only for Star Wars fans?</AccordionTrigger>
              <AccordionContent>
                Nope. Jedi wisdom is for everyone 🌌 — whether or not you’ve
                watched Star Wars.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Options */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <Mail className="w-8 h-8 text-emerald-600" />,
              title: "Email Support",
              desc: "Reach us at support@yodaapp.com for technical issues.",
            },
            {
              icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
              title: "Community Chat",
              desc: "Join our Padawan community on Discord to learn and share.",
            },
            {
              icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
              title: "Documentation",
              desc: "Browse guides and tutorials in our Knowledge Base.",
            },
          ].map((help, idx) => (
            <Card
              key={idx}
              className="bg-white border border-emerald-200 shadow-sm hover:shadow-md transition rounded-xl"
            >
              <CardContent className="p-6 space-y-3 text-center">
                <div className="flex justify-center">{help.icon}</div>
                <h3 className="text-lg font-semibold text-emerald-700">
                  {help.title}
                </h3>
                <p className="text-slate-600">{help.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-emerald-200 bg-white text-slate-500 text-sm">
        © 2025 YODA — Guided by the Force
      </footer>
    </div>
  )
}

export default Help
