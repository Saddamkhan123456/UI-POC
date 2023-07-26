import React from 'react';
import Card from './Card';
import CardBody from './CardBody';

interface CategoryCardProps {
  categoryIcon: string;
  title: string;
  href: string;
}

const CategoryCard = ({ categoryIcon, title, href }: CategoryCardProps) => {
  return (
    <Card>
      <CardBody href={href} categoryIcon={categoryIcon} title={title} cardType='category-card' />
    </Card>
  );
};

export default CategoryCard;
