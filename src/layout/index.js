import React from 'react';
import Header from './header';
import Footer from './footer';

function LayoutWrapper(props) {
  return (<div>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>);
}

export default LayoutWrapper;
