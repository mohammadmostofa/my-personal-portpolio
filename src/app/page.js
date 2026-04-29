
import Image from 'next/image';
import React from 'react';
import bannerImg from '@/profile.png';

import TextAnimation from '@/components/TextAnimation';

const HomePage = () => {
  return (

    <div className="relative min-h-[100vh] flex items-center bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#10131b]  ">

  {/* HERO BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

  <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">

    {/* LEFT CONTENT */}
    <div className="flex flex-col space-y-5 text-center md:text-left sm:py-10 ">

      <TextAnimation />

      <h2 className="font-medium text-xl md:text-2xl text-gray-200">
        Crafting Modern Web Experiences
      </h2>

      <p className="text-gray-400 max-w-md">
        Passionate about creating clean interfaces and seamless user experiences
        with modern web technologies.
      </p>

      {/* BUTTONS */}
      <div className="flex  pb-20 md:pb-2 flex-wrap justify-center md:justify-start gap-6 py-4">

        <button className="px-6 py-3 rounded-xl bg-black text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
          View Project
        </button>

        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Download CV
        </button>

      </div>

    </div>

    {/* RIGHT IMAGE SECTION */}
    <div className="relative flex justify-center items-center md:mr-20  ">

      {/* IMAGE */}
      <div className="shadow-md rounded-2xl bg-[rgba(46,52,66,0.64)] p-4 z-10">
        <Image src={bannerImg} width={220} height={220} alt="logo" />
      </div>

      {/* FLOATING BOXES (RESPONSIVE SAFE) */}

      <div className=" absolute -top-15 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 text-center  rounded-lg text-sm animate-bounce">
          500+ Hours Learning
      </div>

      <div className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 bg-purple-500 text-white px-3 py-3 rounded-lg text-sm animate-pulse">
        React Developer
      </div>

      <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-3 rounded-lg text-sm animate-bounce">
        20+ Projects
      </div>

      <div className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-3 py-3 rounded-lg text-sm animate-pulse">
        Next.js Lover
      </div>

    </div>

  </div>
</div>

  );
};

export default HomePage;