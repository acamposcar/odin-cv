import PersonalInputs from './PersonalInputs';
import EducationInputs from './EducationInputs';
import ExperienceInputs from './ExperienceInputs';

function Inputs(props) {
  const { onAddPersonal, onAddExperience, onAddEducation } = props;
  const updatePersonalHandler = (enteredPersonalData) => onAddPersonal(enteredPersonalData);
  const updateExperienceHandler = (enteredExperienceData) => onAddExperience(enteredExperienceData);
  const updateEducationHandler = (enteredEducationData) => onAddEducation(enteredEducationData);

  return (
    <>
      <PersonalInputs onUpdatePersonal={updatePersonalHandler} />
      <ExperienceInputs onUpdateExperience={updateExperienceHandler} />
      <EducationInputs onUpdateEducation={updateEducationHandler} />
    </>
  );
}

export default Inputs;
