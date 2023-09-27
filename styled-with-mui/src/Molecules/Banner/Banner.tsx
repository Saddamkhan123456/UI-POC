import { Box, Typography } from '@mui/material';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import { dropdownData } from './data';
import CustomMenu from '../../Components/Dropdown/Dropdown';
import { FilteredBy } from '../FilteredBy/FilteredBy';
import { BannerBox, BannerHeader, DropdownWrapper, KBanner } from './style';

interface BannerProps {
    isTitle?: boolean;
    isSearchResult?: boolean;
}

export const Banner = ({ isTitle, isSearchResult }: BannerProps) => {
    return (
        <KBanner className={isSearchResult ? 'bg-transperant' : ''}>
            <BannerBox>
                {isTitle && <BannerHeader variant='h2'> Hello, how may I help you ?</BannerHeader>}
                <SearchBox id={'seachIt'} labelText={'Search for Tech Digest, Hard Problems, Blogs, TL Articles…'} />
                <DropdownWrapper>
                    {dropdownData.map((item, i) => (
                        <CustomMenu value={item.value} />
                    ))}
                </DropdownWrapper>
                {isSearchResult && <FilteredBy />}
            </BannerBox>
        </KBanner>
    );
};
