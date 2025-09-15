// src/Pages/EditProfile.jsx
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User } from "lucide-react"

const EditProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 flex flex-col text-slate-800">
      {/* Header */}
      <header className="flex items-center gap-3 px-8 py-6 shadow-sm bg-white">
        <User className="text-emerald-600 w-7 h-7" />
        <h1 className="text-2xl font-bold text-emerald-700">Edit Profile</h1>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <Card className="w-full max-w-lg bg-white border border-emerald-200 rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <img
                src="https://ui-avatars.com/api/?name=Padawan&background=10b981&color=fff&size=128"
                alt="User Avatar"
                className="w-28 h-28 rounded-full border-4 border-emerald-500 shadow-md mx-auto"
              />
              <h2 className="text-xl font-semibold text-emerald-700">
                Update Your Info
              </h2>
              <p className="text-slate-500 text-sm">
                Keep your profile up to date 🌿
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-emerald-50 border-emerald-200 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-emerald-50 border-emerald-200 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="New password"
                  className="bg-emerald-50 border-emerald-200 focus:ring-emerald-500"
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-emerald-200 bg-white text-slate-500 text-sm">
        © 2025 YODA — Profile Settings
      </footer>
    </div>
  )
}

export default EditProfile
