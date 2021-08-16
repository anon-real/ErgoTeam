import React from 'react'
import {Button} from '@material-ui/core'
import TeamsTable from './TeamsTable'
import useModal from '../../../CustomHooks/useModal'
import NewTeamModal from '../../../Components/NewTeamModal';

export default function Team(){
    const open = useModal(false);

    return(
        <div>
            <div className="page-title-container">
                <h1>
                    Team management
                </h1>
                <Button onClick={open.handleOpen}  size="small" style={{color:'#C0C0C0',borderColor:'#C0C0C0',borderRadius:10}} variant="outlined">
                    <i className="fas fa-plus"/>
                    <span className="mx-2">
                        Create new Team
                    </span>
                </Button>
            </div>
            <div className="page-table-container">
                <TeamsTable/>
            </div>
            <NewTeamModal {...open}/>
        </div>
    )
}
