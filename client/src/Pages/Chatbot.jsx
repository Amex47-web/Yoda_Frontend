// src/Pages/Chatbot.jsx
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello Padawan 🌱 How can I guide you today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // User message
    const userMessage = { from: "user", text: input }
    setMessages([...messages, userMessage])

    // Simulated bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Interesting 🤔 Tell me more." },
      ])
    }, 800)

    setInput("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800 flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 px-8 py-6 shadow-sm bg-white">
        <Bot className="text-emerald-600 w-8 h-8" />
        <h1 className="text-2xl font-bold text-emerald-700">Chatbot</h1>
      </header>

      {/* Chat Area */}
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <Card className="w-full max-w-lg bg-white border border-emerald-200 rounded-2xl shadow-sm flex flex-col h-[600px]">
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[70%] text-sm shadow ${
                    msg.from === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-4 border-t border-emerald-200 bg-emerald-50 flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border-emerald-300 focus:ring-emerald-500"
            />
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Send
            </Button>
          </form>
        </Card>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-emerald-200 bg-white text-slate-500 text-sm">
        © 2025 YODA — Chat with the Force
      </footer>
    </div>
  )
}

export default Chatbot
