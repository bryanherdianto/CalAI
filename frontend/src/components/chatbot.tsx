"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import { AlarmClock} from "lucide-react"
import logo from '../assets/logoblack.svg';

import DashboardElement from "@/elements/DashboardElement"

// Message type definition
type Message = {
    id: string
    text: string
    sender: string
    timestamp: Date
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
        id: "1",
        text: "Hello! Welcome to the chat app.",
        sender: "system",
        timestamp: new Date(),
        },
    ])
    const [newMessage, setNewMessage] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    {/* Be ini connect ke backend deh */}
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()

        if (newMessage.trim() === "") return

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: newMessage,
            sender: "user",
            timestamp: new Date(),
        }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    setTimeout(() => {
        const responseMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: `You said: "${newMessage}"`,
            sender: "abc",
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, responseMessage])
    }, 1000)
  } 

  return (
    <div className="bg-cover bg-[#90E0EF] min-h-screen  min-w-screen flex items-center justify-start text-white relative overflow-clip">
        <div className="lg:flex max-w-7xl">
            <div className="w-1/4">
                <DashboardElement />
            </div>

            <div className="w-3/4">
                <div className="relative mr-8 w-[100vw]">
                    <p className="font-semibold text-3xl text-black flex p-5 pl-7">Chat Bot</p>
                </div>
                <Card className="md:mt-3 md:mb-8 md:ml-8 md:mr-8 md:w-[75vw] md:h-[85vh] w-[99vw] bg-[#CAF0F8]">
                    <CardContent className="mb-0 h-[80vh] overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                                    >
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>{message.sender === "user" ? <AlarmClock /> : <img src={logo} className="size-6" />}</AvatarFallback>
                                        </Avatar>
                                        <div
                                            className={`rounded-lg px-4 py-2 ${
                                                message.sender === "user" ? "bg-[#03045E] text-primary-foreground" : "bg-[#F0F9FB]"
                                            }`}
                                        >
                                            <p>{message.text}</p>
                                            <p
                                                className={`text-xs opacity-50 mt-1 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                            >
                                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                            <div className="flex items-center w-full gap-2 justify-end">
                            <Input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Ask CalAI..."
                                className="flex-1 rounded-[2000px] bg-[#F0F9FB] lg:h-15 md:h-10 sm:h-10 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <Button type="submit" size="icon" className="hover:cursor-pointer md:mr-3 sm:mr-2 hover:bg-blue-400 absolute bg-[#F0F9FB] rounded-[2000px] md:size-[3vw] sm:size-[800vh]" style={{color:"black"}}>
                                {/* <Send className="h-4 w-4pointer" /> */}
                                <Send className="size-[2vw]" />
                            </Button>

                            </div>
                        </form>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
);
}
