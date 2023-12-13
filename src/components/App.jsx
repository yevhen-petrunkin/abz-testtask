import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import { Button, Heading, Paragraph, Logo, Avatar, Container, Loader } from '.';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Loader
          style={{
            width: '200px',
            height: '200px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Avatar />
        <Logo />
        <Button text="Users" option="users" disabled />
        <Button text="Sign up" />
        <Heading text="lorem ipsum" option="h1" />
        <Heading text="lorem ipsum" option="h2" />
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti facilis tempora ducimus animi ab rerum est? Deleniti repudiandae in, quis minima distinctio pariatur illum maiores dolorem et assumenda ipsa sed hic nisi sunt. Quos facilis quas maxime eum totam."
          isHero
        />
        <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti facilis tempora ducimus animi ab rerum est? Deleniti repudiandae in, quis minima distinctio pariatur illum maiores dolorem et assumenda ipsa sed hic nisi sunt. Quos facilis quas maxime eum totam." />
      </Container>
    </ThemeProvider>
  );
};

export default App;
