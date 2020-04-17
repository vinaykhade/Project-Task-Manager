import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import propTypes from 'prop-types';

const InputTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      padding: '5px 15px',
      height: '30px',
    },
    width: '100%',
    marginBottom: 20,
  },
})(TextField);

const TextInput = props => {
  const { onChange, value, label } = props;
  return (
    <InputTextField
      variant="outlined"
      color="secondary"
      value={value}
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={event => onChange(event.target.value)}
    />
  );
};

export default TextInput;

TextInput.defaultProp = {
  value: new Date(),
  onChange: () => {},
  label: '',
};

TextInput.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  label: propTypes.string,
};
