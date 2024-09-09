import './styles/App.css';
import RouterApp from './providers/router/ui/RouterApp';
import { NavBar } from 'src/widgets/navbar';
import useTokens from 'src/shared/hooks/useTokens';
import { useTranslation } from 'react-i18next';

function App() {
  useTokens();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <div className='w-[20%]'>
          <NavBar />
        </div>
        <div className='w-[90%] p-4'>
          <RouterApp />
        </div>
      </div>
      <div className='flex p-3 items-center'>
        <p className='text-white'>{t("null_player")}</p>
      </div>
    </div>
  )
}

export default App;