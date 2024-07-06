// src/components/ReferralForm.js
import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  yourName: Yup.string().required('Required'),
  yourEmail: Yup.string().email('Invalid email').required('Required'),
  friendName: Yup.string().required('Required'),
  friendEmail: Yup.string().email('Invalid email').required('Required'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ReferralForm = ({ open, handleClose }) => {
  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      console.log('Success:', data);
      handleClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <Formik
          initialValues={{
            yourName: '',
            yourEmail: '',
            friendName: '',
            friendEmail: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="yourName"
                as={TextField}
                label="Your Name"
                fullWidth
                margin="normal"
                error={touched.yourName && !!errors.yourName}
                helperText={touched.yourName && errors.yourName}
              />
              <Field
                name="yourEmail"
                as={TextField}
                label="Your Email"
                fullWidth
                margin="normal"
                error={touched.yourEmail && !!errors.yourEmail}
                helperText={touched.yourEmail && errors.yourEmail}
              />
              <Field
                name="friendName"
                as={TextField}
                label="Friend's Name"
                fullWidth
                margin="normal"
                error={touched.friendName && !!errors.friendName}
                helperText={touched.friendName && errors.friendName}
              />
              <Field
                name="friendEmail"
                as={TextField}
                label="Friend's Email"
                fullWidth
                margin="normal"
                error={touched.friendEmail && !!errors.friendEmail}
                helperText={touched.friendEmail && errors.friendEmail}
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
    
  );
};

export default ReferralForm;
