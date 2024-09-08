import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useGetNewReleasesQuery } from 'src/shared/api/spotify-api';
import { INewRel} from '../model/types/newRel-schema';
import { changeLength } from 'src/shared/const/changeLength';
import { useNavigate } from 'react-router';

const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useGetNewReleasesQuery({});

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (isError == true) console.log(error);
  



  return (
    <div className='bg-[#333333] routeHeight p-3'>
      <div>
        <p className='text-white px-3 text-[20px] font-bold'>{t("popular_playlists")}</p>
        <section className='grid grid-cols-5 auto-rows-auto gap-3'>
          {data.albums.items.map((item: INewRel, index: number | string) => <article onClick={() => navigate(`/album/${item.id}`)} key={index} className="flex flex-col gap-y-3 rounded-md bg-[#333333] hover:bg-[#2d2b2b] active:bg-[#181818] p-3 cursor-pointer transition-colors" title={t("go_to_playlist")}>
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