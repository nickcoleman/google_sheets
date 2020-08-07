export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Enter valid email address';
  }

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

export default validate;
