// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btnToClick = document.getElementById('btnToClick')
const input = document.querySelector('.click')
btnToClick.addEventListener('click', function (event) {
  const inputValue = input.value
  console.log(inputValue)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input2 = document.querySelectorAll('input')
input2.addEventListener('focus', function (event) {
  const inputValue = input2.value
  console.log(inputValue)
})
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input3 = document.querySelectorAll('input')
input3.addEventListener('input', function (event) {
  const inputValue = input3.value
  console.log(inputValue)
})
