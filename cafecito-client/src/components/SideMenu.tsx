import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//THIS IS JSS
//WE NEED TO CONVERT THIS TO ITS ORIGINAL SINTAX makeStyles and withStyles

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
  },
});

const SideMenu: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.sideMenu}>Hey Pedro</div>;
};
export default SideMenu;
