const businessFile = "./data/members.json";
const businesses = document.querySelector('businesses');

const businessDisplay = document.querySelector('#businessDisplay');
const mainNav = document.querySelector('#animatedMenu');
//const mainNav = document.querySelector('.navigation');

/*hamButton.addEventListener('click', () => {
	mainNav.classList.toggle('grid2list');
	businessDisplay.classList.toggle('grid2list');
	toggleMenuButton();
});*/

getBusinessData();

async function getBusinessData() {
    try {
      const response = await fetch(businessFile);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    
      const data = await response.json();
      //console.table(data.businesses); // temporary testing of data response
      //console.log(data);
      displayBusinesses(data.businesses);
    } 

    catch (error) {
        console.error(error.message);
    }

}

const displayBusinesses = (businessList) => {
  let businesses = document.getElementById("businessDirectory");
  businessList.innerHTML = "";

  businessList.forEach(element => {
    let businessName = element.businessName;
    let address = element.address;
      let street = address[0].street;
      let city = address[0].city;
      let state = address[0].state;
      let zipcode = address[0].zipcode;
      let fullAddress = street + " " + city + ", " + state + " " + zipcode;    
    let phone = element.phoneNumber;
    let website = element.websiteURL;
    let iconURL = element.icon;
    let iconAltText = "Icon for " + businessName;
    let membershipLevel = element.membershipLevel;


    let addContainer = document.createElement("section");
    addContainer.setAttribute('class', 'individualBusiness');
    businesses.appendChild(addContainer);

    let addIcon = document.createElement("img");
        addIcon.setAttribute('src', iconURL);
        addIcon.setAttribute('alt', iconAltText);
        addIcon.setAttribute('loading', 'lazy');
        addIcon.setAttribute('width', '150px');
        addIcon.setAttribute('height', 'auto');
        // Icon should be hiddden in list view
        // addIcon.setAttribute('hidden');
        addContainer.appendChild(addIcon);
        
    
    let addName = document.createElement("p");
    addName.setAttribute('class', businessName);
    addName.innerHTML = businessName;
    addContainer.appendChild(addName);

    let addAddress = document.createElement("p");
    addAddress.setAttribute('class', fullAddress);
    addAddress.innerHTML = fullAddress;
    addContainer.appendChild(addAddress);

    let addPhone = document.createElement("p");
    addPhone.setAttribute('class', phone);
    addPhone.innerHTML = phone;
    addContainer.appendChild(addPhone);

    let addWebsite = document.createElement("a");
    addWebsite.setAttribute('class', website);
    addWebsite.setAttribute('href', website);
    addWebsite.innerHTML = website;
    addContainer.appendChild(addWebsite);
    
  });
  
}
/*

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
    })*/
