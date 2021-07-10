import React from 'react'
import {Button, IconButton} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';

const WalletButton = withStyles((theme) => ({
    root: {
      color: 'white',
      backgroundColor: '#12111C',
      textTransform: 'none',
      borderRadius:20,
      padding:'0.75rem 1rem',
      '&:hover': {
        backgroundColor: '#12111C',
      },
    },
}))(Button);

export default function Header(){
    return(
        <header className="App-header">
            <div>
                <IconButton aria-label="notification">
                    <i className="mx-2 text-white fas fa-bell"/>
                </IconButton>
                <WalletButton color="primary">
                    <i className="mx-1 fas fa-wallet"/>
                    <span className="mx-2">
                        Connect to Yoroi
                    </span>
                </WalletButton>
            </div>
        </header>
    )
}