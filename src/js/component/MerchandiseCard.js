import React from 'react';
import Card from 'material-ui/card/Card';
import CardActions from 'material-ui/card/CardActions';
import CardHeader from 'material-ui/card/CardHeader';
import CardMedia from 'material-ui/card/CardMedia';
import CardTitle from 'material-ui/card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import CardText from 'material-ui/card/CardText';
import ClearFix from 'material-ui/internal/clearfix';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import DataIcon from 'material-ui/svg-icons/action/date-range';
import StoreIcon from 'material-ui/svg-icons/action/store';
import HomenIcon from 'material-ui/svg-icons/action/home';

class CardExampleWithAvatar extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="商品名称:xxx"
          titleStyle={{fontSize:20}}
          />
        <CardMedia
          overlay={<CardTitle title="商品图片" />}
        >
          <img src="img/grocery.jpg" />
        </CardMedia>
        <CardTitle title="商品基本信息" />
        <CardText className="clearfix">
          <List>
            <ListItem primaryText="制造商:xxx" leftIcon={<HomenIcon />} />
            <ListItem primaryText="销售商:xxx" leftIcon={<StoreIcon />} />
            <ListItem primaryText="生产日期 2016-01-01" leftIcon={<DataIcon />} />
            <ListItem primaryText="到期日期 2016-12-31" leftIcon={<DataIcon />} />
          </List>
        </CardText>
      </Card>
    );
  }
}
// <p>制造商:xxx</p>
// <p>销售商:xxx</p>
// <p className="pull-left">生产日期 2016-01-01</p>
// <p className="pull-right">到期日期 2016-12-31</p>

export default CardExampleWithAvatar;
