import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Checkbox from 'material-ui/lib/checkbox';
import TextField from 'material-ui/lib/text-field';
import AccountIcon from 'material-ui/lib/svg-icons/action/account-circle';
import { browserHistory } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
    this.state = {
      username: null,
      password: null,
    }
  }
  
  handleLogin() {
    browserHistory.push('/');
  }
  
  handleUsernameChange() {
    this.setState({
      username: event.target.value
    });
  }
  
  handlePasswordChange() {
    this.setState({
      password: event.target.value
    });
  }
  
  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }
  
  render() {
    return (
      <div style={styles.content}>
        <form className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-2 col-xs-1">
              </div>
              <div className="col-md-6 col-sm-8 col-xs-10">
                <div style={styles.username}>
                  <TextField
                    hintText="Username or Email"
                    fullWidth={true}
                    floatingLabelText="Username or Email"
                    value={this.state.username}
                    onChange={this.setValue.bind(this, 'username')}
                  />
                </div>
                <div>
                  <TextField
                    hintText="Password"
                    type="password"
                    fullWidth={true}
                    floatingLabelText="Password"
                    value={this.state.password}
                    onChange={this.setValue.bind(this, 'password')}
                  />
                </div>
                <div style={styles.submitBtn} className="pull-left">
                  <RaisedButton
                    label="Log In"
                    secondary={true}
                    icon={<AccountIcon />}
                    style={{ width: 200 }}
                    onClick={this.handleLogin}
                  />
                </div>
                <div style={styles.block} className="pull-left">
                  <Checkbox
                    label="Remember me"
                    style={styles.checkbox}
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-2 col-xs-1">
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  content: {
    //width: 500,
    margin: 20,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
  },
  checkbox: {
    //marginBottom: 16,
    marginLeft: 20,
    marginTop: 60,
  },
  username: {
    marginTop: 50,
    marginBottom: 50,
  },
  submitBtn: {
    marginTop: 50,
    //marginRight: 50,
  },
  block: {
    width: 250,
  },
};

export default LoginForm;