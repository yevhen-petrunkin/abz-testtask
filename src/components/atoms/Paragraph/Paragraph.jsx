import Typography from '@mui/material/Typography';

import checkTextLength from '../../../utils/helpers/checkTextLength';

const Paragraph = ({ text, isHero = false, style = {} }) => {
  const textContent = isHero ? text : checkTextLength(text).text;

  return (
    <Typography
      variant="body1"
      component="p"
      color={isHero ? 'alternate.main' : 'secondary.dark'}
      sx={{ textAlign: 'center', ...style }}
    >
      {textContent}
    </Typography>
  );
};

export default Paragraph;
