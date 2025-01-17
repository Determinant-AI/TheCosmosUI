import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarStyle, MobileView } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  // for open/close mobile menu
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    // return burgerOpen;
  };

  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/" onClick={toggleBurger}>
          HOME
        </Link>
        <Link to="/products" onClick={toggleBurger}>
          TEAM
        </Link>
        <Link to="/about" onClick={toggleBurger}>
          ABOUT
        </Link>
        <Link to="/contact" onClick={toggleBurger}>
          CONTACT
        </Link>
      </NavbarStyle>

      <MobileView>
        <div className="burgermenu-toggle" onClick={toggleBurger}>
          <BurgerMenu />
        </div>
      </MobileView>

      <style jsx="true">
        {`
          @media (max-width: 600px) {
            .navbar-wrapper > div > a {
              display: ${burgerOpen ? "inline" : "none"};
              // color: red;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Navbar };
