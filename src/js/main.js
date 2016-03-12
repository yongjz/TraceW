import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBarIconMenu from './component/AppBarIconMenu';
import MerchandiseInfoTextField from './component/MerchandiseInfoTextField';

class Main extends React.Component {
  render() {
    return (
      <div>
        <AppBarIconMenu title='Trace Web-UI'/>
        <MerchandiseInfoTextField />
      </div>
    );
  }
}

export default Main;