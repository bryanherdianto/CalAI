"use client"

import bees from "../assets/Bees.svg"
import polygon from "../assets/Polygon 7.svg"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

export default function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#03045E] min-h-screen flex items-center justify-center relative text-white max-w-[1920px] mx-auto">
      <img
        src={bees || "/placeholder.svg"}
        alt="Bees"
        className="absolute left-0 pr-[20vw] z-0 min-w-full size-[100vh]"
      />

      <div className="z-10 text-center flex flex-col items-center">
        <div className="glass-dark p-10 rounded-xl card-improved">
          <h2 className="text-[5vh] md:text-[6vh] lg:text-[7vh] z-10 text-white">Error</h2>
          <h1 className="text-[12vh] md:text-[14vh] lg:text-[16vh] font-bold z-20 opacity-45 text-white">404</h1>
          <p className="md:text-[2vw] lg:text-[2.5vw] font-bold z-20 text-white">Page not found</p>
          <Button
            variant="glass-blue"
            size="lg"
            className="w-full mt-6 text-xl md:text-2xl font-semibold rounded-lg"
            onClick={() => navigate("/")}
          >
            Go to Menu
          </Button>
        </div>
      </div>

      <motion.img
        src={polygon}
        alt="Polygon"
        className="absolute md:size-[500px] size-[350px] mt-1 mr-1 size-[400px min-h-[3vh] z-1 blur-[3px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

