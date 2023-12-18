"use client";
import ChatWindow from "@/app/src/components/CopilotChat/CopilotChatComponents/ChatWindow";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "animate.css";
// import Image from "next/image";
// import header from "./src/assets/Header.png";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative">
        <ChatWindow />
      </main>
    </QueryClientProvider>
  );
}
