import React from 'react';
import PageHeader from '../../components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import { Paper, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmployeeForm from './EmployeeForm';
import useTable from '../../components/useTable';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees: React.FC = () => {
  const classes = useStyles();
  // const {
  //   TblContainer
  // } = useTable();
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        {/* <TblContainer>
          <TableBody></TableBody>
        </TblContainer> */}
      </Paper>
    </>
  );
};
export default Employees;
