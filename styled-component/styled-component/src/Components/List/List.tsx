import React from 'react';
import ListContent from './ListContent';
import { IListComponent, ListContentWrapper } from './style';
import { BookmarkedListItems } from '../../Utils/Constants';

const ListComponent: React.FC<IListComponent> = () => {
  return (
    <ListContentWrapper>
      {BookmarkedListItems.map((items, index) => (
        <ListContent
          key={index}
          index={index}
          heading={items.heading}
          articleTypeIcon={items.articleType}
          articleTypeText={items.articleType}
          techTypeText={items.techTypeText}
          techTypeIcon={items.techTypeIcon}
          viewsIcon={items.viewsIcon}
          viewsText={items.viewsText}
          articleType={items.articleType}
          impact={items.impact}
          label={items.label}
          image={items.image}
        />
      ))}
    </ListContentWrapper>
  );
};

export default ListComponent;
