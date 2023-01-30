import "./App.css";
import { Footer } from "./atoms/footer/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";
import { CartProvider } from "./Contexts/cart.context";
import { WishlistProvider } from "./Contexts/wishlist.context";
import { OrderProvider } from "./Contexts/order.context";
import { Provider } from "react-redux";
import store from "./store/configureStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
