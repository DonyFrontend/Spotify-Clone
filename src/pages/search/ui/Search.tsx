import { useTranslation } from "react-i18next";
import Genres from "./Genres";
import { useState } from "react";
import { searchTC } from "../model/service/searchTC.service";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/useReduxHooks";
import SearchData from "./SearchData";

const Search = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState<string>('');
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.search);

  function searchData() {
    if (search == '') {
      alert('Заполните инпут!');
    } else dispatch(searchTC({ q: search, type }));
  }

  return (
    <div className="routeHeight flex flex-col gap-y-4 bg-[#333333]">
      <div className="w-[30%] flex flex-col gap-y-2">
        {/* <Input placeholder={t("want_to_listen")} type="input" /> */}
        <div className="flex">
          <input onChange={e => setSearch(e.target.value)} type="text" className="min-w-full border p-3 rounded-[4px]" placeholder={t("want_to_listen")} />
          <button className="text-white bg-[#1ED760] px-8 rounded-[4px] font-medium hover:bg-[#198940] active:bg-[#1a6936]" onClick={searchData}>{t("find")}</button>
        </div>
        <div className="p-3 flex flex-col gap-y-3">
          <p className="text-white font-medium text-[17px]">{t("choose_type")}</p>
          <select name="categorySelect" onChange={e => setType(e.target.value)}>
            <option value="">{t("all")}</option>
            <option value="album">{t("album")}</option>
            <option value="artist">{t("artist")}</option>
            <option value="playlist">{t("playlist")}</option>
            <option value="track">{t("track")}</option>
            <option value="show">{t("show")}</option>
            <option value="episode">{t("episode")}</option>
            <option value="audiobook">{t("audiobook")}</option>
          </select>
        </div>
      </div>

      {search.length == 0 ? <Genres /> : Object.keys(data).length == 0 ? <h1>{t("press_type")}</h1> : <SearchData data={data} />}
    </div>
  )
}

export default Search;