import React from 'react';

import Header from './component/Header';
import MerchandiseInfoTextField from './component/MerchandiseInfoTextField';
import Footer from './component/Footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header title='Trace Web-UI'/>
        <MerchandiseInfoTextField />
        <Footer />
      </div>
    );
  }
}

export default Main;