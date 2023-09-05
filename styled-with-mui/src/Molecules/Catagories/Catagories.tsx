
import { Box, Container, Grid } from '@mui/material';
import { CategoryCard } from '../../Components/Card/CategoryCard';
import { categoryCardData } from './data';

export const Catagories = () => {
    return (
        <Box style={{ position: 'relative', top: '-5.625rem', paddingBottom: '5rem', borderBottom: '1px solid #BEBEBE' }}>
            <Container sx={{ maxWidth: '1200px' }}>
                <Grid container spacing={4} >
                    {categoryCardData.map((item, i) => (
                        <Grid item xs={3}>
                            <CategoryCard
                                link='/'
                                alt={item.category_name}
                                icon={item.icon}
                                categoryName={item.category_name}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
