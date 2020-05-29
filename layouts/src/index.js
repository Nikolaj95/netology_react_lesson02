import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Img1 from './img/1.jpg';
import Img2 from './img/2.jpg';
import Img3 from './img/3.jpg';
import Img4 from './img/4.jpg';
import Img5 from './img/5.jpg';
import Img6 from './img/6.jpg';
import * as serviceWorker from './serviceWorker';

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: Img1
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: Img2
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: Img3
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: Img4
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: Img5
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: Img6
}];

const cardsLayout = {
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4
};


ReactDOM.render(
    <App layout={cardsLayout} products={products} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
