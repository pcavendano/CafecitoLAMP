import React, { ChangeEvent } from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';

type Props = {
  name: string;
  label: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const convertToDefaultEventParameter = (name: string, value: boolean): any => ({
  target: {
    name,
    value,
  },
});

const Checkbox: React.FC<Props> = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventParameter(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};
export default Checkbox;
