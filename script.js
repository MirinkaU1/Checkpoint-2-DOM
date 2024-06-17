document.addEventListener("DOMContentLoaded", function() {
    var colorBox = document.getElementById('color-box');
    var button = document.getElementById('change-color-btn');
    var text = document.getElementById('title');

    function getRandomColor(numRGB) {
        return Math.floor(Math.random() * (numRGB + 1));
    }

    button.addEventListener("click", function() {
        var randomColor = 'rgb(' + getRandomColor(255) + ',' + getRandomColor(255) + ',' + getRandomColor(255) + ')';
        colorBox.style.background = randomColor;
        text.style.color = randomColor;
        button.style.background = randomColor;
    });
});

