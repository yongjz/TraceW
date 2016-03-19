import React from 'react';

import Header from './component/Header';
import Footer from './component/Footer';
import Stepper from './component/Stepper';
import ClearFix from 'material-ui/lib/clearfix';
import Divider from 'material-ui/lib/divider';
import QrCodeGridList from './component/QrCodeGridList';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <Header title="Trace Web-UI"/>
        <div style={styles.context}>
          <div>
            <p style={styles.subtitle}>二维码制造－二维码确认</p>
            <Stepper secondStep={true}/>
            <ClearFix />
          </div>
          <ClearFix />
          <Divider />
          
          <QrCodeGridList />
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  context: {
    margin: 20,
  },
  button: {
    margin: 20,
    float: 'right',
  },
  subtitle: {
    fontSize: 24,
    marginRight: 50,
    paddingTop: 20,
    float: 'left',
  }
};

export default Preview;