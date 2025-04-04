import logo from '../assets/logo.svg';
import { useNavigate, useLocation } from "react-router-dom";

export default function DashboardElement() {
    const location = useLocation();
    const navigate = useNavigate();

    const isOnPage = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="md:flex flex-col absolute items-center h-screen w-[20vw] bg-[#0077B6] text-white hidden md:flex-col overflow-clip">
            <div className="drop-shadow-[5px_5px_3px_rgba(0,0,0,0.4)] size-auto mb-4">
                <img src={logo} alt="Logo" className="size-30" draggable="false" />
                <p className="text-4xl font-extrabold">CalAI</p>
            </div>
            <div className="justify-start text-left w-full text-2xl mt-8 bg-[#CAF0F8]">
                <div
                    className={`h-[8vh] w-full flex items-center pl-4 hover:bg-[#03045E] hover:text-white transition duration-200  cursor-pointer ${isOnPage("/chatbot") ? "font-bold text-white bg-[#03045E]" : "font-semibold text-black"}`}
                    onClick={() => navigate("/chatbot")}
                >
                    Chat Bot
                </div>
                <div
                    className={`h-[8vh] w-full flex items-center pl-4 hover:bg-[#03045E] hover:text-white transition duration-200 cursor-pointer ${isOnPage("/calendars") ? "font-bold text-white bg-[#03045E]" : "font-semibold text-black"}`}
                    onClick={() => navigate("/calendars")}
                >
                    Calendar
                </div>
            </div>

            <div className="bg-[#03045E] w-[15vw] rounded-[10px] h-[6vh] flex justify-center items-center mt-auto mb-8 drop-shadow-[5px_5px_3px_rgba(0,0,0,0.4)]">
                <button className="w-full flex justify-center items-center hover:cursor-pointer text-2xl font-extrabold whitespace-nowrap rounded-lg px-3.5 py-2.5 text-slate-200 dark:text-slate-800 bg-gradient-to-r from-[#03045E] to-[#03045E] dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]" onClick={() => navigate("/")}>
                    Logout
                </button>
            </div>

        </div>
    );
}
