import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import { Button } from '.';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button text="Users" option="users" disabled />
      </div>
    </ThemeProvider>
  );
};

export default App;
