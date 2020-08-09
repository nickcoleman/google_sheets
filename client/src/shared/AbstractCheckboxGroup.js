import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import useStyles from './AbstractCheckboxGroup.styles';

const CheckboxGroup = ({values, label, onChange}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <FormControl component='fieldset' className={classes.formGroup}>
        <FormLabel component='legend'>{label}</FormLabel>
        <FormGroup className={classes.formGroup}>
          {values.map((value, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox checked={value.checked} onChange={onChange(index)} />
              }
              label={value.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Grid>
  );
};

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

CheckboxGroup.defaultProps = {
  label: '',
};

const AbstractCheckboxGroup = ({groupLabel, values, setValues}) => {
  const onChange = (index) => ({target: {checked}}) => {
    const newValues = [...values];
    const value = values[index];

    newValues[index] = {...value, checked};

    setValues(newValues);
  };

  return (
    <CheckboxGroup label={groupLabel} values={values} onChange={onChange} />
  );
};

AbstractCheckboxGroup.propTypes = {
  groupLabel: PropTypes.string,
  setValues: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

AbstractCheckboxGroup.defaultProps = {
  groupLabel: '',
};

export default AbstractCheckboxGroup;
