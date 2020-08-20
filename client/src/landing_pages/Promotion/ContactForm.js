import React from 'react';
import moment from 'moment';
import {useFormik} from 'formik';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {BASE_URL_LANDING} from 'helpers/constants';

import useStyles from './ContactForm.styles';
import AbstractCheckboxGroup from 'shared/AbstractCheckboxGroup';

const initialAges = [
  {label: '3-4', id: 'age3', checked: false},
  {label: '5-7', id: 'age5', checked: false},
  {label: '8-12', id: 'age8', checked: false},
  {label: '12-16', id: 'age12', checked: false},
  {label: 'No Kids', id: 'noKids', checked: false},
  {label: 'Adult', id: 'adult', checked: false},
];

const initialContactTimes = [
  {label: 'Anytime', id: 'contactAnytime', checked: false},
  {label: '8am – 12pm', id: 'contactMorning', checked: false},
  {label: '1pm - 5pm', id: 'contactAfternoon', checked: false},
];

const validate = (values) => {
  const errors = {};

  if (!values.zipcode) {
    errors.zipcode = 'Required';
  } else if (!/^[0-9]{5}(?:-[0-9]{4})?$/i.test(values.zipcode)) {
    errors.zipcode = 'Enter 5 digit zipcode (e.g. 84105)';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)
  ) {
    errors.phone = 'Enter valid phone number (e.g. 801-555-1212)';
  }

  return errors;
};

export const ContactForm = () => {
  const classes = useStyles();
  const [sending, setSending] = React.useState(false);
  const [ages, setAges] = React.useState(initialAges);
  const [contactTimes, setContactTimes] = React.useState(initialContactTimes);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      zipcode: '',
      phone: '',
      referralName: '',
      referralPhone: '',
    },
    onSubmit: async (values, {resetForm}) => {
      sendData(values);
      resetForm();
    },
    validate,
  });

  const validateForm = () => {
    const validZipcode =
      formik.getFieldProps('zipcode').value.length >= 0 &&
      !formik.errors.zipcode;

    const validPhone =
      formik.getFieldProps('phone').value.length > 6 && !formik.errors.phone;

    return !(validZipcode && validPhone);
  };

  const convertCheckboxData = (data) => {
    return data.map((item) => (item.checked ? 'Y' : ' '));
  };

  const sendData = async (validatedData) => {
    setSending(true);
    const now = await moment().format('MMM DD, YYYY h:mm a');
    const {firstName, lastName, zipcode, phone, referralName, referralPhone} = validatedData;
    const agesData = convertCheckboxData(ages);
    const contactTimesData = convertCheckboxData(contactTimes);
    const values = [
      [
        firstName,
        lastName,
        zipcode,
        phone,
        ...agesData,
        ...contactTimesData,
        now,
        referralName,
        referralPhone
      ],
    ];

    try {
      await fetch(`${BASE_URL_LANDING}/contact`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      setAges(initialAges);
      setContactTimes(initialContactTimes);
      window.location.href = '/thankyou';
    } catch (error) {
      console.error(error);
    }
  };

  if (sending)
    return (
      <Container align='center'>
        <CircularProgress />
      </Container>
    );

  return (
    <Container maxWidth="md">
      <form
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              id="firstName"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              id="lastName"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Zipcode"
              name="zipcode"
              id="zipcode"
              variant="outlined"
              margin="normal"
              required
              value={formik.values.zipcode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.zipcode && formik.errors.zipcode ? (
              <div className={classes.error}>{formik.errors.zipcode}</div>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phone"
              id="phone"
              variant="outlined"
              margin="normal"
              required
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className={classes.error}>{formik.errors.phone}</div>
            ) : null}
          </Grid>
          <Grid item xs={12} align='center'>
            <AbstractCheckboxGroup
              groupLabel='What ages are registering for your FREE lesson(s)? (select all that apply)'
              values={ages}
              setValues={setAges}
            />
          </Grid>
          <Grid item xs={12} align='center'>
            <AbstractCheckboxGroup
              groupLabel="When do you prefer to be contacted?"
              values={contactTimes}
              setValues={setContactTimes}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Typography className={classes.callingYou}>
              Do you have a friend that would be interested in a FREE martial
              arts or self-defense lesson?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Friend's Name"
              name="referralName"
              id="referralName"
              variant="outlined"
              margin="normal"
              fullWidth
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.referralName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Friend's Phone Number"
              name="referralPhone"
              id="referralPhone"
              variant="outlined"
              margin="normal"
              fullWidth
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.referralPhone}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              type="submit"
              disabled={validateForm()}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
