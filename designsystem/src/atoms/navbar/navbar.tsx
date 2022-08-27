import classNames from "classnames";
import * as React from "react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "design-system";
import Icon from "../icons/icon";
import OffCanvasComponent from "../offcanvas/offcanvas";
// import ItemCard from "../shoppingCart/itemCard";
import {CartContext} from '../../Contexts/cart.context'

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
    // { name: "Home", href: "/", current: true },
    { name: "Men", href: "/product/category/men", current: false },
    { name: "Women", href: "/product/category/women", current: false },
    { name: "Kids", href: "/product/category/kids", current: false },
  ];
  const [open, setOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const { cartCount} = React.useContext(CartContext)
 
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-theme-neutral hover:text-theme-neutral80 focus:text-theme-neutral80 shadow-lg navbar navbar-expand-lg navbar-light">
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
            <div>
              <div
                id="offCanvas"
                onClick={() => setOpen(!open)}
                className="cursor-pointer text-white"
              >
                Wishlist
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
                  <Card className="h-full px-4">
                    <CardBody className="p-3 ">
                      <h1 className="text-3xl font-black mb-3">Wishlist</h1>
                      {/* <ItemCard
                        title={"Black High Neck Cropped Top"}
                        brand={"Nike"}
                        price={"$1294"}
                        thumbnail="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16491130/2021/12/13/31b58c46-6189-4639-8d36-8c3a5bb78c151639371822052PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg"
                        qtyUpdate={false}
                        showQty={false}
                        cartCard={false}
                        imgSize={false}
                      /> */}
                    </CardBody>
                  </Card>
                }
              />
            </div>
            <Link
              className="flex items-center justify-center text-white hover:text-theme-neutral80 focus:text-theme-neutral80 mr-1  hidden-arrow flex items-center"
              to="/shopping-cart"
            >
              <Icon kind="cart" size={20}></Icon>
              <span className=" w-4 h-4 text-white bg-red-700 absolute rounded-full text-xs -mt-2 ml-2 py-0 px-1.5">
                {cartCount}
              </span>
            </Link>
            <Link
              className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:text-theme-neutral80 focus:text-theme-neutral80 mr-1  hidden-arrow flex items-center"
              to="/my-profile"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
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
