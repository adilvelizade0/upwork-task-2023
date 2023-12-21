import React, { FC } from "react";

interface ICasualButtonSvg {
  className?: string;
}

const CasualButtonSvg: FC<ICasualButtonSvg> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M7.99992 11.9999C10.7613 12.0229 13.0624 9.38661 13.0401 6.53624C13.0178 3.68587 10.7613 1.35655 7.99992 1.33355C5.23859 1.31054 3.01815 3.60258 3.04043 6.45294C3.06271 9.30331 5.23859 11.9769 7.99992 11.9999Z"
      stroke="#131923"
      strokeLinecap="round"
    />
    <path
      d="M10.3333 6C10.3245 4.90427 9.42904 4.00884 8.33331 4"
      stroke="#131923"
      strokeLinecap="round"
    />
    <path
      d="M8 13.5668C8.21413 13.5668 8.32119 13.5668 8.39554 13.5521C8.83106 13.4665 9.0961 13.0371 8.9674 12.6256C8.94543 12.5553 8.89464 12.4641 8.79307 12.2817M8 13.5668C7.78587 13.5668 7.67881 13.5668 7.60446 13.5521C7.16894 13.4665 6.9039 13.0371 7.0326 12.6256C7.05457 12.5553 7.10536 12.4641 7.20693 12.2817M8 13.5668V15"
      stroke="#131923"
      strokeLinecap="round"
    />
  </svg>
);
export default CasualButtonSvg;
