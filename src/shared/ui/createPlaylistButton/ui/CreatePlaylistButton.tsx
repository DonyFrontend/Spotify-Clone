import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CreatePlaylist from 'src/shared/assets/icons/navbaricons/CreatePlaylist.svg';

const CreatePlaylistButton: FC = () => {
    const {t} = useTranslation();

    return (
        <div className={`flex gap-x-[16px] py-2 cursor-pointer`}>
            <img className="w-[25px] h-[25.89]" src={CreatePlaylist} alt="Error!" />
            <p className="text-[18px] font-bold text-[#b3b3b3]">{t("create_playlist")}</p>
        </div>
    )
}

export default CreatePlaylistButton;
