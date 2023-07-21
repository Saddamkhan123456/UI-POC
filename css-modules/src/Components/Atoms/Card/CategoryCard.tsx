import React from 'react';
import Card from './Card';
import CardBody from './CardBody';

interface CategoryCardProps {
  categoryIcon: string;
  title: string;
}

const CategoryCard = ({ categoryIcon, title }: CategoryCardProps) => {
  return (
    <Card>
      <CardBody categoryIcon={categoryIcon} title={title} cardType='category-card' />
    </Card>
  );
};

export default CategoryCard;
