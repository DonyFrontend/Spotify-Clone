import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getPlaylist } from "../model/service/getPlaylist.service";
import { useTranslation } from "react-i18next";

const Playlist = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useAppSelector(state => state.playlist);
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        dispatch(getPlaylist({ id: params.id }));
    }, [dispatch, params])

    if (isLoading) {
        return <h1 className="text-white">Loading...</h1>
    } else if (error) return <h1 className="text-white">Error</h1>

    console.log(data);


    return (
        <div className="routeHeight bg-[#333333] p-3 flex flex-col gap-y-3">
            <button className="text-white font-medium text-[20px] cursor-pointer" onClick={() => navigate(-1)}>{t("go_to_back")}</button>
            <header className="flex gap-x-6 items-end h-[27svh]">
                <img className="rounded-[10px]" src={data.images[0].url} height={200} width={200} alt="Error!" />
                <div className="text-white">
                    <p className="text-[18px]">{data.type}</p>
                    <p className="text-[35px] font-bold">{data.name}</p>
                    <div><p className="text-[18px] ">{data.owner.display_name}</p></div>
                </div>
            </header>
        </div>
    )
}

export default Playlist;