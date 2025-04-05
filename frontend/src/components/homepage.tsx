import bees from "../assets/Beesfixed.svg";
import logo from "../assets/logo.svg";

import sample from "../assets/sample.jpg";

import { Circle } from "lucide-react";

import { useNavigate } from 'react-router-dom'

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="bg-cover bg-[#03045E] md:min-w-[100vw] h-[100vh] min-w-[80vw] flex flex-col overflow-x-hidden">
            <div className="flex-1 flex flex-col items-center justify-center text-white relative">
                <div className="flex-col flex-1 flex items-center md:ml-[30vw] md:mt-[20vh]">
                    <h2 className="min-w-[100vw] md:text-left sm:left-0 left-0 top-0 md:left-0 absolute p-4  font-semibold text-3xl md:mt-0 mt-[2vh]">Fetch.ai</h2>

                    <h2 className="min-w-[100vw] md:text-right sm:left-0 right-0 pr-[3vw] md:top-0 bottom-0 md:left-0 hidden md:block absolute p-4 font-semibold md:text-3xl text-2xl h-[-100vh]">Global AI Agents League</h2>

                    <div className="flex-col flex justify-center md:mt-0 mt-[5vh] h-full md:mb-50">
                        <img src={logo} draggable="false" alt="Logo" className="mt-8 md:size-70 size-40 z-5 mx-auto" />
                        <img src={bees} draggable="false" alt="Bees" className="absolute left-[-20vw] z-0 min-w-[50vw] justify-start size-[100vh]  mr-[10vw]" />
                        <h1 className="font-extrabold text-6xl z-5">CalAI</h1>
                        <p className="mt-4 font-normal md:text-4xl text-2xl z-5">Your AI Calendar Manager</p>
                    </div>

                    <div className="md:absolute md:ml-[10vw] lg:w-[40vw] md:w-[20vw] w-full flex-col flex flex-1 text-left left-0 top-50 items-start justify-center p-4 text-white font-semibold lg:text-4xl md:text-3xl text-[4vh]">
                        Better Scheduling Experience with <span className="font-bold ">CalAI</span>
                        <button className="md:w-[20vw] lg:w-[15vw] w-[30vw] text-left rounded-[3px] p-2 py-3 md:text-2xl text-[3vh] mt-6 hover:brightness-75 hover:cursor-pointer dark:text-slate-800 bg-gradient-to-r from-[#0077B6] to-[#0077B6] dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] mb-[10vh] md:mb-0" onClick={() => navigate("/login")}>
                            {'>'} Try Now
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="bg-white h-screen w-screen text-[#03045E] text-left text-3xl p-[3vw] flex flex-col relative">
                <h1 className="text-3xl md:text-6xl font-semibold">AI Powered Digital Calendar</h1>
                <h2 className="text-2xl md:text-3xl font-medium">Smart Scheduling and Tasking</h2>
                <h1 className="text-3xl md:text-6xl font-semibold mt-4">Easier with <span className="font-extrabold">CalAI</span></h1>

                <div className="flex flex-col justify-end items-end">
                    <img src={sample} draggable="false" alt="Sample" className="w-full left-0 max-w-[50vw] md:max-w-[30vw] object-contain" />
                </div>
            </div>

            <div className="bg-[#03045E] h-auto">
                <div className="flex flex-col justify-center items-start text-white text-3xl pt-[1vw] p-[3vw]">
                    <p>Our Team</p>
                   <div className="flex items-center justify-center w-full bg-amber-300">
                        <Circle className="text-center" />
                   </div>
                    
                </div>
            </div>

        </div>
    );
}
