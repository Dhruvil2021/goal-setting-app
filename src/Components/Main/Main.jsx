import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ListComponent from "../Layout/OpenModalComponents/ListComponent";
import ListComponent2 from "../Layout/OpenModalComponents/ListComponent2";
import ListComponent5 from "../Layout/OpenModalComponents/ListComponent5";
import ListComponent4 from "../Layout/OpenModalComponents/LineComponent4";
import ListComponent3 from "../Layout/OpenModalComponents/ListComponent3";
import ListComponent6 from "../Layout/OpenModalComponents/ListComponent6";
import { GlobalInfo } from "../../App";

const Main = () => {
  const [flag, setflag] = useState(null);
  const {appgoal} = useContext(GlobalInfo);
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setflag(0);
  };
  const handleNext = () => {
    setflag(flag + 1);
    if (flag > 4) {
      setOpen(false);
    }
  };
  const handlePrevious = () => {
    setflag(flag - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(appgoal);
  }, [])
  

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          className="customized-dialog-title"
          onClose={handleClose}
        >
          <Box className="modal-head">
            <Box className="sub-modal-head">
              <Box className="progress" component="span">
                <Box id="first-progress" className="progress-ele"></Box>
                <Box className="progress-ele"></Box>
                <Box className="progress-ele"></Box>
                <Box className="progress-ele"></Box>
              </Box>
              <Box className="progress-text" component="span">
                <Box id="first-progress-text" className="progress-text-ele">
                  Choose dimension
                </Box>
                <Box className="progress-text-ele">Select growth areas </Box>
                <Box className="progress-text-ele">Add actions</Box>
                <Box className="progress-text-ele">Set habits</Box>
              </Box>
            </Box>
          </Box>
        </BootstrapDialogTitle>
        <DialogContent sx={{ margin: "20px" }}>
          {flag === 0 ? (
            <ListComponent setflag={setflag} flag={flag} />
          ) : flag === 1 ? (
            <ListComponent2 setflag={setflag} flag={flag} />
          ) : flag === 2 ? (
            <ListComponent3 setflag={setflag} flag={flag} />
          ) : flag === 3 ? (
            <ListComponent4 setflag={setflag} flag={flag} />
          ) : flag === 4 ? (
            <ListComponent5 setflag={setflag} flag={flag} />
          ) : flag === 5 ? (
            <ListComponent6 setflag={setflag} flag={flag} />
          ) : (
            <ListComponent6 setflag={setflag} flag={flag} />
          )}
        </DialogContent>
        <DialogActions>
          {flag > 0 ? (
            <Box className="PrevNext">
              <Button
                className="css-1d3f8j8-MuiButtonBase-root-MuiButton-root"
                autoFocus
                id="Previous"
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                className="css-1d3f8j8-MuiButtonBase-root-MuiButton-root"
                autoFocus
                id="next2"
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                className="css-1d3f8j8-MuiButtonBase-root-MuiButton-root"
                autoFocus
                id="next"
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          )}
        </DialogActions>
      </BootstrapDialog>
        {flag > 4 ? (
          <Box className="goal-list">
            <Box>
              <ul>
                <li>Goal: {appgoal.goal}</li>
                <li>Description: {appgoal.description}</li>
                <li>State: {appgoal.state}</li>
                <li>Growth: {appgoal.growth}</li>
                <li>Name: {appgoal.giveitName}</li>
                <li>Why thisaction: {appgoal.whythisAction}</li>
                <li>Hobby: {appgoal.hobby}</li>
                <li>Why this Hobby?: {appgoal.whythishobby}</li>
                <li>How often you do: {appgoal.howoften}</li>                
              </ul>
            </Box>
          </Box>
        ) : (
          <Box className="css-rah3834">
          <Box className="sub-main">
            <Typography>You haven’t added any goals</Typography>
            <Typography sx={{ color: "grey" }}>
              Start creating goals to increase, decrease or calibrate your
              dimensions
            </Typography>
            <Button
              className="css-1d3f8j8-MuiButtonBase-root-MuiButton-root"
              color="secondary"
              onClick={handleClickOpen}
            >
              Set a Goal
            </Button>
          </Box>
      </Box>
        )}
    </div>
  );
};

export default Main;
