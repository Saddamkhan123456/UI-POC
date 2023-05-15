import { Card } from "design-system";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { imageBaseUrl } from "../constants/constants";
import Spinner from "../atoms/spinner/spinner";

export interface CardProps {
  CardPropsSets: CardPropsSets[];
  category?: string;
  className?: string;
  isCategoryShow: boolean;
  loading?: boolean;
}

export interface CardPropsSets {
  _id: number;
  title?: string;
  image?: string;
  banner?: string;
  thumbnail?: string;
  type?: string;
  link?: string;
}

export const CategoryCard = ({
  CardPropsSets,
  category,
  className,
  isCategoryShow,
  loading,
}: CardProps) => {
  return (
    <>
      <h1 className="text-xl pb-3 border-b mb-5 capitalize leading-none px-1 md:px-0">
        {category}
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
          {CardPropsSets &&
            CardPropsSets.length > 0 &&
            CardPropsSets.map((CardPropsSet: CardPropsSets) => {
              return (
                <Card
                  key={CardPropsSet._id}
                  className={`cursor-pointer ${className}`}
                >
                  <Link
                    to={`/product/${category}/${CardPropsSet.title.toLocaleLowerCase()}`}
                    state={{
                      id: CardPropsSet._id,
                    }}
                  >
                    <div className="h-full">
                      <h2
                        className={classNames(
                          isCategoryShow
                            ? "font-medium mb-1 text-lg px-5 py-1 text-theme-neutral bg-theme-white capitalize card-heading"
                            : "hidden"
                        )}
                      >
                        {CardPropsSet.title}
                      </h2>
                      <img
                        src={
                          category === "brand"
                            ? `${imageBaseUrl}${CardPropsSet.image}`
                            : `${imageBaseUrl}${CardPropsSet.thumbnail}`
                        }
                        alt={CardPropsSet.title}
                        className={`object-fit ${
                          category === "brand" ? "w-1/2 m-auto" : ""
                        }`}
                      />
                    </div>
                  </Link>
                </Card>
              );
            })}
        </div>
      )}
    </>
  );
};
