import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

function ExperiencePreview(props) {
  const { experience } = props;

  const formatDate = (date) => {
    if (!date) return '';
    return format(date, 'MMM y');
  };
  return (
    <div>

      <Typography
        sx={{
          margin: '1em 0em 0.5em 0em', padding: '0.1em', background: '#c3c3c3',
        }}
        variant="h4"
        component="h2"
      >
        Experience
      </Typography>

      {experience.map((exp) => (
        <Box
          key={exp.id}
          sx={{
            display: 'flex', flexDirection: 'column', marginBottom: '1.5em',
          }}
        >
          <Typography variant="h5" component="h5" sx={{ fontWeight: '500' }}>
            {(exp.role)}
          </Typography>
          <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {(exp.name)}
              ,
            </Typography>

            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {(exp.city)}
              {' '}
              |
            </Typography>

            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {(formatDate(exp.from))}
              {' '}
              -
            </Typography>

            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {(formatDate(exp.to))}
            </Typography>
          </Box>
          <Box sx={{ }}>
            {(exp.description)}
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default ExperiencePreview;
