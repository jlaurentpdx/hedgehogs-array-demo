// import functions and grab DOM elements
import { hedgehogs } from './hedgehogs.js';

const div = document.getElementById('show-hedgehogs');

for (let hedgehog of hedgehogs) {
    const hedgeName = document.createElement('h1');
    const hedgeColor = document.createElement('p');
    
    hedgeName.textContent = hedgehog.name;
    hedgeColor.textContent = hedgehog.color;

    div.appendChild(hedgeName);
    div.appendChild(hedgeColor);
}