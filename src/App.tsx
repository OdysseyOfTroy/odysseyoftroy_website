import './App.css';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import portrait from './assets/portrait.jpg';
import HomeCard from './components/base components/home-card';
import IntroductionCard from './components/introduction-card';

export default function App() {
  return <div className='min-h-screen sm:px-4 sm:py-4 flex flex-col sm:flex-row justify-evenly'>
    <img className='mt-4 sm:mt-0 w-40 h-40 sm:h-[42rem] sm:w-[42rem] self-center border-2 border-slate-900 rounded-full shadow-lg shadow-[#660086] justify-self-center' src={portrait} />
    <div className='flex-col flex self-center'>
      <IntroductionCard/>
    </div>
  </div>
}
