import "../style/index.css"
import "../style/Header.css"
import Nav from "./Nav";
import Sidebar from "./Sidebar";
function Header() {
  return (
    <header>
      <Nav className="header-nav"/>
      <div className="container-header">
        <Sidebar className="sidebar-nav" />
        <img src="https://i.imgur.com/AnIMNRE.png" alt="Gaby's Gifts" className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
