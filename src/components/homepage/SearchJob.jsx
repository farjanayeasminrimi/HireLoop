import React from "react";

const SearchJob = () => {
  return (
    <section className="relative min-h-[75vh] w-full flex flex-col items-center justify-center bg-black text-white px-4 py-16 overflow-hidden select-none">
      {/* Background Ambient Radial Glow matching image_21c000.png */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 1. Pill Badge - Bold & Clear */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121214] border border-zinc-800/80 text-sm tracking-wider uppercase text-zinc-400 mb-8 z-10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
        <span className="text-base leading-none">💼</span>
        <span className="font-extrabold text-white">50,000+</span>
        <span className="text-zinc-400 font-medium">New Jobs This Month</span>
      </div>

      {/* 2. Main Heading Content */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          Find Your Dream Job Today
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
          HireLoop connects top talent with world-class companies. Browse thousands of curated
          opportunities and land your next role — faster.
        </p>
      </div>

      {/* 3. The Polished Double-Input Search Block */}
      <div className="w-full max-w-4xl mx-auto mb-8 z-10">
        <div className="w-full bg-[#0d0d0f]/90 backdrop-blur-md border border-zinc-800/80 p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center">
          {/* Individual Input 1: Title, Skill, or Company */}
          <div className="relative flex-1 flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px] text-zinc-500 absolute left-4 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent pl-12 pr-4 py-3 sm:py-2 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Exact Red-Box Highlight Divider from image_21c000.png */}
          <div className="hidden sm:block h-7 w-[1px] bg-zinc-800/80 shrink-0 mx-2" />

          {/* Individual Input 2: Location or Remote */}
          <div className="relative flex-1 flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px] text-zinc-500 absolute left-4 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent pl-12 pr-4 py-3 sm:py-2 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Search Accent Icon Button */}
          <button className="btn bg-[#553cfa] hover:bg-[#432ed1] border-none text-white rounded-xl sm:rounded-full w-full sm:w-12 h-12 min-h-12 p-0 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/10 mt-2 sm:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 4. Trending Tags Section */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm z-10">
        <span className="text-zinc-500 font-medium mr-1">Trending Position</span>

        <div className="btn btn-xs sm:btn-sm rounded-full bg-[#18181b]/60 border-zinc-800 text-zinc-300 pointer-events-none normal-case font-normal px-4 h-8 min-h-8">
          Product Designer
        </div>

        <div className="btn btn-xs sm:btn-sm rounded-full bg-[#18181b]/60 border-zinc-800 text-zinc-300 pointer-events-none normal-case font-normal px-4 h-8 min-h-8">
          AI Engineering
        </div>

        <div className="btn btn-xs sm:btn-sm rounded-full bg-[#18181b]/60 border-zinc-800 text-zinc-300 pointer-events-none normal-case font-normal px-4 h-8 min-h-8">
          Dev-ops Engineer
        </div>
      </div>
    </section>
  );
};

export default SearchJob;
