// src/Pages/LoginSignup.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import Yoda Gif
import loginGif from "../assets/yodav.gif";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fake auth delay
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50">
      <div className="flex w-4/5 max-w-5xl bg-white/80 backdrop-blur-xl border border-emerald-200 rounded-2xl overflow-hidden shadow-xl">
        {/* Gif Section */}
        <div className="hidden md:flex w-2/5 items-center justify-center bg-emerald-50/70 p-6">
          <img
            src={loginGif}
            alt="Yoda Animation"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center p-10">
          <Card className="w-full max-w-md bg-white border border-emerald-200 rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-extrabold text-emerald-700 text-center mb-6">
                {isSignup ? "Join the Force" : "Welcome Back, Padawan"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-600 mb-1">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-emerald-50 border-emerald-200 text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Password</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-emerald-50 border-emerald-200 text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-400"
                    required
                  />
                </div>

                {/* Signup confirm password */}
                {isSignup && (
                  <div>
                    <label className="block text-slate-600 mb-1">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      className="bg-emerald-50 border-emerald-200 text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-400"
                      required
                    />
                  </div>
                )}

                {/* Lightsaber Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all rounded-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      {/* Lightsaber animation */}
                      <div className="relative w-24 h-1 bg-emerald-400 animate-pulse before:content-[''] before:absolute before:-left-2 before:h-3 before:w-2 before:bg-gray-300 before:rounded-sm"></div>
                      <span className="text-emerald-600 font-medium">
                        Igniting...
                      </span>
                    </div>
                  ) : isSignup ? (
                    "Sign Up"
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>

              {/* Toggle link */}
              <p className="text-slate-600 text-center mt-6">
                {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  {isSignup ? "Login" : "Sign Up"}
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
