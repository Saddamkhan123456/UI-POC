import { Box, CardMedia } from "@mui/material";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { KBChip } from "../Chip/Chip";
import { BookmarkDate, BookmarkIcon, BookmarkImageWrap, ImpactDateWrap, KbBookmarkCard, KbBookmarkDesc, KbBookmarkHeading, SearchResultCardTitle } from "./style";
import Icon from "../Icons/Icons";


interface BookmarkProps {
  heading?: string;
  description?: string;
  imageName?: string;
  image?: string;
  color?: string;
  isBookmarkCard?: boolean;
  label?: string;
  date?: string;
  type?: string;
}

export const BookmarkCard = ({
  heading,
  description,
  image,
  imageName = image,
  isBookmarkCard,
  label = 'High Impact',
  type,
  date,
}: BookmarkProps) => {
  return (
    <ThemeProvider theme={theme}>
      <KbBookmarkCard className={isBookmarkCard ? 'card-bookmark' : 'card-search-result'}>
        <BookmarkImageWrap component="div" className="img-wrap">
          <CardMedia component="img" height="100" className="card-img" image={image} alt={imageName} />
        </BookmarkImageWrap>
        {isBookmarkCard && <>
          <BookmarkHeading heading={heading} />
          <BookmarkDescription description={description} />
        </>}
        {!isBookmarkCard && <Box flexGrow={1} position={'relative'} paddingRight={'1rem'}>
          <BookmarkIcon>
            <Icon kind={'bookmark-outlined'} />
          </BookmarkIcon>
          <SearchResultCardTitle>{heading}</SearchResultCardTitle>
          <Breadcrumb />
          <ImpactDateWrap>
            <KBChip
              label={label}
              type={type}
            />
            <BookmarkDate>{date}</BookmarkDate>
          </ImpactDateWrap>
        </Box>}
      </KbBookmarkCard>
    </ThemeProvider>
  );
};


// const KbBookmarkHeading = styled(Typography)(({ theme }) => ({
//   color: theme.palette.primary.dark,
//   fontWeight: 500,
//   lineHeight: 1.37,
//   paddingTop: "1rem",
// }));

export const BookmarkHeading = ({ heading }: BookmarkProps) => {
  return (
    <KbBookmarkHeading variant="h5" align="left">
      {heading}
    </KbBookmarkHeading>
  );
};

export const BookmarkDescription = ({ description }: BookmarkProps) => {
  return (
    <KbBookmarkDesc variant="body1" align="left">
      {description}
    </KbBookmarkDesc>
  );
};
