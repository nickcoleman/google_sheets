import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BASE_URL_LANDING} from 'helpers/constants';

export const ContactForm = ({campaign}) => {
  const [formData, setFormData] = React.useState({});
  const [message, setMessage] = React.useState('');

  const handleInput = (e) => {
    const copyFormData = {...formData};
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const {firstName, lastName, email, comment} = formData;
    const now = moment().format('MMM DD, YYYY HH:MM');
    const values = JSON.stringify([
      [firstName, lastName, email, comment, now, campaign],
    ]);
    console.log('sendData -> values', values);

    try {
      await fetch(`${BASE_URL_LANDING}/contact`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: values,
      });
      setFormData({});
      setMessage('Success');
    } catch (error) {
      setMessage('Error');
    }
  };

  return (
    <Container maxWidth='md'>
      <hr />
      <Typography variant='h6' gutterBottom>
        Contact Form
      </Typography>
      <form
        className='input-form'
        id='contact'
        name='contact'
        required
        onSubmit={sendData}
      >
        <Grid container spacing={3} maxWidth='sm'>
          <Grid item xs={12} sm={6}>
            <TextField
              name='firstName'
              type='text'
              placeholder='First Name'
              required
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name='lastName'
              type='text'
              placeholder='Last Name'
              required
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name='email'
              type='email'
              placeholder='Email'
              required
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <textarea
              name='comment'
              placeholder='Comments'
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant='contained'
              color='secondary'
              name='submit'
              type='submit'
            >
              Send
            </Button>
          </Grid>
          {message.length > 0 ? message : null}
        </Grid>
      </form>
    </Container>
  );
};

ContactForm.propTypes = {
  campaign: PropTypes.string,
};

ContactForm.defaultProps = {
  campaign: 'undefined',
};

export default ContactForm;
