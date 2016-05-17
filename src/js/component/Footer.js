import React from 'react';
import '../../css/sticky-footer.css';
import Divider from 'material-ui/Divider';

class Footer extends React.Component {

  render() {
    return (
      <div className="sticky-footer noprint">
        <Divider style={styles.footDivider}/>
        <ul style={styles.list} className="list-inline">
          <li style={styles.item}>
            © 2016 WhuLiss, Lab.
          </li>
          <li style={styles.item}>
            <a href="#">Privacy & Terms</a>
          </li>
          <li style={styles.item}>
            <a href="#">Contact</a>
          </li>
          <li style={styles.item}>
            <a href="#">Help</a>
          </li>
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
    marginLeft:20,
  },
  footDivider: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  }
}

export default Footer;
