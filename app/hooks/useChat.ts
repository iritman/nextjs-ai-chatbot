import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (prompt: string, imageUrl?: string) => {
    setIsLoading(true);
    try {
      setMessages((prev) => [...prev, { role: "user", content: prompt }]);

      const response = await axios.post("/api/chat", {
        prompt,
        imageUrl,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.result },
      ]);
    } catch (error) {
      // console.error("Error sending prompt:", error);
      toast.error("Error sending prompt");
    } finally {
      setIsLoading(false);
    }
  };

  const exportChat = () => {
    const chatContent = messages
      .map((msg) => `${msg.role === "user" ? "You" : "AI"}: ${msg.content}`)
      .join("\n");
    const blob = new Blob([chatContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chat_history.txt";
    link.click();
  };

  return { messages, isLoading, sendMessage, exportChat };
};

export default useChat;
