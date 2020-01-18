import React from 'react';
import Header from './header';
import Footer from './footer';

import './styles.scss';

function LayoutWrapper(props) {
  return (<div className="layout-app">
    <Header />
    <div className="body-layout">{props.children}</div>
    <Footer />
  </div>);
}

export default LayoutWrapper;
