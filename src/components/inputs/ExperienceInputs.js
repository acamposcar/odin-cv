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

  const [experience, setExperience] = useState([]);

  const updateItemByID = (item, id, property, value) => {
    if (item.id === id) {
      if (property === 'from' || property === 'to') return { ...item, [property]: new Date(value) };
      return { ...item, [property]: value };
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

  useEffect(() => {
    onUpdateExperience(experience);
  }, [experience]);

  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp) => (
        <Card variant="outlined" sx={{ minWidth: 275, margin: 3 }}>
          <CardContent>
            <Stack spacing={2}>
              <TextField label="Name" name="name" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="Role" name="role" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="City" name="city" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="From" name="from" type="date" InputLabelProps={{ shrink: true }} onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="To" name="to" type="date" InputLabelProps={{ shrink: true }} onChange={(event) => inputChangeHandler(event, exp.id)} />
              <TextField label="Description" multiline rows={4} name="description" variant="outlined" onChange={(event) => inputChangeHandler(event, exp.id)} />
              <CardActions>
                <Button variant="outlined" size="small" startIcon={<DeleteIcon />} onClick={(event) => deleteExperienceHandler(event, exp.id)}>Delete</Button>
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
