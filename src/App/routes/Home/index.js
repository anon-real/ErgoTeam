import React from 'react'
import {Button} from '@material-ui/core'

export default function Home(){
    return(
        <div>
            <div className="col-3">
                <div className="home-text-content">
                    <h1>
                        You are not a member of any teams yet!
                    </h1>
                    <span>
                        No worries, You can make your own team right now!
                    </span>
                </div>
                <Button size="small" variant="contained" color="primary" >
                    <span className="p-1">
                        New joint-spending team
                    </span>
                </Button>
            </div>
        </div>
    )
}