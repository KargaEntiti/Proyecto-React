import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Layout({ children }) {

  const [abierto, setAbierto] = useState (false);

  const toggleSidebar = () => setAbierto(!abierto);

  return (
    <>
      <Sidebar className="sidebar-nav" abierto={abierto} toggleSidebar={toggleSidebar}/>
      <div className="app-container">
        <Header toggleSidebar={toggleSidebar}/>
        <main>
          {children}
          <Outlet />
          </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
