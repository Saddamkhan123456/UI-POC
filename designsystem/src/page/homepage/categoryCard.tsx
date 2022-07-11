import React, { useState } from "react";
import { Card, CardBody } from "design-system";

export interface CardProps {
  CardPropsSets: CardPropsSets[];
  category?: string;
}

export interface CardPropsSets {
  Image?: string;
  Type?: string;
}

export const CategoryCard = ({ CardPropsSets, category }: CardProps) => {
  return (
    <>
      <h1 className="pb-3 border-b mb-3 capitalize">{category}</h1>
      <div className="grid grid-cols-3 gap-3">
        {CardPropsSets &&
          CardPropsSets.length > 0 &&
          CardPropsSets.map((CardPropsSet: any) => {
            return (
              <>
                <Card className="cursor-pointer pt-3 bg-theme-neutral">
                  <CardBody className=" ">
                    <img
                      src={CardPropsSet.Image}
                      alt=""
                      className="object-contain"
                    />
                    <h2 className="font-bold mt-2 text-2xl text-theme-white">
                      {CardPropsSet.Type}
                    </h2>
                  </CardBody>
                </Card>
              </>
            );
          })}
      </div>
    </>
  );
};
