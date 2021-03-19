import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';

type Props = {
  name: string;
  label: string;
  value: ParsableDate;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DatePicker: React.VFC<Props> = (props) => {
  const { name, label, value, onChange } = props;
  const convertToDefaultEventParameter = (
    name: string,
    value: ParsableDate,
  ): any => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) =>
          onChange(convertToDefaultEventParameter(name, date))
        }
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};
export default DatePicker;
