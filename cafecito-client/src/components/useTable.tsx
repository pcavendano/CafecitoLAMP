import React from 'react';
import { Table } from '@material-ui/core';

function useTable() {
  const TblContainer = () => <Table></Table>;
  return {
    TblContainer,
  };
}

export default useTable;
