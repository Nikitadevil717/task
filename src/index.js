import React from 'react';
import ReactDOM from 'react-dom';

import AddRemoveLayout from './App.js';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './index.scss';


ReactDOM.render(
    <AddRemoveLayout />,
    document.getElementById('container')
);