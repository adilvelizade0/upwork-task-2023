/**
 * Home
 *
 * Description:
 * The Home component is the main page of the chat application. It uses `react-modern-drawer` to
 * implement a sliding drawer that contains the `ChatWindow` component. A button is provided
 * to toggle the drawer open and closed. Additionally, the component is wrapped with
 * `QueryClientProvider` from `react-query` to handle server state throughout the application.
 *
 * State:
 * - `isOpen`: A boolean state value that determines if the chat drawer is open or closed.
 *
 * Methods:
 * - `toggleDrawer`: A method that toggles the value of `isOpen`, opening or closing the drawer.
 *
 * Styles:
 * - The primary styles for this component are located in `globals.css` for general styling and
 *   `copilotChat.module.scss` for specific styles related to the chat components.
 *
 * External Libraries:
 * - `react-query`: Used to fetch, cache and update data in the application without touching the global state.
 * - `react-modern-drawer`: Utilized for the sliding drawer effect.
 * - `animate.css`: A library of ready-to-use cross-browser animations for use in your web projects.
 *
 * Usage:
 * This component is intended to be used as the root component of the chat application's page.
 *
 * ```jsx
 * import Home from './Home';
 *
 * function App() {
 *   return <Home />;
 * }
 * ```
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
const queryClient = new QueryClient();

export default function Home() {
  // Implementation details...
  const [isOpen, setIsOpen] = useState(false);

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
