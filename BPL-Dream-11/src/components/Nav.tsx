import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <nav className="bg-white text-black font-bold flex items-center justify-between p-4 container mx-auto border-2 border-gray-50">
        <img src={Logo} alt="BPL Dream 11 Logo" />

        <ul className="flex space-x-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
