import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import Confirm from './confirm';
import Process from './process';
import Waiting from './waiting';
import Payment from './payment';
import Success from './success';
import './styles.scss';

const tabItems = [
  {eventKey: 'confirm', title: 'CONFIRM', content: Confirm},
  {eventKey: 'process', title: 'PROCESS', content: Process},
  {eventKey: 'waiting', title: 'WAITING', content: Waiting},
  {eventKey: 'payment', title: 'PAYMENT', content: Payment},
  {eventKey: 'success', title: 'SUCCESS', content: Success},
];

function OrderContainer(props) {
  return (<div className="order-container">
    <header className="order-container-header">
      <h1>List of order</h1>
      <p>Orders information & payment</p>
    </header>
    <div className="order-container-body">
      <div className="body-header">
        <span className="back-btn"><FontAwesomeIcon icon={faAngleLeft} />back</span>
      </div>
      <Tab.Container id="order-tab" defaultActiveKey={tabItems[0].eventKey} mountOnEnter>
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              {tabItems.map(item => (
                <Nav.Link key={item.eventKey} eventKey={item.eventKey} as='div'>
                {item.title}
              </Nav.Link>))}
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              {tabItems.map(item => {
                const Field = item.content;
                return (<Tab.Pane key={item.eventKey} eventKey={item.eventKey} as='div'>
                  <Field />
                </Tab.Pane>);
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  </div>)
}

export default OrderContainer;
