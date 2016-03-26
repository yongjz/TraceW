import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import SignupForm from './component/SignupForm';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Header title="Trace Sign Up"/>
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

export default Signup;