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
  setOpenProposalList
}from '../../../Storage/actions/Settings'
import ProposalListModal from '../../../Components/ProposalListModal'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TeamsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={1}></TableCell>
            <TableCell colSpan={4} align="center">Name</TableCell>
            <TableCell colSpan={1} align="center">Total members</TableCell>
            <TableCell colSpan={1} align="center">Signature type</TableCell>
            <TableCell colSpan={3} align="center">Status</TableCell>
            <TableCell colSpan={1} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
          <TableCell colSpan={1} component="th" scope="row">
            1
          </TableCell>
          <TableCell colSpan={4} size="small" align="center">Team1</TableCell>
          <TableCell colSpan={1} align="center">10</TableCell>
          <TableCell colSpan={1} align="center">6 of 10</TableCell>
          <TableCell colSpan={3} align="center">
            {(true)?
              <i className="fas fa-check text-success"/>
              :
              <div>
                <i className="fas fa-spinner text-primary"/>
                <span className="text-primary ml-2">
                  team is being created
                </span>
              </div>
            }   
          </TableCell>
          <TableCell colSpan={1} align="center">
            <Button onClick={()=>dispatch(setOpenProposalList(true))} size="small" style={{color:'#C0C0C0',borderColor:'#C0C0C0',borderRadius:10}} variant="outlined">
                <i className="far fa-eye"/>
                <span className="mx-2">
                  View proposals
                </span>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={1} component="th" scope="row">
            2
          </TableCell>
          <TableCell colSpan={4} size="small" align="center">Team2</TableCell>
          <TableCell colSpan={1} align="center">10</TableCell>
          <TableCell colSpan={1} align="center">6 of 10</TableCell>
          <TableCell colSpan={3} align="center">
            {(true)?
              <i className="fas fa-check text-success"/>
              :
              <div>
                <i className="fas fa-spinner text-primary"/>
                <span className="text-primary ml-2">
                  team is being created
                </span>
              </div>
            }   
          </TableCell>
          <TableCell colSpan={1} align="center">
            <Button  size="small" style={{color:'#C0C0C0',borderColor:'#C0C0C0',borderRadius:10}} variant="outlined">
                <i className="far fa-eye"/>
                <span className="mx-2">
                  View proposals
                </span>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={1} component="th" scope="row">
            3
          </TableCell>
          <TableCell colSpan={4} size="small" align="center">Team3</TableCell>
          <TableCell colSpan={1} align="center">10</TableCell>
          <TableCell colSpan={1} align="center">6 of 10</TableCell>
          <TableCell colSpan={3} align="center">
            {(true)?
              <i className="fas fa-check text-success"/>
              :
              <div>
                <i className="fas fa-spinner text-primary"/>
                <span className="text-primary ml-2">
                  team is being created
                </span>
              </div>
            }   
          </TableCell>
          <TableCell colSpan={1} align="center">
            <Button  size="small" style={{color:'#C0C0C0',borderColor:'#C0C0C0',borderRadius:10}} variant="outlined">
                <i className="far fa-eye"/>
                <span className="mx-2">
                  View proposals
                </span>
            </Button>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <ProposalListModal/>
    </>
  );
}