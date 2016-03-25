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
import DoneIcon from 'material-ui/lib/svg-icons/action/done';
import stylesLib from 'material-ui/lib/styles';
import $ from '../../lib/jquery-1.12.1';

const colors = stylesLib.Colors;

class QrCodeGridList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrint = this.handlePrint.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);

    this.state = {
      open: false,
      done: false,
    };
  }

  handlePrint() {
    window.print();
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handlerSubmit() {
    this.setState({
      done: true,
      open: false,
    });
  };

  render() {
    var report = this.state.done ?
      (<div className="col-md-3" style={styles.report}>
          <p>生成报告</p>
          <Divider />
          <Paper style={styles.description}>
            <p>xx对</p>
            <p>商品名称：xxxxx</p>
            <p>制造厂商：xxxxx</p>
          </Paper>
          <Paper style={styles.done}>
            <h3>该套二维码已经生成成功</h3>
            <DoneIcon />
          </Paper>
          <RaisedButton
            style={styles.doneBtn}
            label="打印"
            secondary={true}
            fullWidth={true}
            //icon={<DoneIcon />}
            />
          <RaisedButton
            style={styles.doneBtn}
            label="导出"
            secondary={true}
            fullWidth={true}
            //icon={<DoneIcon />}
            />
          <RaisedButton
            style={styles.doneBtn}
            label="撤销"
            primary={true}
            fullWidth={true}
            //icon={<DoneIcon />}
            />
        </div>
      )
      :
      (<div className="col-md-3" style={styles.report}>
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
      </div>)
      
    const actions = [
      <FlatButton
        label="取消"
        secondary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handlerSubmit}
        />,
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Paper style={styles.codeContent}>
              <div className="row">
                {qrcodeData.map(qrcode => (
                  <div key={qrcode.key}>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                      <img src={qrcode.img1} className="img-responsive" />
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-6">
                      <img src={qrcode.img2} className="img-responsive" />
                    </div>
                  </div>
                )) }
              </div>
            </Paper>
          </div>
          {report}
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

const qrcodeData = [
  {
    key: 1,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'
  },
  {
    key: 2,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'

  },
  {
    key: 3,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'

  },
  {
    key: 4,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'

  },
  {
    key: 5,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'

  },
  {
    key: 6,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'

  },
  {
    key: 7,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'

  },
  {
    key: 8,
    img1: 'img/qrcode_out.jpg',
    img2: 'img/qrcode_in.jpg'
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
    fontSize: 16
  },
  codeContent: {
    marginBottom: 20
  },
  submitBtn: {
    marginBottom: 10
  },
  done: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.grey100
  },
  doneBtn: {
    marginBottom: 10,
    marginRight: 5,
  }
};

export default QrCodeGridList;