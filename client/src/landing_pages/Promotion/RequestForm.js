import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {useFormik, Field, Form} from 'formik';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {BASE_URL_LANDING} from 'helpers/constants';
import CheckboxGroup from '../../shared/CheckboxGroup';
import useStyles from './RequestForm.styles';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age3: {label: '3 to 5', id: 'age3', checked: false},
  ages: [
    {label: '3 to 5', id: 'age3', checked: false},
    {label: '5 to 7', id: 'age5', checked: false},
    {label: '8 to 12', id: 'age8', checked: false},
    {label: '12 to 16', id: 'age12', checked: false},
    {label: 'No Kids', id: 'noKids', checked: false},
    {label: 'Adult', id: 'adult', checked: false},
  ],
  morningClass: false,
  eveningClass: false,
  contactMorning: false,
  contactAfternoon: false,
  contactMon: false,
  contactTue: false,
  contactWed: false,
  contactThu: false,
  contactFri: false,
  contactAnytime: false,
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(values.phone)
  ) {
    errors.phone = 'Invalid phone number.  Use 801-555-1212 format';
  }

  return errors;
};

export const RequestForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      ...initialFormState,
    },
    validate,
    onSubmit: async (values, {resetForm}) => {
      console.log('sending data', values);
      resetForm();
    },
  });

  const validateForm = () => {
    const validEmail =
      formik.getFieldProps('email').value.length > 5 && !formik.errors.email;
    const validPhone =
      formik.getFieldProps('phone').value.length > 6 && !formik.errors.phone;

    return !(validEmail && validPhone);
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
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='First Name'
              name='firstName'
              id='firstName'
              variant='outlined'
              margin='normal'
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Last Name'
              name='lastName'
              id='lastName'
              variant='outlined'
              margin='normal'
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Email'
              name='email'
              id='email'
              type='emaill'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{color: 'red'}}>{formik.errors.email}</div>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Phone Number'
              name='phone'
              id='phone'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div style={{color: 'red'}}>{formik.errors.phone}</div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Grid container direction='row'>
              <Grid item xs={2}>
                <Field type="checkbox" name="checked" value="age3" /
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} align='center'>
            <Button
              data-testid='submit-button'
              type='submit'
              disabled={validateForm()}
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

RequestForm.propTypes = {
  campaign: PropTypes.string,
};

RequestForm.defaultProps = {
  campaign: 'undefined',
};

export default RequestForm;
