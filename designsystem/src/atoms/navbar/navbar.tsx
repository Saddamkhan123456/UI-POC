import classNames from "classnames";
import * as React from "react";
import { HTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardBody } from "design-system";
import Icon from "../icons/icon";
import OffCanvasComponent from "../offcanvas/offcanvas";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import { useContext } from "react";
import ItemCard from "../itemCard/itemCard";
import EmptyShoppingCart from "../emptyShoppingCart/emptyShoppingCart";
import {navigation} from './constant'

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  Closed?: boolean;
}
export const Navbar = ({
  collapsed = false,
  Closed,
  ...props
}: NavbarProps) => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const { cartCount, saveCartItem } = React.useContext(CartContext);
  const { wishlistItems, flushWishlistItem } = useContext(WishlistContext);
  const { wishlistCount } = useContext(WishlistContext);

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-2 bg-theme-primary navbar navbar-expand-lg" {...props}>
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-3 relative">
          <div className="flex items-center">
            <a
              className="mr-3 mt-1 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              href="/"
            >
              <Icon kind="logo" size={40} className="text-theme-white" />
            </a>
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
          </div>

          <div className="flex items-center relative gap-4">
            <div>
              <div
                id="offCanvas"
                onClick={() => setOpen(!open)}
                className="cursor-pointer text-white"
              >
                <div>
                  <Icon kind="wishlist" size={20} />
                  <span className="badge-count text-white bg-red-700 absolute rounded-full text-xs -mt-7 ml-2 py-0 px-1.5">
                    {wishlistCount}
                  </span>
                </div>
              </div>
              <OffCanvasComponent
                onClose={(e: any) => setOpen(!open)}
                isOpen={open}
                type="right"
                sizeInPercentage={50}
                panelClassName="panel bg-theme-neutral85 text-theme-dark"
                panelContainerClassName="panel-container h-full"
                noBackdrop={false}
                props={undefined}
                children={
                  <>
                    <Card className="h-full">
                      <CardBody className="">
                        <div className="flex justify-between border-b p-4 mb-3 items-center">
                          <h1 className="text-xl capitalize leading-none font-medium">
                            Wishlist
                          </h1>
                          <Icon
                            className="cursor-pointer"
                            kind="close"
                            onClick={() => setOpen(!open)}
                            size={12}
                          />
                        </div>
                        <div className="h-calc flex flex-col overflow-auto">
                          {wishlistItems && wishlistItems.length > 0 ? (
                            <div className="px-4">
                              {wishlistItems.map((item) => {
                                return (
                                  <ItemCard
                                    key={item.id}
                                    cartItem={item}
                                    cartCard={false}
                                    imgSize={false}
                                    isQuantityShow={true}
                                    isCartItem={false}
                                    showRemove={true}
                                    qty={true}
                                    addToCart={() => saveCartItem(item)}
                                    deleteItem={() => flushWishlistItem(item)}
                                  />
                                );
                              })}
                            </div>
                          ) : (
                            <>
                              <EmptyShoppingCart />
                            </>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </>
                }
              />
            </div>
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
