import React from 'react'
import {Modal, Backdrop, Fade, Card, InputBase, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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


export default function WalletModal(){
    const classes = useStyles();

    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={true}
        // onClose={()=>dispatch(setOpenProposal(false))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Card className="newteam-modal-container">
              <div className="p-3" style={{maxWidth:640}}>
                <h2 className="text-secondary font-weight-bold pb-3">
                    Could Not find your Yoroi wallet!
                </h2>
                <p>
                    Now please enter your wallet address.You can use any wallet using the assembler service.
                </p>
                <p>
                    The assembler service is an intermediate step that you can find out more about here. Your funds will be safe using smart contracts that prevent the service from cheating!
                </p>
                <div>
                    <h4 className="wallet-address-title">
                        Address
                    </h4>
                    <span className="wallet-address-subtitle">
                        Your assets will be sent back to this address in case of any failures
                    </span>
                    <InputBase className="w-100 mt-3" variant="outlined"/>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <Button variant="contained" color="secondary" className="mr-2">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" className="ml-2">
                        Save
                    </Button>
                </div>
              </div>
          </Card>
        </Fade>
      </Modal>
    )
}