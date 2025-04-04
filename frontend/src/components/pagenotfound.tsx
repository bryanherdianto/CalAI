import bees from "../assets/Bees.svg";
import polygon from "../assets/Polygon 7.svg";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

export default function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div className="bg-[#03045E] min-h-screen min-w-screen flex items-center justify-center relative text-white">
            <img src={bees} alt="Bees" className="absolute left-0 pr-[20vw] z-0 min-w-full size-[100vh]" />
            
            <div className="z-10 text-center flex flex-col items-center text-black ">
                <h2 className="text-[5vh] z-10">Error</h2>
                <h1 className="text-[12vh] font-bold z-20 opacity-45">404</h1>
                <p className="md:text-[2vw] font-bold z-20">Page not found</p>
                <button className="w-full flex justify-center items-center mt-[1.5vh] text-2xl font-semibold bg-[#03045E] rounded-lg p-2 text-white hover:cursor-pointer" onClick={() => navigate("/")}>
                    Go to Menu
                </button>
            </div>

            <motion.img src={polygon} alt="Polygon" className="absolute md:size-[500px] mt-1 mr-1 size-[400px min-h-[3vh] z-1 blur-[3px]"  animate={{rotate : 360}} transition={{duration:15, repeat:Infinity, ease:"linear"}} />
        </div>
    );
}
