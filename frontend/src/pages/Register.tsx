"use client"

import logo from "../assets/logo.svg"
import WaveElement from "../assets/WaveElement.svg"
import { User, Lock } from "lucide-react"
import polygon1 from "../assets/Polygon1.svg"
import polygon2 from "../assets/Polygon.svg"
import polygon3 from "../assets/Polygon 3.svg"

import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function RegisterPage() {
    const navigate = useNavigate()
    const Login = () => {
        navigate("/login")
    }

    return (
        <div className="bg-cover md:bg-[#03045E] bg-[#0077B6] min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden">
            <div className="flex-1 flex flex-col items-center justify-center text-white relative">
                <img
                    src={logo || "/placeholder.svg"}
                    draggable="false"
                    alt="Logo"
                    className="mt-8 md:size-70 size-30 z-5 hover:cursor-pointer"
                    onClick={() => navigate("/home")}
                />
                <h1 className="font-extrabold sm:text-6xl text-4xl z-5 hover:cursor-pointer" onClick={() => navigate("/home")}>
                    CalAI
                </h1>
                <p
                    className="mt-4 font-normal text-2xl sm:text-4xl z-5 hover:cursor-pointer mb-9"
                    onClick={() => navigate("/home")}
                >
                    Your AI Calendar Manager
                </p>
                <img
                    src={polygon1 || "/placeholder.svg"}
                    draggable="false"
                    alt="Polygon"
                    className="absolute top-0 left-0 justify-start hidden md:block size-90"
                />
                <img
                    src={polygon2 || "/placeholder.svg"}
                    draggable="false"
                    alt="Polygon"
                    className="absolute justify-start hidden md:block sm:size-150"
                />
                <img
                    src={polygon3 || "/placeholder.svg"}
                    draggable="false"
                    alt="Polygon"
                    className="absolute bottom-0 left-0 hidden md:block size-90"
                />
            </div>

            <div className="flex-1 justify-center bg-cover bg-[#CAF0F8] text-white">
                <div className="flex flex-col items-center justify-center text-center md:p-[2vh] glass-blue shadow-lg">
                    <h1 className="pt-[2.5vh] font-bold md:text-[50px] text-[30px]">Create an Account</h1>
                    <h2 className="mt-auto md:text-[27px] text-[20px] mb-7 font-light">Register here as a new member</h2>
                </div>
                <div className="relative">
                    <img
                        src={WaveElement || "/placeholder.svg"}
                        draggable="false"
                        className="w-full mt-[0px] drop-shadow-[0_20px_10px_rgba(0,0,0,0.35)] isolate"
                        alt="Wave Element"
                    />
                </div>
                <div className="max-w-md mx-auto px-4">
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-center mt-[2vh]">
                        <div className="relative w-full mb-6">
                            <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <User className="h-6 w-6 text-gray-500" />
                            </div>
                            <Input
                                type="text"
                                placeholder="Username"
                                className="glass-light pl-12 h-14 text-xl text-black rounded-lg shadow-md focus:ring-2 focus:ring-[#0077B6]"
                                required
                            />
                        </div>

                        <div className="relative w-full mb-6">
                            <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Lock className="h-6 w-6 text-gray-500" />
                            </div>
                            <Input
                                type="password"
                                placeholder="Password"
                                className="glass-light pl-12 h-14 text-xl text-black rounded-lg shadow-md focus:ring-2 focus:ring-[#0077B6]"
                                required
                            />
                        </div>

                        <div className="relative w-full mb-6">
                            <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Lock className="h-6 w-6 text-gray-500" />
                            </div>
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                className="glass-light pl-12 h-14 text-xl text-black rounded-lg shadow-md focus:ring-2 focus:ring-[#0077B6]"
                                required
                            />
                        </div>

                        <div className="w-full mb-6">
                            <div>
                                <p
                                    className="flex justify-end underline text-black hover:text-[#0077B6] text-lg hover:cursor-pointer transition-colors"
                                    onClick={() => Login()}
                                >
                                    Already a Member?
                                </p>
                            </div>
                        </div>

                        <Button
                            variant="glass-blue"
                            size="xl"
                            className="w-full md:w-auto md:min-w-[200px] rounded-full text-xl md:text-2xl font-semibold tracking-wider shadow-lg mb-8 cursor-pointer"
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

