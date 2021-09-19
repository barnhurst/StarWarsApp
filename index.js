const baseURL = 'https://swapi.dev/api/people/?format=json'
const ul = document.getElementById('character-list')
const info = document.getElementById('info')


window.addEventListener('DOMContentLoaded', () => {
    getCharacters()
    document.getElementById("characters").addEventListener('click', getCharacters)
})
async function fetchCharacters() {
    let res = await fetch(baseURL)
    let data = await res.json()
    return data.results
    
}
// https://www.w3schools.com/jsref/met_document_createelement.asp


function getCharacters() {
    ul.innerHTML =''
    info.innerHTML =''
    fetchCharacters().then(data => {
        data.forEach(character => {
            const anchor = document.createElement("A")
            anchor.innerHTML = character.name
            anchor.setAttribute('href', '#')
            anchor.addEventListener('click', () => {
                setCharacterInfo(character)
            })
            const listItem = document.createElement("li")
            listItem.appendChild(anchor)
            ul.appendChild(listItem)
 
         })

})
}
function setCharacterInfo(data) {
    info.innerHTML = `<h2>${data.name}</h2><br/>
    <h3>Height:</h3>
    <p>${data.height}</p>
    <h3>Birth Year:</h3>
    <p>${data.birth_year}</p>
    <h3>Gender:</h3>
    <p>${data.gender}</p>`
}

