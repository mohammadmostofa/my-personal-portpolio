"use client"
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TextAnimation = () => {
  return (
    <div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">

  <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
    
    <Typewriter
      words={["Hello ! I'm Mohammad Mostofa"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={90}
      deleteSpeed={40}
    />

  </span>

</h1>


    </div>
  );
};

export default TextAnimation;