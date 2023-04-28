import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import userIdReducer from './features/UserId';
import signUpClickReducer from "./features/SignUpClick";
import logInReducer from "./features/LogedIn";
import signInClickReducer from './features/SignInClick';
import popAlertReducer from './features/PopAlert';


const store = configureStore({

  reducer: {
    user: userIdReducer,
    signUpClickStatus:signUpClickReducer,
    signInClickStatus: signInClickReducer,
    logInStatus:logInReducer,
    content:popAlertReducer,
    

  }, 

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
