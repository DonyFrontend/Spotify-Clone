import { FC } from "react";
import { IButton } from "../types/buttonData";

const Button: FC<IButton> = (props) => {
  const {bgColor, borderRadius, paddingX, paddingY, text, textSize, textBold} = props;

  return <button className={`px-[${paddingX}px] py-[${paddingY}px] font-${textBold} text-[${textSize}px border rounded-[${borderRadius}px] bg-[${bgColor}]`}>{text}</button>
}

export default Button;