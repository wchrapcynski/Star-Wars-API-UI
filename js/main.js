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

function createAccordion(nameText, descText) {
    for(let i = 0; i < 10; i++) {
        const content = document.querySelector('.content');
        let button = document.createElement('button');
        button.classList.add('accordion')
        button.innerText = (nameText)
        content.appendChild(button);
        let div = document.createElement('div');
        div.classList.add('panel');
        button.after(div)
        let p = document.createElement('p');
        p.innerText = (descText)
        div.appendChild(p);
    }
    accordion();
}

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

const film = document.querySelector('.film');
const people = document.querySelector('.people');
const planets = document.querySelector('.planets');
const species = document.querySelector('.species');
const starships = document.querySelector('.starships');
const vehicles = document.querySelector('.vehicles');
const menuArray = [film, people, planets, species, starships, vehicles];
const menuArrayNames = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

for(let i = 0; i < 6; i++) {
    menuArray[i].addEventListener('click', function(){
        const starWarsApi = `https://swapi.co/api/${menuArrayNames[i]}/${i + 1}`;
        fetch(starWarsApi)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("something went wrong...", err)
            })
    })
}