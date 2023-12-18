import React, { FC } from "react";

interface IShorterButton {
  className?: string;
}
const ShorterButton: FC<IShorterButton> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 25 25"
    fill="none"
    className={className}
  >
    <path
      d="M2.9375 22.4043L9.9375 15.4043M9.9375 15.4043H4.08036M9.9375 15.4043V21.2614"
      stroke="#242625"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.9375 2.4043L15.9375 9.4043M15.9375 9.4043H21.7946M15.9375 9.4043V3.54715"
      stroke="#242625"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShorterButton;
