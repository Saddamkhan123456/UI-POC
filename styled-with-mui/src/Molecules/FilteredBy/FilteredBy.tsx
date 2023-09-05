import { Box, Stack, Typography } from '@mui/material';
import { KBBadge } from '../../Components/Badge/Badge';


export const FilteredBy = () => {
    return (
        <Box style={{ paddingTop: '2rem' }}>
            <Typography sx={{
                marginBottom: '1rem', fontSize: '0.875rem', color: '#343434', fontWeight: '500'
            }}>Filtered By :</Typography>
            <Stack direction="row">
                <KBBadge
                    label='DummyFilter_1'
                />
            </Stack>
        </Box>
    );
};