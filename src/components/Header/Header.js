import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import logo from '../../../public/assets/images/ggklogo.png'
import backgroundImage from '../../../public/assets/images/border-top.png'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import {NavBar, Menu} from 'react-nav-bar'
// const Seclist = () => (
//   <li>can do that TOO</li>
// )
// var menus = [
//   { path: 'menu1', label: 'Menu 1', icon: 'bell' },
//   <div>jsx element</div>,
//   {
//     path: 'menu3', label: 'Menu 3', icon: 'bars', subMenus: [
//       { path: 'menu4', label: 'Menu 4' },
//       {
//         path: 'menu5', label: 'Menu 5', subMenus: [
//           { path: 'menu6', label: 'Menu 6' },
//           { path: 'menu7', label: 'Menu 7' },
//           <Seclist/>,
//           { path: 'menu9', label: 'Menu 9' }
//         ]
//       },
//       { path: 'menu10', label: <div> You can do that too</div>, icon: 'bars' }
//     ]
//   }
// ]
export const Header = (props) => (
  <div>
    <div>
      <img src={backgroundImage}/>
      <div className='row header-row'>
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
          <h1 className='name-header'><strong>Project Tracker</strong></h1>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'></div>
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-6'>
          <div className='float-right'>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header