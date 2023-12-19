/**
 * ChatGPTMessage Component
 *
 * Description:
 * The `ChatGPTMessage` component is responsible for displaying individual messages within the chat interface.
 * It supports different styles for user and bot messages and includes an animation for bot messages as they appear.
 * After a bot message is rendered, interaction icons are displayed to allow the user to react or further interact
 * with the message, such as selecting options to modify the response.
 */

import React, { FC, JSX, useState } from "react";
import styles from "../copilotChat.module.scss";
import InteractionIcons from "@/app/src/components/CopilotChat/CopilotChatComponents/InteractionIcons";
import Typist from "react-typist";

interface IMessageElement {
  /**
   * The sender of the message, either "user" or "bot".
   */
  sender: "user" | "bot";

  /**
   * The text content of the message.
   */
  text: string;

  /**
   * The unique identifier of the message.
   */
  id: string;

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
 * MessageElement component responsible for rendering an individual chat message.
 * @param id - The unique identifier of the message.
 * @param sender - The sender of the message, either "user" or "bot".
 * @param text - The text content of the message.
 * @param addOptionToChat - Function to handle adding an option to the chat.
 * @param setIsDisabled - Optional function to set the disabled state of the chat input.
 * @returns The MessageElement component.
 */
const MessageElement: FC<IMessageElement> = ({
  id,
  sender,
  text,
  addOptionToChat,
  setIsDisabled,
}): JSX.Element => {
  const [isShowInteractionIcons, setIsShowInteractionIcons] = useState(false);

  /**
   * Callback function called when Typist animation ends.
   * Sets the state to show interaction icons and potentially enables the chat input.
   */
  const animationEnd = () => {
    setIsShowInteractionIcons(true);
    setIsDisabled(false);
  };

  return (
    <div
      className={`
                ${styles.MessageElement} ${
                  sender === "user"
                    ? styles.MessageElementForUser
                    : styles.MessageElementForBot
                } ${
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
          className={styles.Typist}
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

export default MessageElement;
