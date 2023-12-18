/**
 * ActionMenu Component
 *
 * Description:
 * The `ActionMenu` component represents a menu with options to modify the tone or style
 * of the ChatGPT response. It provides a list of buttons, each corresponding to a different
 * type of modification (e.g., Shorter, Longer, Simpler, Casual, Professional). Clicking on
 * an option invokes the `addOptionToChat` callback and closes the menu.
 *
 * Props:
 * - `close`: A callback function provided to close the menu, likely passed down from a Popup component.
 * - `addOptionToChat`: Optional callback function that is invoked when an option is selected. It takes
 *   a string representing the chosen option and the message ID.
 * - `id`: The unique identifier of the message that these options will modify.
 *
 * Behavior:
 * - The menu displays a list of tone or style modification options (as `<li>` elements).
 * - Each list item is associated with an option type, represented by a related SVG icon,
 *   and an option keyword (e.g., "shorter" or "simpler").
 * - Clicking on any option calls `addOptionToChat` with the corresponding keyword and message ID, then closes the menu.
 *
 * Child Components:
 * - `ShorterButton`, `LongerButton`, `SimplerButton`, `CasualButton`, `ProfessionalButton`:
 *   SVG components that represent the modification options visually.
 *
 * Styling:
 * - The component uses classes from `copilotChat.module.scss` for styling.
 * - Each list item is styled to contain an icon and text, spaced with a margin end (`me-2`) class.
 *
 * Usage:
 * ```jsx
 * const handleClose = () => {
 *   // Handle the closure of the menu, e.g., close a Popup
 * };
 *
 * const handleAddOptionToChat = (option, id) => {
 *   // Implement how the selected option should affect the chat message
 * };
 *
 * <ActionMenu
 *   close={handleClose}
 *   addOptionToChat={handleAddOptionToChat}
 *   id="msg-001"
 * />
 * ```
 */

import React, { FC } from "react";
import styles from "../copilotChat.module.scss";
import ShorterButton from "@/app/src/constants/svgs/ShorterButton";
import LongerButton from "@/app/src/constants/svgs/LongerButton";
import SimplerButton from "@/app/src/constants/svgs/SimplerButton";
import CasualButton from "@/app/src/constants/svgs/CasualButton";
import ProfessionalButton from "@/app/src/constants/svgs/ProfessionalButton";

interface IActionMenu {
  close: () => void;
  addOptionToChat?: (option: string, id) => void;
  id: string;
}

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
          className="flex items-center"
        >
          <ShorterButton className="me-2" /> Shorter
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("longer", id);
            close();
          }}
          className="flex items-center"
        >
          <LongerButton className="me-2" /> Longer
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("simpler", id);
            close();
          }}
          className="flex items-center"
        >
          <SimplerButton className="me-2" /> Simpler
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("casual", id);
            close();
          }}
          className="flex items-center"
        >
          <CasualButton className="me-2" /> Casual
        </li>
        <li
          onClick={() => {
            addOptionToChat && addOptionToChat("professional", id);
            close();
          }}
          className="flex items-center"
        >
          <ProfessionalButton className="me-2" /> Professional
        </li>
      </ul>
    </div>
  );
};

export default ActionMenu;
