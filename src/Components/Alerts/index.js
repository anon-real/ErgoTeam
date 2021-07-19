import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal , Backdrop, Fade, Button} from '@material-ui/core'


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

function CustomModal({open,handleClose,child}){
    const classes = useStyles();

    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
        >
        <Fade in={open}>
            {child}
        </Fade>
      </Modal>
    )
}


export function EjectProposal(props){
    return(
        <CustomModal {...props}>
            <div className="p-3">
                <div>
                    <h3 className="text-secondary">
                        Are you sure?
                    </h3>
                    <p>
                        Are you sure you want to eject this proposal?
                    </p>
                </div>
                <div>
                    <Button color="primary">
                        Yes
                    </Button>
                    <Button color="secondary">
                        No
                    </Button>
                </div>
            </div>
        </CustomModal>
    )
}

export function ApproveProposal(props){
    return(
        <CustomModal {...props}>
            <div className="p-3">
                <div>
                    <h3 className="text-success">
                        You approved proposal!
                    </h3>
                    <p>
                        10 ERG is going to be sent to "3Wz1...C411" address if enough signatures are collected
                    </p>
                </div>
                <div>
                    <Button color="primary">
                        Yes
                    </Button>
                    <Button color="secondary">
                        No
                    </Button>
                </div>
            </div>
        </CustomModal>
    )
}