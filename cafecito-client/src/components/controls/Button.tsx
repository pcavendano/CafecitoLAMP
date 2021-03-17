import React, { ElementType } from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// type Props = {
//   variant: 'text' | 'outlined' | 'contained' | undefined;
//   type: string;
//   text: string;
//   size: 'large' | 'medium' | 'small' | undefined;
//   classes: {};
//   href: string;
//   color: 'default' | 'inherit' | 'primary' | 'secondary' | undefined;
//   onClick: () => {};
// };

interface MyCompanyButtonProps extends ButtonProps {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'theme.spacing(0.5)',
  },
  label: {
    textTransform: 'none',
  },
}));
const Button: React.VFC<MyCompanyButtonProps> = (props): React.ReactElement => {
  const { variant, text, size, color, onClick, ...others } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...others}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
