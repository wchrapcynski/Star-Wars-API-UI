// This function is called on to create each element of the accordion UI
function accordion() {
    const accordion = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// Grabs each of the menu items
const content = document.querySelector('.content')
const films = document.querySelector('.films');
const people = document.querySelector('.people');
const planets = document.querySelector('.planets');
const species = document.querySelector('.species');
const starships = document.querySelector('.starships');
const vehicles = document.querySelector('.vehicles');
const next = document.querySelector('.next');
const starWarsApi = "https://swapi.co/api/"
let apiUrlNext = null;

// Calls for grabbing each category from the API and displaying the data.
films.addEventListener('click', function(){
    apiUrlNext = null;
    const apiUrl = starWarsApi + "films";
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {  
                dataCleanup()
                for (let i = 0; i < res.results.length; i++) {
                    let button = document.createElement('button');
                    button.classList.add('accordion')
                    button.innerText = res.results[i].title
                    content.appendChild(button);
                    let div = document.createElement('div');
                    div.classList.add('panel');
                    button.after(div)
                    let p = document.createElement('p');
                    p.innerText = res.results[i].opening_crawl
                    div.appendChild(p);
                    apiUrlNext = res.next;
                }
                accordion();
                hideNext(apiUrlNext);
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
})

people.addEventListener('click', function () {
    apiUrlNext = null;
    const apiUrl = starWarsApi + "people";
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            dataCleanup()
            for (let i = 0; i < res.results.length; i++) {
                let button = document.createElement('button');
                button.classList.add('accordion')
                button.innerText = res.results[i].name
                content.appendChild(button);
                let div = document.createElement('div');
                div.classList.add('panel');
                button.after(div)
                let p = document.createElement('p');
                p.innerText = "Birth Year: " +  res.results[i].birth_year + 
                    "\n" + "Eye Color: " + res.results[i].eye_color + 
                    "\n" + "Height: " + res.results[i].height +
                    "\n" + "Mass: " + res.results[i].mass +
                    "\n" + "Skin Color: " + res.results[i].skin_color
                div.appendChild(p);
                apiUrlNext = res.next;
            }
            accordion();
            unhideNext(apiUrlNext);
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    next.addEventListener('click', function () {
        fetch(apiUrlNext)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.results.length; i++) {
                    let button = document.createElement('button');
                    button.classList.add('accordion')
                    button.innerText = res.results[i].name
                    content.appendChild(button);
                    let div = document.createElement('div');
                    div.classList.add('panel');
                    button.after(div)
                    let p = document.createElement('p');
                    p.innerText = "Birth Year: " + res.results[i].birth_year +
                        "\n" + "Eye Color: " + res.results[i].eye_color +
                        "\n" + "Height: " + res.results[i].height +
                        "\n" + "Mass: " + res.results[i].mass +
                        "\n" + "Skin Color: " + res.results[i].skin_color
                    div.appendChild(p);
                    apiUrlNext = res.next;
                }
                accordion();
                hideNext(apiUrlNext);
            })
            .catch(err => {
                console.log("something went wrong...", err)
            })
    })
})

planets.addEventListener('click', function () {
    apiUrlNext = null;
    const apiUrl = starWarsApi + "planets";
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            dataCleanup()
            for (let i = 0; i < res.results.length; i++) {
                let button = document.createElement('button');
                button.classList.add('accordion')
                button.innerText = res.results[i].name
                content.appendChild(button);
                let div = document.createElement('div');
                div.classList.add('panel');
                button.after(div)
                let p = document.createElement('p');
                p.innerText = "Climate: " + res.results[i].climate +
                    "\n" + "Gravity: " + res.results[i].gravity +
                    "\n" + "Population: " + res.results[i].population +
                    "\n" + "Terrain: " + res.results[i].terrain
                div.appendChild(p);
                apiUrlNext = res.next;
            }
            accordion();
            unhideNext(apiUrlNext);
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    next.addEventListener('click', function () {
        const apiUrl = starWarsApi + "planets";
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.results.length; i++) {
                    let button = document.createElement('button');
                    button.classList.add('accordion')
                    button.innerText = res.results[i].name
                    content.appendChild(button);
                    let div = document.createElement('div');
                    div.classList.add('panel');
                    button.after(div)
                    let p = document.createElement('p');
                    p.innerText = "Climate: " + res.results[i].climate +
                        "\n" + "Gravity: " + res.results[i].gravity +
                        "\n" + "Population: " + res.results[i].population +
                        "\n" + "Terrain: " + res.results[i].terrain
                    div.appendChild(p);
                    apiUrlNext = res.next;
                }
                accordion();
                hideNext(apiUrlNext);
            })
            .catch(err => {
                console.log("something went wrong...", err)
            })
    })
})

