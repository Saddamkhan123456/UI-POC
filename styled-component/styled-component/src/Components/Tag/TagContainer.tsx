import React, { useState } from 'react';
import Tag from './Tag';

const TagContainer = () => {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);

  const handleTagClose = (index: any) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };
  return (
    <div>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} onClose={() => handleTagClose(index)} />
      ))}
    </div>
  );
};

export default TagContainer;
