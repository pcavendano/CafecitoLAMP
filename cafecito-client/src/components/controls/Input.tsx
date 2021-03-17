import React from 'react';
import { TextField } from '@material-ui/core';
import { ChangeEventHandler } from 'react';
import { validate } from '@material-ui/pickers';

type Props = {
  name: string;
  label: string;
  value: string;
  error?: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {
  const { name, label, error = null, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      {...(error && { error: true, helperText: error })}
    />
  );
};
export default Input;
