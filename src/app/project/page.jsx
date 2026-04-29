import React from "react";
export const metadata = {
  title: "Projects | Portfolio",
  description: "Showcase of development projects",
};

const projects = [
  {
    title: "E-commerce Platform",
    desc: "Full-stack shopping system with authentication, cart and checkout.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    desc: "Modern responsive portfolio with animations and clean UI.",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Blog System",
    desc: "SEO optimized blog platform with admin dashboard.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

const ProjcetPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#10131b] text-white">

      {/* background glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-10 py-16 relative z-10">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12
          bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent">
          Projects
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[rgba(46,52,66,0.6)] rounded-2xl p-6 shadow-lg transition duration-300 hover:scale-105"
            >

              <h2 className="text-xl font-bold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-blue-600/20 text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">

                <button className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                  Live
                </button>

                <button className="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition">
                  Code
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ProjcetPage;