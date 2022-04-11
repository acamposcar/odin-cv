import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PersonalPreview(props) {
  const { personal } = props;

  return (
    <div>
      <Box sx={{
        display: 'flex', gap: '1em', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <Box sx={{
          display: 'flex', gap: '0.5em', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',
        }}
        >
          <Typography variant="h2" component="h1">
            {(personal.firstName) ? personal.firstName.toUpperCase() : ''}
          </Typography>
          <Typography variant="h2" component="h1" sx={{ fontWeight: '900' }}>
            {(personal.lastName) ? personal.lastName.toUpperCase() : ''}
          </Typography>
        </Box>
        <Typography variant="h4" component="h4" sx={{ fontWeight: '100', color: 'grey' }}>
          {(personal.role) ? personal.role : ''}
        </Typography>
        <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            <LocalPhoneIcon sx={{ color: 'action.active' }} />
            {personal.phone}
          </Box>
          <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            <EmailIcon sx={{ color: 'action.active' }} />
            {personal.email}
          </Box>
          <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            <LocationOnIcon sx={{ color: 'action.active' }} />
            {personal.address}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default PersonalPreview;
