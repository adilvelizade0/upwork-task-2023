/**
 * MessageList Component
 *
 * Description:
 * The `MessageList` component is responsible for rendering a list of message components. It is a part
 * of the chat interface that displays all the messages exchanged with ChatGPT. Each message is wrapped
 * within the `ChatGPTMessage` component which handles the display logic for individual messages.
 *
 * Props:
 * - `messages`: An array of Message objects to be displayed.
 * - `addOptionToChat`: A function that handles the addition of selected options to the chat.
 * - `setIsDisabled`: An optional function to control the disabled state of the message input.
 *
 * Behavior:
 * - The component iterates over the `messages` array and renders each message using the
 *   `ChatGPTMessage` component.
 * - Messages passed as props should contain unique identifiers for correct rendering and functionality.
 *
 * Child Components:
 * - `ChatGPTMessage`: Component used to render individual chat messages with interaction options.
 *
 * Usage:
 * ```jsx
 * // Array of messages with content, sender, and unique ID
 * const messages = [
 *   { id: '001', sender: 'user', text: 'Hello, ChatGPT!' },
 *   { id: '002', sender: 'bot', text: 'Hello! How can I assist you today?' },
 *   // More messages here...
 * ];
 *
 * // Function to add option interaction to the chat
 * function handleAddOptionToChat(option: string, id: string) {
 *   // Add selected option to the chat based on message id
 * }
 *
 * // Function to disable the message input (optional)
 * function handleSetIsDisabled(isDisabled: boolean) {
 *   // Disable or enable the message input
 * }
 *
 * <MessageList
 *   messages={messages}
 *   addOptionToChat={handleAddOptionToChat}
 *   setIsDisabled={handleSetIsDisabled}
 * />
 * ```
 */
import ChatGPTMessage from "@/app/src/components/CopilotChat/CopilotChatComponents/ChatGPTMessage";
import styles from "../copilotChat.module.scss";
import type { Message } from "../../../hooks/useChatStore";
import React, { FC } from "react";

interface IMessageListProps {
  messages: Message[];
  addOptionToChat: (option: string, id: string) => void;
  setIsDisabled?: (isDisabled: boolean) => void;
}
const MessageList: FC<IMessageListProps> = ({
  messages,
  addOptionToChat,
  setIsDisabled,
}) => {
  return (
    <div className={styles.MessageList}>
      {messages.map((message: Message, index: number) => {
        return (
          <ChatGPTMessage
            key={message.id}
            id={message.id}
            sender={message.sender}
            text={message.text}
            addOptionToChat={addOptionToChat}
            setIsDisabled={setIsDisabled}
          />
        );
      })}
    </div>
  );
};

export default MessageList;
