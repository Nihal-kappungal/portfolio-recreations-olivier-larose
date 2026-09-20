const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between p-5 uppercase bg-[#121212]">
      <h1 className="text-[13px]">Olivier Larose</h1>
      <nav>
        <ul className="flex items-center gap-5 text-[13px] leading-none">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
