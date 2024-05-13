
async function postData(url="", data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //turning our data into JSON format to send
    })
    // console.log(response)
    return await response.json(); //turning response into json to read
}

const userData = {
    name: 'Ye-Ol McBoatface',
    player: 'Ryan Rhoades',
    class: 'Rogue',
    race: 'Orc'
}

const url = 'https://httpbin.org/post'

// console.log(postData(url, userData))


async function getTVData(query){
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    // console.log(response)
    return await response.json()
}

async function fetchData(event){
    event.preventDefault();
    const search = event.target.elements.show.value; //grabbing the show input from the form
    const result = await getTVData(search)
    console.log(result)
    displayShow(result)
    
    
}

async function displayShow(show) {
    const hi = show.sprites.front_default
    const html = `<div class="card">
                 
                        <div>
                            <h1>${show.name}</h1>
                            <img src= "${hi}">
                        <div>
                </div>`
                
    const div = document.getElementsByClassName('search-show')[0]
    console.log(show.name)
    div.insertAdjacentHTML('beforeend', html)
}



