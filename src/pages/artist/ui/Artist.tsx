import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getArtistTC } from "../model/service/getArtist.service";

const Artist = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const {data, isLoading, error} = useAppSelector(state => state.artist);

    useEffect(() => {
        dispatch(getArtistTC({id: params.id}))
    }, [dispatch, params])

    if (isLoading) {
        return <h1 className="text-white">Loading...</h1>
    } else if (error != null) console.log(error);
    else console.log(data);
    

    return (
        <div>
            <p className="text-white">sigma</p>
        </div>
    )
}

export default Artist;