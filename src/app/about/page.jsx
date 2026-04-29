import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiJavascript, SiNodedotjs, SiPython, SiReact } from "react-icons/si";
import aboutImg from '@/profile.png'

export const metadata = {
  title: "About | Portfolio",
  description: "About section of developer portfolio",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#10131b] text-white px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0f172a]/50 border border-blue-500/20 rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
              <div className="w-48 h-64 bg-blue-900/30 rounded-2xl overflow-hidden mb-6 border border-white/10">
                
                <Image src={aboutImg} width={200} height={200} alt="aboutImg" />

              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">Available for work</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight uppercase">Mohammad Mostofa</h2>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed px-4">
                Create seamless experiences across web, mobile, and desktop with one codebase.
              </p>
              
              <div className="flex gap-4 mt-8">
                {[FaInstagram, FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600/20 transition-colors">
                    <Icon className="text-xl text-blue-400" />
                  </a>
                ))}
              </div>

              <button className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-600/20">
                Let's Connect
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Info & Experience */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bio Section */}
            <div className="bg-[#0f172a]/50 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Hi! I'm Mostofa,</h3>
              <p className="text-gray-400 leading-relaxed">
                A developer passionate about building meaningful digital experiences. With a focus on 
                <span className="text-blue-400"> clean code</span>, thoughtful design, and scalable solutions, 
                I help turn ideas into products that people love to use.
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                I specialize in frontend development, API integration, and UI/UX design, blending 
                creativity with technical expertise to deliver work that's both functional and visually compelling.
              </p>
            </div>

            {/* Tech Stack Section */}
            <div className="bg-[#0f172a]/50 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm flex items-center justify-between flex-wrap gap-6">
              <h4 className="text-xl font-bold">My Tech Stack:</h4>
              <div className="flex gap-6">
                <SiJavascript className="text-3xl text-yellow-400 hover:scale-110 transition-transform" />
                <SiNodedotjs className="text-3xl text-green-500 hover:scale-110 transition-transform" />
                <SiPython className="text-3xl text-blue-400 hover:scale-110 transition-transform" />
                <SiReact className="text-3xl text-cyan-400 hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-[#0f172a]/50 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-6">Experience</h4>
              <div className="space-y-6">
                {[
                  { role: "Frontend Developer", company: "Freelance", year: "2024" },
                  { role: "Web Designer", company: "TechWave", year: "2023" },
                  { role: "Junior Developer", company: "Digital Studio", year: "2022" },
                ].map((exp, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h5 className="font-medium text-gray-200">{exp.role}</h5>
                      <p className="text-sm text-gray-500">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-blue-400">{exp.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;