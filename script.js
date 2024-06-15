document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById('color-box');
    const button = document.getElementById('change-color-btn');

    function getRandomColor(numRGB){
        return Math.floor(Math.random() * (numRGB + 1));
    }

    button.addEventListener("click", () => {
        const randomColor = `rgb(${getRandomColor(255)} ${getRandomColor(255)} ${getRandomColor(255)})`;
        colorBox.style.backgroundColor = randomColor;
    });
});

// button.addEventListener("click", () => {});