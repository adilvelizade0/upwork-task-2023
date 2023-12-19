/**
 * Home
 *
 * Description:
 * The Home component is the main page of the chat application. It uses `react-modern-drawer` to
 * implement a sliding drawer that contains the `ChatWindow` component. A button is provided
 * to toggle the drawer open and closed. Additionally, the component is wrapped with
 * `QueryClientProvider` from `react-query` to handle server state throughout the application.
 */

"use client";
import { useState } from "react";
import ChatWindow from "@/app/src/components/CopilotChat/CopilotChatComponents/ChatWindow";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "animate.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./src/components/CopilotChat/copilotChat.module.scss";

// Creating a new instance of QueryClient for React Query
const queryClient = new QueryClient();

/**
 * Home component representing the main page of the application.
 * @returns The main page component with a chat drawer.
 */
export default function Home() {
  // State to manage the open/close state of the chat drawer
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the state of the chat drawer (open/closed).
   */
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        {!isOpen && (
          <button
            onClick={toggleDrawer}
            className="absolute bottom-0 right-0 m-4 p-2 bg-blue-500 text-white rounded-lg"
          >
            Open Chat
          </button>
        )}

        <Drawer
          enableOverlay={false}
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className={styles.drawer}
        >
          <ChatWindow toggleDrawer={toggleDrawer} />
        </Drawer>
      </main>
    </QueryClientProvider>
  );
}
