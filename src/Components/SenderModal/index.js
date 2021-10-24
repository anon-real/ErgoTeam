import React, { useState } from "react";
import { Modal, Backdrop, Card, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { AddressFormater } from "Utils/AddressFormater";

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

function CopyAddress(address) {
  navigator.clipboard.writeText(address);
}

export default function SenderModal() {
  const classes = useStyles();
  const openSenderWallet = useSelector(
    (state) => state.settings.openSenderWallet
  );
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openSenderWallet.status}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSenderWallet.status}>
          <Card
            className="newteam-modal-container p-4"
            style={{ maxWidth: 500 }}
          >
            <p>
              Send exactly <b className="text-primary">{0.112} erg</b> to{" "}
              <b
                className="text-secondary pointer"
                onClick={() => CopyAddress(openSenderWallet.data?.address)}
              >
                {AddressFormater(openSenderWallet.data?.address)}
              </b>{" "}
              the operation will be done automatically afterward
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
