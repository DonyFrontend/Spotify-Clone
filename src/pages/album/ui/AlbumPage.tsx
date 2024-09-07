import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getAlbumTC } from "../model/service/getAlbum.service";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { useTranslation } from "react-i18next";
import playButton from 'src/shared/assets/images/playButton.svg';
import Tracks from "./Tracks";
import copy from "copy-to-clipboard";

const AlbumPage: FC = () => {
  const { t } = useTranslation();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(state => state.album)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAlbumTC({ id: params.id }))
  }, [params, dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error != null) {
    console.log(error);
  } else console.log(data);

  function copyLink(link: string) {
    copy(link);
    alert(t("link_copied"));
  }

  return (
    <div className="bg-[#333333] routeHeight p-3 flex flex-col gap-y-3">
      <div className="text-white font-medium text-[20px] cursor-pointer" onClick={() => navigate(-1)}>{t("go_to_back")}</div>
      <header className="flex gap-x-6 items-end h-[27svh]">
        <img className="rounded-[10px]" src={data.images[1].url} height={200} width={200} alt="Error!" />
        <div className="text-white">
          <p className="text-[18px]">{data.album_type}</p>
          <p className="text-[35px] font-bold">{data.name}</p>
          <div className="flex gap-x-2 items-center">{data.artists.map((item, index) => <p title={t("go_to_artist")} onClick={() => navigate(`/artist/${item.id}`)} className="text-[18px] hover:underline cursor-pointer" key={index}>{item.name} </p>)} {data.total_tracks} {t("tracks")}</div>
        </div>
      </header>
      <hr className="pb-3" />
      <div className="flex justify-between gap-x-3 items-center">
        <img src={playButton} alt="Error!" className="cursor-pointer" />
        <p onClick={() => copyLink(data.external_urls.spotify)} className="text-white text-[20px] font-normal cursor-pointer">{t("copy_link")}</p>
      </div>
      <div className="w-full flex justify-center pb-3">
        <div className="flex flex-col gap-y-5 w-[97%]">
          {data.tracks.items.map((item, index) => <Tracks external_urls={item.external_urls} key={index} duration_ms={item.duration_ms} href={item.href} name={item.name} type={item.type} artists={item.artists} disc_number={item.disc_number} track_number={item.track_number} />)}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-white font-medium">{t("release_date")}: {data.release_date}</p>
        <div className="text-white flex flex-col">{data.copyrights.map((item, index) => <p key={index}>{item.text}</p>)}</div>
      </div>
    </div>
  )
}

export default AlbumPage;