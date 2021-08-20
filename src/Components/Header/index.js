import React,{useState} from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import{
    setOpenWallet
}from '../../Storage/actions/Settings'
import NotificationCenter from './NotificationCenter'

const WalletButton = withStyles((theme) => ({
    root: {
      color: 'white',
      backgroundColor: '#12111C',
      borderRadius:20,
      padding:'0.75rem 1rem',
      '&:hover': {
        backgroundColor: '#12111C',
      },
    },
}))(Button);

export default function Header(){
    const dispatch = useDispatch();

    return(
        <header className="app-header">
            <div className="d-flex">
                <NotificationCenter/>
                <WalletButton color="primary" onClick={()=>dispatch(setOpenWallet(true))}>
                    <i className="mx-1 fas fa-wallet"/>
                    <span className="mx-2">
                        Connect to Yoroi
                    </span>
                </WalletButton>
            </div>
        </header>
    )
}