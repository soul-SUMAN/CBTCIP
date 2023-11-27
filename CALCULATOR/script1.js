document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('screen');
    var calculatorForm = document.querySelector('.calculator form');
    calculatorForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var buttonText = button.innerText;
            if (buttonText === 'AC') {
                display.value = '';
            }
            else if (buttonText === '\u2190') {
                display.value = display.value.slice(0, -1);
            }
            else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            }
            else {
                display.value += buttonText;
            }
        });
    });
});