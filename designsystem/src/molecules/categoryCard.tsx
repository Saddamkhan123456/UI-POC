import { Card, CardBody } from "design-system";
import { Link } from "react-router-dom";

export interface CardProps {
  CardPropsSets: CardPropsSets[];
  category?: string;
  className?: string;
}

export interface CardPropsSets {
  id: number;
  image?: string;
  type?: string;
  link?: string;
}

export const CategoryCard = ({
  CardPropsSets,
  category,
  className,
}: CardProps) => {
  return (
    <>
      <h1 className="pb-3 border-b mb-3 capitalize">{category}</h1>
      <div className="grid grid-cols-3 gap-3">
        {CardPropsSets &&
          CardPropsSets.length > 0 &&
          CardPropsSets.map((CardPropsSet: any) => {
            return (
              <Card key={CardPropsSet.id} className={`p-3 cursor-pointer ${className}`}>
                <Link to={`/product/${category}/${CardPropsSet.type}`}>
                  <CardBody className=" ">
                    <h2 className="font-bold mb-1 text-xl text-theme-white">
                      {CardPropsSet.type}
                    </h2>
                    <img
                      src={CardPropsSet.image}
                      alt=""
                      className="object-contain"
                    />
                  </CardBody>
                </Link>
              </Card>
            );
          })}
      </div>
    </>
  );
};
