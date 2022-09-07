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
      <h1 className="text-xl pb-3 border-b mb-3 capitalize leading-none">
        {category}
      </h1>
      <div className="grid grid-cols-5 gap-8">
        {CardPropsSets &&
          CardPropsSets.length > 0 &&
          CardPropsSets.map((CardPropsSet: any) => {
            return (
              <Card
                key={CardPropsSet.id}
                className={`p-3 cursor-pointer category-card ${className}`}
              >
                <Link
                  to={`/product/${category}/${CardPropsSet.type.toLowerCase()}`}
                >
                  <CardBody className="h-full">
                    <h2 className="font-bold mb-1 text-xl text-theme-neutral capitalize px-1">
                      {CardPropsSet.type}
                    </h2>
                    <img
                      src={CardPropsSet.image}
                      alt=""
                      className="object-contain pt-8"
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
