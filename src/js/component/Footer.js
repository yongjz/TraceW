import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">© 2016 WhuLiss, Lab.</div>
          <ul className="mdl-mini-footer__link-list">
            <li><a href="#">Privacy & Terms</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;