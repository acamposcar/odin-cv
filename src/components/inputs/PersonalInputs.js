import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

function PersonalInputs(props) {
  const { onUpdatePersonal } = props;

  const [personalData, setPersonalData] = useState({
    name: '',
    role: '',
    address: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    onUpdatePersonal(personalData);
  }, [personalData]);

  const inputChangeHandler = (event) => {
    setPersonalData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <h2>Personal Information</h2>
      <Card variant="outlined" sx={{ minWidth: 275, margin: 3 }}>
        <CardContent>
          <Stack spacing={2}>
            <TextField id="outlined-basic" label="Name" name="name" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" label="Role" name="role" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" label="Address" name="address" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" label="Phone" name="phone" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" label="Email" name="email" variant="outlined" onChange={inputChangeHandler} />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default PersonalInputs;
