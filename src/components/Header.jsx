import logo from "../assets/logo.jpg";

import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Students Dashboard</h1>
      <img src={logo} alt="Logo" width={104} height={104} />
    </div>
  );
}

export default Header;