species.addEventListener('click', function () {
    apiUrlNext = null;
    const apiUrl = starWarsApi + "species";
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            dataCleanup()
            for (let i = 0; i < res.results.length; i++) {
                let button = document.createElement('button');
                button.classList.add('accordion')
                button.innerText = res.results[i].name
                content.appendChild(button);
                let div = document.createElement('div');
                div.classList.add('panel');
                button.after(div)
                let p = document.createElement('p');
                p.innerText = "Average Height: " + res.results[i].average_height +
                    "\n" + "Average Lifespan: " + res.results[i].average_lifespan +
                    "\n" + "Classifications: " + res.results[i].classification +
                    "\n" + "Designation: " + res.results[i].designation +
                    "\n" + "Language: " + res.results[i].language
                div.appendChild(p);
                apiUrlNext = res.next;
            }
            accordion();
            unhideNext(apiUrlNext);
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    next.addEventListener('click', function () {
        apiUrlNext = null;
        const apiUrl = starWarsApi + "species";
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.results.length; i++) {
                    let button = document.createElement('button');
                    button.classList.add('accordion')
                    button.innerText = res.results[i].name
                    content.appendChild(button);
                    let div = document.createElement('div');
                    div.classList.add('panel');
                    button.after(div)
                    let p = document.createElement('p');
                    p.innerText = "Average Height: " + res.results[i].average_height +
                        "\n" + "Average Lifespan: " + res.results[i].average_lifespan +
                        "\n" + "Classifications: " + res.results[i].classification +
                        "\n" + "Designation: " + res.results[i].designation +
                        "\n" + "Language: " + res.results[i].language
                    div.appendChild(p);
                    apiUrlNext = res.next;
                }
                accordion();
                hideNext(apiUrlNext);
            })
            .catch(err => {
                console.log("something went wrong...", err)
            })
    })
})

starships.addEventListener('click', function () {
    apiUrlNext = null;
    const apiUrl = starWarsApi + "starships";
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.results.length; i++) {
                let button = document.createElement('button');
                button.classList.add('accordion')
                button.innerText = res.results[i].name
                content.appendChild(button);
                let div = document.createElement('div');
                div.classList.add('panel');
                button.after(div)
                let p = document.createElement('p');
                p.innerText = "Megalight: " + res.results[i].MGLT +
                    "\n" + "Cargo Capacity: " + res.results[i].cargo_capacity +
                    "\n" + "Cost in Credits: " + res.results[i].cost_in_credits +
                    "\n" + "Hyperdrive Rating: " + res.results[i].hyperdrive_rating +
                    "\n" + "Model: " + res.results[i].model
                div.appendChild(p);
                apiUrlNext = res.next;
            }
            accordion();
            unhideNext(apiUrlNext);
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    next.addEventListener('click', function () {
        const apiUrl = starWarsApi + "starships";
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.results.length; i++) {
                    let button = document.createElement('button');
                    button.classList.add('accordion')
                    button.innerText = res.results[i].name
                    content.appendChild(button);
                    let div = document.createElement('div');
                    div.classList.add('panel');
                    button.after(div)
                    let p = document.createElement('p');
                    p.innerText = "Megalight: " + res.results[i].MGLT +
                        "\n" + "Cargo Capacity: " + res.results[i].cargo_capacity +
                        "\n" + "Cost in Credits: " + res.results[i].cost_in_credits +
                        "\n" + "Hyperdrive Rating: " + res.results[i].hyperdrive_rating +
                        "\n" + "Model: " + res.results[i].model
                    div.appendChild(p);
                    apiUrlNext = res.next;
                }
                accordion();
                hideNext(apiUrlNext);
            })
            .catch(err => {
                console.log("something went wrong...", err)
            })
    })
})

vehicles.addEventListener('click', function () {
    apiUrlNext = null;  
    const apiUrl = starWarsApi + "vehicles";
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            dataCleanup()
            for (let i = 0; i < res.results.length; i++) {
                let button = document.createElement('button');
                button.classList.add('accordion')
                button.innerText = res.results[i].name
                content.appendChild(button);
                let div = document.createElement('div');
                div.classList.add('panel');
                button.after(div)
                let p = document.createElement('p');
                p.innerText = "Cargo Capacity: " + res.results[i].cargo_capacity +
                    "\n" + "Cost in Credits: " + res.results[i].cost_in_credits +
                    "\n" + "Manufacturer: " + res.results[i].manufacturer +
                    "\n" + "Class: " + res.results[i].vehicle_class +
                    "\n" + "Model: " + res.results[i].model
                div.appendChild(p);
                apiUrlNext = res.next;
            }
            accordion();
            unhideNext(apiUrlNext);
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    next.addEventListener('click', function () {
        apiUrlNext = null;
        const apiUrl = starWarsApi + "vehicles";
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.results.length; i++) {
                    let button = document.createElement('button');
                    button.classList.add('accordion')
                    button.innerText = res.results[i].name
                    content.appendChild(button);
                    let div = document.createElement('div');
                    div.classList.add('panel');
                    button.after(div)
                    let p = document.createElement('p');
                    p.innerText = "Cargo Capacity: " + res.results[i].cargo_capacity +
                        "\n" + "Cost in Credits: " + res.results[i].cost_in_credits +
                        "\n" + "Manufacturer: " + res.results[i].manufacturer +
                        "\n" + "Class: " + res.results[i].vehicle_class +
                        "\n" + "Model: " + res.results[i].model
                    div.appendChild(p);
                    apiUrlNext = res.next;
                }
                accordion();
                hideNext(apiUrlNext);
            })
            .catch(err => {
                console.log("something went wrong...", err)
            })
    })
})

function dataCleanup() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function unhideNext(apiUrlNext) {
    if (apiUrlNext !== null) {
        next.classList.toggle("hidden");
    }
} 

function hideNext(apiUrlNext) {
    if (apiUrlNext === null) {
        next.classList.toggle("hidden");
    }
}