import MuiButton from '@mui/material/Button';

const Button = ({
  text,
  option = 'default',
  disabled = false,
  type = 'button',
  onClick,
}) => {
  const pl = option === 'more' ? '19px' : option === 'users' ? '29px' : '23px';
  const pr = option === 'more' ? '18px' : option === 'users' ? '29px' : '22px';

  return (
    <MuiButton
      type={type}
      variant="contained"
      disableElevation
      disabled={disabled}
      sx={{
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: '4px',
        paddingBottom: '4px',

        borderRadius: '80px',

        '&:hover, &:focus': {
          backgroundColor: 'primary.light',
        },

        '&.Mui-disabled': {
          backgroundColor: 'secondary.light',
          color: 'alternate.vague',
        },
      }}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
