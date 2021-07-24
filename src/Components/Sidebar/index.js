import React from 'react';
import Logo from '../../Assets/ErgoLogo.png';
import IconBulider from '../../Utils/IconBuilder'
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {NavLink} from 'react-router-dom'

export default function Sidebar(){
    return(
        <div className="app-sidebar-container">
            <div className="app-sidebar-logo">
                <img src={Logo}/>
            </div>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <ul>
                        <li>
                            <NavLink  exact to="/" activeClassName="active">
                                <i className="fas fa-home"/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/teams" activeClassName="active">
                                <i className="fas fa-user-friends"/>
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink  to="/activity" activeClassName="active">
                                <i className="fas fa-file-alt"/>
                            </NavLink >
                        </li> */}
                        <li>
                            <NavLink  to="/setting" activeClassName="active">
                                <i className="fas fa-cog"/>
                            </NavLink>
                        </li>
                    </ul>
                </CSSTransitionGroup>
            <div className="app-sidebar-aboutus">
                <i className="fas fa-question"/>
            </div>
        </div>
    )
}

