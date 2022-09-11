import "./App.css";
import { Footer } from "./atoms/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";
import { CartProvider } from './Contexts/cart.context'
import { WishlistProvider } from "./Contexts/wishlist.context";
import { OrderProvider } from "./Contexts/order.context";

function App() {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
        <OrderProvider>
        <div className="flex flex-col h-full overflow-auto">
          <Navbar />
          <div className="h-full overflow-auto flex flex-col">
            <RouteConfig />
            <Footer />
          </div>
        </div>
        </OrderProvider>
        </WishlistProvider>
      </CartProvider>
    </>
  );
}

export default App;
