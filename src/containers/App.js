import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LayoutWrapper from '../layout';
import OrderContainer from './orderContainer';

function App({ store }) {
  return (<Provider store={store}>
      <Router>
        <LayoutWrapper>
          <Route path="/order" component={OrderContainer} />
        </LayoutWrapper>
      </Router>
  </Provider>);
}

export default App;
