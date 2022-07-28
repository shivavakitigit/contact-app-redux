import {compose, createStore} from 'redux';
import {contactsReducer} from './reducers/contacts';
import { LoginReducer } from './reducers/LoginReducer';


// export const store = createStore(contactsReducer);
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// multipleCombineReducers is a function that takes an object of reducers and returns a single reducer
export const store = createStore(
    // contactsReducer,
    LoginReducer,
    enhancers
  );


  // hooks
  // redux


//   chrome extension
// rect dev tools
// redux dev tools