import React, { SyntheticEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

interface Props {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  departmentId: string;
  hireDate: Date;
  isPermanent: boolean;
}

interface Temp {
  fullName: string | undefined;
  departmentId: string | undefined;
  email: string | undefined;
  mobile: string | undefined;
  errors?: string | undefined;
}

export const useForm = (
  initialFValues: Props,
  validateOnChange = false,
  validate: (name: any) => void,
) => {
  const [values, setValues] = useState<Props>(initialFValues);
  const [errors, setErrors] = useState<Partial<Temp | undefined>>({});

  const handleInputChange = (
    e: React.ChangeEvent<{ name?: any | undefined; value: unknown }>,
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange,
  };
};

const usestyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const Form: React.FC<{
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = (props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};
