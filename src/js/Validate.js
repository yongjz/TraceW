import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Stepper from './component/Stepper';
import ClearFix from 'material-ui/lib/clearfix';
import Divider from 'material-ui/lib/divider';

class Validate extends React.Component {
  render() {
    return(
      <div>
        <Header title="Trace Web-UI"/>
        <div style={styles.context}>
          Validate
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  context: {
    margin: 20,
  }
};

export default Validate;