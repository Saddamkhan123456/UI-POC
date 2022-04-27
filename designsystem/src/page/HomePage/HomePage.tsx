import { Banner } from "../../atoms/card/Banner";
import { ProductCard } from "../../atoms/card/Card";
import { Navbar } from "../../atoms/navbar";

export interface HomePageProps {}
const data = [
  { item: "Batsman", url: "#" },
  { item: "India", url: "#" },
  { item: "RCB", url: "#" },
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const length = numbers.length;
export const HomePage = () => {
  return (
    <main className="app-wrap h-full flex overflow-hidden">
      <div className="w-full h-full flex flex-col">
        <div className="top-header bg-theme-mainBlue">
          <Navbar />
        </div>
        <section className="w-full p-3 h-full overflow-auto">
          <Banner />
          <div className="grid grid-cols-3 gap-4">
            <ProductCard />
          </div>
        </section>
      </div>
    </main>
  );
};
