import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { CloseIcon, TagContainer } from './styles';
interface ITag {
  text: string;
  onClose: any;
}
const Tag = ({ text, onClose }: ITag) => {
  return (
    <TagContainer>
      {text}
      <Icon kind='close' width={10} height={10} />
    </TagContainer>
  );
};

export default Tag;
