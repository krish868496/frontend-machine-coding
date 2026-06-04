import { Link } from "react-router-dom";
import { useTheme } from "./context/useThemeContext";

function Navbar() {
  const { theme, handleTheme } = useTheme();
  return (
    <nav className="nav">
      <div className="logo">My app</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/1">User</Link>
        <Link to="/counter">Counter</Link>
      </div>
      <input
        type="checkbox"
        onChange={handleTheme}
        checked={theme === "dark"}
      />
    </nav>
  );
}

export default Navbar;
