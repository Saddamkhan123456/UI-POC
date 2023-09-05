import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import Breadcrumb from './Breadcrumb';
import { Link, Typography } from '@mui/material';

const meta = {
    title: 'Atoms/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <Breadcrumb />
        </ThemeProvider>
    );
};

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
        MUI
    </Link>,
    <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
    >
        Core
    </Link>,
    <Typography key="3" color="text.primary">
        Breadcrumb
    </Typography>,
];

export const NavBread = () => {
    return (
        <ThemeProvider theme={theme}>
            <Breadcrumb isNavBreadcrumb breadcrumbs={breadcrumbs} />
        </ThemeProvider>
    );
};