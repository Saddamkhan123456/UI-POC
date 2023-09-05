import { Container, List, ListItem, Typography } from "@mui/material";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import { searchResultListData } from "./data";
import { BookmarkCard } from "../../Components/Card/BookmarkCard";


interface SearchListProps {
}

export const SearchList = ({
}: SearchListProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ maxWidth: '1200px' }}>
                <List sx={{ width: '100%' }}>
                    {searchResultListData.map((data, index) => (
                        <ListItem sx={{ margin: 0, padding: 0, width: '100%' }}>
                            <BookmarkCard date={data.date} heading={data.heading} image={data.image} impact={data.impact} />
                        </ListItem>
                    ))}
                </List>
            </Container>

        </ThemeProvider>
    );
};