/**
 * OptionMenu Component
 *
 * Description:
 * The `OptionMenu` component provides a selectable list of options to the user. Each option, when clicked,
 * sends a predefined message directly to the chat. This is typically used for giving users quick access to common
 * queries or responses.
 */

import React, { FC } from "react";
import styles from "../copilotChat.module.scss";

interface IOptionMenuProps {
  /**
   * Function to handle adding a message to the chat.
   * @param message - The message to add to the chat.
   */
  addMessageToChat: (message: string) => void;
}

/**
 * OptionMenu component responsible for rendering a menu of predefined options.
 * @param addMessageToChat - Function to handle adding a message to the chat.
 * @returns The OptionMenu component.
 */
const OptionMenu: FC<IOptionMenuProps> = ({ addMessageToChat }) => {
  /**
   * An array of options to display in the menu.
   */
  const options = [
    {
      name: "Define Strategy",
      options: [
        "Goal Setting",
        "Strategic Initiatives",
        "Business Plan Outline",
      ],
    },
    {
      name: "Marketing Research",
      options: ["Customer Profiles", "Industry Trends"],
    },
    {
      name: "Risk Assessment",
      options: ["SWOT Analysis", "Risk Register", "Risk Score"],
    },
  ];

  return (
    <div className={styles.OptionMenu}>
      <div>
        {options.map((option, index) => {
          return (
            <ul key={index}>
              <h1>{option.name}</h1>
              {option.options.map((option, index) => {
                return (
                  <li
                    onClick={() => {
                      addMessageToChat(option);
                    }}
                    key={index}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default OptionMenu;
