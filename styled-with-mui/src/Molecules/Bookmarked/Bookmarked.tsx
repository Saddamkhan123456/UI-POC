import { Box, Container, Grid, Typography } from '@mui/material';
import { bookmarkCardData } from './data';
import { BookmarkCard } from '../../Components/Card/BookmarkCard';

export const Bookmarked = () => {
    return (
        <Box style={{ paddingBottom: '3.75rem', borderBottom: '1px solid #BEBEBE' }}>
            <Container sx={{ maxWidth: '1200px' }}>
                <Typography variant='h4' style={{ marginBottom: '1.5rem', }}>Bookmarked</Typography>
                <Grid container spacing={12} >
                    {bookmarkCardData.map((item, i) => (
                        <Grid item xs={3}>
                            <BookmarkCard
                                isBookmarkCard
                                heading={item.heading}
                                description={item.description}
                                image={item.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
