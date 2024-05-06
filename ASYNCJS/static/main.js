
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
    
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
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
    const html = `<div class="card">
                    <img src="${show.image.original}" alt="${show.name}">
                        <div>
                            <h1>${show.name}</h1>
                            <p>Summary: </p>
                            ${show.summary}
                            <p>Rating: ${show.rating.average}</p>
                            <p>Genres: ${show.genres.join(", ")}</p>
                        <div>
                </div>`
                
    const div = document.getElementsByClassName('search-show')[0]
    
    div.insertAdjacentHTML('beforeend', html)
}



