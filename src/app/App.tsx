import './styles/App.css';
import RouterApp from './providers/router/ui/RouterApp';
import { NavBar } from 'src/widgets/navbar';
import useTokens from 'src/shared/hooks/useTokens';

function App() {
  useTokens();
  const isToken = localStorage.getItem("bearerAccessToken");

  if (isToken == null) {
    return <h1>Loading</h1>
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <div className='w-[20%]'>
          <NavBar />
        </div>
        <div className='w-[80%] p-4'>
          <RouterApp />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App;