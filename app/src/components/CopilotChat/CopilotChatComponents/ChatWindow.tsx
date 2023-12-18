import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import styles from "../copilotChat.module.scss";
import CloseButton from "@/app/src/constants/svgs/CloseButton";
import { useChatStore } from "@/app/src/hooks/useChatStore";
import { useChatGPTQuery } from "@/app/src/utils/api";
import OptionMenu from "@/app/src/components/CopilotChat/CopilotChatComponents/OptionMenu";
import { ThreeDots } from "react-loader-spinner";

const ChatWindow: React.FC = () => {
  const { messages, addMessage, deleteMessage, options } = useChatStore();
  const [prompt, setPrompt] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOptions, setIsOptions] = useState(true);
  const { sendMessage, data, error } = useChatGPTQuery();

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const addMessageToChat = (message: string) => {
    setIsOptions(false);
    addMessage(message, "user");
    setPrompt("");
    sendMessage(message);
    setThinking(true);
    setIsDisabled(true);
  };

  const findMessage = (id) => {
    return messages.find((message) => message.id === id);
  };

  const addOptionToChat = (option: string, id) => {
    const message = findMessage(id);
    deleteMessage(id);
    sendMessage(`"${message.text}"` + "this response to be" + option);
    setThinking(true);
    setIsDisabled(true);
  };

  useEffect(() => {
    if (data) {
      addMessage(data?.choices[0].message.content, "bot");
      setThinking(false);
    }
  }, [data]);

  return (
    <div className={styles.chatWindow}>
      <div className="container mx-auto">
        <div
          className="
            flex
            items-center
            justify-between
            px-4
            pt-4
            pb-2
            mb-2
        "
        >
          <h1 className={styles.headerText}>Financial Copilot Chat </h1>
          <CloseButton />
        </div>
        <div>
          <div>
            {isOptions && (
              <OptionMenu
                addMessageToChat={addMessageToChat}
                options={options}
              />
            )}
            <MessageList
              messages={messages}
              addOptionToChat={addOptionToChat}
              setIsDisabled={setIsDisabled}
            />
            {error && (
              <h1 className="text-center text-red-500 font-bold text-xl mt-5 mb-5 px-7 w-full">
                Something went wrong
              </h1>
            )}
            <div className="px-7">
              {thinking && (
                <ThreeDots
                  height="30"
                  width="30"
                  radius="9"
                  color="#0009A5"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              )}
            </div>
          </div>
          <MessageInput
            addMessageToChat={addMessageToChat}
            prompt={prompt}
            handlePromptChange={handlePromptChange}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
