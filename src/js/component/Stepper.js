import React from 'react';
import Paper from 'material-ui/Paper';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Avatar from 'material-ui/Avatar';
import colors from 'material-ui/styles/colors';

class Stepper1 extends React.Component {
  constructor(props) {
    super(props);
  }

  getIconStyles() {
    const {
      firstStep,
      secondStep,
      thirdStep,
    } = this.props;

    const icon = {
      margin: 5,
    };
    const iconActive = {
      margin: 5,
      // backgroundColor: 'blue'
    };

    const firstIconStyle = ((firstStep || secondStep || thirdStep) ?
      iconActive :
      icon);

    const secondIconStyle = ((secondStep || thirdStep) ?
      iconActive :
      icon);

      const thirdIconStyle = ((thirdStep) ?
      iconActive :
      icon);

    const styles = {
      firstIconStyle: firstIconStyle,
      secondIconStyle: secondIconStyle,
      thirdIconStyle: thirdIconStyle,
    };

    return styles;
  }

  render() {
    const iconStyles = this.getIconStyles();
    return (
      <Paper style={styles.container}>
        <div style={styles.element}>
          <Avatar style={iconStyles.firstIconStyle}>
            <span>1</span>
          </Avatar>
          <span>表单填写</span>
        </div>
        <div style={connectorLine}></div>
        <div style={styles.element}>
          <Avatar style={iconStyles.secondIconStyle}>
            <span>2</span>
          </Avatar>
          <span>二维码确认</span>
        </div>
        <div style={connectorLine}></div>
        <div style={styles.element}>
          <Avatar style={iconStyles.thirdIconStyle}>
            <span>3</span>
          </Avatar>
          <span>打印/导出</span>
        </div>
      </Paper>
    );
  }
}

const connectorLine = {
  width: 50,
  height: 1,
  marginLeft: 5,
  marginBottom: 5,
  padding: 0,
  backgroundColor: '#BDBDBD',
  overflow: 'hidden',
  display: 'inline-block',
}

const styles = {
  container: {
    height: 60,
    width: 500,
    marginBottom: 20,
    textAlign: 'center',
    display: 'inline-block',
    float: 'left'
  },
  element: {
    display: 'inline-block',
    marginTop: 3,
    fontSize: 16,
  }
};

export default Stepper1;
