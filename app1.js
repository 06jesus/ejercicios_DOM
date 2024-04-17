// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.body.querySelector('.showme')
console.log(button)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.body.querySelector('#pillado')
console.log(h1)

// 1.3 Usa querySelector para mostrar por consola todos los p
const allP = document.body.querySelectorAll('p')
console.log(allP)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const allPokemon = document.body.querySelectorAll('.pokemon')
console.log(allPokemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const allFuction = document.body.querySelector('[data-fuction="testMe"]')
console.log(allFuction)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personajes = document.body.querySelectorAll('[data-fuction="testMe"]')
const personaje3 = personajes[2]
console.log(personaje3)
