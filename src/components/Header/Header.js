import React, { useState } from "react";

import { NavLink } from "react-router-dom";

export const Header = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenuClick = () => {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    if (menu) {
      setMenu(false);
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    } else {
      setMenu(true);
      iconMenu.classList.add("_active");
      menuBody.classList.add("_active");
    }
  };

  

  const activeLink = "menu__link _active";
  const normalLink = "menu__link";

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__menu menu" onClick={toggleMenuClick}>
          <div className="menu__icon icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="menu__body">
            <ul className="menu__list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/works"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
