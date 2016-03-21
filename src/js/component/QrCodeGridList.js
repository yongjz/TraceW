import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import $ from '../../lib/jquery-1.12.1';

class QrCodeGridList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrint = this.handlePrint.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    this.state = {
      open: false,
    };
  }

  handlePrint() {
    window.print();
  }
  
  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Paper style={styles.codeContent}>
              <div className="row">
                {tilesData.map(tile => (
                  <div key={tile.title}>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                      <img src={imgUrl} className="img-responsive" />
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                      <img src={imgUrl} className="img-responsive" />
                    </div>
                  </div>
                )) }
              </div>
            </Paper>
          </div>
          <div className="col-md-3" style={styles.report}>
            <p>生成报告</p>
            <Divider />
            <Paper style={styles.description}>
              <p>xx对</p>
              <p>商品名称：xxxxx</p>
              <p>制造厂商：xxxxx</p>
            </Paper>
            <p>是否确定生成二维码？</p>
            <RaisedButton
              style={styles.submitBtn}
              label="确定"
              secondary={true}
              //icon={<DoneIcon />}
              fullWidth={true}
              onTouchTap={this.handleOpen}
            />
            <RaisedButton
              label="返回"
              secondary={true}
              //icon={<DoneIcon />}
              fullWidth={true}
            />
          </div>
        </div>
        <Dialog
          title="是否确定生成二维码？"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png';

const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: 500,
    // height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
  description: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  report: {
    fontSize:16
  },
  codeContent: {
    marginBottom: 20
  },
  submitBtn: {
    marginBottom:10
  }
};

export default QrCodeGridList;