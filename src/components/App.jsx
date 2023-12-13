import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import { Button, Heading } from '.';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button text="Users" option="users" disabled />
        <Button text="Sign up" />
        <Heading text="lorem ipsum" option="h1" />
        <Heading text="lorem ipsum" option="h2" />
      </div>
    </ThemeProvider>
  );
};

export default App;
