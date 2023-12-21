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
import ShorterButtonSvg from "@/app/src/constants/svgs/ShorterButtonSvg";
import LongerButtonSvg from "@/app/src/constants/svgs/LongerButtonSvg";
import SimplerButtonSvg from "@/app/src/constants/svgs/SimplerButtonSvg";
import CasualButtonSvg from "@/app/src/constants/svgs/CasualButtonSvg";
import ProfessionalButtonSvg from "@/app/src/constants/svgs/ProfessionalButtonSvg";

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
  /**
   * Handles the click event of an action menu option.
   * @param type - The type of modification to apply to the response.
   * @returns void
   */
  const onClickActionMenu = (type: string) => {
    addOptionToChat && addOptionToChat(type, id);
    close();
  };

  /**
   * An array of options to display in the action menu.
   */
  const actionMenuOptions = [
    {
      name: "Shorter",
      icon: <ShorterButtonSvg />,
      onClick: () => onClickActionMenu("shorter"),
    },
    {
      name: "Longer",
      icon: <LongerButtonSvg />,
      onClick: () => onClickActionMenu("longer"),
    },
    {
      name: "Simpler",
      icon: <SimplerButtonSvg />,
      onClick: () => onClickActionMenu("simpler"),
    },
    {
      name: "Casual",
      icon: <CasualButtonSvg />,
      onClick: () => onClickActionMenu("casual"),
    },
    {
      name: "Professional",
      icon: <ProfessionalButtonSvg />,
      onClick: () => onClickActionMenu("professional"),
    },
  ];

  return (
    <div className={styles.ActionMenu}>
      <span>Modify:</span>
      <ul>
        {actionMenuOptions.map((option, index) => {
          return (
            <li key={index} onClick={option.onClick}>
              {option.icon} {option.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActionMenu;
