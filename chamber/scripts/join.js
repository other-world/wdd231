import {memberships} from '../data/membership.js';
console.log(memberships);

const showHere = document.querySelector("#showHere");
const myDialog = document.querySelector("#mydialog");
const myTitle = document.querySelector("#mydialog h2");
const myInfo = document.querySelector("#mydialog p");
const myClose = document.querySelector("#mydialog button");


myClose.addEventListener("click", () => myDialog.close());
displayItems(temples);


function displayItems(data) {
    data.forEach(element => {
        //console.log(element);
        const templeImage = document.createElement("img");
        templeImage.src = `${url}${element.path}`;
        templeImage.alt = element.name;
        templeImage.setAttribute("width", "400");
        templeImage.setAttribute("height", "250");

        templeImage.addEventListener("click", () => showInfo(element));

        showHere.appendChild(templeImage);        
    });
}

/*function showInfo(data){
    //set up suffix for good grammar
    let suffix = "";
    switch(data.number){
        case '1':
            suffix = "st";
            break;
        case '2':
            suffix = "nd";
            break;
        case "3":
            suffix = "rd";
            break;
        default:
            suffix = "th";
            break;
    }

    myTitle.innerHTML = `${data.name}`;
    myInfo.innerHTML = `This is the ${data.number}${suffix} temple of The Church of Jesus Christ of Latter-day Saints. The ${data.name} was dedicated ${data.dedicated} by ${data.person}.`;
    myDialog.showModal();
}*/