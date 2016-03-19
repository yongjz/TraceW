import React from 'react';
import '../../css/sticky-footer.css';
import Divider from 'material-ui/lib/divider';

class Footer extends React.Component {

  render() {
    return (
      <div className="sticky-footer">
        <Divider style={styles.footDivider}/>
        <ul style={styles.list}>
          <li className="pull-left" style={styles.item}>© 2016 WhuLiss, Lab.</li>
          <li className="pull-left" style={styles.item}><a href="#">Privacy & Terms</a></li>
          <li className="pull-left" style={styles.item}><a href="#">Contact</a></li>
          <li className="pull-left" style={styles.item}><a href="#">Help</a></li>
        </ul>
      </div>
    );
  }
}

const styles={
  list:{
    marginTop:20,
    marginLeft:20,
    marginBottom:20,
  },
  item: {
    marginLeft:30,
  },
  footDivider: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  }
}

export default Footer;