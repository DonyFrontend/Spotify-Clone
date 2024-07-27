import { Link, useMatch } from "react-router-dom";
import { FC } from "react"
import { ICustomLink } from "./model/types/CustomLink";

const CustomLink: FC<ICustomLink> = (props) => {
  const {to, activeImage, image, text} = props
  const match = useMatch(to);

  return (
    <Link to={to} className={`flex gap-x-[16px] py-2 ${match ? 'text-white' : 'text-[#b3b3b3]'}`}>
      <img className="w-[25px] h-[25.89]" src={match ? activeImage ? activeImage : image : image} alt="Error!" />
      <p className="navText">{text}</p>
    </Link>
  )
}

export default CustomLink;