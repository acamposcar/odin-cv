import Box from '@mui/material/Box';

function Header() {
  return (

    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#363636',
      marginBottom: 5,
      height: '100px',
      fontSize: 'clamp(2em, 6vw,3.5em)',
      fontWeight: 'bold',
      color: 'white',
    }}
    >
      CV APPLICATION
    </Box>
  );
}
export default Header;
