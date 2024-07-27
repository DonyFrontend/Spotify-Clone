import './styles/App.css';
import RouterApp from './providers/router/ui/RouterApp';
import { NavBar } from 'src/widgets/navbar';

function App() {

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <div className='w-[25%]'>
          <NavBar />
        </div>
        <div className='w-[75%]'>
          <RouterApp />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App;