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

export const KbTechDigestCard = styled(Box)(({ theme }) => ({
    // maxWidth: '14.625rem',
    '& .cardContainer': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& .tech-digest-img': {
        width: '14.625rem',
        height: '6.25rem',
        boxShadow: '0px 0px 10px 0px #B8BCC040',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        '&. card-img': {
            width: '100%',
        },
    },
    '& .tech-digest-title': {
        color: '#343434',
        fontSize: '1.25rem',
        lineHeight: 1.1,
        fontWeight: 500,
        marginTop: '1rem',
        textDecoration: 'none',
        '& :hover': {

        }
    }

}));

export const ImpactDateWrap = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));