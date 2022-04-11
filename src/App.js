import { useState } from 'react';
import Inputs from './components/inputs/Inputs';
import Preview from './components/preview/Preview';

function App() {
  const [personal, setPersonal] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const addPersonal = (personalData) => {
    setPersonal(personalData);
  };

  const addExperience = (experienceData) => {
    setExperience((prevExperience) => [...prevExperience, experienceData]);
  };

  const addEducation = (educationData) => {
    setEducation((prevEducation) => [...prevEducation, educationData]);
  };

  return (
    <div className="App">
      <Inputs
        onAddPersonal={addPersonal}
        onAddExperience={addExperience}
        onAddEducation={addEducation}

      />
      <Preview
        personal={personal}
        experience={experience}
        education={education}
      />
    </div>
  );
}

export default App;
