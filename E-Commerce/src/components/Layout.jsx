import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Sidebar className="sidebar-nav" />
        <Outlet />
        </main>
      <Footer />
    </div>
  );
}

export default Layout;
