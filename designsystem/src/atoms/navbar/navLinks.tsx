import React, { HTMLAttributes } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import Icon from "../icons/icon";

export interface NavLinkProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}
const NavLinks = ({ collapsed = false, ...props }: NavLinkProps) => {
  const location = useLocation();
  const navigation = [
    { name: "Men", href: "/product/category/men", current: false },
    { name: "Women", href: "/product/category/women", current: false },
    { name: "Kids", href: "/product/category/kids", current: false },
  ];
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "bg-theme-white text-theme-primary active:bg-theme-white active:text-theme-primary"
                  : "text-white",
                "px-3 py-1 rounded-md text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
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
    </>
  );
};

export default NavLinks;
