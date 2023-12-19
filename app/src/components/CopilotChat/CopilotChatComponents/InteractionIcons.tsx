/**
 * InteractionIcons Component
 *
 * Description:
 * The InteractionIcons component renders a set of interactive icons that allow users to engage
 * with a message. These icons provide functionality for liking, disliking, modifying the message's
 * response, and copying message text to the clipboard.
 */

"use client";
import React, { FC } from "react";
import LikeButton from "@/app/src/constants/svgs/LikeButton";
import DisLike from "@/app/src/constants/svgs/DisLikeButton";
import ModifyButton from "@/app/src/constants/svgs/ModifyButton";
import CopyButton from "@/app/src/constants/svgs/CopyButton";
import styles from "../copilotChat.module.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ActionMenu from "@/app/src/components/CopilotChat/CopilotChatComponents/ActionMenu";
import { useChatStore } from "@/app/src/hooks/useChatStore";
import useClipboard from "react-use-clipboard";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

interface IInteractionIconsProps {
  /**
   * Function to handle adding an option to the chat.
   * @param option - The selected option.
   * @param id - The ID of the message to replace with the option.
   */
  addOptionToChat?: (option: string, id: string) => void;

  /**
   * The unique identifier of the message.
   */
  id: string;

  /**
   * The text content of the message.
   */
  text?: string;
}

// Configuration for the toast notifications
toastConfig({ theme: "dark" });

/**
 * InteractionIcons component responsible for rendering interaction buttons for a chat message.
 * @param addOptionToChat - Function to handle adding an option to the chat.
 * @param id - The unique identifier of the message.
 * @param text - The text content of the message.
 * @returns The InteractionIcons component.
 */
const InteractionIcons: FC<IInteractionIconsProps> = ({
  addOptionToChat,
  id,
  text,
}) => {
  const { addRate, messages } = useChatStore();

  // Style for the Popup component. I can't move this to a separate file because of the library features.
  const popUpStyle = {
    width: "160px",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.80)",
    boxShadow: "0 8px 20px 0 rgba(19, 25, 35, 0.15)",
    backdropFilter: "blur(25px)",
    border: "none",
    padding: "8px",
  };

  /**
   * Finds a message in the chat history based on its ID.
   * @param id - The ID of the message to find.
   * @returns The found message.
   */
  const findMessage = (id: string) => {
    return messages.find((message) => message.id === id);
  };

  // react-use-clipboard hook for copying text to the clipboard
  const [isCopied, setCopied] = useClipboard(text);

  /**
   * Handles the like action for a message.
   */
  const handleLike = () => {
    addRate(id, "like");
  };

  /**
   * Handles the dislike action for a message.
   */
  const handleDisLike = () => {
    addRate(id, "dislike");
  };

  // @ts-ignore
  return (
    <div className={styles.InteractionIcons}>
      <div className={styles.actionButtons}>
        <button onClick={handleLike}>
          <LikeButton
            fill={findMessage(id).rate === "like" ? "green" : "#242625"}
          />
        </button>
        <button onClick={handleDisLike}>
          <DisLike
            fill={findMessage(id).rate === "dislike" ? "red" : "#242625"}
          />
        </button>

        <Popup
          trigger={
            <button autoFocus={false}>
              <ModifyButton />
            </button>
          }
          position="top left"
          arrow={false}
          // This is Library specific styling. I can't change it. That's why I am using inline styling.
          contentStyle={popUpStyle}
        >
          {
            // @ts-ignore
            (close: () => void) => (
              <ActionMenu
                id={id}
                addOptionToChat={addOptionToChat}
                close={close}
              />
            )
          }
        </Popup>
      </div>

      <button
        onClick={() => {
          setCopied();
          if (isCopied) {
            toast("Copied to clipboard!", 1000);
          }
        }}
      >
        <CopyButton />
      </button>
    </div>
  );
};

export default InteractionIcons;
