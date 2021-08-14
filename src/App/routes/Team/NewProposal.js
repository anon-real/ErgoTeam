import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, InputBase , Backdrop, Fade, Card, Button} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import {
  setOpenProposal
}from '../../../Storage/actions/Settings'
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

export default function NewProposal({open,handleOpen,handleClose}) {
  const classes = useStyles();
  const openProposal = useSelector(state => state.settings.openProposal) 
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openProposal}
        onClose={()=>dispatch(setOpenProposal(false))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProposal}>
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
                    <div className="newteam-modal-asset-input-box">
                        <span>
                            Erg
                        </span>
                        <i className="fas fa-angle-down"/>
                    </div>
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