import { Card, CardBody } from "design-system";
import { Link } from "react-router-dom";
import classNames from "classnames";

export interface CardProps {
  CardPropsSets: CardPropsSets[];
  category?: string;
  className?: string;
  isCategoryShow: boolean;
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
  isCategoryShow,
}: CardProps) => {
  return (
    <>
      <h1 className="text-xl pb-3 border-b mb-5 capitalize leading-none">
        {category}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {CardPropsSets &&
          CardPropsSets.length > 0 &&
          CardPropsSets.map((CardPropsSet: any) => {
            return (
              <Card
                key={CardPropsSet.id}
                className={`cursor-pointer ${className}`}
              >
                <Link
                  to={`/product/${category}/${CardPropsSet.type.toLowerCase()}`}
                >
                  <CardBody className="h-full">
                    <h2
                      className={classNames(
                        isCategoryShow
                          ? "font-medium mb-1 text-lg px-5 py-1 text-theme-neutral bg-theme-white capitalize card-heading"
                          : "hidden"
                      )}
                    >
                      {CardPropsSet.type}
                    </h2>
                    <img
                      src={CardPropsSet.image}
                      alt=""
                      className={`object-fit ${
                        category === "brand" ? "w-1/2 m-auto" : ""
                      }`}
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
