import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { DUMMY_PERSONAL } from './dummyData';

function PersonalInputs(props) {
  const { onUpdatePersonal } = props;

  const [personalData, setPersonalData] = useState(DUMMY_PERSONAL);

  useEffect(() => {
    const debounceTimer = setTimeout(() => onUpdatePersonal(personalData), 500);
    return () => { clearTimeout(debounceTimer); };
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
      <Card variant="outlined" sx={{ marginBottom: 3, minWidth: 275 }}>
        <CardContent>
          <Stack spacing={2}>
            <TextField id="outlined-basic" value={personalData.firstName} label="First Name" name="firstName" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" value={personalData.lastName} label="Last Name" name="lastName" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" value={personalData.role} label="Role" name="role" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" value={personalData.address} label="Address" name="address" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" value={personalData.phone} label="Phone" name="phone" variant="outlined" onChange={inputChangeHandler} />
            <TextField id="outlined-basic" value={personalData.email} label="Email" name="email" variant="outlined" onChange={inputChangeHandler} />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default PersonalInputs;
