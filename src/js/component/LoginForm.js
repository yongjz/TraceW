import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import { browserHistory } from 'react-router';
import validator from 'validator';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePassword = this.validatePassword.bind(this);

    this.state = {
      username: '',
      password: '',
      usernametips: null,
      passwordtips: null
    }
  }

  handleLogin() {
    if(this.validateUsername() && this.validatePassword()) {
      browserHistory.push('/');
    }
  }

  validateUsername() {
    if(!validator.isEmail(this.state.username)) {
      this.setState({
        usernametips: '用户名不合法',
      });
      return false;
    } else {
      this.setState({
        usernametips: '',
      });
      return true;
    }
  }

  validatePassword() {
    if(validator.isNull(this.state.password.trim())) {
      this.setState({
        passwordtips: '密码不能为空',
      });
      return false;
    } else {
      this.setState({
        passwordtips: '',
      });
      return true;
    }
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
                    errorText={this.state.usernametips}
                    fullWidth={true}
                    floatingLabelText="Username or Email"
                    value={this.state.username}
                    onChange={this.setValue.bind(this, 'username')}
                    onBlur={this.validateUsername}
                  />
                </div>
                <div>
                  <TextField
                    hintText="Password"
                    errorText={this.state.passwordtips}
                    type="password"
                    fullWidth={true}
                    floatingLabelText="Password"
                    value={this.state.password}
                    onChange={this.setValue.bind(this, 'password')}
                    onBlur={this.validatePassword}
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
