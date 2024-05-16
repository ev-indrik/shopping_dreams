import { Link, Outlet } from "react-router-dom";
import { Icon } from "../../components/icons";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="logo-container" to="/">
            <Icon type={"paper_plane"} />
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
