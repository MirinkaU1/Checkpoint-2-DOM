document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById('color-box');
    const button = document.getElementById('change-color-btn');
    const text = document.getElementById('title');

    function getRandomColor(numRGB){
        return Math.floor(Math.random() * (numRGB + 1));
    }

    button.addEventListener("click", () => {
        const randomColor = `rgb(${getRandomColor(255)} ${getRandomColor(255)} ${getRandomColor(255)})`;
        colorBox.style.background = randomColor;
        text.style.color = randomColor;
        button.style.background = randomColor;
    });
});

// button.addEventListener("click", () => {});