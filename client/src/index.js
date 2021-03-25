/*
    CSS libraries
    Note: Importing CSS 
*/
import 'materialize-css/dist/css/materialize.min.css'; 
import "./index.css"; 
//React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk'; 
//App Components
import App from './components/App';
import reducers from './reducers'; 


//Exportable files
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
