import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect , Switch } from 'react-router-dom';
import LayoutWrapper from '../layout';
import OrderContainer from './orderContainer';
import HomeContainer from './homeContainer';

function App({ store }) {
  return (<Provider store={store}>
      <Router>
        <LayoutWrapper>
          <Switch>
            <Route exact path="/"><Redirect to="/order" /></Route>
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/order" component={OrderContainer} />
            <Route exact path="/warehouse" component={HomeContainer} />
            <Route exact path="/customer" component={HomeContainer} />
            <Route exact path="/system" component={HomeContainer} />
            <Route exact path="/notification" component={HomeContainer} />
            <Route exact path="/profile" component={HomeContainer} />
          </Switch>
        </LayoutWrapper>
      </Router>
  </Provider>);
}

export default App;
