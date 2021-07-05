import React from 'react';
import Logo from '../../Assets/ErgoLogo.png';
import IconBulider from '../../Utils/IconBuilder'

export default function Sidebar(){
    return(
        <div className="App-sidebar-container">
            <div className="App-sidebar-logo">
                <img src={Logo}/>
            </div>
            <div>
                <ul>
                    <li>
                        <i className="fas fa-home"/>
                    </li>
                    <li>
                        <i className="fas fa-user-friends"/>
                    </li>
                    <li className="active">
                        <i className="fas fa-file-alt"/>
                    </li>
                    <li>
                        <i className="fas fa-cog"/>
                    </li>
                </ul>
            </div>
            <div className="App-sidebar-aboutus">
                <i className="fas fa-question"/>
            </div>
        </div>
    )
}

