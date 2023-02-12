import React, { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import Icon from "../icons/icon";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/actions/ActionsCreators";
import { RootState } from "../../store/configureStore";

export interface NavLinkProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}
const NavLinks = ({ collapsed = false, ...props }: NavLinkProps) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const categories = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch<any>(getCategories());
  }, []);

  return (
    <>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          {categories?.categories?.map((item, index) => (
            <Link
              key={index + "mobile"}
              to={`/product/category/${item.title.toLowerCase()}`}
              state={{ id: item._id }}
              className={classNames(
                location.pathname ===
                  `/product/category/${item.title.toLowerCase()}`
                  ? "bg-theme-white text-theme-primary active:bg-theme-white active:text-theme-primary"
                  : "text-white",
                "px-3 py-1 rounded-md text-sm font-medium"
              )}
              aria-current={item ? "page" : undefined}
            >
              {item.title}
            </Link>
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
                {categories?.categories?.map((item, index) => (
                  <li className="flex" key={index}>
                    <Link
                      to={`/product/category/${item.title.toLowerCase()}`}
                      className={classNames(
                        location.pathname ===
                          `/product/category/${item.title.toLowerCase()}`
                          ? " text-white w-full"
                          : "text-white hover:text-white py-3 hover:bg-theme-neutral15 w-full mb-1",
                        "px-3 py-2 text-sm font-medium hover:bg-theme-neutral15 w-full mb-1"
                      )}
                      aria-current={item ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
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
