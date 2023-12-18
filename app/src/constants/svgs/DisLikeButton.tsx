import React, { FC } from "react";

interface IDisLikeProps {
  fill?: string;
}

const DisLike: FC<IDisLikeProps> = ({ fill = "#242625" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M21.9127 12.2191L21.1736 12.3469L21.9127 12.2191ZM21.2071 8.13935L20.4681 8.26715L21.2071 8.13935ZM7.87527 3.92723L7.12806 3.86262L7.87527 3.92723ZM7.06311 13.3199L7.81032 13.3845L7.06311 13.3199ZM14.9325 19.1829L15.6726 19.0616V19.0616L14.9325 19.1829ZM14.2698 15.1383L15.0099 15.0171V15.0171L14.2698 15.1383ZM7.63564 14.7268L7.14605 15.295H7.14605L7.63564 14.7268ZM9.07438 15.9666L9.56397 15.3984H9.56397L9.07438 15.9666ZM11.4556 19.6206L10.7296 19.8089L11.4556 19.6206ZM11.9313 21.4544L12.6572 21.2661V21.2661L11.9313 21.4544ZM13.6051 22.3399L13.3757 21.6259L13.3757 21.6259L13.6051 22.3399ZM13.7501 22.2934L13.9795 23.0074L13.9795 23.0074L13.7501 22.2934ZM10.7994 17.9417L11.461 17.5883V17.5883L10.7994 17.9417ZM14.8422 21.1568L14.1162 20.9685V20.9685L14.8422 21.1568ZM12.6117 22.2719L12.2861 22.9476V22.9476L12.6117 22.2719ZM4.9091 2.93358L4.16189 2.86897L4.9091 2.93358ZM3.9375 14.1701L4.68471 14.2347C4.65011 14.6349 4.30643 14.9367 3.90517 14.9194C3.5039 14.9021 3.1875 14.5717 3.1875 14.1701H3.9375ZM21.1736 12.3469L20.4681 8.26715L21.9462 8.01154L22.6517 12.0913L21.1736 12.3469ZM14.1825 3.1543H9.53385V1.6543H14.1825V3.1543ZM8.62248 3.99183L7.81032 13.3845L6.3159 13.2553L7.12806 3.86262L8.62248 3.99183ZM20.4681 8.26715C19.9613 5.33656 17.3188 3.1543 14.1825 3.1543V1.6543C18.0087 1.6543 21.3083 4.32325 21.9462 8.01154L20.4681 8.26715ZM14.1923 19.3041L13.5296 15.2596L15.0099 15.0171L15.6726 19.0616L14.1923 19.3041ZM8.12523 14.1587L9.56397 15.3984L8.58479 16.5348L7.14605 15.295L8.12523 14.1587ZM12.1815 19.4322L12.6572 21.2661L11.2053 21.6427L10.7296 19.8089L12.1815 19.4322ZM13.3757 21.6259L13.5207 21.5793L13.9795 23.0074L13.8345 23.054L13.3757 21.6259ZM11.461 17.5883C11.7729 18.1723 12.0152 18.7909 12.1815 19.4322L10.7296 19.8089C10.5932 19.2832 10.3945 18.7754 10.1379 18.2951L11.461 17.5883ZM13.5207 21.5793C13.8271 21.4809 14.0447 21.2442 14.1162 20.9685L15.5682 21.3451C15.3627 22.1371 14.7565 22.7578 13.9795 23.0074L13.5207 21.5793ZM12.6572 21.2661C12.6923 21.4011 12.7898 21.5252 12.9373 21.5963L12.2861 22.9476C11.7541 22.6912 11.3545 22.218 11.2053 21.6427L12.6572 21.2661ZM12.9373 21.5963C13.072 21.6612 13.2306 21.6725 13.3757 21.6259L13.8345 23.054C13.3248 23.2178 12.7687 23.1801 12.2861 22.9476L12.9373 21.5963ZM15.0912 13.4201H20.2723V14.9201H15.0912V13.4201ZM5.65631 2.99819L4.68471 14.2347L3.19029 14.1055L4.16189 2.86897L5.65631 2.99819ZM4.6875 2.89156V14.1701H3.1875V2.89156H4.6875ZM4.16189 2.86897C4.1487 3.02151 4.26896 3.1543 4.42421 3.1543V1.6543C5.15018 1.6543 5.71872 2.27639 5.65631 2.99819L4.16189 2.86897ZM15.6726 19.0616C15.7971 19.8217 15.7616 20.5995 15.5682 21.3451L14.1162 20.9685C14.2572 20.4251 14.2831 19.8582 14.1923 19.3041L15.6726 19.0616ZM9.53385 3.1543C9.05994 3.1543 8.66351 3.51732 8.62248 3.99183L7.12806 3.86262C7.23602 2.61405 8.2802 1.6543 9.53385 1.6543V3.1543ZM9.56397 15.3984C10.2438 15.9843 10.9767 16.6816 11.461 17.5883L10.1379 18.2951C9.79154 17.6466 9.24 17.0994 8.58479 16.5348L9.56397 15.3984ZM22.6517 12.0913C22.907 13.5678 21.7716 14.9201 20.2723 14.9201V13.4201C20.8389 13.4201 21.2707 12.9084 21.1736 12.3469L22.6517 12.0913ZM4.42421 3.1543C4.57042 3.1543 4.6875 3.03586 4.6875 2.89156H3.1875C3.1875 2.20904 3.74039 1.6543 4.42421 1.6543V3.1543ZM13.5296 15.2596C13.3719 14.2967 14.1141 13.4201 15.0912 13.4201V14.9201C15.0413 14.9201 15.0014 14.9653 15.0099 15.0171L13.5296 15.2596ZM7.81032 13.3845C7.7849 13.6785 7.90225 13.9665 8.12523 14.1587L7.14605 15.295C6.55772 14.788 6.24899 14.029 6.3159 13.2553L7.81032 13.3845Z"
      fill={fill}
    />
  </svg>
);

export default DisLike;
