
// import { HiMenuAlt4 } from 'react-icons/hi';
// import {AiOutlineClose } from 'react-icons/ai';
// import logo3 from '../../src/images/logo3.png';
// import image from '../../src/images/logo.png';
const Navbar = () => {
  return(
      <header className="  body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
            <div className="md:flex[0.5] text flex initial items-center">
          <img src='./images/logo3.png' alt="logo" className="w-60 h-55 cursor-pointer md:mt-0 "></img>
          </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer   ">
          <a className="ml-5 hover:text-red-400 text-white text-lg" href="https://economictimes.indiatimes.com/markets/cryptocurrency/ethereum-price/cryptodetail/symbol-eth.cms?from=mdr">Market</a>
          <a href="http://127.0.0.1:5500/Contact.html" className="ml-5 hover:text-red-400 text-white text-lg">Meet the Team</a>
          <a href="http://127.0.0.1:5500/tutorials1.html" className="ml-5 hover:text-red-400 text-white text-lg">Tutorials</a>
          <a className="ml-5 hover:text-red-400 text-white text-lg">Wallets</a>
        </nav>
        <a href="http://127.0.0.1:5500/login.html">
        <button className=" text-white inline-flex items-center bg-[#0B1C55]  py-1 px-3 hover:bg-[#0e95a4] active:bg-violet-700 focus:outline-none rounded-full text-base mx-6 md:mt-0 ">Login
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </a>
      </div>
    </header>
  );
}
export default Navbar;