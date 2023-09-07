import React from 'react';
import { ArticleText, BreadcrumbTwoContainer, SubSectionDiv, Text } from './styles';
import Icon from '../../Assets/Icons/Icon';

export interface IBreadcrumbCustomProps {
  articleTypeIcon: 'blog' | 'hard-problem' | any;
  articleTypeText: any;
  techTypeText: any;
  techTypeIcon: any;
  viewsIcon: any;
  viewsText: any;
  articleType: 'blog' | 'hard-problem' | any;
}

const BreadcrumbCustom: React.FC<IBreadcrumbCustomProps> = ({
  articleTypeIcon,
  articleTypeText,
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
          <Icon kind={articleType === 'blog' ? 'blogs' : articleType === 'hard-problem' ? 'hard-problem' : ''} />
          <ArticleText articleType={articleType}>
            {articleType === 'blog' ? 'BLOGS & TL ARTICLES' : articleType === 'hard-problem' ? 'Hard Problem' : ''}
          </ArticleText>
        </SubSectionDiv>
        <SubSectionDiv>
          <Icon kind={techTypeIcon} />
          <Text>{techTypeText}</Text>
        </SubSectionDiv>
        <SubSectionDiv>
          <Icon kind={viewsIcon} />
          <Text>{viewsText}</Text>
        </SubSectionDiv>
      </BreadcrumbTwoContainer>
    </>
  );
};

export default BreadcrumbCustom;
