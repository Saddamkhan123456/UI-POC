import React from 'react';
import Badge from '../Badge/Badge';
import BreadcrumbTwo from '../Breadcrumb/BreadcrumbTwo';
import { ListStyle, RightSection, RightDetailSection } from './style';

interface IListContent {
  index: number;
  image?: string;
  heading?: string;
}

const ListContent: React.FC<IListContent> = ({ index, image, heading }) => {
  const impact = ''; // Define impact
  const label = ''; // Define label

  const items = [
    { text: 'hard problem', kind: 'hard-problem', type: 'hard-problem' },
    { text: 'BLOGS & TL ARTICLES', kind: 'blogs', type: 'blog' },
    { text: 'Apache Kafka', kind: 'library-books', type: '' },
  ];

  return (
    <ListStyle>
      <img src={image} alt={heading || 'title'} className='item-image' />
      <RightSection className='item-text'>
        <h1>{heading}</h1>
        <RightDetailSection>
          <BreadcrumbTwo items={items} />
          <Badge impact={impact} label={label} />
        </RightDetailSection>
      </RightSection>
    </ListStyle>
  );
};

export default ListContent;
