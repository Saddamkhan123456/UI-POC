import React, { FC } from "react";

interface IIconProps {
  color?: string;
  className?: string;
  height?: number;
  kind: string | any;
  onClick?: () => void;
  size?: number;
  style?: any;
  width?: number;
  wrapperStyle?: any;
}

const Icon: React.FC<IIconProps> = ({
  color = "none",
  className,
  height,
  width,
  size,
  onClick,
  style,
  kind,
}) => {
  function renderIcon(kind: string) {
    switch (kind) {
      case "chevronDown":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            fill={color}
            viewBox="0 0 14 9"
          >
            <path
              d="M6.97766 8.22105C6.80431 8.22105 6.63579 8.18782 6.47207 8.12136C6.30836 8.0549 6.17835 7.95522 6.08205 7.82231L0.33282 2.21145C0.101695 1.96461 -0.00905239 1.66081 0.000577813 1.30004C0.010208 0.939278 0.130586 0.62598 0.36171 0.360153C0.650616 0.0943258 0.968413 -0.0243471 1.3151 0.00413441C1.66179 0.0326159 1.96032 0.160783 2.21071 0.388635L6.97766 5.08808L11.7735 0.388635C12.0239 0.141796 12.3321 0.0136282 12.698 0.00413441C13.0639 -0.00535942 13.3721 0.122808 13.6225 0.388635C13.8921 0.654463 14.0173 0.967759 13.9981 1.32852C13.9788 1.68929 13.844 1.9836 13.5936 2.21145L7.90216 7.82231C7.78659 7.95522 7.64696 8.0549 7.48324 8.12136C7.31953 8.18782 7.151 8.22105 6.97766 8.22105Z"
              fill="#898989"
            />
          </svg>
        );
      case "close":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            fill={color}
            viewBox="0 0 14 14"
          >
            <path
              d="M11.9226 2L2 12.0521"
              stroke="#B6B9BE"
              strokeWidth="2.6"
              strokeMiterlimit="3.3333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 2L11.9226 12.0521"
              stroke="#B6B9BE"
              strokeWidth="2.6"
              strokeMiterlimit="3.3333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "log0":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            className={className}
            fill={color}
            viewBox="0 0 72 53"
          >
            <path
              d="M68.8582 4.82733L2.4873 22.5712L18.8509 31.9651L21.7309 46.4472L30.8946 38.7495L44.5091 46.7081L68.8582 4.82733ZM49.7455 13.5688L20.4218 28.8338L11.7818 23.7455L49.7455 13.5688ZM23.9564 39.9237L22.3855 31.8346L51.7091 16.7001L29.4546 35.3573L23.9564 39.9237ZM33.6437 36.401L58.3855 15.5259L43.2 41.8808L33.6437 36.401Z"
              fill="url(#paint0_linear_320_989)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_320_989"
                x1="17.3346"
                y1="43.4417"
                x2="52.32"
                y2="-6.69066"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.15" stopColor="#10B857" />
                <stop offset="0.2105" stopColor="#11B868" />
                <stop offset="0.3989" stopColor="#13B898" />
                <stop offset="0.5779" stopColor="#15B7BE" />
                <stop offset="0.7428" stopColor="#17B7D9" />
                <stop offset="0.8886" stopColor="#18B7E9" />
                <stop offset="1" stopColor="#18B7EF" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return "";
    }
  }

  return <>{renderIcon(kind)}</>;
};

export default Icon;
