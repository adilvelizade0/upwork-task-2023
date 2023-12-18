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
