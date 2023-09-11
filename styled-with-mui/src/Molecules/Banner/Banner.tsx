import { Box, Typography } from '@mui/material';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import { dropdownData } from './data';
import CustomMenu from '../../Components/Dropdown/dropdownTwo';
import { FilteredBy } from '../FilteredBy/FilteredBy';
import { KBanner } from './style';

interface BannerProps {
    isTitle?: boolean;
    isSearchResult?: boolean;
}

export const Banner = ({ isTitle, isSearchResult }: BannerProps) => {
    return (
        <KBanner className={isSearchResult ? 'bg-transperant' : ''}>
            <Box style={{ maxWidth: '48.25rem', margin: '0 auto' }}>
                {isTitle && <Typography variant='h2' style={{ textAlign: 'center', marginBottom: '1.875rem' }}>
                    Hello, how may I help you ?</Typography>}
                <SearchBox id={'seachIt'} labelText={'Search for Tech Digest, Hard Problems, Blogs, TL Articles…'} />
                <Box className='dropdownWrapper' style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    {dropdownData.map((item, i) => (
                        <CustomMenu value={item.value} />
                    ))}
                </Box>
                {isSearchResult && <FilteredBy />}
            </Box>
        </KBanner>
    );
};
