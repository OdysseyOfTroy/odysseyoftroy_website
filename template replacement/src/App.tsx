import portrait from './assets/portrait.jpg';
import IntroductionCard from './components/introduction-card';

export default function App() {
  return <div className='min-h-screen sm:px-4 sm:py-4 flex flex-col sm:flex-row justify-evenly'>
    <img className='mt-4 sm:mt-0 w-40 h-40 sm:h-[42rem] sm:w-[42rem] self-center border-2 border-slate-900 rounded-full shadow-lg shadow-purple-odyssey justify-self-center' src={portrait} />
    <div className='flex-col flex self-center'>
      <IntroductionCard/>
    </div>
    <div className='min-h-screen'> 
    <h1 className='text-white text-5xl pl-8 pt-8 underline underline-offset-4 decoration-[#660086]'>Previous Work</h1>
      <div className='bg-white mt-4 mx-4 rounded-3xl px-4 flex flex-col'>
        <div>
          <h2 className='pt-4 text-4xl'>Coreblue</h2>
          <p>stdsadnaskddlkfbsakl dlksahfklsdfbsaklk dklsbfksdbfdsjda lshdklsabdkasdbasib ioshdliasbdaslkdbas</p>
        </div>
        <div className='flex pb-4'>
          <div className='bg-black flex-1 rounded-3xl'>
            <h3 className='text-white'>BK</h3>
          </div>
          <div className='w-4'/>
          <div className='bg-black flex-1 rounded-3xl'>
            <h3 className='text-white'>Executive nexus</h3>
          </div>
        </div>
      </div>
  </div>  
  </div>
  
}
