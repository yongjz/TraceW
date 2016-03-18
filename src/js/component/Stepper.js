import React from 'react';
import Paper from 'material-ui/lib/paper';
import CheckCircle from 'material-ui/lib/svg-icons/action/check-circle';
import Avatar from 'material-ui/lib/avatar';
import Styles from 'material-ui/lib/styles';
const colors = Styles.Colors;


class Stepper extends React.Component {
  render() {
    return (
      <Paper style={styles.container}>
        <div style={styles.element}>
          <Avatar style={styles.iconActive}>
            <span>1</span>
          </Avatar>
          <span>表单填写</span>
        </div>
        <div style={connectorLineLeft}></div>
        <div style={styles.element}>
          <Avatar style={styles.icon}>
            <span>2</span>
          </Avatar>
          <span>内容确认</span>
        </div>
        <div style={connectorLineLeft}></div>
        <div style={styles.element}>
          <Avatar style={styles.icon}>
            <span>3</span>
          </Avatar>
          <span>打印/导出</span>
        </div>
      </Paper>
    );
  }
}

const connectorLineLeft = {
  width:50,
  height:1,
  marginLeft: 5,
  marginBottom: 5,
  padding:0,
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
    float:'left'
  },
  icon: {
    margin: 5,
  },
  iconActive: {
    margin: 5,
    backgroundColor:colors.blue500
  },
  element: {
    display: 'inline-block',
    marginTop: 3,
  }
};

export default Stepper;