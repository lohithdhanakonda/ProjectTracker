import React from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import './Header.scss'
import logo from '../../../public/assets/images/ggklogo.png'
import backgroundImage from '../../../public/assets/images/border-top.png'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};
const SideMenu = (props) => (
 <IconMenu  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <MenuItem primaryText="Refresh" onClick={()=>{browserHistory.push(window.location.href)}}/>
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
  </IconMenu>
);



export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});


  render() {
     return (
  
  <div>
    <img src={backgroundImage}/>
    <AppBar
    title={<span style={styles.title}>Project Tracker</span>}
    onTitleTouchTap={()=>{browserHistory.push('/')}}
    iconElementLeft={        
       <div>
         <IconButton iconClassName="muidocs-icon-custom-github"
      
          onTouchTap={this.handleToggle}
        />
        <Drawer docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
        <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>    
        </Drawer>
        </div>
    }
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight = {<SideMenu />}
      />
  </div>
   );
  }
}