import Logo from "./assets/logo.png";
const Nav = ({coin}) => {
  return (
    <div className="w-full bg-white">
      <nav className="flex items-center justify-between p-4 max-w-[1320px] mx-auto">
        <div>
          <img
            src={Logo}
            alt="Cricket Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="flex items-center space-x-8">
          <ul className="flex space-x-8 items-center text-gray-600 font-medium text-sm md:text-base">
            <li className="cursor-pointer hover:text-black transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Fixture
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Teams
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Schedules
            </li>
          </ul>
        </div>

         <div className="flex items-center space-x-2 border border-gray-200 rounded-xl px-4 py-2 font-bold text-black shadow-sm">
            <span>{coin}</span>
            <span className="text-xl">🪙</span>
          </div>
      </nav>
    </div>
  );
};

export default Nav;
