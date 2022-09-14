import * as React from "react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import Icon from "../icons/icon";
import { CartContext } from "../../Contexts/cart.context";

import OffCanvasComponents from "../offcanvas/offCanvasComponent";
import NavLinks from "./navLinks";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  Closed?: boolean;
}
export const Navbar = ({
  collapsed = false,
  Closed,
  ...props
}: NavbarProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const { cartCount } = React.useContext(CartContext);

  return (
    <>
      <nav
        className="relative w-full flex flex-wrap items-center justify-between py-2 bg-theme-primary navbar navbar-expand-lg"
        {...props}
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-3 relative">
          <div className="flex items-center">
            <a
              className="mr-3 mt-1 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              href="/"
            >
              <Icon kind="logo" size={40} className="text-theme-white" />
            </a>
            <NavLinks />
          </div>

          <div className="flex items-center relative gap-4">
            <OffCanvasComponents />
            <Link
              className="flex items-center justify-center text-white hover:text-theme-neutral80 focus:text-theme-neutral80 mr-1  hidden-arrow flex items-center"
              to="/shopping-cart"
            >
              <Icon kind="cart" size={20}></Icon>
              <span className="badge-count text-white bg-red-700 absolute rounded-full text-xs -mt-5 ml-3 py-0 px-1.5">
                {cartCount}
              </span>
            </Link>
            <Link
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:text-theme-neutral80 focus:text-theme-neutral80 mr-1  hidden-arrow flex items-center"
              to="/my-profile"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                alt=""
                className="w-8 h-8 rounded-full"
                loading="lazy"
              />
            </Link>
            <div className="dropdown relative">
              <div>
                <div className="md:hidden">
                  <button
                    className="navbar-toggler text-white border-0 hover:shadow-none hover:no-underline hover:ease-in py-2 pl-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    <Icon kind="hamburger" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
