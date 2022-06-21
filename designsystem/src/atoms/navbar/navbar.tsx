import classNames from "classnames";
import React from "react";
import { HTMLAttributes } from "react";
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
    { name: "Profile", href: "#", current: true },
    { name: "Settings", href: "#", current: false },
    { name: "Sign out", href: "#", current: false },
  ];

  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-800 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-3 relative">
          <div className="flex items-center">
            <a
              className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              href="/"
            >
              <h1 className="text-theme-primary text-2xl">LOGO</h1>
            </a>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
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

          <div className="flex items-center relative">
            <div className="dropdown relative">
              <a
                className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center"
                href="/"
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Icon kind="bell" size={20}></Icon>
                <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                  1
                </span>
              </a>
            </div>
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="/"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-full h-8 w-8"
                alt=""
                loading="lazy"
              />
            </a>
            <div className="dropdown relative">
              <div>
                <div className="md:hidden">
                  <button
                    className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline hover:ease-in py-2 pl-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
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
                  : "block right-0 top-0  bg-gray-800 text-white hover:text-white DrawerMenu"
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
                            ? "bg-gray-900 text-white w-full"
                            : "text-gray-300 700 hover:text-white py-3 hover:bg-gray-900 w-full mb-1",
                          "px-3 py-2 text-sm font-medium hover:bg-gray-900 w-full mb-1"
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
