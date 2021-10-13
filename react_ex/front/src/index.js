import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.scss';
import Container from './public/Container';
import Header from './public/Header';


ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<Container />,document.getElementById('root'));
// ReactDOM.render(<Footer />,document.getElementById('footer'));

