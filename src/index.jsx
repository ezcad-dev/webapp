import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// Load env variables
// https://stackoverflow.com/a/49108323
// console.log('DOTENV', process.env.REACT_APP_API_URL);

// Quick test dispatch action
import {fetchSurvey} from './features/surveys/surveysSlice';
const surveyName = 'survey1';
store.dispatch(fetchSurvey(surveyName));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
