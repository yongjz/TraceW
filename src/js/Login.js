import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import LoginForm from './component/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header title="Trace Login"/>
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;