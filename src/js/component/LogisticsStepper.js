import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import styles from 'material-ui/lib/styles';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import StoreIcon from 'material-ui/lib/svg-icons/maps/local-grocery-store';
import ShippingIcon from 'material-ui/lib/svg-icons/maps/local-shipping';
import '../../css/stepper.css';

const colors = styles.Colors;

class LogisticsStepper extends React.Component {
  render() {
    return (
      <div style={logistics}>
        <div className="step">
          <div>
            <Avatar
              backgroundColor={colors.blue500}
              icon={<HomeIcon />}
            />
            <div className="line"></div>
          </div>
          <div>
            <div className="title">Home</div>
            <div style={logisticsDesc}>货物从xxx生产厂商发出</div>
          </div>
        </div>

        <div className="step">
          <div>
            <Avatar
              backgroundColor={colors.blue500}
              icon={<ShippingIcon />}
            />
            <div className="line"></div>
          </div>
          <div>
            <div className="title">武汉总部</div>
            <div style={logisticsDesc}>货物从xxx站点发出</div>
          </div>
        </div>

        <div className="step">
          <div>
            <Avatar
              backgroundColor={colors.blue500}
              icon={<ShippingIcon />}
            />
            <div className="line"></div>
          </div>
          <div>
            <div className="title">xx站点</div>
            <div style={logisticsDesc}>货物从xxx站点发出</div>
          </div>
        </div>

        <div className="step">
          <div>
            <Avatar
              backgroundColor={colors.blue500}
              icon={<StoreIcon />}
            />
            <div className="line"></div>
          </div>
          <div>
            <div className="title">xx超市</div>
            <div style={logisticsDesc}>货物在xx超市销售</div>
          </div>
        </div>
      </div>
    );
  }
}

const context = {
  margin: 20,
};
const logisticsDesc = {
  height: 100,
}
const logistics = {
  marginLeft: 30,
  marginTop: 30,
}

export default LogisticsStepper;