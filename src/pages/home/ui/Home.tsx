import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useGetNewReleasesQuery } from 'src/shared/api/spotify-api';
import { INewReleases } from '../model/types/albums-schema';

const Home: FC = () => {
  const { t } = useTranslation();
  const [newRel, setNewRel] = useState<INewReleases>();
  console.log(localStorage.getItem("token"));


  const { isLoading, isError, data, error } = useGetNewReleasesQuery({});

  useEffect(() => {
    if (isError) {
      console.log(error);
    } else {
      setNewRel(data), console.log(data); 
    }
  }, [error, isError, data])

  if (isLoading) {
    return <h1>Loading...</h1>
  }



  return (
    <div className='bg-[#333333] routeHeight p-3'>
      <div>
        <p className='text-white text-[20px] font-bold'>{t("popular_playlists")}</p>
        <section className='grid grid-cols-5 auto-rows-auto gap-5'>
          {newRel?.albums.items.map((item, index) => <article key={index} className="flex flex-col gap-y-3 rounded-md bg-[#333333] hover:bg-[#2d2b2b] active:bg-[#181818] p-2 cursor-pointer transition-colors" title={t("go_to_playlist")}>
            <div>
              <img src={item.images[0].url} alt="Error!" />
            </div>
            <div>
              <h1 className="text-lg text-white">{item.name}</h1>
              <p className="text-[#B3B3B3]">Release date: {item.release_date}</p>
              <p className="text-[#B3B3B3]">Total tracks: {item.total_tracks}</p>
            </div>
          </article>)}
        </section>
      </div>
    </div>
  )
}

export { Home };