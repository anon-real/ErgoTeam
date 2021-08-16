import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, InputBase , Backdrop, Fade, Card, Button, Menu, MenuItem} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import {
  setOpenCreateProposal
}from '../../Storage/actions/Settings'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function NewProposalModal() {
  const classes = useStyles();
  const openCreateProposal = useSelector(state => state.settings.openCreateProposal) 
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currency,setCurrency] = useState('Erg')

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (value) => {
    setCurrency(value);
    handleMenuClose();
  }

  function NewProposalMenu(){
    return(
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={()=>handleClickMenuItem('Erg')}>Erg</MenuItem>
        <MenuItem onClick={()=>handleClickMenuItem('SigmaUSD')}>SigmaUSD</MenuItem>
      </Menu>
    )
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openCreateProposal}
        onClose={()=>dispatch(setOpenCreateProposal(false))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCreateProposal}>
          <Card className="newteam-modal-container">
            <h2>New Proposal</h2>
            <div>
              <form>
                <div className="newteam-modal-input-box">
                  <span>Amount</span>
                  <p>
                    How much Erg would be in Proposal
                  </p>
                  <div className="d-flex">
                    <InputBase className="w-100" variant="outlined"/>
                    <div className="newteam-modal-asset-input-box" onClick={handleOpenMenu}>
                        <span>
                            {currency}
                        </span>
                        <i className="fas fa-angle-down"/>
                    </div>
                    <NewProposalMenu/>
                  </div>
                </div>
                <div className="newteam-modal-input-box">
                  <span>Address</span>
                  <p>
                    Your destination wallet’s address 
                  </p>
                  <InputBase className="w-100" variant="outlined"/>
                </div>
                <div className="newteam-modal-input-box">
                  <span>Description</span>
                  <p>
                    A discription for the team
                  </p>
                  <textarea className="newteam-modal-description-input" name="description" cols="40" rows="5"/>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button variant="contained" color="primary">
                    Create
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}