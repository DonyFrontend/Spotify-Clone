import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useGetNewReleasesQuery } from 'src/shared/api/spotify-api';
import { INewReleases } from '../model/types/newRel-schema';
import { changeLength } from 'src/shared/const/changeLength';
import { useNavigate } from 'react-router';

const Home: FC = () => {
  const { t } = useTranslation();
  const [newRel, setNewRel] = useState<INewReleases>();
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useGetNewReleasesQuery({});

  useEffect(() => {
    if (isError) {
      // console.log(error);
    } else {
      setNewRel(data);
      console.log(data);
    }
  }, [error, isError, data])

  if (isLoading) {
    return <h1>Loading...</h1>
  }



  return (
    <div className='bg-[#333333] routeHeight p-3'>
      <div>
        <p className='text-white px-3 text-[20px] font-bold'>{t("popular_playlists")}</p>
        <section className='grid grid-cols-5 auto-rows-auto gap-3'>
          {newRel?.albums.items.map((item, index) => <article onClick={() => navigate(`/album/${item.id}`)} key={index} className="flex flex-col gap-y-3 rounded-md bg-[#333333] hover:bg-[#2d2b2b] active:bg-[#181818] p-3 cursor-pointer transition-colors" title={t("go_to_playlist")}>
            <div>
              <img src={item.images[0].url} alt="Error!" />
            </div>
            <div>
              <h1 className="text-lg text-white">{changeLength(item.name, 18, 18)}</h1>
              <p className="text-[#B3B3B3]">{t("release_date")}: {item.release_date}</p>
              <p className="text-[#B3B3B3]">{t("total_tracks")}: {item.total_tracks}</p>
            </div>
          </article>)}
        </section>
      </div>
    </div>
  )
}

export default Home;