import "./App.css"
import Calendars from "./components/CalendarEmbbeder"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import Chatbot from "./components/chatbot"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom"

// Import Google Fonts in index.html
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-[1920px] mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/calendars" element={<Calendars />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

