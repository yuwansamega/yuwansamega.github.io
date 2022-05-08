import React, {useEffect} from 'react';
import {Link} from 'react-scroll';

const Header = () => {

  useEffect(() => {

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    });


  }, []);

  return (
    <header className="bg-transparent absolute w-full left-0 top-0 flex items-center z-10">
      <div className="container">
        <div className="flex items-center relative justify-between">
          <div className="px-4">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="font-bold text-lg text-primary block py-6 hover:cursor-pointer ">yuwanjoong_</Link>
            
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out "></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static
              lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex navbar-items">
                  <li className="group nav-items">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="flex text-base text-dark py-2 mx-8 group-hover:text-primary hover:cursor-pointer">Home</Link>
                  </li>
                  <li className="group">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-145} duration={500} className="flex text-base text-dark py-2 mx-8 group-hover:text-primary hover:cursor-pointer">About</Link>
                  </li>
                  <li className="group">
                    <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-45} duration={500} className="flex text-base text-dark py-2 mx-8 group-hover:text-primary hover:cursor-pointer">Portfolio</Link>
                  </li>
                  <li className="group">
                    <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-80} duration={500}className="flex text-base text-dark py-2 mx-8 group-hover:text-primary hover:cursor-pointer">Clients</Link>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header