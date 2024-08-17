import AppLogo from "src/shared/assets/icons/navbaricons/AppLogo.svg";
import activeHomeImage from 'src/shared/assets/icons/navbaricons/ActiveHomeIcon.svg'
import HomeImage from 'src/shared/assets/icons/navbaricons/HomeIcon.svg'
import activeSearchImage from 'src/shared/assets/icons/navbaricons/ActiveSearchIcon.svg'
import SearchImage from 'src/shared/assets/icons/navbaricons/SearchIcon.svg'
import activeLibraryImage from 'src/shared/assets/icons/navbaricons/ActiveLibraryIcon.svg'
import LibraryImage from 'src/shared/assets/icons/navbaricons/LibraryIcon.svg'
import LikedSongs from 'src/shared/assets/icons/navbaricons/LikedSongs.svg'
import LanguageIcon from 'src/shared/assets/icons/navbaricons/Language.svg'
import CustomLink from "src/shared/ui/link/CustomLink";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import CreatePlaylistButton from "src/shared/ui/createPlaylistButton/ui/CreatePlaylistButton";
import TranslateButton from "src/shared/ui/translateButton/ui/TranslateButton";
import { useNavigate } from "react-router";

const NavBar: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigation = [
    {
      to: '/',
      activeImage: activeHomeImage,
      image: HomeImage,
      text: t("home")
    },
    {
      to: 'search',
      activeImage: activeSearchImage,
      image: SearchImage,
      text: t("search")
    },
    {
      to: 'library',
      activeImage: activeLibraryImage,
      image: LibraryImage,
      text: t("library")
    }
  ]

  const likedSongs = [{
    to: 'likedSongs',
    image: LikedSongs,
    text: t("liked_songs")
  }]

  return (
    <nav className="p-4 h-[90svh] flex flex-col items-start justify-between">
      <div className="flex flex-col gap-y-12">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img src={AppLogo} alt="Error!" />
        </div>
        <div className="navBar">
          {navigation.map((item, index) => <CustomLink key={index} activeImage={item.activeImage} image={item.image} text={item.text} to={item.to} />)}
        </div>
        <div>
          <CreatePlaylistButton />
          {likedSongs.map((item, index) => <CustomLink key={index} image={item.image} to={item.to} text={item.text} />)}
        </div>
      </div>
      <div>
        <TranslateButton image={LanguageIcon} />
      </div>
    </nav>
  )
}

export default NavBar;