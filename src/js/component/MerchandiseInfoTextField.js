import React from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import ClearFix from 'material-ui/lib/clearfix';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';
import Divider from 'material-ui/lib/divider';
import Subheader from 'material-ui/lib/Subheader/';
import Count from './Count';

class MerchandiseInfoTextField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onPressHandler = this.onPressHandler.bind(this);

    this.state = {
      merCounts: this.props.initialCount,
    };
  }
  
  onPressHandler() {
    this.setState({
      merCounts: this.state.merCounts - 1,
    });
  }
  
  render() {
    return (
      <div style={styles.context}>
        <p style={styles.subtitle}>生成二维码－填写商品信息</p>
        <Divider />
        <TextField
          hintText="商品名称"
          floatingLabelText="商品名称"
          multiLine={true}
          fullWidth={true}
          /><br/><br/>
        <Count title={'商品数量'} count={100}/>
        <TextField
          hintText="受理机关"
          floatingLabelText="受理机关"
          multiLine={true}
          fullWidth={true}
          /><br/>
        <TextField
          hintText="产品类别"
          floatingLabelText="产品类别"
          multiLine={true}
          fullWidth={true}
          /><br/><br/>
        <Count title={'价格区间'} count={100}/>
        <Count count={200}/>
        <br/><br/>
        <DatePicker hintText="生产日期" fullWidth={true} /><br/>
        <DatePicker hintText="过期日期" mode="landscape" fullWidth={true} /><br/>
        <RaisedButton
          style={styles.button}
          label="提交并预生成二维码"
          secondary={true}
          icon={<DoneIcon />}
          />
        <ClearFix />

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
    paddingTop: 20,
  },
  numberText: {
    width: 150,
    height: 30,
    verticalAlign: 'top',
  },
  numberInputText: {
    paddingLeft: 50,
    paddingRight: 50,
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

export default MerchandiseInfoTextField;