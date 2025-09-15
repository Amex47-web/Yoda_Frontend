// src/Pages/Profile.jsx

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Edit3 } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800">
      <Card className="bg-white border border-emerald-200 w-full max-w-lg shadow-md rounded-2xl">
        <CardContent className="p-8 space-y-8">
          {/* Avatar */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="https://ui-avatars.com/api/?name=Padawan&background=bbf7d0&color=065f46&size=128"
              alt="User Avatar"
              className="w-28 h-28 rounded-full border-4 border-emerald-500 shadow-sm"
            />
            <h2 className="text-2xl font-bold text-emerald-700">Username</h2>
            <p className="text-slate-500">ameya@example.com</p>
          </div>

          {/* Info */}
          <div className="space-y-3 text-center">
            <p>
              <span className="font-semibold text-emerald-600">Rank:</span>{" "}
              <span className="text-slate-700">Jedi Learner</span>
            </p>
            <p>
              <span className="font-semibold text-emerald-600">Joined:</span>{" "}
              <span className="text-slate-700">Jan 2025</span>
            </p>
            <p>
              <span className="font-semibold text-emerald-600">Streak:</span>{" "}
              <span className="text-slate-700">5 days</span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 pt-4">
            <Button
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-md"
              onClick={() => navigate("/edit-profile")}
            >
              <Edit3 className="w-4 h-4 mr-2" /> Edit Profile
            </Button>
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-700 hover:bg-emerald-100 font-medium"
              onClick={() => navigate("/settings")}
            >
              <Settings className="w-4 h-4 mr-2" /> Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="text-center mt-10 text-slate-500 text-sm">
        © 2025 YODA — Guided by the Force
      </footer>
    </div>
  )
}

export default Profile
