import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import ClearFix from 'material-ui/lib/clearfix';

class CardExampleWithAvatar extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="商品名称"
          subtitle="商品生产商"
          //avatar="http://lorempixel.com/100/100/nature/"
          />
        <CardMedia
          overlay={<CardTitle title="商品图片" />}
          >
          <img src="src/img/grocery.jpg" />
        </CardMedia>
        <CardTitle title="商品简介" subtitle="subtitle" />
        <CardText className="clearfix">
          <p className="pull-left">生产日期 2016-01-01</p>
          <p className="pull-right">到期日期 2016-12-31</p>
        </CardText>
      </Card>
    );
  }
}

export default CardExampleWithAvatar;