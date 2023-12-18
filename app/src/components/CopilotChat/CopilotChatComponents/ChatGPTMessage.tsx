/**
 * ChatGPTMessage Component
 *
 * Description:
 * The `ChatGPTMessage` component is responsible for displaying individual messages within the chat interface.
 * It supports different styles for user and bot messages and includes an animation for bot messages as they appear.
 * After a bot message is rendered, interaction icons are displayed to allow the user to react or further interact
 * with the message, such as selecting options to modify the response.
 *
 * Props:
 * - `sender`: Indicates whether the message was sent by the "user" or the "bot".
 * - `text`: The text content of the message.
 * - `id`: A unique identifier for the message.
 * - `addOptionToChat`: A function that is invoked when an interaction option is selected for the message.
 * - `setIsDisabled`: An optional function to control the disabled state of the message input or other interactive elements.
 *
 * State:
 * - `isShowInteractionIcons`: Determines whether to show interaction icons for bot messages.
 *
 * Behavior:
 * - User messages are displayed as plain paragraphs.
 * - Bot messages are animated using `react-typist` to simulate typing and reveal interaction icons upon completion.
 * - Interaction icons are displayed conditionally based on `isShowInteractionIcons` after bot messages are typed out.
 *
 * Child Components:
 * - `InteractionIcons`: Set of icons that allow liking, disliking, and performing other interactions on the message.
 * - `Typist`: A third-party component that creates a typing animation for the bot's messages.
 *
 * Styling:
 * - The component uses various classes from `copilotChat.module.scss` to style the messages according to the sender.
 * - Bot messages additionally use `animate.css` classes for a fade-in-right effect on appearance.
 *
 * Usage:
 * ```jsx
 * <ChatGPTMessage
 *   id="msg-001"
 *   sender="bot"
 *   text="Hello, how can I help you today?"
 *   addOptionToChat={handleAddOptionToChat}
 *   setIsDisabled={handleSetIsDisabled}
 * />
 * ```
 */

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
