import { useState, useEffect } from "react";
 
import AuthHelpers from "../../services/AuthHelpers";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export const Navbar = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthHelpers.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthHelpers.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">
          Persist
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to={"/profile"} className="nav-link">
                {currentUser.email}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/login"} className="nav-link" onClick={logOut}>
                Logout
              </NavLink>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to={"/login"} className="nav-link">
                Login
              </NavLink>
            </li>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
};
