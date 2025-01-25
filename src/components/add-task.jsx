import React, { useState } from 'react';
import HeaderLayout from './header';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { validateForm } from '../helpers';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const AddTask = () => {

    const [formData, setFormData] = useState({ title: "", description: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        validateForm(formData, setErrors);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm(formData, setErrors)) {
            // Form is valid, you can submit or process the data here
            console.log("Form data submitted :", formData);
            setSubmitted(true); // Set a submitted flag

             // Call API to save the tasks then redirect user to listing page.

            setTimeout(function() {
                navigate('/');
            }, 1000);
        } else {
            // Form is not valid, display error messages
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    const isFormValid = Object.keys(errors).length === 0;

    return (
        <>
        <HeaderLayout title={'Add Task'} goToPage={'/'} sx={{ mb: '10' }} />
        <Container maxWidth="sm" >
        {submitted && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => {}}> Task Added Successfully!</Alert>}
        
            <form noValidate onSubmit={handleSubmit}>
                <TextField fullWidth margin='normal' placeholder='Enter the title' required 
                    name='title'
                    onChange={handleInputChange} 
                    error={errors.title} />

                <TextField fullWidth margin='normal' placeholder='Enter the description' 
                    name='description'
                    rows={4} multiline required value={formData.description}
                    error={errors.description}
                    onChange={handleInputChange} />
                
                <Stack direction="row" spacing={2} sx={{
                        justifyContent: "space-between",
                        alignItems: "flex-start",margin: '20px',
                    }}>
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" disabled={!isFormValid} type="submit">Add</Button>
                </Stack>
            </form>
        </Container>
        </>
    );
};

export default AddTask;

