import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Circle } from "lucide-react";
import logo from "../assets/logo.svg"; 
import instagram from "../assets/Instagram.svg";
import linkedin from "../assets/LinkedIn.svg";
import sample from "../assets/sample.jpg";
import bees from "../assets/Beesfixed.svg";

import { ArrowUpFromLine } from 'lucide-react';

export default function HomePage() {
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false);

    const scrollDivRef = useRef<HTMLDivElement>(null);

    const checkScrollPosition = () => {
        if (scrollDivRef.current && scrollDivRef.current.scrollTop > 300) {
        setShowButton(true); // Show the button when scrolled more than 300px inside the div
        } else {
        setShowButton(false); // Hide the button when scrolled to the top of the div
        }
    };

    const scrollToTop = () => {
        // Scroll the specific div to the top smoothly
        if (scrollDivRef.current) {
        scrollDivRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        }
    };

    useEffect(() => {
        const scrollDiv = scrollDivRef.current;
        if (scrollDiv) {
            scrollDiv.addEventListener("scroll", checkScrollPosition);
        }

        // Clean up event listener on component unmount
        return () => {
            if (scrollDiv) {
                scrollDiv.removeEventListener("scroll", checkScrollPosition);
            }
        };
    }, []);

  return (
    <div ref={scrollDivRef} className="bg-cover bg-[#03045E] md:min-w-[100vw] h-[100vh] min-w-[80vw] flex flex-col overflow-x-hidden overflow-y-scroll">
      <div className="flex-1 flex flex-col items-center justify-center text-white relative">
        <div className="flex-col flex-1 flex items-center md:ml-[30vw] md:mt-[20vh]">
            <h2 className="min-w-[100vw] text-left left-0 top-0 absolute p-4 font-semibold text-3xl md:mt-0 mt-[2vh]">
                Fetch.ai
            </h2>

            <h2 className="min-w-[100vw] md:text-right sm:left-0 right-0 pr-[3vw] md:top-0 bottom-0 md:left-0 hidden md:block absolute p-4 font-semibold md:text-3xl text-2xl h-[-100vh]">
                Global AI Agents League
            </h2>

            <div className="flex-col flex justify-center md:mt-0 mt-[5vh] h-full md:mb-50 hover:cursor-pointer" onClick={() => navigate("/home")}>
                <img src={logo} draggable="false" alt="Logo" className="mt-8 md:size-70 size-40 z-5 mx-auto" />
                <img src={bees} draggable="false" alt="Bees" className="absolute left-[-20vw] z-0 min-w-[50vw] justify-start size-[100vh]  mr-[10vw]" />
                <h1 className="font-extrabold text-6xl z-5">CalAI</h1>
                <p className="mt-4 font-normal md:text-4xl text-2xl z-5">Your AI Calendar Manager</p>
            </div>

            <div className="md:absolute md:ml-[10vw] lg:w-[40vw] md:w-[20vw] w-full flex-col flex flex-1 text-left left-0 top-50 items-start justify-center p-4 text-white font-semibold lg:text-4xl md:text-3xl text-[4vh]">
            Better Scheduling Experience with <span className="font-bold ">CalAI</span>
                <button className="md:w-[20vw] lg:w-[15vw] w-[30vw] text-left rounded-[3px] p-2 py-3 md:text-2xl text-[3vh] mt-6 hover:brightness-75 hover:cursor-pointer dark:text-slate-800 bg-gradient-to-r from-[#0077B6] to-[#0077B6] dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] mb-[10vh] md:mb-0" onClick={() => navigate("/login")}>{'>'} Try Now</button>
            </div>
        </div>
    </div>

        <div className="bg-white h-screen w-screen text-[#03045E] text-left text-3xl p-[3vw] flex flex-col relative">
            <h1 className="text-3xl md:text-6xl font-semibold">AI Powered Digital Calendar</h1>
            <h2 className="text-2xl md:text-3xl font-medium">Smart Scheduling and Tasking</h2>
            <h1 className="text-3xl md:text-6xl font-semibold mt-4">
                Easier with <span className="font-extrabold">CalAI</span>
            </h1>

            <div className="flex flex-col justify-end items-end">
            <img src={sample} draggable="false" alt="Sample" className="w-full left-0 max-w-[50vw] md:max-w-[30vw] object-contain" />
            </div>
        </div>

        <div className="bg-[#03045E] h-auto flex-col flex flex-1 justify-start items-start text-white text-3xl">
                <div className="flex-col justify-between items-start text-white w-screen text-3xl pt-[1vw] p-[3vw]">
                    <p className="text-start text-2xl md:text-4xl mb-5">Our Team</p>
                    <div className="flex flex-row justify-start items-start text-white text-3xl pt-[1vw] p-[3vw]">
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="text-[20px] w-full md:text-4xl mb-5"  >Backend Engineer</p>
                            <Circle className="size-[10vh] md:size-[30vh] mb-5" />
                            <p className="md:text-4xl text-2xl">Bryan Herdianto</p>
                            <div className="flex flex-row justify-center items-center mt-5">
                                <img src={instagram} alt="Instagram" className="h-8 w-8 m-2 hover:cursor-pointer" draggable="false" onClick={() => window.open("https://www.instagram.com/bryan_herdianto/", "_blank")} />
                                <img src={linkedin} alt="LinkedIn" className="size-[50px] md:m-2 hover:cursor-pointer" draggable="false" onClick={() => window.open("https://www.linkedin.com/in/bryanherdianto/", "_blank")} />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="w-full text-[20px] md:text-4xl mb-5">Frontend Engineer</p>
                            <Circle className="size-[10vh] md:size-[30vh] mb-5" />
                            <p className="md:text-4xl text-2xl">Wesley Frederick Oh</p>
                            <div className="flex flex-row justify-center items-center mt-5">
                                <img src={instagram} alt="Instagram" className="h-8 w-8 m-2 hover:cursor-pointer" draggable="false" onClick={() => window.open("https://www.instagram.com/wesleyfo4004/", "_blank")} />
                                <img src={linkedin} alt="LinkedIn" className="size-[50px] md:m-2 hover:cursor-pointer" draggable="false" onClick={() => window.open("https://www.linkedin.com/in/wesleyfo/", "_blank")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {showButton && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-[#0077B6] text-white p-3 mr-5 rounded-[6px] justify-center w-[50px] h-[50px] flex items-center hover:cursor-pointer hover:brightness-75 active:brightness-50">
            <ArrowUpFromLine className="mx-auto" />
            </button>
        )}
    </div>
  );
}
