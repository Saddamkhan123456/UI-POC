import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import image1 from "../../Assets/Images/imagelist.png";
import Typography from "../Atoms/Typography";
import {
  FaRegCircleUser,
  FaBookSkull,
  FaRegNewspaper,
  FaRegBookmark,
} from "react-icons/fa6";
import Chip from "../Atoms/Chip";

const listContainerStyles = css`
  display: flex;
  align-items: top;
  padding: 1rem 0;
  position: relative;
`;

const listImageWrapperStyles = css`
  width: 15rem;
  height: 8rem;
  position: relative;
`;
const listImageStyles = css`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
`;

const listContentStyles = css`
  width: calc(100% - 15rem);
  padding-left: 2.5rem;
`;

const listTagsStyles = css`
  display: flex;
  padding: 0.875rem 0 0.625rem;
`;
const listTagsItemsStyles = css`
  display: flex;
  align-items: center;
  border-right: 1px solid #666666;
  padding: 0 0.75rem;
  &:first-child {
    padding-left: 0rem;
  }
  &:last-child {
    border: none;
  }
`;

const listTagsIconStyles = css`
  padding-right: 3px;
  line-height: 0;
`;

const chipWrapperStyles = css`
  display: flex;
  justify-content: space-between;
`;

const bookmarkIcon = css`
  position: absolute;
  right: 0rem;
  top: 0.5rem;
  color: #c3c5ca;
`;

const ListContainer = styled.div`
  ${listContainerStyles}
`;

const ListImageWrapper = styled.div`
  ${listImageWrapperStyles}
`;

const ListImage = styled.img`
  ${listImageStyles}
`;

const ListContent = styled.div`
  ${listContentStyles}
`;
const ListTags = styled.div`
  ${listTagsStyles}
`;

const ListTagItem = styled.div`
  ${listTagsItemsStyles}
`;

const ListTagIcon = styled.div`
  ${listTagsIconStyles}
`;

const ChipWrapper = styled.div`
  ${chipWrapperStyles}
`;
const BookmarkIcon = styled.div`
  ${bookmarkIcon}
`;

// Define the props interface
export interface ListRowProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ListRow: React.FC<ListRowProps> = ({ children, style }) => {
  return (
    <ListContainer>
      <BookmarkIcon>
        <FaRegBookmark />
      </BookmarkIcon>
      <ListImageWrapper>
        <ListImage src={image1} alt="image1" />
      </ListImageWrapper>
      <ListContent>
        <Typography
          variant="h6"
          fontWeight="bolder"
          text="Handling and lowering the Boot Up Process: Spot Termination Issue in ACE RTB Servers"
        />
        <ListTags>
          <ListTagItem>
            <ListTagIcon>
              <FaBookSkull size={14} color="#4556AF" />
            </ListTagIcon>
            <Typography variant="body" text="Hard Problem" color="#4556AF" />
          </ListTagItem>
          <ListTagItem>
            <ListTagIcon>
              <FaRegNewspaper size={14} />
            </ListTagIcon>
            <Typography variant="body" text="Apache Kafka" color="#666666" />
          </ListTagItem>
          <ListTagItem>
            <ListTagIcon>
              <FaRegCircleUser size={14} />
            </ListTagIcon>
            <Typography
              variant="body"
              text="Rahul Kulkarni +3 more"
              color="#666666"
            />
          </ListTagItem>
        </ListTags>
        <ChipWrapper>
          <Chip
            label="MEDIUM IMPACT"
            size="small"
            backgroundColor="#F0AD56"
            color="#fff"
          />
          <Typography variant="body" text="26 Nov ‘22" color="#343434" />
        </ChipWrapper>
      </ListContent>
    </ListContainer>
  );
};

export default ListRow;
