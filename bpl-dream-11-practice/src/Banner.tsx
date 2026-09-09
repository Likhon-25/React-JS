import bannerLogo from "./assets/banner-main.png";
const Banner = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto my-6 p-4">
      <div
        className="w-full bg-black rounded-3xl py-16 px-6 text-center text-white flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-gray-800"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 10%, rgba(230, 81, 0, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(63, 81, 181, 0.25) 0%, transparent 40%),
            linear-gradient(to right, #111111, #000000, #111111)
          `,
        }}
      >
        <div className="mb-6">
          <img
            src={bannerLogo}
            alt="Cricket Logo"
            className="w-48 md:w-60 h-auto object-contain mx-auto drop-shadow-lg"
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold tracking-wide mb-3">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-400 text-sm md:text-base font-normal mb-8">
          Beyond Boundaries Beyond Limits
        </p>

        <button className="bg-[#E7FE29] hover:bg-[#d8f018] text-black font-semibold py-3 px-6 rounded-xl border border-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
