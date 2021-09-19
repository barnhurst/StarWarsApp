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
// const characterButton = () => {
//     const shows = document.querySelectorAll('a')
//     shows.forEach((show) => {
//         show.addEventListener('click', displayCharacter)
//     })
// }

function getCharacters() {
    ul.innerHTML =''
    info.innerHTML =''
    fetchCharacters().then(data => {
        data.forEach(character => {
        const anchor = document.createElement("A")
        anchor.innerHTML = character.name
        anchor.setAttribute('href', '#')
        anchor.setAttribute('data-id', character.name)
        anchor.addEventListener('click', () => {
            setCharacterInfo(character)
        })
        const listItem = document.createElement("li")
        listItem.appendChild(anchor)
        ul.appendChild(listItem)
        // ul.innerHTML += `
        //     <li><a href="#" data-id="${character.name}">${character.name}</a></li>
        //     `
        // })
        // attachClicksToLinks()
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


// const displayShow = (event) => {
//     console.log(event.target.dataset.id)
//     const info = document.getElementById('info')
//     const ul = document.getElementById('show-list')
//     ul.innerHTML = ''
//     fetch(BASE_URL +  `/shows/${event.target.dataset.id}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
        // info.innerHTML = `<h1>${data.name}</h1><br/>
        // <h3>Summary:</h3>
        // <p>${data.summary}</p>
        // <h3>Network:</h3>
        // <p>Genres:</p>
        // <p>${data.genres.join(", ")}</p>
        // <h3>Official Site:</h3>
        // <p>${data.officialSite}</p>`
//     })
// }