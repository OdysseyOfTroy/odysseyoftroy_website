import './App.css';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import portrait from './assets/portrait.jpg';

export default function App() {
  return <div className='min-h-screen sm:px-4 sm:py-4 flex flex-col sm:flex-row justify-evenly'>
    <img className='mt-4 sm:mt-0 w-40 h-40 sm:h-[42rem] sm:w-[42rem] self-center border-2 border-slate-900 rounded-full shadow-lg shadow-[#660086] justify-self-center' src={portrait} />
    <div className='flex-col flex self-center'>
      <div className='border-2 border-slate-900 rounded-3xl shadow-lg shadow-[#660086] m-2 p-1 sm:m-0 sm:px-6 sm:py-6'>
        <p className='text-white text-2xl sm:text-5xl pb-6 underline underline-offset-4 decoration-[#660086]'> Hi, I'm Troy </p>
        <p className='text-white text-xl sm:text-4xl pb-6'> I'm a software developer and aspiring writer </p>
        <div className='flex pl-4 sm:pl-0 sm:mt-6'>
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
    </div>
  </div>
}
