import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Inputs from './components/inputs/Inputs';
import Preview from './components/preview/Preview';
import Nav from './components/Nav';

function App() {
  const [personal, setPersonal] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const addPersonal = (personalData) => {
    setPersonal(personalData);
  };

  const addExperience = (experienceData) => {
    setExperience(experienceData);
  };

  const addEducation = (educationData) => {
    setEducation(educationData);
  };

  return (
    <div className="App">
      <Nav />
      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={4}>
            <Inputs
              onAddPersonal={addPersonal}
              onAddExperience={addExperience}
              onAddEducation={addEducation}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Preview
              personal={personal}
              experience={experience}
              education={education}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
