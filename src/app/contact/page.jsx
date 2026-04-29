import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#10131b] text-white py-20 relative overflow-hidden">

      {/* LIGHTWEIGHT BACKGROUND (no blur = faster) */}
      <div className="absolute inset-0 bg-blue-500/5"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12
          bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent">
          Contact Me
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LOGIN / REGISTER */}
          <div className="bg-[rgba(46,52,66,0.6)] p-8 rounded-2xl shadow-md space-y-5
            transition-transform duration-200 hover:translate-y-[-3px]
            will-change-transform">

            <h2 className="text-2xl font-semibold mb-4">Login / Register</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#10131b] border border-gray-700 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-[#10131b] border border-gray-700 outline-none focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-[#10131b] border border-gray-700 outline-none focus:border-blue-500"
            />

            <div className="flex gap-4 pt-2">

              <button className="flex-1 py-2 bg-blue-600 rounded-lg
                transition-colors duration-200 hover:bg-blue-700">
                Login
              </button>

              <button className="flex-1 py-2 bg-purple-600 rounded-lg
                transition-colors duration-200 hover:bg-purple-700">
                Register
              </button>

            </div>

          </div>

          {/* FEEDBACK */}
          <div className="bg-[rgba(46,52,66,0.6)] p-8 rounded-2xl shadow-md space-y-5
            transition-transform duration-200 hover:translate-y-[-3px]
            will-change-transform">

            <h2 className="text-2xl font-semibold mb-4">Send Feedback</h2>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-[#10131b] border border-gray-700 outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-[#10131b] border border-gray-700 outline-none focus:border-blue-500"
            ></textarea>

            <button className="w-full py-3 bg-green-600 rounded-lg
              transition-colors duration-200 hover:bg-green-700">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;