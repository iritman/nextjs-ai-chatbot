'use client';

import {
  DownloadIcon, ReloadIcon,
  RocketIcon
} from "@radix-ui/react-icons";
import { Heading, Spinner, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "./components/ChatMessage";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import useChat from "./hooks/useChat";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>("light");
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { messages, isLoading, sendMessage, clearChat, exportChat } = useChat();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(prompt, imageUrl);
    setPrompt('');
    setImageUrl('');
  };

  return (
    <Theme appearance={theme}>
      <div className="min-h-screen flex flex-col items-center p-4">
        <div className="max-w-2xl w-full flex flex-col">

          <div className="flex justify-between items-center mb-4">
            <Heading className="text-2xl font-bold dark:text-white">
              Chat with AI
            </Heading>
            <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="custom-scrollbar flex-1 overflow-y-auto max-h-[60vh] p-2">
            {messages.map((msg: Message, index: number) => (
              <ChatMessage key={index} role={msg.role} content={msg.content} />
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="sticky bottom-0 w-full p-4 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt"
                className="p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
                required
              />
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Optional: Enter image URL"
                className="p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white 
                cursor-pointer rounded-lg disabled:bg-blue-300 
                flex items-center justify-center"
              >
                <div className="flex flex-row gap-2 items-center">
                  <RocketIcon />
                  {isLoading ? <Spinner size="3" /> : 'Send'}
                </div>
              </button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mt-4 w-full">
            <button
              onClick={clearChat}
              className="p-2 w-full sm:w-1/2 rounded-lg cursor-pointer
              bg-orange-500 text-white hover:bg-orange-600
              flex items-center justify-center"
            >
              <div className="flex flex-row gap-2 items-center">
                <ReloadIcon />
                Clear Chat
              </div>
            </button>
            <button
              onClick={exportChat}
              className="p-2 w-full sm:w-1/2 rounded-lg cursor-pointer
              bg-green-500 text-white hover:bg-green-600
              flex items-center justify-center"
            >
              <div className="flex flex-row gap-2 items-center">
                <DownloadIcon />
                Export Chat
              </div>
            </button>
          </div>

          <Contact />
        </div>
      </div>
    </Theme>
  );
}