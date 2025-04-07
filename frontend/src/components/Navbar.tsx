"use client"

import { useNavigate, useLocation } from "react-router-dom"
import logo from "../assets/logo.svg"
import { Button } from "./ui/button"

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  // Don't show navbar on login, register, chatbot, calendars pages
  const hideOnPaths = ["/login", "/register", "/chatbot", "/calendars"]
  if (hideOnPaths.includes(location.pathname)) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#03045E]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center" onClick={() => navigate("/home")} role="button">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="h-10 w-10" draggable="false" />
            <span className="ml-2 text-white font-bold text-xl">CalAI</span>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-white hover:text-blue-900 transition-colors"
            >
              Login
            </Button>
            <Button variant="glass-blue" onClick={() => navigate("/register")} className="text-white transition-colors">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

