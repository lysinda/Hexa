

function Header() {
  return (
    <div>
      <div className="header flex justify-between items-center bg-night-blue h-32">
        <div className="logo flex items-center">
          <img src="images/hexa_icon.png" className="w-24 pl-4 ml-4"></img>
          <h1 className="text-7xl font-raleway font-medium ml-8 cursor-grab">
            Hexa
          </h1>
        </div>
        <nav className="text-2xl mr-10">
          <ul className="flex">
            <li className="m-4 cursor-pointer">Download</li>
            <li className="m-4 cursor-pointer">About</li>
            <li className="m-4 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
      <hr className="border-dark-night-blue border-2"></hr>
    </div>
  );
}

export default Header;
