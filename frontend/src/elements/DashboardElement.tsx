import logo from '../assets/logo.svg';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function DashboardElement() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isOnPage = (path: string) => {
        return location.pathname === path;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <>
            <div className="fixed top-4 left-4 z-50 md:hidden">
                <button 
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md bg-[#0077B6] text-white"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className="hidden md:flex flex-col fixed h-full w-64 bg-[#0077B6] text-white">
                <SidebarContent navigate={navigate} isOnPage={isOnPage} />
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMobileMenu}></div>
                    <div className="fixed inset-y-0 left-0 w-64 bg-[#0077B6] text-white flex flex-col">
                        <SidebarContent navigate={navigate} isOnPage={isOnPage} />
                    </div>
                </div>
            )}

            <div className="md:ml-64">
                {/* Your main content goes here */}
            </div>
        </>
    );
}

// Extracted sidebar content to avoid duplication
function SidebarContent({ navigate, isOnPage }: { navigate: (path: string) => void; isOnPage: (path: string) => boolean }) {
    return (
        <>
            <div className="flex flex-col items-center mt-4 mb-4">
                <div className="drop-shadow-lg">
                    <img src={logo} alt="Logo" className="w-24 h-24" draggable="false" />
                </div>
                <p className="text-3xl font-extrabold">CalAI</p>
            </div>
            
            <div className="w-full mt-8 bg-blue-100">
                <div
                    className={`h-16 w-full flex md:text-2xl items-center pl-4 hover:bg-[#03045E] hover:text-white transition duration-200 cursor-pointer ${
                        isOnPage("/chatbot") ? "font-bold text-white bg-[#03045E]" : "font-semibold text-black"
                    }`}
                    onClick={() => navigate("/chatbot")}
                >
                    Chat Bot
                </div>
                <div
                    className={`h-16 w-full md:text-2xl flex items-center pl-4 hover:bg-[#03045E] hover:text-white transition duration-200 cursor-pointer ${
                        isOnPage("/calendars") ? "font-bold text-white bg-[#03045E]" : "font-semibold text-black"
                    }`}
                    onClick={() => navigate("/calendars")}
                >
                    Calendar
                </div>
            </div>
            
            <div className="mt-auto mb-8 px-4 w-full">
                <button className="w-full flex justify-center items-center text-xl font-bold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200 hover:cursor-pointer whitespace-nowrap px-3.5 py-2.5 dark:text-slate-800 bg-gradient-to-r from-[#03045E] to-[#03045E] dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms]" onClick={() => navigate("/")}>
                    Logout
                </button>
            </div>
        </>
    );
}