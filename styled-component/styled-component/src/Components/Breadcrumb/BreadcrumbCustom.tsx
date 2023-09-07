import React from 'react';
import { ArticleText, BreadcrumbTwoContainer, SubSectionDiv, Text } from './styles';
import Icon from '../../Assets/Icons/Icon';

export interface IBreadcrumbCustom {
  articleTypeIcon: string;
  articleTypeText: string;
  techTypeText: string;
  techTypeIcon: string;
  viewsIcon: string;
  viewsText: string;
  articleType: 'blog' | 'hard-problem' | string;
}

const BreadcrumbCustom = ({
  articleTypeIcon,
  articleTypeText,
  techTypeText,
  techTypeIcon,
  viewsIcon,
  viewsText,
  articleType,
}: IBreadcrumbCustom) => {
  return (
    <>
      <BreadcrumbTwoContainer>
        <SubSectionDiv>
          <Icon kind={articleTypeIcon} />
          <ArticleText articleType={articleType}>{articleTypeText}</ArticleText>
        </SubSectionDiv>
        <SubSectionDiv>
          <Icon kind={techTypeIcon} />
          <Text articleType={articleType}>{techTypeText}</Text>
        </SubSectionDiv>
        <SubSectionDiv>
          <Icon kind={viewsIcon} />
          <Text articleType={articleType}>{viewsText}</Text>
        </SubSectionDiv>
      </BreadcrumbTwoContainer>
    </>
  );
};

export default BreadcrumbCustom;
