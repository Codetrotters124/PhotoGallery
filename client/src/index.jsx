import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
const host = window.location.href.split('/')

var restName = '0';
let url = `http://${host[2]}/${host[3] ? host[3] : restName.toString()}`

ReactDOM.render(<App url={url}/>, document.getElementById('gallery'));