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

interface IInteractionIconsProps {
  addOptionToChat?: (option: string, id: string) => void;
  id: string;
  text?: string;
}

const InteractionIcons: FC<IInteractionIconsProps> = ({
  addOptionToChat,
  id,
  text,
}) => {
  const { addRate, messages } = useChatStore();

  const findMessage = (id: string) => {
    return messages.find((message) => message.id === id);
  };

  const [isCopied, setCopied] = useClipboard(text);

  const handleLike = () => {
    addRate(id, "like");
  };

  const handleDisLike = () => {
    addRate(id, "dislike");
  };

  // @ts-ignore
  return (
    <div
      className={`${styles.InteractionIcons} flex items-center justify-between mt-2`}
    >
      <div className="flex gap-1 items-center">
        <button onClick={handleLike}>
          <LikeButton
            fill={findMessage(id).rate === "like" ? "green" : "#242625"}
          />
        </button>
        <button
          onClick={handleDisLike}
          className="outline-0 border-0 focus:outline-none"
        >
          <DisLike
            fill={findMessage(id).rate === "dislike" ? "red" : "#242625"}
          />
        </button>

        <Popup
          trigger={
            <button autoFocus={false} className="outline-0 border-0">
              <ModifyButton />
            </button>
          }
          position="top left"
          arrow={false}
          // This is Library specific styling. I can't change it. That's why I am using inline styling.
          contentStyle={{
            width: "160px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.80)",
            boxShadow: "0 8px 20px 0 rgba(19, 25, 35, 0.15)",
            backdropFilter: "blur(25px)",
            border: "none",
            padding: "8px",
          }}
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
          alert("Copied to clipboard");
        }}
      >
        <CopyButton />
      </button>
    </div>
  );
};

export default InteractionIcons;
