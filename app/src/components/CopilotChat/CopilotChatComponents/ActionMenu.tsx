/**
 * ActionMenu Component
 *
 * Description:
 * The `ActionMenu` component represents a menu with options to modify the tone or style
 * of the ChatGPT response. It provides a list of buttons, each corresponding to a different
 * type of modification (e.g., Shorter, Longer, Simpler, Casual, Professional). Clicking on
 * an option invokes the `addOptionToChat` callback and closes the menu.
 */

import React, { FC } from "react";
import styles from "../copilotChat.module.scss";
import ShorterButton from "@/app/src/constants/svgs/ShorterButton";
import LongerButton from "@/app/src/constants/svgs/LongerButton";
import SimplerButton from "@/app/src/constants/svgs/SimplerButton";
import CasualButton from "@/app/src/constants/svgs/CasualButton";
import ProfessionalButton from "@/app/src/constants/svgs/ProfessionalButton";

interface IActionMenu {
  /**
   * Function to close the action menu.
   */
  close: () => void;

  /**
   * Function to handle adding an option to the chat.
   * @param option - The selected option.
   * @param id - The ID of the message to replace with the option.
   */
  addOptionToChat?: (option: string, id) => void;

  /**
   * The unique identifier of the message.
   */
  id: string;
}

/**
 * ActionMenu component responsible for rendering a menu of modification options.
 * @param close - Function to close the action menu.
 * @param addOptionToChat - Function to handle adding an option to the chat.
 * @param id - The unique identifier of the message.
 * @returns The ActionMenu component.
 */
const ActionMenu: FC<IActionMenu> = ({ close, addOptionToChat, id }) => {
  return (
    <div className={styles.ActionMenu}>
      <span>Modify:</span>
      <ul>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("shorter", id);
            close();
          }}
        >
          <ShorterButton /> Shorter
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("longer", id);
            close();
          }}
        >
          <LongerButton /> Longer
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("simpler", id);
            close();
          }}
        >
          <SimplerButton /> Simpler
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("casual", id);
            close();
          }}
        >
          <CasualButton /> Casual
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("professional", id);
            close();
          }}
        >
          <ProfessionalButton /> Professional
        </li>
      </ul>
    </div>
  );
};

export default ActionMenu;
