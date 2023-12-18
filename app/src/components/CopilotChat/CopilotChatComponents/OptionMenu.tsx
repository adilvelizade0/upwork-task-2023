/**
 * OptionMenu Component
 *
 * Description:
 * The `OptionMenu` component provides a selectable list of options to the user. Each option, when clicked,
 * sends a predefined message directly to the chat. This is typically used for giving users quick access to common
 * queries or responses.
 *
 * Props:
 * - `options`: An array of `Options` objects, each containing a title and the associated data. The `Options` type
 *   is defined in `useChatStore` and should conform to an expected structure that includes at least a `title` and an
 *   array of `data`.
 * - `addMessageToChat`: A function that handles sending a message to the chat. This function is called with the
 *   selected option's data as an argument.
 *
 * Behavior:
 * - The component iterates over the `options` array to create a list of option titles and corresponding data.
 * - When a list item (`<li>`) is clicked, `addMessageToChat` is called with the option's data, effectively dispatching
 *   the message to the chat.
 *
 * Styling:
 * - The component uses a class defined in `copilotChat.module.scss` for the main container styles.
 * - Additional styles, such as padding and margins, are applied directly to HTML elements like `<ul>` and `<h1>`.
 *
 * Usage:
 * ```jsx
 * const optionsArray = [
 *   { title: 'Quick Replies', data: ['How do I reset my password?', 'What is my balance?'] },
 *   // ... other option groups
 * ];
 *
 * const sendMessageToChat = (message) => {
 *   // Implement the logic to add or send a message to the chat
 * };
 *
 * <OptionMenu
 *   options={optionsArray}
 *   addMessageToChat={sendMessageToChat}
 * />
 * ```
 */

import React, { FC } from "react";
import styles from "../copilotChat.module.scss";
import type { Options } from "../../../hooks/useChatStore";
interface IOptionMenuProps {
  options: Array<Options>;
  addMessageToChat: (message: string) => void;
}

const OptionMenu: FC<IOptionMenuProps> = ({ options, addMessageToChat }) => {
  return (
    <div className={styles.OptionMenu}>
      <div>
        {options.map((option, indexy) => (
          <ul className="p-6" key={indexy}>
            <h1 className="mb-3">{option.title}</h1>
            {option.data.map((data, indexz) => (
              <li
                onClick={() => {
                  addMessageToChat(data);
                }}
                key={indexz + indexy}
              >
                {data}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default OptionMenu;
