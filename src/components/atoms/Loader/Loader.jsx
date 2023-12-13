import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = ({ style = {} }) => {
  return (
    <Box sx={{ display: 'flex', ...style }}>
      <CircularProgress color="info" value={75} size={48} />
    </Box>
  );
};

export default Loader;
