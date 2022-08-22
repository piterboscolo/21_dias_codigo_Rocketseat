
// set initial counterValue value
let count = 0;
// select counterValue element and all btn
const counterValue = document.querySelector('[data-value="counter-value"]');
const btns = document.querySelectorAll('[data-btn]');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (eve) {
        console.log(eve);
        const styles = eve.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        } else {
            return;
        }

        if (count > 0) {
            counterValue.style.color = 'green';
        } else if (count < 0) {
            counterValue.style.color = 'red';
        } else {
            counterValue.style.color = '#282828';
        }

        counterValue.textContent = count;

    });
});