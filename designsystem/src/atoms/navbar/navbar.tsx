import classNames from "classnames";
import React from "react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { DropdownButton } from "../dropdown/dropdown";
import Icon from "../icons/icon";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  Closed?: boolean;
}
export const Navbar = ({
  collapsed = false,
  Closed,
  ...props
}: NavbarProps) => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Men", href: "/category", current: false },
    { name: "Women", href: "/category", current: false },
    { name: "Kids", href: "/category", current: false },
  ];

  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-theme-neutral hover:text-theme-neutral80 focus:text-theme-neutral80 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-3 relative">
          <div className="flex items-center">
            <a
              className="mr-3 mt-1 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              href="/"
            >
              <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
                width={100}
              />
            </a>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <a
                    onClick={() => filterResult("mens clothing")}
                    key={index}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-theme-neutral15 text-white"
                        : "text-white hover:bg-theme-neutral15 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center relative gap-4">
            <DropdownButton
              items={["My profile", "settings"]}
              className="w-4  rounded-full"
            />
            <a
              className="flex items-center justify-center text-white hover:text-theme-neutral80 focus:text-theme-neutral80 mr-1 dropdown-toggle hidden-arrow flex items-center"
              href="/cart"
              aria-expanded="false"
            >
              <Icon kind="cart" size={20}></Icon>
              <span className=" w-4 h-4 text-white bg-red-700 absolute rounded-full text-xs -mt-2 ml-2 py-0 px-1.5">
                1
              </span>
            </a>

            {/* <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="/"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                
                alt=""
                loading="lazy"
              />
            </a> */}
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
        <div className="md:hidden block w-full">
          <div className="navbar">
            <div
              className={
                !isCollapsed
                  ? "hidden"
                  : "block right-0 top-0  bg-theme-neutral text-white hover:text-white DrawerMenu"
              }
            >
              <div className="flex align-center justify-between p-3 font-bold">
                Menu
                <Icon
                  kind="close"
                  size={16}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              </div>

              <>
                <ul>
                  {navigation.map((item, index) => (
                    <li className="flex" key={index}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white w-full"
                            : "text-white hover:text-white py-3 hover:bg-theme-neutral15 w-full mb-1",
                          "px-3 py-2 text-sm font-medium hover:bg-theme-neutral15 w-full mb-1"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
