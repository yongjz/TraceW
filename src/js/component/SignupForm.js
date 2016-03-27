import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Checkbox from 'material-ui/lib/checkbox';
import TextField from 'material-ui/lib/text-field';
import AccountIcon from 'material-ui/lib/svg-icons/action/account-circle';
import ClearFix from 'material-ui/lib/clearfix';
import { browserHistory } from 'react-router';
import validator from 'validator';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateComfirmPassword = this.validateComfirmPassword.bind(this);
    
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      usernametips: null,
      passwordtips: null,
      passwordConfirmtips: null,
    }
  }
  
  handleSignup() {
    if(this.validateUsername() && this.validatePassword() && this.validateComfirmPassword()) {
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
    if(validator.isNull(this.state.password)) {
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
  
  validateComfirmPassword() {
    if(this.state.password !== this.state.passwordConfirm) {
      this.setState({
        passwordConfirmtips: '两次密码输入不一致',
      });
      return false;
    } else {
      this.setState({
        passwordConfirmtips: '',
      });
      return true;
    }
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
                <div>
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
                <div>
                  <TextField
                    hintText="Confirm Password"
                    errorText={this.state.passwordConfirmtips}
                    type="password"
                    fullWidth={true}
                    floatingLabelText="Confirm Password"
                    value={this.state.passwordConfirm}
                    onChange={this.setValue.bind(this, 'passwordConfirm')}
                    onBlur={this.validateComfirmPassword}
                  />
                </div>
                <div style={styles.submitBtn} className="pull-left">
                  <RaisedButton
                    label="Sign Up"
                    secondary={true}
                    icon={<AccountIcon />}
                    style={{ width: 200 }}
                    onClick={this.handleSignup}
                  />
                </div>
                <ClearFix />
                <Checkbox
                  checked={true}
                  label="By registering, you agree to the privacy policy and terms of service."
                  style={styles.check}
                  />
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
  check: {
    marginTop: 20,
  },
  username: {
    marginTop: 50,
    marginBottom: 50,
  },
  submitBtn: {
    marginTop: 50,
    //marginRight: 50,
  },
};

export default SignupForm;