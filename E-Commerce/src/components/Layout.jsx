import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
        </main>
      <Footer />
    </div>
  );
}

export default Layout;
