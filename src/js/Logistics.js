import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import MerchandiseCard from './component/MerchandiseCard';
import LogisticsStepper from './component/LogisticsStepper';

class Logistics extends React.Component {
  render() {
    return (
      <div>
        <Header title="Trace Web-UI"/>
        <div style={styles.context}>
          <MerchandiseCard />
          <LogisticsStepper />
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  context: {
    margin: 20,
    paddingBottom: 20
  }
}

export default Logistics;