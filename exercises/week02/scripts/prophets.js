const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
//console.log("prophets.js is running...");

getProphetData();

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data response

    displayProphets(data.prophets)
}

const displayProphets = (prophetsList) => {
    let prophets = document.getElementById("cards");
    prophets.innerHTML = "";

    prophetsList.forEach(element => {
        let fullName = element.name + " " + element.lastname;
        let dob = "Date of Birth: " + element.birthdate;
        let pob = "Place of Birth: " + element.birthplace;
        let imgURL = element.imageurl;
        let imgalt = fullName + "'s portrait"

        let addContainer = document.createElement("section");
        addContainer.setAttribute('class', 'individualProphet');
        prophets.appendChild(addContainer);
        

        let addName = document.createElement("h2");
        addName.setAttribute('class', fullName);
        addName.innerHTML = fullName;
        addContainer.appendChild(addName);

        let addDOB = document.createElement("p");
        addDOB.setAttribute('class', dob);
        addDOB.innerHTML = dob;
        addContainer.appendChild(addDOB);

        let addPOB = document.createElement("p");
        addPOB.setAttribute('class', pob);
        addPOB.innerHTML = pob;
        addContainer.appendChild(addPOB);

        let addPortrait = document.createElement("img");
        addPortrait.setAttribute('class', 'portrait');
        addPortrait.setAttribute('src', imgURL);
        addPortrait.setAttribute('alt', imgalt);
        addPortrait.setAttribute('loading', 'lazy');
        addPortrait.setAttribute('width', '200px');
        addPortrait.setAttribute('height', '247px');
        addContainer.appendChild(addPortrait);
        
        //console.log(addPortrait);
    })

}