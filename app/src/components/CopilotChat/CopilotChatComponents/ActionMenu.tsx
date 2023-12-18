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
