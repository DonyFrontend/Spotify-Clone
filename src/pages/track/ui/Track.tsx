import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getTrack } from "../model/service/getTrack.service";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { convertMillisecondsToMinutes } from "src/pages/album/model/const/convert";

const Track = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { data, isLoading, error } = useAppSelector(state => state.track);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const time = convertMillisecondsToMinutes(data.duration_ms);

    useEffect(() => {
        dispatch(getTrack({ id: params.id }))
    }, [dispatch, params])

    if (isLoading) {
        return <h1 className="text-white">Loading...</h1>
    } else if (error != null) return <h1>error!</h1>

    console.log(data);


    return (
        <div className="routeHeight relative bg-[#333333]">
            <div className="w-full h-[43svh] text-white relative">
                <img src={data.album?.images[0].url} alt="Error!" className="w-full h-[43svh] object-cover overflow-hidden object-center" />
                <p className="absolute top-3 left-5 text-under-outline text-[19px]">{data.type}</p>
                <p className="absolute bottom-[50px] left-5 outline-1 text-outline font-extrabold text-[60px]">{data.name}</p>
                <div className="absolute flex gap-x-2 bottom-2 left-5 text-under-outline text-[19px]">
                    {data.artists.map((item, index) => <p key={index} className="hover:underline cursor-pointer" onClick={() => navigate(`/artist/${item.id}`)}>{item.name}</p>)}
                    <p>| <span className="hover:underline cursor-pointer" onClick={() => navigate(`/album/${data.album?.id}`)}>{data.album?.name}</span></p>
                    <p>| {time.minutes}:{time.seconds}</p>
                </div>
            </div>

            <div className="p-3 flex flex-col gap-y-3 text-white">
                <p className="text-[18px]">{t("track_popularity")} {data.popularity}%</p>
                <p>P.S: {t("track_popularity_desc")}</p>
                <br />
            </div>

            <button onClick={() => navigate(-1)} className="text-white font-medium absolute bottom-2 pl-3 text-[20px] cursor-pointer">{t("go_to_back")}</button>
        </div>
    )
}

export default Track;