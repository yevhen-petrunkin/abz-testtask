import Typography from '@mui/material/Typography';

const Heading = ({ text, option = 'h2', style = {} }) => {
  return (
    <Typography
      variant={option}
      component={option}
      color={option === 'h1' ? 'alternate.main' : 'secondary.dark'}
      sx={{ textAlign: 'center', ...style }}
    >
      {text}
    </Typography>
  );
};

export default Heading;
