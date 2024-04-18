import './App.css';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import portrait from './assets/portrait.jpg';

export default function App() {
  return <div className='bg-black min-h-screen px-4 py-4 flex justify-evenly'>
    <img className='h-[42rem] w-[42rem] self-center border-2 border-slate-900 rounded-full shadow-lg shadow-[#660086]' src={portrait} />
    <div className='flex-col flex self-center'>
      <div className='border-1 border-slate-900 rounded-3xl shadow-lg shadow-[#660086] px-6 py-6'>
        <p className='text-white text-5xl pb-6 underline underline-offset-4 decoration-[#660086]'> Hi, I'm Troy </p>
        <p className='text-white text-4xl pb-6'> I'm a software developer and aspiring writer </p>
        <div className='flex mt-6'>
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
