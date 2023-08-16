import { Box, Card, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';


interface BookmarkProps {
  heading?: string;
  description?: string;
  imageName?: string;
  image?: string;
  color?: string;
}

const KbBookmarkCard = styled(Card)(({ theme }) => ({
  // color: theme.palette.primary.main,
  boxShadow: "none",
  flexDirection: "column",
  border: "none",
  marginBottom: "1.5rem",
  backgroundColor: "transparent",
  "& .img-wrap": {
    position: 'relative',
    overflow: 'hidden',
    // maxWidth: '300px',
    borderRadius: "0.375rem",
    zIndex: 1,
    "& :after": {
      content: '" "',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: '#e5e5e5',
      opacity: 0,
      transition: '.5s ease all',
    }
  },
  "& .card-img": {
    transition: '.5s ease all',
    objectFit: 'cover',
    "&:hover": {
      transform: "scale(1.1)",
    }
  },

}));

export const BookmarkCard = ({
  heading,
  description,
  imageName,
  image,
}: BookmarkProps) => {
  return (
    <ThemeProvider theme={theme}>
      <KbBookmarkCard>
        <Box component="div" className="img-wrap">
          <CardMedia component="img" height="100" className="card-img" image={image} alt={imageName} />
        </Box>

        <BookmarkHeading heading={heading} />
        <BookmarkDescription description={description} />
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
