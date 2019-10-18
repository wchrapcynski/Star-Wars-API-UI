(function accordion( ) {
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
}());

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

const content = document.querySelector('.content');
let button = document.createElement('button');
button.classList.add('accordion')
button.innerText = ('This is a test')
content.appendChild(button);
