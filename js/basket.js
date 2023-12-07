let plusButtons = document.querySelectorAll('.quantity__plus');
let minusButtons = document.querySelectorAll('.quantity__minus');
let numberInputs = document.querySelectorAll('.quantity__number');

numberInputs.forEach((numberInputs) => numberInputs.value = 0);

plusButtons.forEach(function (button) {
  button.addEventListener('click', function() {
    let productContainer = button.closest('.basket__product');
    let numberInput = productContainer.querySelector('.quantity__number');
    numberInput.value = +numberInput.value + 1;
  });
});

minusButtons.forEach(function (button) {
  button.addEventListener('click', function() {
    let productContainer = button.closest('.basket__product');
    let numberInput = productContainer.querySelector('.quantity__number');
    if (numberInput.value > 0) {
      numberInput.value = +numberInput.value - 1;
    }
  });
});