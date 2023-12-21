import React, { FC } from "react";

interface ISimplerButtonSvg {
  className?: string;
}

const SimplerButtonSvg: FC<ISimplerButtonSvg> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M13.3333 6.33337L2.66665 6.33337"
      stroke="#131923"
      strokeLinecap="round"
    />
    <path d="M9.05292 9.66663H2.66669" stroke="#131923" strokeLinecap="round" />
  </svg>
);
export default SimplerButtonSvg;
