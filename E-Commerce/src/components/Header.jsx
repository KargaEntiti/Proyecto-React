import "../style/index.css"
import "../style/Header.css"
import Nav from "./Nav";

function Header({ toggleSidebar }) {
  return (
    <header>
      <Nav className="header-nav" toggleSidebar={toggleSidebar} />
    </header>
  );
}

export default Header;
