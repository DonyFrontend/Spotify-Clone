import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getArtistTC } from "../model/service/getArtist.service";
import { useTranslation } from "react-i18next";

const Artist = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { data, isLoading, error } = useAppSelector(state => state.artist);
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getArtistTC({ id: params.id }))
    }, [dispatch, params])

    if (isLoading) {
        return <h1 className="text-white">Loading...</h1>
    } else if (error != null) console.log(error);
    else console.log(data);


    return (
        <div className="routeHeight bg-[#282828] relative">
            {/* <div style={{backgroundImage: `url(${data.images[0].url})`}} className={`w-full h-[38svh] bg-no-repeat`}>
            </div> */}
            <div className="w-full h-[43svh] relative text-yellow-400">
                <img src={data.images[0].url} alt="Error!" className="w-full h-[43svh] object-cover overflow-hidden object-center" />
                <p className="absolute bottom-[50px] left-5 font-extrabold text-[60px]">{data.name}</p>
                <p title={`${data.followers.total} ${t("followers")}`} className="absolute bottom-2 left-5 text-[19px]">{data.followers.total} {t("followers")}</p>
            </div>

            <div className="p-3 flex flex-col gap-y-3 text-white">
                <p className="text-[18px]">{t("popularity")} {data.popularity}%</p>
                <p>P.S: {t("popularity_desc")}</p>
                <br />
                <a href={data.external_urls.spotify} target="_blank" className="underline hover:text-blue-600 transition-colors">{t("artist_uri")}</a>
            </div>
            <div className="absolute bottom-14 pl-3 flex gap-x-4 items-center">
                <p className="text-[19px] font-medium text-white">{t("genres_of_artist")}</p>
                <div className="flex gap-x-2">{data.genres ? data.genres.map((item) => <em className="text-[18px] text-white">{item} / </em>) : t("nullable_genres")}</div>
            </div>
            <button onClick={() => navigate(-1)} className="text-white font-medium absolute bottom-2 pl-3 text-[20px] cursor-pointer">{t("go_to_back")}</button>
        </div>
    )
}

export default Artist;