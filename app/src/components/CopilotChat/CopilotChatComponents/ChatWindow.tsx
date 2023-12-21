/**
 * ChatWindow Component
 *
 * Description:
 * The ChatWindow component is a container for the chat interface in the application.
 * It includes the MessageList, which shows a list of messages, and the MessageInput to
 * allow users to send new messages. An options menu can be displayed at the top of the chat,
 * and a CloseButton allows users to close the chat window. This component also interacts
 * with the ChatGPT API to send messages and receive responses.
 */

import React, { useEffect, useState, JSX, FC } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import styles from "../copilotChat.module.scss";
import CloseButtonSvg from "@/app/src/constants/svgs/CloseButtonSvg";
import { useChatStore } from "@/app/src/hooks/useChatStore";
import { useChatGPTQuery } from "@/app/src/utils/api";
import OptionMenu from "@/app/src/components/CopilotChat/CopilotChatComponents/OptionMenu";
import { ThreeDots } from "react-loader-spinner";

interface IChatWindowProps {
  toggleDrawer: () => void;
}

/**
 * ChatWindow component responsible for rendering the chat interface and managing user interactions.
 * @param toggleDrawer - Function to toggle the chat drawer's visibility.
 * @returns The ChatWindow component.
 */
const ChatWindow: FC<IChatWindowProps> = ({ toggleDrawer }): JSX.Element => {
  const { messages, addMessage, deleteMessage } = useChatStore();
  const [prompt, setPrompt] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOptions, setIsOptions] = useState(true);
  const { sendMessage, data, error } = useChatGPTQuery();

  // Configuration for the ThreeDots loading spinner
  const ThreeDotsConfig = {
    height: "30",
    width: "30",
    radius: "9",
    color: "#0009A5",
    ariaLabel: "three-dots-loading",
    visible: true,
  };

  /**
   * Handles the change of the input prompt for the user's message.
   * @param e - The change event of the input.
   */
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  /**
   * Adds a user message to the chat, sends it to the ChatGPT API, and sets the chat to a loading state.
   * @param message - The user's message.
   */
  const addMessageToChat = (message: string) => {
    setIsOptions(false);
    addMessage(message, "user");
    setPrompt("");
    sendMessage(message);
    setThinking(true);
    setIsDisabled(true);
  };

  /**
   * Finds a message in the chat history based on its ID.
   * @param id - The ID of the message to find.
   * @returns The found message.
   */
  const findMessage = (id: string) => {
    return messages.find((message) => message.id === id);
  };

  /**
   * Adds an option to the chat, replaces the original message with the option, and sends it to the ChatGPT API.
   * @param option - The selected option.
   * @param id - The ID of the message to replace with the option.
   */
  const addOptionToChat = (option: string, id) => {
    const message = findMessage(id);
    deleteMessage(id);
    sendMessage(`"${message.text}"` + " " + option);
    setThinking(true);
    setIsDisabled(true);
  };

  /**
   * Updates the chat with the response from the ChatGPT API when data is received.
   */
  useEffect(() => {
    if (data) {
      addMessage(data?.choices[0].message.content, "bot");
      setThinking(false);
    }
  }, [data]);

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h1 className={styles.headerText}>Financial Copilot Chat </h1>
        <button onClick={toggleDrawer}>
          <CloseButtonSvg />
        </button>
      </div>
      <div>
        <div>
          {isOptions && <OptionMenu addMessageToChat={addMessageToChat} />}
          <MessageList
            messages={messages}
            addOptionToChat={addOptionToChat}
            setIsDisabled={setIsDisabled}
          />
          {error && (
            <h1 className={styles.chatError}>
              Something went wrong please try again
            </h1>
          )}
          <div className="px-7">
            {!error && thinking && (
              <ThreeDots
                height={ThreeDotsConfig.height}
                width={ThreeDotsConfig.width}
                radius={ThreeDotsConfig.radius}
                color={ThreeDotsConfig.color}
                ariaLabel={ThreeDotsConfig.ariaLabel}
                visible={ThreeDotsConfig.visible}
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
  );
};

export default ChatWindow;
