import React from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import './Header.scss'
import logo from '../../../public/assets/images/ggklogo.png'
import backgroundImage from '../../../public/assets/images/border-top.png'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export const Header = (props) => (
  <div>
    <div>
      <img src={backgroundImage}/>
      <div className='row header-row'>
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
          <h1 className='name-header' onClick={()=>{browserHistory.push('/')}}><strong>Project Tracker</strong></h1>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'></div>
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6 float-right'>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
            <MenuItem primaryText="Refresh" onClick={()=>{browserHistory.push(window.location.href)}}/>
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        </div>
      </div>
    </div>
  </div>
)

export default Header