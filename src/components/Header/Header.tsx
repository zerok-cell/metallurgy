import { FC } from "react";
import { DataNav } from "./header.types";
import { HeaderStyle } from "@/styledComponents/header.stl";
const Logotype = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 128 128">
      <path
        fill="#7EBAE4"
        d="M50.732 43.771L20.525 96.428l-7.052-12.033 8.14-14.103-16.167-.042L2 64.237l3.519-6.15 23.013.073 8.27-14.352 13.93-.037zm2.318 42.094l60.409.003-6.827 12.164-16.205-.045 8.047 14.115-3.45 6.01-7.05.008-11.445-20.097-16.483-.034-6.996-12.124zm35.16-23.074l-30.202-52.66L71.888 10l8.063 14.148 8.12-14.072 6.897.002 3.532 6.143-11.57 20.024 8.213 14.386-6.933 12.16z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="#5277C3"
        d="M39.831 65.463l30.202 52.66-13.88.131-8.063-14.148-8.12 14.072-6.897-.002-3.532-6.143 11.57-20.024-8.213-14.386 6.933-12.16zm35.08-23.207l-60.409-.003L21.33 30.09l16.204.045-8.047-14.115 3.45-6.01 7.051-.01 11.444 20.097 16.484.034 6.996 12.124zm2.357 42.216l30.207-52.658 7.052 12.034-8.141 14.102 16.168.043L126 64.006l-3.519 6.15-23.013-.073-8.27 14.352-13.93.037z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

const Header: FC<{ data: DataNav[] }> = ({ data }) => {
  return (
    <>
      <HeaderStyle className="header header--flex">
        <Logotype />
        {data.map((element) => (
          <a
            href={element.link ? element.link : "/"}
            className="header__text header__text--nunito"
          >
            {element.text}
          </a>
        ))}
      </HeaderStyle>
    </>
  );
};

export default Header;
