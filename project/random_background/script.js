const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let intervalId;

let randomColor = function(){
    const hex = '0123456789abcdef';
    let color = '#';

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

let setBackground = function(){
    document.querySelector('body').style.backgroundColor = randomColor();
}

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    intervalId = setInterval(setBackground, 1000);
})

stopButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(intervalId);
    intervalId = null;
})