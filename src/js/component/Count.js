import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

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
        <RaisedButton label="－" onClick={this.onPressMinusHandler}/>
        <TextField
          defaultValue={this.props.count}
          multiLine={true}
          underlineShow={false}
          inputStyle={styles.numberInputText}
          style={styles.numberText}
          value={this.state.merCounts+''}
          onChange={this.onChangeHandler}
          />
        <RaisedButton label="＋" onClick={this.onPressPlusHandler}/>
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