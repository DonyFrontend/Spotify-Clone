import { useNavigate } from "react-router"
import { changeLength } from "src/shared/const/changeLength";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import { getGenres } from "../model/service/getCategories.service";

const Genres = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useAppSelector(state => state.categories);

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    if (isLoading) {
        return <h1 className="text-white p-3">Loading...</h1>
    } else if (error) return <h1>Error</h1>

    return (
        <div className="p-3 flex flex-col gap-y-2">
            <p className="text-white text-[20px] font-medium">{t("browse_all")}</p>
            <section className="grid grid-cols-4 auto-rows-auto gap-3">
                {data.categories.items.map((item, index) => <article onClick={() => navigate(`/category/${item.id}`)} key={index} className="flex flex-col gap-y-3 rounded-md bg-[#333333] hover:bg-[#2d2b2b] active:bg-[#181818] p-3 cursor-pointer transition-colors" title={t("go_to_genre")}>
                    <div>
                        <img src={item.icons[0].url} alt="Error!" />
                    </div>
                    <div>
                        <h1 className="text-lg text-white">{changeLength(item.name, 18, 18)}</h1>
                    </div>
                </article>)}
            </section>
        </div>
    )
}

export default Genres
