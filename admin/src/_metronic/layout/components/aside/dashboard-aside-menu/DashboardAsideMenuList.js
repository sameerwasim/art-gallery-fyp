  /* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function DashboardAsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>

        {/*begin::1 Advertisment*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Advertisment*/}

        {/* Category */}
        {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Category</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        {/* end:: section */}

        {/*begin::1 Add*/}
        <li className={`menu-item ${getMenuItemActive("/category", false)}`} aria-haspopup="true" >
          <NavLink className="menu-link" to="/category">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-grid.svg")} />
            </span>
            <span className="menu-text">Manage</span>
          </NavLink>
        </li>
        {/*end::1 Add*/}

        {/* Artist */}
        {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Artist</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        {/* end:: section */}

        {/*begin::1 Artist*/}
        <li
          className={`menu-item ${getMenuItemActive("/artist", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/artist">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File-done.svg")} />
            </span>
            <span className="menu-text">Manage</span>
          </NavLink>
        </li>
        {/*end::1 Artist*/}

        {/* Reviews */}
        {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Reviews</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        {/* end:: section */}

        {/*begin::1 Reviews*/}
        <li
          className={`menu-item ${getMenuItemActive("/reviews", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/reviews">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File-done.svg")} />
            </span>
            <span className="menu-text">Manage</span>
          </NavLink>
        </li>
        {/*end::1 Reviews*/}

        {/* Artwork */}
        {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Artwork</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        {/* end:: section */}

        {/*begin::1 Artwork*/}
        <li
          className={`menu-item ${getMenuItemActive("/artworks", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/artworks">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File-done.svg")} />
            </span>
            <span className="menu-text">Manage</span>
          </NavLink>
        </li>
        {/*end::1 Artwork*/}

        {/* Inquries */}
        {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Inquires</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        {/* end:: section */}

        {/*begin::1 Artwork*/}
        <li
          className={`menu-item ${getMenuItemActive("/inquiry", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/inquiry">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File-done.svg")} />
            </span>
            <span className="menu-text">Manage</span>
          </NavLink>
        </li>
        {/*end::1 Artwork*/}


      </ul>
    </>
  );
}
