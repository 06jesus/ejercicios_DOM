const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const div = document.querySelector('div')
const ulPlaces = document.createElement('ul')

for (const place of places) {
  const liPlace = document.createElement('li')
  liPlace.textContent = place
  const atriPlace = document.createAttribute('data-function')
  atriPlace.value = 'printHere'
  liPlace.setAttributeNode(atriPlace)
  ulPlaces.appendChild(liPlace)
}
div.appendChild(ulPlaces)
