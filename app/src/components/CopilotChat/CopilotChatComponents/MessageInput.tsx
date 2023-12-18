/**
 * MessageInput Component
 *
 * Description:
 * The `MessageInput` component allows the user to type and submit a message. It consists of a text input field
 * that captures the user's input and triggers a callback when the user presses the "Enter" key. The component
 * also supports a disabled state, disallowing input when necessary (e.g., while waiting for a response).
 *
 * Props:
 * - `prompt`: The current value of the input field, representing the message draft.
 * - `handlePromptChange`: Function called with the input's `onChange` event, updating the state with the
 *   user's input.
 * - `addMessageToChat`: Function called when the user submits the message (presses "Enter"). It should
 *   handle any necessary actions like sending the message to the chat service or API.
 * - `disabled`: A boolean that enables the input to be toggled to a disabled state, preventing user
 *   interaction.
 *
 * Behavior:
 * - The user can type a message which updates the `prompt` value via `handlePromptChange`.
 * - Pressing "Enter" will call `addMessageToChat` with the current input value.
 * - The input field can be disabled, indicated by the `disabled` prop, to prevent user interaction at
 *   certain times, such as when waiting for a response from the server.
 *
 * Styling:
 * - The component's styling is sourced from `copilotChat.module.scss` under the class `MessageInputContainer`.
 *
 * Usage:
 * ```jsx
 * const [prompt, setPrompt] = useState('');
 *
 * const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   setPrompt(e.target.value);
 * };
 *
 * const addMessageToChat = (message: string) => {
 *   // Logic to add message to chat goes here
 * };
 *
 * <MessageInput
 *   prompt={prompt}
 *   handlePromptChange={handlePromptChange}
 *   addMessageToChat={addMessageToChat}
 *   disabled={false} // or true, based on the desired state
 * />
 * ```
 */

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
