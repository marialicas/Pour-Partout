import "./style.css";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  hasBreak: boolean;
  isBlack: boolean;
}

function Title({ children, hasBreak, isBlack }: TitleProps) {
  const nameClass = hasBreak ? "break title" : "title";
  nameClass.concat(isBlack ? " black" : " white");
  return <div className={nameClass}>{children}</div>;
}

export default Title;
