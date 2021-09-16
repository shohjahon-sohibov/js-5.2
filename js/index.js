var elFizzBuzzForm = document.querySelector(".fizzbuzz-form");
var elFizzBuzzInput = elFizzBuzzForm.querySelector(".fizzbuzz-input");
var elFizzBuzzResult = elFizzBuzzForm.querySelector(".fizzbuzz-result");


elFizzBuzzForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  var inputNumber = parseInt(elFizzBuzzInput.value.trim(), 10);
  
  var fizzBuzz = inputNumber % 3 === 0 && inputNumber % 5 === 0 ? 'FizzBuzz' : (inputNumber % 3 === 0 ? 'Fizz' : '') + (inputNumber % 5 === 0 ? 'Buzz' : '') + (inputNumber % 3 !== 0 && inputNumber % 5 !== 0 ? inputNumber : '');
  elFizzBuzzResult.textContent = fizzBuzz;
});
  