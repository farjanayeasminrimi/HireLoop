import Image from "next/image";
import React from "react";
import global from "../../../public/images/globe.png";

const GlobalStats = () => {
  const stats = [
    {
      id: 1,
      value: "50K",
      label: "Active Jobs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      value: "12K",
      label: "Companies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 3,
      value: "2M",
      label: "Job Seekers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      value: "97%",
      label: "Satisfication Rate", // Kept typo exactly as written in image_efce45.png
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden select-none">
      {/* Full-width Globe + Text Container */}
      <div className="relative w-full min-h-[460px] md:min-h-[520px] flex items-center justify-center">
        {/* Globe - Now Full Width */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-[2/1]">
            <Image
              src={global}
              alt="Global Network"
              className="w-full h-full object-cover mix-blend-screen opacity-90 scale-105"
              priority
              fill
              sizes="100vw"
            />

            {/* Enhanced Blue Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.4)_0%,transparent_65%)]" />
          </div>
        </div>

        {/* Text - Perfectly Centered on Globe */}
        <div className="relative z-10 text-center px-2 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-200 leading-tight tracking-wide">
            Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
        </div>
      </div>

      {/* Stats - Tightly placed under the globe */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-12 md:-mt-16 px-4 relative z-20 pb-20">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#0b0b0c] border border-zinc-900/60 p-6 rounded-2xl flex flex-col items-start justify-between min-h-[165px] shadow-2xl hover:border-zinc-700 transition-all duration-200"
          >
            <div className="p-2.5 bg-zinc-900/40 rounded-xl border border-zinc-800/40 shrink-0 mb-4">
              {stat.icon}
            </div>
            <div className="space-y-1">
              <span className="block text-4xl sm:text-5xl font-semibold tracking-tighter text-white">
                {stat.value}
              </span>
              <span className="block text-sm font-medium text-zinc-500 tracking-wider">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalStats;
