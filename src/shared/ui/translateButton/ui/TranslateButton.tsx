import { FC } from "react";
import { ITranslateButton } from "../model/types/buttonType";
import { useTranslation } from "react-i18next";

const TranslateButton: FC<ITranslateButton> = (props) => {
  const {image} = props;
  const {i18n} = useTranslation();

  function handleChangeLanguage(lang: string): void {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="p-3 border-[#727272] border rounded-[500px] flex gap-x-2 px-4 py-2 items-center">
      <img src={image} alt="Error!" />
      <select onClick={e => handleChangeLanguage(e.currentTarget.value)} className="bg-black text-white text-lg cursor-pointer">
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

export default TranslateButton;