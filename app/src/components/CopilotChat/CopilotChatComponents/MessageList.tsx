/**
 * MessageList Component
 *
 * Description:
 * The `MessageList` component is responsible for rendering a list of message components. It is a part
 * of the chat interface that displays all the messages exchanged with ChatGPT. Each message is wrapped
 * within the `ChatGPTMessage` component which handles the display logic for individual messages.
 */

import Message from "@/app/src/components/CopilotChat/CopilotChatComponents/Message";
import styles from "../copilotChat.module.scss";
import type { IMessage } from "../../../hooks/useChatStore";
import React, { FC } from "react";

interface IMessageListProps {
  /**
   * An array of message objects representing the chat history.
   */
  messages: IMessage[];

  /**
   * Function to handle adding an option to the chat.
   * @param option - The selected option.
   * @param id - The ID of the message to replace with the option.
   */
  addOptionToChat: (option: string, id: string) => void;

  /**
   * Optional function to set the disabled state of the chat input.
   * @param isDisabled - Boolean value indicating whether the chat input should be disabled.
   */
  setIsDisabled?: (isDisabled: boolean) => void;
}

/**
 * MessageList component responsible for rendering the list of messages in the chat.
 * @param messages - An array of message objects representing the chat history.
 * @param addOptionToChat - Function to handle adding an option to the chat.
 * @param setIsDisabled - Optional function to set the disabled state of the chat input.
 * @returns The MessageList component.
 */
const MessageList: FC<IMessageListProps> = ({
  messages,
  addOptionToChat,
  setIsDisabled,
}) => {
  return (
    <div className={styles.MessageList}>
      {messages.map((message: IMessage) => {
        return (
          <Message
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
