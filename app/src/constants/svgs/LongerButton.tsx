import React, { FC } from "react";

interface ILongerButton {
  className?: string;
}
const LongerButton: FC<ILongerButton> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <g clipPath="url(#clip0_1130_5926)">
      <path
        d="M6 9.99996L1.33333 14.6666M1.33333 14.6666H5.2381M1.33333 14.6666V10.7619"
        stroke="#131923"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.00004L14.6667 1.33337M14.6667 1.33337H10.7619M14.6667 1.33337V5.23814"
        stroke="#131923"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1130_5926">
        <rect width="16" height="16" rx="3.33333" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LongerButton;
