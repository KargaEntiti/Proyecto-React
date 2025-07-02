import "../style/Header.css"
import Sidebar from "./Sidebar";
function Header() {
  return (
    <header>
      <div>
        <Sidebar className="sidebar-nav" />
        <img src="https://i.imgur.com/AnIMNRE.png" alt="Gaby's Gifts" className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
