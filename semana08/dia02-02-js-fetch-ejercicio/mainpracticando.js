// DOCUMENTACIÓN: https://web.dragonball-api.com/

// API: https://dragonball-api.com/api/characters

const url = 'https://dragonball-api.com/api/characters'

const renderCharacters = (characters) => {
  const appDiv = document.querySelector('#app')

  let html = ''

  characters.forEach(character => {
    html += `
      <article>
        <h2>${character.id} - ${character.name}</h2>
        <img src="${character.image}" height="200" />
      </article>
    `
  });

  appDiv.innerHTML = html
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    
    renderCharacters(data.items)
  })

  
// TODO: Renderizar los nombres de los planetas de la siguiente ruta (API) y mostrar su nombre, descripción y su imagen

const url2 = 'https://dragonball-api.com/api/planets'

const renderPlanetas = (plane) => {
  const planetasDiv = document.querySelector('#planetas')

  let html = ''

  plane.forEach(planet => {
    html += `
      <article>
        <h2>${planet.name} - ${planet.description}</h2>
        <img src="${planet.image}" height="200" />
      </article>
    `
  });

  planetasDiv.innerHTML = html
}

fetch(url2)
  .then(response2 => response2.json())
  .then(data2 => {
    // console.log(data)
    
    renderPlanetas(data2.items)
  })
