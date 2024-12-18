const currentURL = window.location.href;
const memberFile = "./data/members.json";
const roster = document.querySelector("#singlepage");

currentMemberID = "0007"; //pretend that Jamie logged in, work off her data.

const everything = currentURL.split('?');
getMemberData();

/* If we have formData, update information based on that data */
/* Otherwise, post data only from our JSON file */


if (everything.length == 1) {
    console.log("No form data sent");
}
else {
    const formData = everything[1].split('&');
    console.log("We have a Form");
    updateMemberSummary(formData);

}    

async function getMemberData() {
  try {
    const response = await fetch(memberFile);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    data.members.forEach(member => {
        if (member.id == currentMemberID) {
            getMemberSummary(member)
        }
    });
  }

  catch (error) {
    console.error(error.message);
  }
}

function getMemberSummary(currentMember){
    let missingInfo = 0;                            // track the number of empty fields
    Object.keys(currentMember).forEach(key => {
        if (currentMember[key] == "") {
            missingInfo++;
        }
    });
    
    const welcomeMessage = document.createElement("h3");
    if (missingInfo = 0){
        welcomeMessage.textContent = `Hi ${currentMember.fname}. Welcome to your interface.`;
    }
    else if (missingInfo < 2){
        welcomeMessage.textContent = `Hi ${currentMember.fname}. Looks like we're missing some information. Maybe you could take some time to update your info.`;
    }
    else {
        welcomeMessage.textContent = `Hi ${currentMember.fname}. We're missing just a few pieces of info for you. If you have time today, let's get that updated.`;
    }
    welcomeMessage.setAttribute("class", ".welcomeMessage");

    const personalInfo = document.createElement("div");
    personalInfo.setAttribute("id", "personalInfo");

        const personalID = document.createElement("p");
        personalID.setAttribute("id", "personalID");
        personalID.innerHTML = `ID: <span>${currentMember.id}</span>`;
        personalInfo.appendChild(personalID);

        const fname = document.createElement("p");
        fname.setAttribute("id", "fname");
        fname.innerHTML = `First Name: <span>${currentMember.fname}</span>`;
        personalInfo.appendChild(fname);

        const lname = document.createElement("p");
        lname.setAttribute("id", "lname");
        lname.innerHTML = `Last Name: <span>${currentMember.lname}</span>`;
        personalInfo.appendChild(lname);

        const address = document.createElement("p");
        address.setAttribute("id", "address");
        address.innerHTML = `Address: <span>${currentMember.address}</span>`;
        personalInfo.appendChild(address);

        const phone = document.createElement("p");
        phone.setAttribute("id", "phone");
        phone.innerHTML = `Phone Number: <span>${currentMember.phone}</span>`;
        personalInfo.appendChild(phone);

        const email = document.createElement("p");
        email.setAttribute("id", "email");
        email.innerHTML = `Email: <span>${currentMember.email}</span>`;
        personalInfo.appendChild(email);

        const dob = document.createElement("p");
        dob.setAttribute("id", "dob");
        dob.innerHTML = `Date of Birth: <span>${currentMember.DOB}</span>`;
        personalInfo.appendChild(dob);

        const status = document.createElement("p");
        status.setAttribute("id", "status");
        status.innerHTML = `Status: <span>${currentMember.status} team member</span>`;
        personalInfo.appendChild(status);

    roster.appendChild(personalInfo);

    let profilePic = document.createElement("img");
    profilePic.setAttribute('class', 'profilePic');
    if (currentMember.photo == "") {
        profilePic.setAttribute('src', "./images/blankProfile.webp");
    }
    else {
        profilePic.setAttribute('src', currentMember.photo);
    }
    profilePic.setAttribute('alt', `${currentMember.fname} ${currentMember.lname}'s Profile Picture`);
    profilePic.setAttribute('loading', 'lazy');
    profilePic.setAttribute('width', '200');
    profilePic.setAttribute('height', '200');
    roster.appendChild(profilePic);

    roster.appendChild(welcomeMessage);
}

function updateMemberSummary(newData) {
    console.log(newData);
    newData.forEach(item => {
        let breakdown = item.split('=');
        let itemKey = breakdown[0];
        let itemValue = breakdown[1];
        console.log(`Key: ${itemKey}`);
        if (itemValue != ""){
            console.log(document.getElementById(itemKey));
            //console.log(updateElement);
        }

    });

}
