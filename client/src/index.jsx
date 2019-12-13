import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var restName = 'monsieur-benjamin';

ReactDOM.render(<App restName={restName}/>, document.getElementById('gallery'));