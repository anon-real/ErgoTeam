import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  InputBase,
  Backdrop,
  Fade,
  Card,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenProposalList,
  setOpenCreateProposal,
} from "Storage/actions/Settings";
import ProposalsTable from "./ProposalsTable";
import NewProposalModal from "../NewProposalModal";

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

export default function ProposalListModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openProposalsList = useSelector(
    (state) => state.settings.openProposalsList
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openProposalsList.status}
        onClose={() => dispatch(setOpenProposalList(false))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openProposalsList.status}>
          <Card className="newteam-modal-container p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>Team1 Proposal</h2>
              <Button
                onClick={() => dispatch(setOpenCreateProposal(true))}
                size="small"
                style={{
                  color: "#C0C0C0",
                  borderColor: "#C0C0C0",
                  borderRadius: 10,
                }}
                variant="outlined"
              >
                <i className="fas fa-plus" />
                <span className="mx-2">Create New Proposal</span>
              </Button>
            </div>
            <ProposalsTable />
            <NewProposalModal />
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
