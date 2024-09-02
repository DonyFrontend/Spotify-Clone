import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getAlbumTC } from "../model/service/getAlbum.service";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { useTranslation } from "react-i18next";

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



  return (
    <div className="bg-[#333333] routeHeight p-3 flex flex-col gap-y-3">
      <div className="text-white font-medium text-[20px] cursor-pointer" onClick={() => navigate(-1)}>{t("go_to_back")}</div>
      <header className="flex gap-x-6 items-end">
        <img className="rounded-[10px]" src={data.images[1].url} height={200} width={200} alt="Error!" />
        <div className="text-white">
          <p className="text-[18px]">{data.album_type}</p>
          <p className="text-[60px] font-bold">{data.name}</p>
          <div className="flex gap-x-2">{data.artists.map((item, index) => <p title={t("go_to_artist")} className="text-[18px] hover:underline cursor-pointer" key={index}>{item.name} | </p>)}</div>
        </div>
      </header>
    </div>
  )
}

export default AlbumPage;