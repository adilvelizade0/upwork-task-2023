import React, { FC } from "react";

interface ILikeButtonSvg {
  className?: string;
}
const LikeButtonSvg: FC<ILikeButtonSvg> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 25 25"
    fill="none"
    className={className}
  >
    <path
      d="M21.9127 12.5895L21.1736 12.4617L21.9127 12.5895ZM21.2071 16.6692L20.4681 16.5414L21.2071 16.6692ZM7.87527 20.8814L7.12806 20.946L7.87527 20.8814ZM7.06311 11.4887L7.81032 11.4241L7.06311 11.4887ZM14.9325 5.62572L15.6726 5.74698V5.74698L14.9325 5.62572ZM14.2698 9.67028L15.0099 9.79154V9.79154L14.2698 9.67028ZM7.63564 10.0818L7.14605 9.51363H7.14605L7.63564 10.0818ZM9.07438 8.84199L9.56397 9.41015H9.56397L9.07438 8.84199ZM11.4556 5.18804L10.7296 4.99972L11.4556 5.18804ZM11.9313 3.35419L12.6572 3.54251V3.5425L11.9313 3.35419ZM13.6051 2.46865L13.3757 3.18271L13.3757 3.18271L13.6051 2.46865ZM13.7501 2.51522L13.9795 1.80116L13.9795 1.80116L13.7501 2.51522ZM10.7994 6.86691L11.461 7.22029V7.22029L10.7994 6.86691ZM14.8422 3.65182L14.1162 3.84014V3.84014L14.8422 3.65182ZM12.6117 2.53669L12.2861 1.86104V1.86104L12.6117 2.53669ZM4.9091 21.875L4.16189 21.9396L4.9091 21.875ZM3.9375 10.6385L4.68471 10.5739C4.65011 10.1737 4.30643 9.87188 3.90517 9.8892C3.5039 9.90651 3.1875 10.2369 3.1875 10.6385H3.9375ZM21.1736 12.4617L20.4681 16.5414L21.9462 16.7971L22.6517 12.7173L21.1736 12.4617ZM14.1825 21.6543H9.53385V23.1543H14.1825V21.6543ZM8.62248 20.8168L7.81032 11.4241L6.3159 11.5533L7.12806 20.946L8.62248 20.8168ZM20.4681 16.5414C19.9613 19.472 17.3188 21.6543 14.1825 21.6543V23.1543C18.0087 23.1543 21.3083 20.4853 21.9462 16.7971L20.4681 16.5414ZM14.1923 5.50445L13.5296 9.54901L15.0099 9.79154L15.6726 5.74698L14.1923 5.50445ZM8.12523 10.6499L9.56397 9.41015L8.58479 8.27384L7.14605 9.51363L8.12523 10.6499ZM12.1815 5.37636L12.6572 3.54251L11.2053 3.16587L10.7296 4.99972L12.1815 5.37636ZM13.3757 3.18271L13.5207 3.22928L13.9795 1.80116L13.8345 1.75459L13.3757 3.18271ZM11.461 7.22029C11.7729 6.63627 12.0152 6.01769 12.1815 5.37636L10.7296 4.99972C10.5932 5.52537 10.3945 6.03322 10.1379 6.51354L11.461 7.22029ZM13.5207 3.22928C13.8271 3.32772 14.0447 3.56439 14.1162 3.84014L15.5682 3.4635C15.3627 2.67149 14.7565 2.05078 13.9795 1.80116L13.5207 3.22928ZM12.6572 3.5425C12.6923 3.4075 12.7898 3.28343 12.9373 3.21234L12.2861 1.86104C11.7541 2.11739 11.3545 2.59056 11.2053 3.16587L12.6572 3.5425ZM12.9373 3.21234C13.072 3.14741 13.2306 3.13611 13.3757 3.18271L13.8345 1.75459C13.3248 1.59084 12.7687 1.62849 12.2861 1.86104L12.9373 3.21234ZM15.0912 11.3885H20.2723V9.8885H15.0912V11.3885ZM5.65631 21.8104L4.68471 10.5739L3.19029 10.7031L4.16189 21.9396L5.65631 21.8104ZM4.6875 21.917V10.6385H3.1875V21.917H4.6875ZM4.16189 21.9396C4.1487 21.7871 4.26896 21.6543 4.42421 21.6543V23.1543C5.15018 23.1543 5.71872 22.5322 5.65631 21.8104L4.16189 21.9396ZM15.6726 5.74698C15.7971 4.98686 15.7616 4.20907 15.5682 3.4635L14.1162 3.84014C14.2572 4.38353 14.2831 4.95043 14.1923 5.50445L15.6726 5.74698ZM9.53385 21.6543C9.05994 21.6543 8.66351 21.2913 8.62248 20.8168L7.12806 20.946C7.23602 22.1945 8.2802 23.1543 9.53385 23.1543V21.6543ZM9.56397 9.41015C10.2438 8.8243 10.9767 8.12697 11.461 7.22029L10.1379 6.51354C9.79154 7.16197 9.24 7.70922 8.58479 8.27384L9.56397 9.41015ZM22.6517 12.7173C22.907 11.2408 21.7716 9.8885 20.2723 9.8885V11.3885C20.8389 11.3885 21.2707 11.9002 21.1736 12.4617L22.6517 12.7173ZM4.42421 21.6543C4.57042 21.6543 4.6875 21.7727 4.6875 21.917H3.1875C3.1875 22.5996 3.74039 23.1543 4.42421 23.1543V21.6543ZM13.5296 9.54901C13.3719 10.5119 14.1141 11.3885 15.0912 11.3885V9.8885C15.0413 9.8885 15.0014 9.8433 15.0099 9.79154L13.5296 9.54901ZM7.81032 11.4241C7.7849 11.1301 7.90225 10.8421 8.12523 10.6499L7.14605 9.51363C6.55772 10.0206 6.24899 10.7796 6.3159 11.5533L7.81032 11.4241Z"
      fill="#242625"
    />
  </svg>
);

export default LikeButtonSvg;