import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { browserHistory } from 'react-router';

class AppBarIconMenu extends React.Component {
  constructor(props) {
    super(props);
    this.linkToLogistics = this.linkToLogistics.bind(this);
    this.linkToLogin = this.linkToLogin.bind(this);
    this.handlerRefresh = this.handlerRefresh.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {open: false};
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  linkToLogistics() {
    const path = '/logistics';
    browserHistory.push(path);
  }

  linkToLogin() {
    const path = '/login';
    browserHistory.push(path);
  }

  handlerRefresh() {
    location.reload();
  }

  handleClose(){
    this.setState({open: false});
  }

  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
      />
      // <AppBar
      //   className="noprint"
      //   title={this.props.title}
      //   iconElementLeft={
      //     <div>
      //       <IconButton onTouchTap={this.handleToggle}>
      //         <MenuIcon color={'white'}/>
      //       </IconButton>
      //       <LeftNav
      //         docked={false}
      //         open={this.state.open}
      //         onRequestChange={open => this.setState({open})}
      //       >
      //         <MenuItem onTouchTap={this.handleClose}>首页</MenuItem>
      //         <MenuItem onTouchTap={this.handleClose}>帮助</MenuItem>
      //       </LeftNav>
      //     </div>
      //   }
      //   iconElementRight={
      //     <IconMenu
      //       iconButtonElement={
      //         <IconButton><MoreVertIcon /></IconButton>
      //       }
      //       targetOrigin={{horizontal: 'right', vertical: 'top'}}
      //       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      //     >
      //       <MenuItem primaryText="Refresh" onTouchTap={this.handlerRefresh} />
      //       <MenuItem primaryText="Logistics" onTouchTap={this.linkToLogistics} />
      //       <MenuItem primaryText="Login" onTouchTap={this.linkToLogin} />
      //     </IconMenu>
      //   }
      // />
    );

  }
}

export default AppBarIconMenu;
