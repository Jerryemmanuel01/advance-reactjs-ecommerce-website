import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo01.png";
import { AuthContext } from "../contexts/AuthProvider";
import { Dropdown, Image } from "react-bootstrap";

const NavItems = () => {
  const [menuToggle, setmenuToggle] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  // authInfo
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  //add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });

  const handleLogout = () => {
    logout();
  };
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/sign-up" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </div>

      {/* header botton */}
      <div className="header-botton">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <Link to={"/"}>
                <img src={logo} width={150} alt="" />
              </Link>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="">
                    <Link to="/" onClick={() => setmenuToggle(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={() => setmenuToggle(false)}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" onClick={() => setmenuToggle(false)}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setmenuToggle(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setmenuToggle(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* sign in or log in */}
              {user ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-none"
                      id="dropdown-basic"
                    >
                      {user?.photoURL ? (
                        <Image
                          src={user.photoURL}
                          width={40}
                          alt=""
                          roundedCircle
                        />
                      ) : (
                        <i className="icofont-ui-user"></i>
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="">
                      <Dropdown.Item>
                        <Link to="/">Profile</Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/shop">Shop</Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/cart-page">Cart Order</Link>{" "}
                      </Dropdown.Item>
                      <div className="d-md-none ">
                        <Dropdown.Item>
                          <Link to="/blog">Blog</Link>{" "}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/about">About</Link>{" "}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/contact">Contact</Link>{" "}
                        </Dropdown.Item>
                      </div>
                      <Dropdown.Item
                        className="border-top mt-2"
                        onClick={handleLogout}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    Create Account
                  </Link>

                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              )}

              {/* menu toggle */}
              {user ? (
                ""
              ) : (
                <>
                  <div
                    onClick={() => setmenuToggle(!menuToggle)}
                    className={`header-bar d-lg-none ${
                      menuToggle ? "active" : ""
                    }`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  {/* social toggler */}
                  <div
                    className="ellepsis-bar d-md-none"
                    onClick={() => setsocialToggle(!socialToggle)}
                  >
                    <i className="icofont-info-square"></i>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
