import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

function EducationPreview(props) {
  const { education } = props;

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
        Education
      </Typography>

      {education.map((edu) => (
        <Box
          key={edu.id}
          sx={{
            display: 'flex', flexDirection: 'column', marginBottom: '1.5em',
          }}
        >
          <Typography variant="h5" component="h5" sx={{ fontWeight: '500' }}>
            {edu.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {edu.organization}
              ,
            </Typography>

            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {edu.city}
              {' '}
              |
            </Typography>

            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {formatDate(edu.from)}
              {' '}
              -
            </Typography>

            <Typography variant="h6" component="h6" sx={{ fontWeight: '400', color: 'grey' }}>
              {formatDate(edu.to)}
            </Typography>
          </Box>
          <Box sx={{ }}>
            {edu.description}
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default EducationPreview;
