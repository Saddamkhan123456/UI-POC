import "./App.css";
import { Footer } from "./atoms/footer";
import { Navbar } from "./atoms/navbar/navbar";
import RouteConfig from "./Route/RouteConfig";

function App() {
  return (
    <>
      <div className="flex flex-col h-full overflow-scroll">
        <Navbar />
        <div className="h-full overflow-scroll h-100">
          <RouteConfig />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
