import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, InputBase , Backdrop, Fade, Card, Button} from '@material-ui/core'

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

export default function NewTeamModal({open,handleOpen,handleClose}) {
  const classes = useStyles();

  return (
    <div>
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
          <Card className="newteam-modal-container">
            <h2>New joint-spending team</h2>
            <div>
              <form>
                <div className="newteam-modal-input-box">
                  <span>Name</span>
                  <p>
                    Others can search your team by name
                  </p>
                  <InputBase className="w-100" variant="outlined"/>
                </div>
                <div className="d-flex align-items-end newteam-modal-input-box">
                  <div className="d-flex flex-column pl-0">
                    <span>Required signatures</span>
                    <p>
                      Example: 4 in case of 4 of 10
                    </p>
                    <InputBase className="w-100"/>
                  </div>
                  <div className="d-flex align-items-center px-3">
                    <span className="pb-1">
                      Of
                    </span>
                  </div>
                  <div className="d-flex flex-column pr-0">
                    <span>Number of members</span>
                    <p>
                      Your full team members
                    </p>
                    <InputBase className="w-100" />
                  </div>
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