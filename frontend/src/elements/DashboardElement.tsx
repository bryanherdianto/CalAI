import logo from '../assets/logo.svg';
import { useNavigate, useLocation } from "react-router-dom";

export default function DashboardElement() {
    const location = useLocation();
    const navigate = useNavigate();

    const isOnPage = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="md:flex flex-col items-center h-screen bg-[#0077B6] text-white hidden md:flex-col overflow-clip">
            <div className="drop-shadow-[5px_5px_3px_rgba(0,0,0,0.4)] size-auto mb-4">
                <img src={logo} alt="Logo" className="size-30" draggable="false" />
                <p className="text-4xl font-extrabold">CalAI</p>
            </div>
            <div className="justify-start text-left w-full text-2xl mt-8 bg-[#CAF0F8]">
                <div
                    className={`h-[8vh] w-full flex items-center pl-4 cursor-pointer ${isOnPage("/chatbot") ? "font-semibold text-white bg-[#03045E]" : "font-normal text-black"}`}
                    onClick={() => navigate("/chatbot")}
                >
                    Chat Bot
                </div>
                <div
                    className={`h-[8vh] w-full flex items-center pl-4 cursor-pointer ${isOnPage("/calendars") ? "font-semibold text-white bg-[#03045E]" : "font-normal text-black"}`}
                    onClick={() => navigate("/calendars")}
                >
                    Calendar
                </div>
            </div>

            
        </div>
    );
}
