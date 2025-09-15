// src/Pages/Settings.jsx
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Settings as SettingsIcon } from "lucide-react"

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 flex flex-col text-slate-800">
      {/* Header */}
      <header className="flex items-center gap-3 px-8 py-6 shadow-sm bg-white">
        <SettingsIcon className="text-emerald-600 w-7 h-7" />
        <h1 className="text-2xl font-bold text-emerald-700">Settings</h1>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <Card className="w-full max-w-2xl bg-white border border-emerald-200 rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-lg font-semibold text-emerald-700">
              Preferences
            </h2>

            {/* Notification Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Enable Notifications</span>
                <Switch className="data-[state=checked]:bg-emerald-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Dark Mode</span>
                <Switch className="data-[state=checked]:bg-emerald-600" />
              </div>
            </div>

            {/* Security Section */}
            <h2 className="text-lg font-semibold text-emerald-700 pt-4">
              Security
            </h2>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              >
                Change Password
              </Button>
              <Button
                variant="outline"
                className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              >
                Two-Factor Authentication
              </Button>
            </div>

            {/* Save */}
            <div className="pt-6">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                Save Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-emerald-200 bg-white text-slate-500 text-sm">
        © 2025 YODA — Settings Panel
      </footer>
    </div>
  )
}

export default Settings
