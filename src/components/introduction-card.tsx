import HomeCard from "./home-card";
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function IntroductionCard() {
    return <HomeCard content=
    {
        <div>
        <p className='text-white text-2xl sm:text-5xl pb-6 underline underline-offset-4 decoration-purple-odyssey'> Hi, I'm Troy </p>
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
    }></HomeCard>
}