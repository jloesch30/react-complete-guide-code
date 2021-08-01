import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css"

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* we use Link so that the page does not reload */}
            <NavLink activeClassName={classes.active} to="/Products">Products</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/Welcome">Welcome</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
