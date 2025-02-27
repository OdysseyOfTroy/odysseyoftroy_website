import bkLogo from "../assets/bank_of_kigali_logo.png";
import enLogo from "../assets/executive_nexus_logo.png";

export default function CoreblueScreen() {
  return (
    <div className='min-h-screen'> 
    <h1 className='text-white text-5xl pl-8 pt-8 underline underline-offset-4 decoration-[#660086]'>Previous Work</h1>
      <div className='mt-4 mx-4 rounded-3xl px-4 flex flex-col'>
        <div className="pb-4 hidden sm:block">
          <h2 className='pt-4 text-4xl text-white'>Coreblue</h2>
          <p className="text-white text-2xl">As a Software Engineer at Coreblue, I was required to learn different technologies to develop several projects for various clients. My primary development language was Flutter for mobile development. Other languages I have experience with include: Laravel, React and Vue. Here are a couple projects I worked on:</p>
        </div>
        <div className='flex pb-4 flex-col sm:flex-row'>
          <div className='bg-white flex-1 rounded-3xl px-6 py-6 shadow-xl shadow-purple-odyssey flex flex-col justify-between '>
            <div className="sm:h-[130px]">
            <img width={500} src={bkLogo}/>
            </div>
            <p className="mt-4">With plans to increase their customer base, Bank of Kigali (BK) hired Coreblue to assist in building a mobile banking app. This project was built completely in Flutter, to interact with the banks own API. This was a cooperative effort between my team and BK's in-house team, with us colloborating with their API development, Mobile app development and App Design teams. </p>
            {/* <OdysseyButton id='BK_button' title="My Involvment (Coming Soon) " containerClass="bg-black text-white" /> */}
          </div>
          <div className="w-4 h-4"/>
          <div className='bg-white flex-1 rounded-3xl px-6 py-6 shadow-xl shadow-purple-odyssey flex flex-col justify-between'>
            <img width={500} height={120} src={enLogo}/>
            <p className="mt-4">Executive Nexus, whom provides an executive networking solution, Worked alongside Coreblue to maintain and enhance their existing platform. Our involvement included improvements in functionality, security, stability and scalability. This project was built in Vue and Laravel.</p>
            {/* <OdysseyButton id='EN_button' title="My Involvment (Coming Soon) " containerClass="bg-black text-white" /> */}
          </div>
        </div>
      </div>
  </div>  
  )
}
