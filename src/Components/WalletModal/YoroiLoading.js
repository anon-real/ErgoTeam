import React from 'react'
import {CircularProgress} from '@material-ui/core'

export default function YoroiLoading(){
    return(
        <div className="p-3">
            <h2>Connecting to your Yoroi wallet...</h2>
            <div className="d-flex align-items-center justify-content-center py-3">
                <CircularProgress color="default" />
            </div>
        </div>
    )
}