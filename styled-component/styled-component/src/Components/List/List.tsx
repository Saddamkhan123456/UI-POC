import React from 'react';
import ListContent from './ListContent';

interface IListComponent {
  items: {
    text: string;
    kind: string;
    type: string;
  }[];
}

const ListComponent: React.FC<IListComponent> = ({ items }) => {
  return (
    <ul>
      {Array.isArray(items) &&
        items.map((item, index) => <ListContent key={index} index={index} heading={item.text} data={item} />)}
    </ul>
  );
};

export default ListComponent;
