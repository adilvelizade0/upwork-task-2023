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
