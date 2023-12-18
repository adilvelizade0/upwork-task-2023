/**
 * ChatWindow Component
 *
 * Description:
 * The ChatWindow component is a container for the chat interface in the application.
 * It includes the MessageList, which shows a list of messages, and the MessageInput to
 * allow users to send new messages. An options menu can be displayed at the top of the chat,
 * and a CloseButton allows users to close the chat window. This component also interacts
 * with the ChatGPT API to send messages and receive responses.
 *
 * Props:
 * - `toggleDrawer`: Function that triggers the closing of the chat window/drawer.
 *
 * State:
 * - `prompt`: State to manage the input text for new messages.
 * - `thinking`: Boolean state to indicate the ChatGPT is processing a message.
 * - `isDisabled`: Boolean state to disable the MessageInput when necessary.
 * - `isOptions`: Boolean state to control the visibility of the options menu.
 *
 * Behavior:
 * - User can type messages and send them, which will then be processed by ChatGPT.
 * - An animation is displayed while waiting for ChatGPT's response.
 * - Users can also select from predefined options which will trigger a response
 *   modification from ChatGPT.
 * - The component handles error states from ChatGPT by displaying an error message.
 *
 * Child Components:
 * - `MessageList`: Displays the list of conversation messages.
 * - `MessageInput`: Provides input for the user to type and send new messages.
 * - `OptionMenu`: Displays interaction options.
 * - `CloseButton`: SVG component used to close the ChatWindow.
 * - `ThreeDots`: Animated loading indicator from `react-loader-spinner`.
 *
 * Usage:
 * ```jsx
 * const toggleChatDrawer = () => {
 *   // Logic to close chat drawer goes here
 * };
 *
 * <ChatWindow toggleDrawer={toggleChatDrawer} />
 * ```
 */

import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import styles from "../copilotChat.module.scss";
import CloseButton from "@/app/src/constants/svgs/CloseButton";
import { useChatStore } from "@/app/src/hooks/useChatStore";
import { useChatGPTQuery } from "@/app/src/utils/api";
import OptionMenu from "@/app/src/components/CopilotChat/CopilotChatComponents/OptionMenu";
import { ThreeDots } from "react-loader-spinner";

interface IChatWindowProps {
  toggleDrawer: () => void;
}

const ChatWindow: React.FC<IChatWindowProps> = ({ toggleDrawer }) => {
  const { messages, addMessage, deleteMessage, options } = useChatStore();
  const [prompt, setPrompt] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOptions, setIsOptions] = useState(true);
  const { sendMessage, data, error } = useChatGPTQuery();

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const addMessageToChat = (message: string) => {
    setIsOptions(false);
    addMessage(message, "user");
    setPrompt("");
    sendMessage(message);
    setThinking(true);
    setIsDisabled(true);
  };

  const findMessage = (id: string) => {
    return messages.find((message) => message.id === id);
  };

  const addOptionToChat = (option: string, id) => {
    const message = findMessage(id);
    deleteMessage(id);
    sendMessage(`"${message.text}"` + " " + option);
    setThinking(true);
    setIsDisabled(true);
  };

  useEffect(() => {
    if (data) {
      addMessage(data?.choices[0].message.content, "bot");
      setThinking(false);
    }
  }, [data]);

  return (
    <div className={styles.chatWindow}>
      <div className="container mx-auto">
        <div
          className="
            flex
            items-center
            justify-between
            px-4
            pt-4
            pb-2
            mb-2
        "
        >
          <h1 className={styles.headerText}>Financial Copilot Chat </h1>
          <button onClick={toggleDrawer}>
            <CloseButton />
          </button>
        </div>
        <div>
          <div>
            {isOptions && (
              <OptionMenu
                addMessageToChat={addMessageToChat}
                options={options}
              />
            )}
            <MessageList
              messages={messages}
              addOptionToChat={addOptionToChat}
              setIsDisabled={setIsDisabled}
            />
            {error && (
              <h1 className="text-red-500 m-1 px-4 w-full">
                Something went wrong try again
              </h1>
            )}
            <div className="px-7">
              {!error && thinking && (
                <ThreeDots
                  height="30"
                  width="30"
                  radius="9"
                  color="#0009A5"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              )}
            </div>
          </div>
          <MessageInput
            addMessageToChat={addMessageToChat}
            prompt={prompt}
            handlePromptChange={handlePromptChange}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
