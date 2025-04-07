"use client"

import logo from "../assets/logo.svg"
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardElement() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isOnPage = (path: string) => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button variant="glass-blue" size="icon" onClick={toggleMobileMenu} className="rounded-md">
          {isMobileMenuOpen ? (
            <X size={24} className="hover:cursor-pointer" />
          ) : (
            <Menu size={24} className="hover:cursor-pointer" />
          )}
        </Button>
      </div>

      <div className="hidden md:flex flex-col fixed h-full w-64 glass-blue text-white">
        <SidebarContent navigate={navigate} isOnPage={isOnPage} />
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMobileMenu}></div>
          <div className="fixed inset-y-0 left-0 w-64 glass-blue text-white flex flex-col">
            <SidebarContent navigate={navigate} isOnPage={isOnPage} />
          </div>
        </div>
      )}

      <div className="md:ml-64">{/* Your main content goes here */}</div>
    </>
  )
}

// Extracted sidebar content to avoid duplication
function SidebarContent({
  navigate,
  isOnPage,
}: { navigate: (path: string) => void; isOnPage: (path: string) => boolean }) {
  return (
    <>
      <div className="flex flex-col items-center mt-4 mb-4">
        <div className="drop-shadow-lg">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="w-24 h-24" draggable="false" />
        </div>
        <p className="text-3xl font-extrabold">CalAI</p>
      </div>

      <div className="w-full mt-8 glass-light">
        <div
          className={`h-16 w-full flex md:text-2xl items-center pl-4 hover:bg-[#03045E] hover:text-white transition duration-200 cursor-pointer ${
            isOnPage("/chatbot") ? "font-bold text-white glass-dark" : "font-semibold text-black"
          }`}
          onClick={() => navigate("/chatbot")}
        >
          Chatbot
        </div>
        <div
          className={`h-16 w-full md:text-2xl flex items-center pl-4 hover:bg-[#03045E] hover:text-white transition duration-200 cursor-pointer ${
            isOnPage("/calendars") ? "font-bold text-white glass-dark" : "font-semibold text-black"
          }`}
          onClick={() => navigate("/calendars")}
        >
          Calendar
        </div>
      </div>

      <div className="mt-auto mb-8 px-4 w-full">
        <Button
          variant="glass-dark"
          className="w-full text-xl font-bold rounded-lg hover:bg-[#03045E]/80 transition-all duration-300 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Logout
        </Button>
      </div>
    </>
  )
}

