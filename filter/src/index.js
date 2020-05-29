import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const filters = ["All", "Websites", "Flayers", "Business Cards"];
const projects = [{
    img: "img/mon.jpg",
    category: "Business Cards"
}, {
    img: "img/200.jpg",
    category: "Websites"
}, {
    img: "img/emi_haze.jpg",
    category: "Websites"
}, {
    img: "img/codystretch.jpg",
    category: "Websites"
}, {
    img: "img/Triangle_003.jpg",
    category: "Business Cards"
}, {
    img: "img/place200x290.png",
    category: "Websites"
}, {
    img: "img/200.jpg",
    category: "Websites"
}, {
    img: "img/transmission.jpg",
    category: "Business Cards"
}, {
    img: "img/place200x290_1.png",
    category: "Websites"
}, {
    img: "img/place200x290_2.png",
    category: "Flayers"
}, {
    img: "img/the_ninetys_brand.jpg",
    category: "Websites"
}, {
    img: "img/dia.jpg",
    category: "Business Cards"
}, {
    img: "img/Triangle_350x197.jpg",
    category: "Websites"
}, {
    img: "img/emi_haze.jpg",
    category: "Websites"
}, {
    img: "img/transmission.jpg",
    category: "Business Cards"
}, {
    img: "img/Triangle_350x197_1.jpg",
    category: "Websites"
}, {
    img: "img/place200x290_3.png",
    category: "Flayers"
}];

ReactDOM.render(
    <App filters={filters} projects={projects} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
