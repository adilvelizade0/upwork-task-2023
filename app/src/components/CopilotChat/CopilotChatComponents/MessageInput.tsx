import styles from "../copilotChat.module.scss";
import React, { FC } from "react";

interface IMessageInputProps {
  prompt: string;
  handlePromptChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addMessageToChat: (message: string) => void;
  disabled: boolean;
}
const MessageInput: FC<IMessageInputProps> = ({
  prompt,
  handlePromptChange,
  addMessageToChat,
  disabled = false,
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
