import { AlbumTrackSchema } from "../model/types/album-schema"
import { convertMillisecondsToMinutes } from "../model/const/convert";

const Tracks = (data: AlbumTrackSchema) => {
    const time = convertMillisecondsToMinutes(data.duration_ms);

    return (
        <div className="text-white flex justify-between">
            <div className="flex gap-x-3 items-center w-[45%]">
                <div className="w-[4%]"><p>{data.track_number}</p></div>
                <div>
                    <p className="text-[19px]">{data.name}</p>
                    <p className="text-[#c6c2c2]">{data.artists[0].name}</p>
                </div>
            </div>
            <div className="flex items-center gap-x-3 justify-end w-[45%]">
                <p>{time.minutes}:{time.seconds}</p>
            </div>
        </div>
    )
}

export default Tracks;