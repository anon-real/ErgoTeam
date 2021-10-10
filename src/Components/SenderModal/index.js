import React, { useState } from "react";
import { Modal, Backdrop, Card, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SenderModal() {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={false}>
          <Card
            className="newteam-modal-container p-4"
            style={{ maxWidth: 500 }}
          >
            <p>
              Send exactly <b className="text-primary">{0.112} erg</b> to <b className="text-secondary">{"eSHUx...9BQ1URCDw"}</b> the operation will be
              done automatically afterward
            </p>
            <p>
              Your funds will be safe. Smart contracts are being used to prevent
              the intermediate service from cheating!
            </p>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
