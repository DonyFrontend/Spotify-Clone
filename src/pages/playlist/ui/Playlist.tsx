import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getPlaylist } from "../model/service/getPlaylist.service";
import { useTranslation } from "react-i18next";
// import { convertTime } from "../model/const/convertTime";
import Tracks from "src/pages/album/ui/Tracks";

const Playlist = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useAppSelector(state => state.playlist);
    const navigate = useNavigate();
    const { t } = useTranslation();
    // type timeType = number | undefined;
    // const [allTime, setAllTime] = useState<{ hours?: timeType, minutes?: timeType }>();

    useEffect(() => {
        dispatch(getPlaylist({ id: params.id }))
            // .then(() => {
            //     let time = 0;
            //     data.tracks.items.forEach(i => {
            //         time += i.track.duration_ms;
            //     })
            //     const currentTime = convertTime(time);
            //     setAllTime(currentTime);
            // })
    }, [dispatch, params])

    if (isLoading) {
        return <h1 className="text-white">Loading...</h1>
    } else if (error) return <h1 className="text-white">Error</h1>

    return (
        <div className="routeHeight bg-[#333333] p-3 flex flex-col gap-y-3">
            <button className="text-white font-medium text-[20px] cursor-pointer" onClick={() => navigate(-1)}>{t("go_to_back")}</button>
            <header className="flex gap-x-6 items-end h-[27svh]">
                <img className="rounded-[10px]" src={data.images[0].url} height={200} width={200} alt="Error!" />
                <div className="text-white">
                    <p className="text-[18px]">{data.type}</p>
                    <div className="flex flex-col">
                        <p className="text-[35px] font-bold">{data.name}</p>
                        <p className="text-[18px]">{data.followers.total} {t("followers")}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-[18px] ">{data.owner.display_name} | </p>
                        <p className="text-[18px] ">{data.tracks.total} {t("tracks")}</p>
                        {/* <p className="text-[18px] ">
                            {allTime?.hours && t("approximately")} {allTime?.hours + " " + t("hours")} {allTime?.minutes + " " + t("minutes")}
                        </p> */}
                    </div>
                </div>
            </header>
            <hr className="pb-3" />
            <div className="w-full flex justify-center pb-3">
                <div className="flex flex-col gap-y-5 w-[97%]">
                    {data.tracks.items.map((item, index) => <Tracks id={item.track.id} key={index} duration_ms={item.track.duration_ms} href={item.track.href} name={item.track.name} type={item.track.type} artists={item.track.artists} track_number={index + 1} />)}
                </div>
            </div>
            <hr className="pb-3" />
            <p className="text-white text-[18px]">{data.description}</p>
        </div>
    )
}

export default Playlist;