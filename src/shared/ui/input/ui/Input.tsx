import { FC } from "react";
import { IInput } from "../types/InputData";

const Input: FC<IInput> = (props) => {
  const {placeholder, text, type, borderColor, htmlFor} = props; 
  const isBorderColor = borderColor ? `border-[${borderColor}]` : 'border-[#6A6A6A]'
  
  return <label htmlFor={htmlFor} className="mr-[230px] mb-4 w-full flex flex-col justify-start gap-y-2">
    {text && <p className="font-bold">{text}</p>}
    <input type={type} placeholder={placeholder} className={`min-w-full border p-3 ${isBorderColor} rounded-[4px]`} />
  </label>
}

export default Input;