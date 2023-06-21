document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByTagName('input');
    var display = document.getElementById('display');

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].type === 'button') {
            buttons[i].addEventListener('click', buttonClick);
        }
    }

    function buttonClick() {
        var value = this.value;

        if (value === 'c') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    }
});
