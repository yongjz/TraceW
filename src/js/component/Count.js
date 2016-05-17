import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import colors from 'material-ui/styles/colors';

class Count extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onPressMinusHandler = this.onPressMinusHandler.bind(this);
    this.onPressPlusHandler = this.onPressPlusHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
      merCounts: this.props.count,
    };
  }

  onPressMinusHandler() {
    this.setState({
      merCounts: this.state.merCounts - 1,
    });
    this.props.handleCount(this.state.merCounts - 1);
  }

  onPressPlusHandler() {
    this.setState({
      merCounts: this.state.merCounts + 1,
    });
    this.props.handleCount(this.state.merCounts + 1);
  }

  onChangeHandler(event) {
    this.setState({
      //Convert string to number
      merCounts: Number(event.target.value),
    });
    this.props.handleCount(event.target.value);
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <FlatButton
          label="－"
          onClick={this.onPressMinusHandler}
          backgroundColor={colors.grey200}
          />
        <TextField
          defaultValue={this.props.count}
          multiLine={true}
          underlineShow={false}
          inputStyle={styles.numberInputText}
          style={styles.numberText}
          value={this.state.merCounts+''}
          onChange={this.onChangeHandler}
          />
        <FlatButton
          label="＋"
          onClick={this.onPressPlusHandler}
          backgroundColor={colors.grey200}
          />
      </div>
    );
  }
}

const styles = {
  numberText: {
    width: 150,
    height: 30,
    verticalAlign: 'top',
  },
  numberInputText: {
    paddingLeft: 60,
    fontSize: 20,
  },
  btn: {
    color: '#b3e5fc'
  },
  connectLine: {
    display: 'inline-block',
    width: 50,
    textAlign: 'center',
    verticalAlign: 'top',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
};

export default Count;
