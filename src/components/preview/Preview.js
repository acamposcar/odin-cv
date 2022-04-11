import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import PersonalPreview from './PersonalPreview';

function Preview(props) {
  const { education, personal, experience } = props;

  return (

    <Box sx={{ overflow: 'auto' }}>
      <h2>Preview</h2>
      <Card variant="outlined" sx={{ minWidth: '700px', marginBottom: 3, padding: 4 }}>
        <CardContent>
          <PersonalPreview personal={personal} />
          <ExperiencePreview experience={experience} />
          <EducationPreview education={education} />
        </CardContent>
      </Card>
    </Box>
  );
}
export default Preview;
