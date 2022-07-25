import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/* <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
+       <Route path="register" component={Register} />
      </Route>
    </Router>
  </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

