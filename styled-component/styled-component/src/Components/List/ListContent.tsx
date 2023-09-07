import React from 'react';
import Badge from '../Badge/Badge';
import { ListStyle, RightSection, RightDetailSection, DateWrapper, ListFooterWrapper } from './style';
import BreadcrumbCustom, { IBreadcrumbCustomProps } from '../Breadcrumb/BreadcrumbCustom';
import { ListH1 } from '../../Assets/Styles/Utils';

interface IListContent extends IBreadcrumbCustomProps {
  index: number;
  image?: string;
  heading?: string;
  impact?: string;
  label?: string;
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
}) => {
  return (
    <ListStyle>
      <img src={image} alt={heading || 'title'} width={250} height={130} style={{ borderRadius: '6px' }} />
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
            <DateWrapper></DateWrapper>
          </ListFooterWrapper>
        </RightDetailSection>
      </RightSection>
    </ListStyle>
  );
};

export default ListContent;
