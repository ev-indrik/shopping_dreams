import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link to="/">
            <div>Logo</div>
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
