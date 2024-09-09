import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getTrack } from "../model/service/getTrack.service";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";


const Track = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { data, isLoading, error } = useAppSelector(state => state.track);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTrack({ id: params.id }))
    }, [dispatch, params])

    if (isLoading) {
        return <h1 className="text-white">Loading...</h1>
    } else if (error != null) return <h1>error!</h1>


    return (
        <div className="routeHeight bg-[#333333]">
            <div className="w-full h-[43svh] text-white relative">
                <img src={data.album?.images[0].url} alt="Error!" className="w-full h-[43svh] object-cover overflow-hidden object-center" />
                <p className="absolute bottom-[130px] left-5 text-under-outline text-[19px]">{data.type}</p>
                <p className="absolute bottom-[50px] left-5 outline-1 text-outline font-extrabold text-[60px]">{data.name}</p>
                <div className="absolute flex gap-x-2 bottom-2 left-5 text-under-outline text-[19px]">
                    {data.artists.map((item, index) => <p key={index} className="hover:underline cursor-pointer" onClick={() => navigate(`/artist/${item.id}`)}>{item.name}</p>)}
                </div>
            </div>

                
        </div>
    )
}

export default Track;