"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, AlarmClock, CalendarDays } from "lucide-react"

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
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if mobile on mount and when window resizes
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

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
        <div className="bg-[#90E0EF] min-h-screen w-screen flex flex-col md:flex-row">
            <DashboardElement />
            
            <div className="flex-1 flex flex-col h-[90vh] pt-2 md:pt-4 px-2 md:px-6 ">
                <h1 className="font-semibold text-2xl md:text-3xl md:justify-start text-black px-2 md:px-4 mb-2">Chat Bot</h1>
                
                <Card className="flex-1 flex flex-col bg-[#CAF0F8] overflow-hidden">
                    <CardContent className="flex-1 overflow-y-auto p-3 md:p-6">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                                    >
                                        <Avatar className="h-6 w-6 md:h-8 md:w-8" draggable="false">
                                            <AvatarFallback>{message.sender === "user" ? <AlarmClock size={16} /> : <CalendarDays size={16} />}</AvatarFallback>
                                        </Avatar>
                                        <div
                                            className={`rounded-lg px-3 py-2 md:px-4 md:py-2 ${
                                                message.sender === "user" ? "bg-[#03045E] text-white" : "bg-[#F0F9FB] text-black"
                                            }`}
                                        >
                                            <p className="text-sm md:text-base">{message.text}</p>
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
                    
                    <CardFooter className="p-2 md:p-4">
                        <form onSubmit={handleSendMessage} className="flex w-full relative">
                            <Input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Ask CalAI..."
                                className="w-full rounded-full bg-[#F0F9FB] h-10 md:h-12 text-black placeholder:text-gray-500 pl-4 pr-12 text-sm md:text-base"
                            />
                            <Button 
                                type="submit" 
                                size="icon" 
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 bg-[#F0F9FB] hover:bg-blue-100 rounded-full flex items-center justify-center"
                                style={{color:"black"}}
                            >
                                <Send className="h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}