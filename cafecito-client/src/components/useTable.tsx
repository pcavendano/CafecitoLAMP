import React from 'react';
import { Table } from '@material-ui/core';

function useTable(records, headCells) {
  const TblContainer = (props) => <Table></Table>;
  return {
    TblContainer,
  };
}

export default useTable;
