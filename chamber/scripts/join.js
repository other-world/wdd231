import { memberships } from '../data/membership.js';
//console.log(memberships);

const membershipLevel = document.querySelector("#membershipLevel");
const myDialog = document.querySelector("#membershipDialog");
console.log(myDialog);
const myTitle = document.querySelector("#membershipDialog h2");
const myInfo = document.querySelector("#membershipDialog p");
const myClose = document.querySelector("#membershipDialog button");
const benefitsList = document.createElement("ul");


myClose.addEventListener("click", () => myDialog.close());
displayMembershipLevels(memberships);


function displayMembershipLevels(data) {
    data.forEach(element => {
        console.log(element);
        const membershipBox = document.createElement("div");
        membershipBox.setAttribute("id", `${element.type}Membership`);
        membershipBox.setAttribute("class", "memberBoxes");
        const membershipHeader = document.createElement("h3");
        membershipHeader.innerHTML = `${element.type} Membership Level`;
        membershipBox.appendChild(membershipHeader);

        membershipLevel.appendChild(membershipBox);


        membershipBox.addEventListener("click", () => showInfo(element));

    });
}

function showInfo(data) {
    let costString = ""
    let benefits = data.benefits;
    benefitsList.innerHTML="";
    if (data.type == "NP"){
        costString = "Free membership for non-profit organizations";
    }
    else {
        costString = `\$${data.cost} per year`;
    }


    myTitle.innerHTML = `${data.type} Membership`;
    myInfo.innerHTML = `
    <p><b>Cost:</b> ${costString}</p>
    <p><b>Benefits:</b></p>`;
    benefits.forEach(element => { 
        console.log(element);
        const individualBenefit = document.createElement("li");
        individualBenefit.innerHTML = element;
        benefitsList.appendChild(individualBenefit);
    });

    myDialog.appendChild(benefitsList);



    myDialog.showModal();
}