import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
           <a className="nav-link" href="">
             <i className="ion-compose"></i>&nbsp;New Post
           </a>
         </li> */}
            {/* <li className="nav-item">
           <a className="nav-link" href="">
             <i className="ion-gear-a"></i>&nbsp;Settings
           </a>
         </li> */}
            <li className="nav-item">
              <Link to="/login">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
