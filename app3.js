// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const newUl = document.createElement('ul')

for (const country of countries) {
  const newLi = document.createElement('li')
  newLi.textContent = country
  newUl.appendChild(newLi)
}

document.body.appendChild(newUl)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoARemover = document.querySelectorAll('.fn-remove-me')
elementoARemover.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const newUl2 = document.createElement('ul')
const divPrintHere = document.querySelector('[data-function="printHere"]')
divPrintHere.appendChild(newUl2)
for (const car of cars) {
  let newLi2 = document.createElement('li')
  newLi2.textContent = car
  newUl2.appendChild(newLi2)
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country2 of countries2) {
  const newDiv = document.createElement('div')
  const h4Div = document.createElement('h4')
  const imgDiv = document.createElement('img')

  h4Div.textContent = country2.title
  imgDiv.src = country2.imgUrl

  newDiv.appendChild(h4Div)
  newDiv.appendChild(imgDiv)

  document.body.appendChild(newDiv)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement('button')
button.textContent = 'eliminar'

button.addEventListener('click', function () {
  if (button.textContent === 'eliminar') {
    countries2.pop()
  }
})
document.body.appendChild(button)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

for (const country3 of countries2) {
  const div = document.createElement('div')
  div.innerHTML = `
    <h2>${country3.title}</h2>
    <img src='${country3.imgUrl}' alt='${country3.title}'>
  `
  const button = document.createElement('button')
  button.textContent = 'eliminar'
  button.addEventListener('click', function () {
    eliminarDiv(div)
  })
  container.appendChild(div)
  div.appendChild(button)
}
function eliminarDiv(div) {
  container.removeChild(div)
}
