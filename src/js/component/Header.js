import React from 'react';

import AppBarIconMenu from './AppBarIconMenu';

class Header extends React.Component {
  render() {
    return (
      <AppBarIconMenu title={this.props.title}/>
    );
  }
}


export default Header;