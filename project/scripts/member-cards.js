const memberFile = "./data/members.json";
const roster = document.querySelector("#content");

getMemberData();

async function getMemberData() {
  try {
    const response = await fetch(memberFile);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    createMemberCard(data.members);
  }

  catch (error) {
    console.error(error.message);
  }
}


function createMemberCard(filteredMembers) {
    filteredMembers.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let id =  document.createElement("p");
        let address =  document.createElement("p");
        let phone =  document.createElement("p");
        let dob =  document.createElement("p");
        let status =  document.createElement("p");
        let applicationLink =  document.createElement("a");
        let photo =  document.createElement("img");

        card.setAttribute("class", "card");

        name.textContent = `${member.fname} ${member.lname}`;
        /*id.innerHTML = `<span  class="label">Member ID:</span> ${member.id}`;*/
        /*address.innerHTML = `<span class="label">Address:</span> ${member.address}`;*/
        phone.innerHTML = `<span class="label">Phone:</span> ${member.phone}`;
        /*dob.innerHTML = `<span class="label">DOB:</span> ${member.DOB}`;*/
        status.innerHTML = `<span class="label">Status:</span> ${member.status}`;
        /*applicationLink.innerHTML = `<span class="label">Application Link:</span> ${member.applicationLink}`;*/

        if (member.photo == ""){
          photo.setAttribute("src", "images/blankProfile.webp");
          photo.setAttribute("alt", `${member.fname} ${member.lname} photo`);
        }
        else{
          photo.setAttribute("src", member.photo);
          photo.setAttribute("alt", `${member.fname} ${member.lname}, no photo`);
        }
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "200");
        photo.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(photo);
        /*card.appendChild(id);
        card.appendChild(address);*/
        card.appendChild(phone);
        /*card.appendChild(dob);*/
        card.appendChild(status);
        /*card.appendChild(applicationLink);*/

        roster.appendChild(card);
    });
}