import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {
  setOpenCreateProposal
}from '../../Storage/actions/Settings'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper:{
      minHeight:300
  }
});

export default function ProposalsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align="center">Amount</TableCell>
            <TableCell colSpan={3} align="center">Description</TableCell>
            <TableCell colSpan={3} align="center">Number of approved</TableCell>
            <TableCell colSpan={3} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
          <TableCell colSpan={3} size="small" align="center">100 Erg</TableCell>
          <TableCell colSpan={3} align="center">Money needed to implement...</TableCell>
          <TableCell colSpan={3} align="center">6 of 10</TableCell>
          <TableCell colSpan={3} align="center">
            <span className="text-success">
                Approved!
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3} size="small" align="center">100 Erg</TableCell>
          <TableCell colSpan={3} align="center">Money needed to implement...</TableCell>
          <TableCell colSpan={3} align="center">6 of 10</TableCell>
          <TableCell colSpan={3} align="center">
            <Button size="small" style={{color:'#C0C0C0',borderColor:'#C0C0C0',borderRadius:10}} variant="outlined">
                <span className="mx-2">
                  View
                </span>
              </Button>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}