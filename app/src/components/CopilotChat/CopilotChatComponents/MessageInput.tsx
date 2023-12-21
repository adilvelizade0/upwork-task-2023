/**
 * MessageInput Component
 *
 * Description:
 * The `MessageInput` component allows the user to type and submit a message. It consists of a text input field
 * that captures the user's input and triggers a callback when the user presses the "Enter" key. The component
 * also supports a disabled state, disallowing input when necessary (e.g., while waiting for a response).
 */

import styles from "../copilotChat.module.scss";
import React, { FC } from "react";

interface IMessageInputProps {
  /**
   * The current prompt value in the input.
   */
  prompt: string;

  /**
   * Function to handle changes in the input prompt.
   * @param e - The change event of the input.
   */
  handlePromptChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function to handle adding a message to the chat.
   * @param message - The message to add to the chat.
   */
  addMessageToChat: (message: string) => void;

  /**
   * Flag indicating whether the input is disabled.
   */
  disabled: boolean;
}

/**
 * MessageInput component responsible for rendering an input for entering chat prompts.
 * @param prompt - The current prompt value in the input.
 * @param handlePromptChange - Function to handle changes in the input prompt.
 * @param addMessageToChat - Function to handle adding a message to the chat.
 * @param disabled - Flag indicating whether the input is disabled.
 * @returns The MessageInput component.
 */
const MessageInput: FC<IMessageInputProps> = ({
  prompt,
  handlePromptChange,
  addMessageToChat,
  disabled,
}) => {
  return (
    <div className={`${styles.MessageInputContainer}`}>
      <input
        value={prompt}
        onChange={handlePromptChange}
        type="text"
        placeholder="Enter a prompt"
        disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addMessageToChat(prompt);
          }
        }}
      />
    </div>
  );
};

export default MessageInput;
