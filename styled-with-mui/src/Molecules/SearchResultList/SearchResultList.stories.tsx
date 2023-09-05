import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import { SearchList } from './SearchResultList';


const meta = {
    title: 'Atoms/Search List',
    component: SearchList,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <SearchList />
        </ThemeProvider>
    );
};