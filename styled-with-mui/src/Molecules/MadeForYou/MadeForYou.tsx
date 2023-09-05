import { Box, Container, Grid, Typography } from '@mui/material';
import { MadeForYouCard } from '../../Components/Card/MadeForYouCard';
import { madeForYouCardData } from './data';

export const MadeForYou = () => {
    return (
        <Box style={{ paddingBlock: '3.75rem', borderBottom: '1px solid #BEBEBE' }}>
            <Container sx={{ maxWidth: '1200px' }}>
                <Typography variant='h4' style={{ marginBottom: '1.5rem', }}>Made For You</Typography>
                <Grid container spacing={12} >
                    {madeForYouCardData.map((item, i) => (
                        <Grid item xs={4}>
                            <MadeForYouCard
                                link={item.link}
                                title={item.title}
                                src={item.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
