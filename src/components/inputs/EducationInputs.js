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
import { DUMMY_SCHOOL_A, DUMMY_SCHOOL_B } from './dummyData';

function EducationInputs(props) {
  const { onUpdateEducation } = props;

  const school = () => {
    const id = uuidv4();
    const organization = '';
    const city = '';
    const title = '';
    const from = '';
    const to = '';
    const description = '';
    return {
      id, organization, city, title, from, to, description,
    };
  };

  const [education, setEducation] = useState([DUMMY_SCHOOL_A, DUMMY_SCHOOL_B]);

  const updateItemByID = (item, id, property, value) => {
    if (item.id === id) {
      if (property === 'from' || property === 'to') return { ...item, [property]: new Date(value) };
      return { ...item, [property]: value.trim() };
    }
    return item;
  };

  const inputChangeHandler = (event, id) => {
    setEducation((prevState) => prevState.map((edu) => updateItemByID(
      edu,
      id,
      event.target.name,
      event.target.value,
    )));
  };

  const addEducationHandler = () => {
    setEducation((prevState) => [...prevState, school()]);
  };

  const deleteEducationHandler = (event, id) => {
    setEducation((prevState) => prevState.filter((edu) => edu.id !== id));
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toISOString().slice(0, 10);
  };

  useEffect(() => {
    onUpdateEducation(education);
  }, [education]);

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu) => (
        <Card key={edu.id} variant="outlined" sx={{ marginBottom: 3, minWidth: 275 }}>
          <CardContent>
            <Stack spacing={2}>
              <TextField label="Organization" value={edu.organization} name="organization" variant="outlined" onChange={(event) => inputChangeHandler(event, edu.id)} />
              <TextField label="Title" value={edu.title} name="title" variant="outlined" onChange={(event) => inputChangeHandler(event, edu.id)} />
              <TextField label="City" value={edu.city} name="city" variant="outlined" onChange={(event) => inputChangeHandler(event, edu.id)} />
              <TextField label="From" value={formatDate(edu.from)} name="from" type="date" InputLabelProps={{ shrink: true }} onChange={(event) => inputChangeHandler(event, edu.id)} />
              <TextField label="To" value={formatDate(edu.to)} name="to" type="date" InputLabelProps={{ shrink: true }} onChange={(event) => inputChangeHandler(event, edu.id)} />
              <TextField label="Description" value={edu.description} multiline rows={4} name="description" variant="outlined" onChange={(event) => inputChangeHandler(event, edu.id)} />
              <CardActions>
                <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />} onClick={(event) => deleteEducationHandler(event, edu.id)}>Delete</Button>
              </CardActions>
            </Stack>
          </CardContent>
        </Card>

      ))}
      <Box mt={3}>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={addEducationHandler}>Add Education</Button>
      </Box>
    </div>
  );
}

export default EducationInputs;
