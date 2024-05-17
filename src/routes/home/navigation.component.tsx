import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="logo-container" to="/">
            <img src={CrwnLogo} alt="main-logo" />
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
