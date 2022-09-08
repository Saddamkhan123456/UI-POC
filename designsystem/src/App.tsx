import "./App.css";
import { Footer } from "./atoms/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";
import { CartProvider } from './Contexts/cart.context'
import { WishlistProvider } from "./Contexts/wishlist.context";

function App() {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
        <div className="flex flex-col h-full overflow-auto">
          <Navbar />
          <div className="h-full overflow-auto flex flex-col">
            <RouteConfig />
            <Footer />
          </div>
        </div>
        </WishlistProvider>
      </CartProvider>
    </>
  );
}

export default App;
