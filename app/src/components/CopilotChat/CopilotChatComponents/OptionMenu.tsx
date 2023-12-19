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
  return (
    <div className={styles.OptionMenu}>
      <div>
        <ul>
          <h1>Define Strategy</h1>
          <li
            onClick={() => {
              addMessageToChat("Goal Setting");
            }}
          >
            Goal Setting
          </li>
          <li
            onClick={() => {
              addMessageToChat("Strategic Initiatives");
            }}
          >
            Strategic Initiatives
          </li>
          <li
            onClick={() => {
              addMessageToChat("Business Plan Outline");
            }}
          >
            Business Plan Outline
          </li>
        </ul>
        <ul>
          <h1>Marketing Research</h1>
          <li
            onClick={() => {
              addMessageToChat("Customer Profiles");
            }}
          >
            Customer Profiles
          </li>
          <li
            onClick={() => {
              addMessageToChat("Industry Trends");
            }}
          >
            Industry Trends
          </li>
        </ul>
        <ul>
          <h1>Risk Assessment</h1>
          <li
            onClick={() => {
              addMessageToChat("SWOT Analysis");
            }}
          >
            SWOT Analysis
          </li>
          <li
            onClick={() => {
              addMessageToChat("Risk Register");
            }}
          >
            Risk Register
          </li>
          <li
            onClick={() => {
              addMessageToChat("Risk Score");
            }}
          >
            Risk Score
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OptionMenu;
