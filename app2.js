// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement('div')
document.body.appendChild(newDiv2)
const newP = document.createElement('p')
newdiv2.appendChild(newP)
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const newDiv3 = document.createElement('div')
document.body.appendChild(newDiv3)
for (let index = 0; index < 6; index++) {
  const newP = document.createElement('p')
  newDiv3.appendChild(newP)
}

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
const newP2 = document.createElement('p')
newP2.textContent = 'Soy dinámico!'
document.body.appendChild(newP2)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const newUl = document.createElement('ul')
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
for (const app of apps) {
  const newLi = document.createElement('li')
  newLi.textContent = app
  newUl.appendChild(newLi)
}
document.body.appendChild(newUl)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeClass = document.querySelectorAll('.fn-remove-me')
removeClass.remove()

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.
const newP3 = document.createElement('p')
const rdiv = document.querySelectorAll('div')
newP3.textContent = 'Voy en medio!'
document.body.insertBefore(newP, rdiv[1].nextSibling)

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const newP4 = document.createElement('p')
newP4.textContent = 'Voy dentro!'
const insertInDiv = document.querySelectorAll('.fn-insert-here')
for (const divUnit of insertInDiv) {
  divUnit.appendChild(newP4)
}
