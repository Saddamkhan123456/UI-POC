import React, { useState } from 'react';
import Badge from '../Badge/Badge';
import { ListStyle, RightSection, RightDetailSection, DateWrapper, ListFooterWrapper, Bookmark } from './style';
import BreadcrumbCustom, { IBreadcrumbCustomProps } from '../Breadcrumb/BreadcrumbCustom';
import { ListH1 } from '../../Assets/Styles/Utils';
import Icon from '../../Assets/Icons/Icon';

interface IListContent extends IBreadcrumbCustomProps {
  index: number;
  image?: string;
  heading?: string;
  impact?: string;
  label?: string;
  date: string;
}

const ListContent: React.FC<IListContent> = ({
  index,
  image,
  heading,
  impact,
  label,
  articleTypeIcon,
  articleTypeText,
  techTypeText,
  techTypeIcon,
  viewsIcon,
  viewsText,
  articleType,
  date,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleIcon = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <ListStyle>
      <img src={image} alt={heading || 'title'} width={250} height={130} style={{ borderRadius: '0.375rem' }} />
      <RightSection className='item-text'>
        <ListH1 hasMargin={false}>{heading}</ListH1>
        <RightDetailSection>
          <BreadcrumbCustom
            articleTypeIcon={articleTypeIcon}
            articleTypeText={articleTypeText}
            techTypeText={techTypeText}
            techTypeIcon={techTypeIcon}
            viewsIcon={viewsIcon}
            viewsText={viewsText}
            articleType={articleType}
          />
          <ListFooterWrapper>
            <Badge impact={impact} label={label} />
            <DateWrapper>{date}</DateWrapper>
          </ListFooterWrapper>
        </RightDetailSection>
      </RightSection>
      <Bookmark onClick={toggleIcon}>
        <Icon kind={isBookmarked ? 'bookmark' : 'bookmarked'} width={16} height={20} />
      </Bookmark>
    </ListStyle>
  );
};

export default ListContent;
