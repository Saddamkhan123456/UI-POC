import { styled } from "@mui/material/styles";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import theme from '../../theme';


export const KbBookmarkCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  flexDirection: "column",
  border: "none",
  marginBottom: "1.5rem",
  backgroundColor: "transparent",
    '&.card-search-result': {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0',
        paddingBlock: '2.5rem',
        borderBottom: '1px solid #bebebe',
        paddingRight: '3rem',
        marginBottom: '0',
        width: '100%',
            "& .img-wrap": {
            borderRadius: "0.375rem",
            maxWidth: '15.625rem',
            marginRight: '2.5rem',
            background: '#fff',
        },
        "& .MuiBreadcrumbs-root": {
            marginBottom: '0.5rem',
        }
  },
  "& .img-wrap": {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: "0.375rem",
    background: '#fff',
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
    height: '100%',
    "&:hover": {
      transform: "scale(1.1)",
    }
    },
    "& .bookmark-search-result-card": {
        position: 'absolute',
        right: 0,
  }

}));

export const SearchResultCardTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.4,
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: '0.75rem',
    maxWidth: '40rem',
}));



export const ImpactDateWrap = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));