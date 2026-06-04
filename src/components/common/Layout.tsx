import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function Layout() {
  return (
    <div>
      <Navbar />

      <hr />

      {/* This is where child routes render */}
      <Outlet />
    </div>
  );
}

export default Layout;
