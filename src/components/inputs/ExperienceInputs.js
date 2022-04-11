import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DUMMY_COMPANY_A, DUMMY_COMPANY_B } from './dummyData';

function ExperienceInputs(props) {
  const { onUpdateExperience } = props;

  const company = () => {
    const id = uuidv4();
    const name = '';
    const city = '';
    const role = '';
    const from = '';
    const to = '';
    const description = '';
    return {
      id, name, city, role, from, to, description,
    };
  };

  const [experience, setExperience] = useState([DUMMY_COMPANY_A, DUMMY_COMPANY_B]);

  const updateItemByID = (item, id, property, value) => {
    if (item.id === id) {
      if (property === 'from' || property === 'to') return { ...item, [property]: new Date(value) };
      return { ...item, [property]: value.trim() };
    }
    return item;
  };

  const inputChangeHandler = (event, id) => {
    setExperience((prevState) => prevState.map((exp) => updateItemByID(
      exp,
      id,
      event.target.name,
      event.target.value,
    )));
  };

  const addExperienceHandler = () => {
    setExperience((prevState) => [...prevState, company()]);
  };

  const deleteExperienceHandler = (event, id) => {
    setExperience((prevState) => prevState.filter((exp) => exp.id !== id));
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toISOString().slice(0, 10);
  };

  useEffect(() => {
    onUpdateExperience(experience);
  }, [experience]);

  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp) => (
        <Card key={exp.id} variant="outlined" sx={{ marginBottom: 3, minWidth: 275 }}>
          <CardContent>
            <Stack spacing={2}>
              <TextField label="Name" value={exp.name} name="name" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="Role" value={exp.role} name="role" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="City" value={exp.city} name="city" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="From" value={formatDate(exp.from)} name="from" type="date" InputLabelProps={{ shrink: true }} onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="To" value={formatDate(exp.to)} name="to" type="date" InputLabelProps={{ shrink: true }} onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="Description" value={exp.description} multiline rows={4} name="description" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <CardActions>
                <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />} onClick={(event) => deleteExperienceHandler(event, exp.id)}>Delete</Button>
              </CardActions>
            </Stack>
          </CardContent>
        </Card>

      ))}
      <Box mt={3}>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={addExperienceHandler}>Add Experience</Button>
      </Box>
    </div>
  );
}

export default ExperienceInputs;
