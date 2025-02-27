import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import portrait from '../assets/portrait.jpg';
import OdysseyButton from './odyssey_button';

export default function IntroductionScreen() {
  return (
    <div className='min-h-screen sm:px-4 sm:py-4 flex flex-col sm:flex-row sm:justify-evenly'>
      <img className='mt-6 sm:mt-0 w-40 h-40 sm:h-[42rem] sm:w-[42rem] self-center border-2 border-slate-900 rounded-full shadow-lg shadow-purple-odyssey justify-self-center' src={portrait} />
      <div className='flex-col flex self-center mt-4 sm:mt-0 mx-4 sm:mx-0'>
        <div className='border-2 border-slate-900 bg-black rounded-3xl shadow-xl shadow-purple-odyssey m-2 p-2 sm:m-0 sm:p-6'>
          <p className='text-white text-2xl sm:text-5xl pb-6 underline underline-offset-4 decoration-purple-odyssey'> Hi, I'm Troy </p>
          <p className='text-white text-xl sm:text-4xl pb-6'> I'm a software developer and aspiring writer </p>
          <div className='flex sm:mt-6'>
            <a className='flex' href='https://www.linkedin.com/in/troy-matthews-252091173/' target='_blank'>
              <img className='w-8 h-8 mr-2' src={linkedin} />
              <p className='text-white text-xl underline decoration-transparent transition-all duration-300 ease-in-out text-decoration-color hover:decoration-white'>LinkedIn</p>
            </a>
            <div className='pl-4' />
            <a className='flex' href='https://github.com/OdysseyOfTroy' target='_blank'>
              <img className='w-8 h-8 mr-2' src={github} />
              <p className='text-white text-xl underline decoration-transparent transition-all duration-300 ease-in-out text-decoration-color hover:decoration-white'>Github</p>
            </a>
          </div>
        </div>
        <OdysseyButton containerClass='sm:hidden self-center bg-black text-white w-full mt-14 shadow-lg shadow-purple-odyssey active:ring-2 ring-purple-odyssey' id={'phone_nav_work'} title={'Previous work'}/>          
      </div>

    </div>
  )
}