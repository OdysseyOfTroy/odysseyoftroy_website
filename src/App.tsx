import './App.css';
import Navbar from './components/Navbar';
import maintenanceLogo from './assets/maintenance.png';

function App() {
  return (
    <div className="bg-neutral-800 min-h-screen">
      <Navbar/>

      
      
      <div className='flex-col flex items-center mt-48'>
      <img className='h-20 w-20 animate-spin' src={maintenanceLogo}/>
      <a className='text-white mt-8'> This website is currently still being developed</a>
      </div>
    </div>
  );
}

export default App;
