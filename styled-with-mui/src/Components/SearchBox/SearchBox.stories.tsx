import type { Meta } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme';
import { SearchBox } from './SearchBox';


const meta = {
    title: 'Atoms/Search Input',
    component: SearchBox,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchBox>;

export default meta;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <SearchBox id={'seachIt'} labelText={'Sample'} />
        </ThemeProvider>
    );
};