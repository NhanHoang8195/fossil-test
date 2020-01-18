import React, {useEffect, useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import avatar from '../../image/avatar.jpg';
import './styles.scss';

const listNavItems = [
  { url: '/home', title: 'HOME'},
  { url: '/order', title: 'ORDER'},
  { url: '/warehouse', title: 'WAREHOUSE'},
  { url: '/customer', title: 'CUSTOMER'},
  { url: '/system', title: 'SYSTEM'},
  { url: '/notification', title: 'NOTIFICATION'},

];

function Header() {
  const [activeUrl, setActiveUrl] = useState(window.location.pathname);
  useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, []);
  const history = useHistory();
  function onSelectItem(eventKey) {
    setActiveUrl(eventKey);
    history.push(eventKey);
  }
  return (<Navbar fixed="top" bg="dark" variant="dark" className="justify-content-center navbar-header" onSelect={onSelectItem}>
    <div className="brand-logo"><p className="text">Fossil</p></div>
    <Nav className="nav-content">
      {listNavItems.map((item, idx) => (
        <Nav.Link
          key={idx}
          className="nav-item"
          as='div'
          eventKey={item.url}
          active={activeUrl === item.url}
        >
          {item.title}
        </Nav.Link>
      ))}

        <Nav.Link as="div" className="nav-avatar" eventKey={'/profile'}>
          <img className="avatar-img" src={avatar} alt="avt" />
          Kanlee
        </Nav.Link>.
    </Nav>
  </Navbar>)
}

export default Header;
