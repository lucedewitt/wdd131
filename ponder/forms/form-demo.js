let chosenPayment = document.querySelector('#paymentMethod');

chosenPayment.addEventListener('change', showPayment);

let paypalSelect = document.querySelector('#paypalUsernameContainer');
let creditCardSelect = document.querySelector('#creditCardNumberContainer');

function showPayment() {
    let current = chosenPayment.value;

    if (current == 'creditCard'){
        creditCardSelect.classList.remove('hide');
        paypalSelect.classList.add('hide');
    }

    if (current == 'paypal'){
        paypalSelect.classList.remove('hide');
        creditCardSelect.classList.add('hide');
    }

    if (current == ''){
        creditCardSelect.classList.add('hide');
        paypalSelect.classList.add('hide');
    }
}