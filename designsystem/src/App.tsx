import "./App.css";
import { Footer } from "./atoms/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";
import { CartProvider } from './Contexts/cart.context'

function App() {
  return (
    <>
      <CartProvider>
        <div className="flex flex-col h-full overflow-scroll">
          <Navbar />
          <div className="h-full overflow-scroll flex flex-col h-full">
            <RouteConfig />
            <Footer />
          </div>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
