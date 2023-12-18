import React, { FC, JSX, useState } from "react";
import styles from "../copilotChat.module.scss";
import InteractionIcons from "@/app/src/components/CopilotChat/CopilotChatComponents/InteractionIcons";
import Typist from "react-typist";

interface IChatGPTMessage {
  sender: "user" | "bot";
  text?: string;
  id: string;
  addOptionToChat: (option: string, id: string) => void;
  setIsDisabled?: (isDisabled: boolean) => void;
}

const ChatGPTMessage: FC<IChatGPTMessage> = ({
  id,
  sender,
  text,
  addOptionToChat,
  setIsDisabled,
}): JSX.Element => {
  const [isShowInteractionIcons, setIsShowInteractionIcons] = useState(false);
  const animationEnd = () => {
    setIsShowInteractionIcons(true);
    setIsDisabled(false);
  };
  return (
    <div
      className={`
                ${styles.ChatGPTMessage} ${
                  sender === "user"
                    ? styles.ChatGPTMessageForUser
                    : styles.ChatGPTMessageForBot
                } p-4 mb-4 ${
                  sender === "bot" && "animate__animated animate__fadeInRight"
                }
            `}
    >
      {sender === "user" ? (
        <p>{text}</p>
      ) : (
        <Typist
          avgTypingDelay={5}
          cursor={{ show: false }}
          onTypingDone={animationEnd}
        >
          <p>{text}</p>
        </Typist>
      )}

      {sender === "bot" && isShowInteractionIcons ? (
        <InteractionIcons
          text={text}
          id={id}
          addOptionToChat={addOptionToChat}
        />
      ) : null}
    </div>
  );
};

export default React.memo(ChatGPTMessage);
