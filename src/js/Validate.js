import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import MerchandiseCard from './component/MerchandiseCard';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';
import WaringIcon from 'material-ui/lib/svg-icons/alert/warning';

class Validate extends React.Component {
  render() {
    return(
      <div>
        <Header title="Trace Web-UI"/>
        <div style={styles.context}>
          <MerchandiseCard />
          <br />
          <div>
            <h4>验证信息</h4>
            <div style={styles.validate} className="bg-success">
              <DoneIcon />此商品首次拆封
            </div>
            <div style={styles.validate} className="bg-danger">
              <WaringIcon />此商品已经开封
            </div>
          </div>
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
  validate: {
    height: 50,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:20,
    padding: 10,
  }
};

export default Validate;