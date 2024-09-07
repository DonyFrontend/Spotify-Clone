import { AlbumTrackSchema } from "../model/types/album-schema"
import { convertMillisecondsToMinutes } from "../model/const/convert";
import { useNavigate } from "react-router";

const Tracks = (data: AlbumTrackSchema) => {
    const time = convertMillisecondsToMinutes(data.duration_ms);
    const navigate = useNavigate();

    return (
        <div className="text-white cursor-pointer flex justify-between">
            <div className="flex gap-x-3 items-center w-[45%]">
                <div className="w-[4%]"><p>{data.track_number}</p></div>
                <div>
                    <p className="text-[19px] hover:underline">{data.name}</p>
                    {data.artists.map((item, index) => <p key={index} className="text-[#c6c2c2] hover:underline" onClick={() => navigate(`/artist/${item.id}`)}>{item.name}</p> )}
                </div>
            </div>
            <div className="flex items-center gap-x-3 justify-end w-[45%]">
                <p>{time.minutes}:{time.seconds}</p>
            </div>
        </div>
    )
}

export default Tracks;