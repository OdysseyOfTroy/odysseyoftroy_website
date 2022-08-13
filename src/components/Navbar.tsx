export default function Navbar() { 
  return <nav className="bg-gray-800 w-10 h-15 sm:h-20 sm:w-full sm:bg-stone-900 sm:rounded-b-full sm:flex sm:align-center sm:justify-center sm:items-center">

        {/* Mobile menu button */}
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

    {/* <items className="flex justify-around items-center h-full">
    <a className="text-white"> About</a>
    <div className="trapezoid">
    <a className="text-white hover:text-red-700"> OdysseyOfTroy</a>
    </div>
    <a className="text-white"> Projects</a>
    </items> */}
  <div className="sm:hidden" id="mobile-menu"/>

  <div className="hidden sm:ml-16 sm:mr-16 sm:w-full sm:flex justify-between">
      <a className="ml-2 text-white hover:text-yellow-500 hover:underline decoration-white underline-offset-8">About</a>
      <a className="text-white">OdysseyOfTroy</a>
      <a className="mr-2 text-white hover:text-yellow-500 hover:underline decoration-white underline-offset-8">Projects</a>
    </div>

</nav>
}; 