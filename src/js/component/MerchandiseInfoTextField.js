import React from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import ClearFix from 'material-ui/lib/clearfix';
import DoneIcon from 'material-ui/lib/svg-icons/action/done';
import Divider from 'material-ui/lib/divider';
import Subheader from 'material-ui/lib/Subheader/';
import Count from './Count';
import Stepper from './Stepper';
import $ from '../../lib/jquery-1.12.1';

class MerchandiseInfoTextField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: null,
      counts: 100,
      acceptanceAuthority: null,
      catalog: null,
      minPrice: 100,
      maxPrice: 200,
      productionDate: null,
      shelfLife: null,
    };
  }

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleProductionDateChange(event, date) {
    this.setState({
      productionDate: date
    });
  }
  handleShelfLifeChange(event, date) {
    this.setState({
      shelfLife: date
    });
  }

  handleCountChange(value) {
    this.setState({
      counts: value
    });
  }

  handleMinPriceChange(value) {
    this.setState({
      minPrice: value
    });
  }

  handleMaxPriceChange(value) {
    this.setState({
      maxPrice: value
    });
  }

  handleSubmit() {
    console.log(this.state);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: this.state,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }

  render() {
    return (
      <div style={styles.context}>
        <div>
          <p style={styles.subtitle}>生成二维码－填写商品信息</p>
          <Stepper />
          <ClearFix />
        </div>
        <ClearFix />
        <Divider />
        <TextField
          hintText="商品名称"
          floatingLabelText="商品名称"
          multiLine={true}
          fullWidth={true}
          value={this.state.name}
          onChange={this.setValue.bind(this, 'name')}
          /><br/><br/>
        <Count 
          title={'商品数量'}
          count={this.state.counts}
          handleCount={this.handleCountChange.bind(this)}/>
        <TextField
          hintText="受理机关"
          floatingLabelText="受理机关"
          multiLine={true}
          fullWidth={true}
          value={this.state.acceptanceAuthority}
          onChange={this.setValue.bind(this, 'acceptanceAuthority')}
          /><br/>
        <TextField
          hintText="产品类别"
          floatingLabelText="产品类别"
          multiLine={true}
          fullWidth={true}
          value={this.state.catalog}
          onChange={this.setValue.bind(this, 'catalog')}
          /><br/><br/>
        <Count
          title={'价格区间'}
          count={this.state.minPrice}
          handleCount={this.handleMinPriceChange.bind(this)}/>
        <Count
          count={this.state.maxPrice}
          handleCount={this.handleMaxPriceChange.bind(this)}/>
        <br/><br/>
        <DatePicker
          hintText="生产日期"
          fullWidth={true}
          value={this.state.productionDate}
          onChange={this.handleProductionDateChange.bind(this)}
          /><br/>
        <DatePicker
          hintText="过期日期"
          mode="landscape"
          fullWidth={true}
          value={this.state.shelfLife}
          onChange={this.handleShelfLifeChange.bind(this)}
          /><br/>
        <RaisedButton
          style={styles.button}
          label="提交并预生成二维码"
          secondary={true}
          icon={<DoneIcon />}
          onClick={this.handleSubmit}
          />
        <ClearFix />
      </div>
    );
  }
}

MerchandiseInfoTextField.propTypes = {
  counts: React.PropTypes.number,
  minPrice: React.PropTypes.number,
  maxPrice: React.PropTypes.number,
};

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

export default MerchandiseInfoTextField;