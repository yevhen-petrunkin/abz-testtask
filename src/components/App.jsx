import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
