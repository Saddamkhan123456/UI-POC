import { Box, Card, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { KBChip } from "../Chip/Chip";
import { ImpactDateWrap, KbBookmarkCard, SearchResultCardTitle } from "./style";
import Icon from "../Icons/Icons";


interface BookmarkProps {
  heading?: string;
  description?: string;
  imageName?: string;
  image?: string;
  color?: string;
  isBookmarkCard?: boolean;
  impact?: string;
  date?: string;
}

export const BookmarkCard = ({
  heading,
  description,
  image,
  imageName = image,
  isBookmarkCard,
  impact = 'High Impact',
  date,
}: BookmarkProps) => {
  return (
    <ThemeProvider theme={theme}>
      <KbBookmarkCard className={isBookmarkCard ? 'card-bookmark' : 'card-search-result'}>
        <Box component="div" className="img-wrap">
          <CardMedia component="img" height="100" className="card-img" image={image} alt={imageName} />
        </Box>
        {isBookmarkCard && <>
          <BookmarkHeading heading={heading} />
          <BookmarkDescription description={description} />
        </>}
        {!isBookmarkCard && <Box flexGrow={1} position={'relative'} paddingRight={'1rem'}>
          <Typography className="bookmark-search-result-card">
            <Icon kind={'bookmark-outlined'} />
          </Typography>
          <SearchResultCardTitle>{heading}</SearchResultCardTitle>
          <Breadcrumb />
          <ImpactDateWrap>
            <KBChip
              impact={impact}
            />
            <Typography color={'#343434'} fontSize={'1rem'}>{date}</Typography>
          </ImpactDateWrap>
        </Box>}
      </KbBookmarkCard>
    </ThemeProvider>
  );
};


const KbBookmarkHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 500,
  lineHeight: 1.37,
  paddingTop: "1rem",
}));

export const BookmarkHeading = ({ heading }: BookmarkProps) => {
  return (
    <KbBookmarkHeading variant="h5" align="left">
      {heading}
    </KbBookmarkHeading>
  );
};

const KbBookmarkDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 400,
  lineHeight: 1.14,
  marginTop: "0.5rem",
}));

export const BookmarkDescription = ({ description }: BookmarkProps) => {
  return (
    <KbBookmarkDesc variant="body1" align="left">
      {description}
    </KbBookmarkDesc>
  );
};
