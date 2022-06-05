import App from '../node_modules/etsbox-canvas-lib/src/App.js';

const config = {
    canvasId: 'app',
    width: 600,
    height: 300,
    backgroundColor: 'white'
}
const app = new App(config);
const context = app.context;
const circleCenterX = app.width / 2;
const circleCenterY = app.height / 3;
const circleRadius = 50;

context.textAlign = 'center';
context.font = '40px arial';

const text = [
    'Не нажимать',
    'Так блэт',
    'Там же было написано',
    'Не нажимать!',
    'Ты читать умеешь?',
    'Ой, всё!'
];
let i = 0;

function drawButton() {
    app.clearBoard();
    context.fillStyle = 'red';
    context.arc(circleCenterX, circleCenterY, circleRadius, 0, Math.PI * 2, true);
    context.fill();
    context.fillStyle = 'black';
    context.fillText(text[i], app.width / 2, app.height * 2 / 3);
}

document.addEventListener('click', e => {
    const cursorX = e.offsetX;
    const cursorY = e.offsetY;
    const dx = Math.abs(cursorX - circleCenterX);
    const dy = Math.abs(cursorY - circleCenterY);
    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    if (distance <= circleRadius) {
        i += +(i < text.length - 1);

        drawButton();
    }
});

drawButton();