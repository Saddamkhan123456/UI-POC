import * as React from "react";
import { HTMLAttributes } from "react";
import { Card, CardBody } from "design-system";
import Icon from "../icons/icon";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import { useContext } from "react";
import ItemCard from "../itemCard/itemCard";
import EmptyShoppingCart from "../emptyShoppingCart/emptyShoppingCart";
import OffCanvasComponent from "../offcanvas/offcanvas";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  Closed?: boolean;
}
export const WishlistComponent = ({
  collapsed = false,
  Closed,
  ...props
}: NavbarProps) => {
  const [open, setOpen] = React.useState(false);
  const { saveCartItem } = React.useContext(CartContext);
  const { wishlistItems, flushWishlistItem } = useContext(WishlistContext);
  const { wishlistCount } = useContext(WishlistContext);

  return (
    <>
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
                  <div className="h-full flex flex-col">
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
    </>
  );
};

export default WishlistComponent;
