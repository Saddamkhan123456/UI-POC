import React from 'react';
import { ArticleText, BreadcrumbTwoContainer, SubSectionDiv, Text } from './styles';
import Icon from '../../Assets/Icons/Icon';
import { Link } from 'react-router-dom';

export interface IBreadcrumbCustomProps {
  articleTypeIcon?: 'blog' | 'hard-problem' | any;
  articleTypeText?: any;
  techTypeText?: any;
  techTypeIcon?: any;
  viewsIcon?: any;
  viewsText?: any;
  articleType?: 'blog' | 'hard-problem' | any;
}

const BreadcrumbCustom: React.FC<IBreadcrumbCustomProps> = ({
  techTypeText,
  techTypeIcon,
  viewsIcon,
  viewsText,
  articleType,
}: IBreadcrumbCustomProps) => {
  return (
    <>
      <BreadcrumbTwoContainer>
        <SubSectionDiv>
          <Icon
            width={20}
            height={20}
            kind={articleType === 'blog' ? 'blogs' : articleType === 'hard-problem' ? 'hard-problem' : ''}
          />
          <ArticleText articleType={articleType}>
            {articleType === 'blog' ? 'BLOGS & TL ARTICLES' : articleType === 'hard-problem' ? 'Hard Problem' : ''}
          </ArticleText>
        </SubSectionDiv>
        <SubSectionDiv>
          <Icon width={20} height={20} kind={techTypeIcon} />
          <Text>{techTypeText}</Text>
        </SubSectionDiv>
        <SubSectionDiv>
          <Icon width={20} height={20} kind={viewsIcon} />
          <Text>
            {viewsText}
            {<Link to='javascript:;'>{' +3 more'}</Link>}
          </Text>
        </SubSectionDiv>
      </BreadcrumbTwoContainer>
    </>
  );
};

export default BreadcrumbCustom;
