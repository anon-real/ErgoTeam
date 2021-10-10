import React,{useState} from 'react';
import {IconButton, Paper, Popper, Fade, ClickAwayListener} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding:'1rem',
        borderRadius:10,
        minWidth:300,
        minHeight:300,
        marginTop:10,
        boxShadow:'none'
    },
}));

export default function NotificationCenter(){
    const classes = useStyles();
    const [open,setOpen] = useState();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () =>{
        if(open){
            setAnchorEl(null);
            setOpen(false);
        }
    }

    return(
        <ClickAwayListener onClickAway={handleClose}>
            <div>
                <IconButton aria-label="notification" onClick={handleClick}>
                    <i className="mx-3 text-white fas fa-bell"/>
                </IconButton>
                <Popper open={open} anchorEl={anchorEl} placement={'bottom'} transition>
                    <Fade in={open} timeout={500}>
                        <Paper className={classes.paper}>
                            <h2 className="font-weight-bold pb-2">
                                Notification
                            </h2>
                            <div>
                                <div className="d-flex align-items-start">
                                    <i className="far fa-check-circle pr-2 mr-1" style={{fontSize:18,paddingTop:6}}/>
                                    <div className="d-flex flex-column">
                                        <span>
                                            Team2 has been created!
                                        </span>
                                        <span className="notification-time-text">
                                            21-03-14 
                                        </span>
                                    </div>
                                </div>
                                <div className="notification-devider mx-auto my-3"></div>
                            </div>
                        </Paper>
                    </Fade>
                </Popper>
            </div>
        </ClickAwayListener>
    )
}