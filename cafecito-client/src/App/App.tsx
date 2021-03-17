import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import SideMenu from '../components/SideMenu';
import { CssBaseline } from '@material-ui/core';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Header from '../components/Header';
import Employees from '../pages/Employees/Employees';
import PeopleOutilineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
});
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

const App: React.VFC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
    </ThemeProvider>
  );
};

export default App;
