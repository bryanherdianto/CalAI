"use client"

import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Circle } from "lucide-react"
import logo from "../assets/logo.svg"
import instagram from "../assets/Instagram.svg"
import linkedin from "../assets/LinkedIn.svg"
import sample from "../assets/sample.jpg"
import bees from "../assets/Beesfixed.svg"
import { ArrowUpFromLine } from "lucide-react"
import { Button } from "./ui/button"

export default function HomePage() {
  const navigate = useNavigate()
  const [showButton, setShowButton] = useState(false)

  const scrollDivRef = useRef<HTMLDivElement>(null)

  const checkScrollPosition = () => {
    if (scrollDivRef.current && scrollDivRef.current.scrollTop > 300) {
      setShowButton(true) // Show the button when scrolled more than 300px inside the div
    } else {
      setShowButton(false) // Hide the button when scrolled to the top of the div
    }
  }

  const scrollToTop = () => {
    // Scroll the specific div to the top smoothly
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const scrollDiv = scrollDivRef.current
    if (scrollDiv) {
      scrollDiv.addEventListener("scroll", checkScrollPosition)
    }

    // Clean up event listener on component unmount
    return () => {
      if (scrollDiv) {
        scrollDiv.removeEventListener("scroll", checkScrollPosition)
      }
    }
  }, [])

  return (
    <div
      ref={scrollDivRef}
      className="bg-cover bg-[#020480] h-[100vh] flex flex-col overflow-x-hidden overflow-y-scroll"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-white relative pt-16">
        <div className="flex-col flex-1 flex items-center md:ml-[30vw] md:mt-[20vh]">
          <div
            className="flex-col flex justify-center md:mt-0 mt-[5vh] h-full md:mb-50 hover:cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <img
              src={logo || "/placeholder.svg"}
              draggable="false"
              alt="Logo"
              className="mt-8 md:size-70 size-40 z-5 mx-auto"
            />
            <img
              src={bees || "/placeholder.svg"}
              draggable="false"
              alt="Bees"
              className="absolute left-[-20vw] z-0 min-w-[50vw] justify-start size-[100vh] mr-[10vw]"
            />
            <h1 className="font-extrabold text-6xl md:text-7xl lg:text-8xl z-5">CalAI</h1>
            <p className="mt-4 font-light md:text-4xl text-2xl lg:text-5xl z-5">Your AI Calendar Manager</p>
          </div>

          <div className="md:absolute md:ml-[10vw] lg:w-[40vw] md:w-[20vw] w-full flex-col flex flex-1 text-left left-0 top-50 items-start justify-center p-4 text-white font-semibold lg:text-4xl md:text-3xl text-[4vh]">
            <div className="glass-dark p-6 rounded-xl card-improved">
              Better Scheduling Experience with <span className="font-bold">CalAI</span>
              <br />
              <Button
                variant="glass-blue"
                size="xl"
                className="mt-6 rounded-md text-xl md:text-2xl font-semibold shadow-lg mb-[10vh] md:mb-0"
                onClick={() => navigate("/login")}
              >
                &gt; Try Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-screen w-full text-[#03045E] text-left text-3xl p-[3vw] flex flex-col relative">
        <div className="glass-light p-8 rounded-xl max-w-4xl mx-auto card-improved">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">AI Powered Digital Calendar</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-2">Smart Scheduling and Tasking</h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-6">
            Easier with <span className="font-extrabold">CalAI</span>
          </h1>

          <div className="flex flex-col justify-end items-end">
            <img
              src={sample || "/placeholder.svg"}
              draggable="false"
              alt="Sample"
              className="w-full left-0 max-w-[50vw] md:max-w-[30vw] object-contain mt-6"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#03045E] h-auto flex-col flex flex-1 justify-start items-start text-white text-3xl">
        <div className="flex-col justify-between items-start text-white w-full text-3xl pt-[1vw] p-[3vw]">
          <div className="glass-dark p-8 rounded-xl max-w-4xl mx-auto card-improved">
            <p className="text-start text-2xl md:text-4xl lg:text-5xl mb-8 font-bold">Our Team</p>
            <div className="flex flex-row justify-start items-start text-white text-3xl pt-[1vw]">
              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-[20px] w-full md:text-3xl lg:text-4xl mb-5 font-medium">Fullstack Engineer</p>
                <Circle className="size-[10vh] md:size-[20vh] lg:size-[25vh] mb-5" />
                <p className="md:text-3xl lg:text-4xl text-2xl font-semibold">Bryan Herdianto</p>
                <div className="flex flex-row justify-center items-center mt-5">
                  <img
                    src={instagram || "/placeholder.svg"}
                    alt="Instagram"
                    className="w-12 md:w-14 m-2 hover:cursor-pointer transition-transform hover:scale-110"
                    draggable="false"
                    onClick={() => window.open("https://www.instagram.com/bryan_herdianto/", "_blank")}
                  />
                  <img
                    src={linkedin || "/placeholder.svg"}
                    alt="LinkedIn"
                    className="w-12 md:w-14 m-2 hover:cursor-pointer transition-transform hover:scale-110"
                    draggable="false"
                    onClick={() => window.open("https://www.linkedin.com/in/bryanherdianto/", "_blank")}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="w-full text-[20px] md:text-3xl lg:text-4xl mb-5 font-medium">Frontend Engineer</p>
                <Circle className="size-[10vh] md:size-[20vh] lg:size-[25vh] mb-5" />
                <p className="md:text-3xl lg:text-4xl text-2xl font-semibold">Wesley Frederick Oh</p>
                <div className="flex flex-row justify-center items-center mt-5">
                  <img
                    src={instagram || "/placeholder.svg"}
                    alt="Instagram"
                    className="w-12 md:w-14 m-2 hover:cursor-pointer transition-transform hover:scale-110"
                    draggable="false"
                    onClick={() => window.open("https://www.instagram.com/wesleyfo4004/", "_blank")}
                  />
                  <img
                    src={linkedin || "/placeholder.svg"}
                    alt="LinkedIn"
                    className="w-12 md:w-14 m-2 hover:cursor-pointer transition-transform hover:scale-110"
                    draggable="false"
                    onClick={() => window.open("https://www.linkedin.com/in/wesleyfo/", "_blank")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showButton && (
        <Button
          variant="glass-blue"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 rounded-lg shadow-lg"
        >
          <ArrowUpFromLine className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}

