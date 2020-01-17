import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function Footer(props) {
  return (<div className="layout-footer">
    <div className="information">
      <span className="address"><FontAwesomeIcon icon={faMapMarkerAlt} />384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh</span>
      <span className="phone"><FontAwesomeIcon icon={faPhoneAlt} />02838268160</span>
      <span className="email"><FontAwesomeIcon icon={faEnvelope} />phuong@fossil.com</span>
    </div>
    <hr className="divide" />
    <div className="company-name"><FontAwesomeIcon icon={faCopyright} />Công ty TNHH Fossil Việt Nam</div>
  </div>)
}

export default Footer;
