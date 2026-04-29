import React from 'react';
import { FaGithub, FaLinkedin, FaSquareFacebook } from 'react-icons/fa6';
import Navlink from './shared/Navlink';

const FooterPage = () => {
  return (
    <div>
          
          <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-10 px-15">

             <h1 className="font-extrabold pt-10 pb-12 text-5xl text-gray-300  border-b w-full border-gray-600 rounded-sm ">Mostofa.dev</h1>

  <nav className="grid grid-flow-col gap-4">
    <Navlink></Navlink>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-6">
       <a href="https://www.facebook.com/mohammadmostofa.dev"> <FaSquareFacebook className='text-xl' /></a>
       <a href="https://www.linkedin.com/in/mohammadmostofa"> <FaLinkedin className='text-xl' /> </a>
       <a href="https://github.com/mohammadmostofa"><FaGithub  className='text-xl'/></a>

    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by mohammad mostofa</p>
  </aside>
</footer>

    </div>
  );
};

export default FooterPage;