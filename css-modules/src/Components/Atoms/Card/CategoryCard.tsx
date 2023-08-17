import React from "react";
import CardBody from "./CardBody";

interface CategoryCardProps {
  categoryIcon: string;
  title: string;
  href: string;
}

const CategoryCard = ({ categoryIcon, title, href }: CategoryCardProps) => {
  return <CardBody href={href} categoryIcon={categoryIcon} title={title} cardType="category-card" />;
};

export default CategoryCard;
