// API Template
// const starWarsApi = 'https://swapi.co/api/';
// fetch(starWarsApi)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log("something went wrong...", err)
//     })

// function createAccordion(nameText, descText) {
//     for(let i = 0; i < 10; i++) {
//         const content = document.querySelector('.content');
//         let button = document.createElement('button');
//         button.classList.add('accordion')
//         button.innerText = (nameText)
//         content.appendChild(button);
//         let div = document.createElement('div');
//         div.classList.add('panel');
//         button.after(div)
//         let p = document.createElement('p');
//         p.innerText = (descText)
//         div.appendChild(p);
//     }
//     accordion();
// }

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

const content = document.querySelector('.content')
const films = document.querySelector('.films');
const people = document.querySelector('.people');
const planets = document.querySelector('.planets');
const species = document.querySelector('.species');
const starships = document.querySelector('.starships');
const vehicles = document.querySelector('.vehicles');

films.addEventListener('click', function(){
    const starWarsApi = `https://swapi.co/api/films`;
    fetch(starWarsApi)
        .then(res => res.json())
        .then(res => {  
                while (content.firstChild) {
                    content.removeChild(content.firstChild);
                }
                for (let i = 0; i < res.results.length; i++) {
                    const content = document.querySelector('.content');
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
                }
                accordion();
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
})

people.addEventListener('click', function () {
    const starWarsApi = `https://swapi.co/api/people`;
    fetch(starWarsApi)
        .then(res => res.json())
        .then(res => {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            for (let i = 0; i < res.results.length; i++) {
                const content = document.querySelector('.content');
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
            }
            accordion();
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
})

planets.addEventListener('click', function () {
    const starWarsApi = `https://swapi.co/api/planets`;
    fetch(starWarsApi)
        .then(res => res.json())
        .then(res => {
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            console.log(res)
            for (let i = 0; i < res.results.length; i++) {
                const content = document.querySelector('.content');
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
            }
            accordion();
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
})