const businessFile = "./data/members.json";
const businesses = document.querySelector('businesses');

// Setup for grid vs list view
const gridButton = document.querySelector('#gridToggle');
const listButton = document.querySelector('#listToggle');
let businessDirectory = document.querySelector('#businessDirectory');
//console.log("variable = " + businessDirectory);
let listType = 'grid';

gridButton.addEventListener('click', () => {
  listType = 'grid';
  businessDirectory.setAttribute('class', listType);
  //console.log(businessDirectory);
});

listButton.addEventListener('click', () => {
  listType = 'list';
  businessDirectory.setAttribute('class', listType);

  //console.log(businessDirectory);
});

const businessDisplay = document.querySelector('#businessDisplay');

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
  let display = listType;
  console.log(display);
  let businesses = document.getElementById("businessDirectory");
  businessList.innerHTML = "";
  
  businessList.forEach(element => {
    let businessName = element.businessName;
    let address = element.address;
      let street = address[0].street;
      let city = address[0].city;
      let state = address[0].state;
      let zipcode = address[0].zipcode;
      let region = city + ", " + state + " " + zipcode;    
    let phone = element.phoneNumber;
    let website = element.websiteURL;
    let iconURL = element.icon;
    let iconAltText = "Icon for " + businessName;
    let membershipLevel = element.membershipLevel;

    let addContainer = document.createElement("section");
    addContainer.setAttribute('class', 'individualBusiness');
    businesses.appendChild(addContainer);

    let addName = document.createElement("h2");
    addName.setAttribute('class', 'businessName');
    addName.innerHTML = businessName;
    addContainer.appendChild(addName);

    let addIcon = document.createElement("img");
    addIcon.setAttribute('class', 'businessIcon');
    addIcon.setAttribute('src', iconURL);
    addIcon.setAttribute('alt', iconAltText);
    addIcon.setAttribute('loading', 'lazy');
    addIcon.setAttribute('width', '150px');
    addIcon.setAttribute('height', 'auto');
    // Icon should be hiddden in list view
    // addIcon.setAttribute('hidden');
    addContainer.appendChild(addIcon);

    let addStreet = document.createElement("p");
    addStreet.setAttribute('class', 'street');
    addStreet.innerHTML = street;
    addContainer.appendChild(addStreet);

    let addAddress = document.createElement("p");
    addAddress.setAttribute('class', 'region');
    addAddress.innerHTML = region;
    addContainer.appendChild(addAddress);

    let addPhone = document.createElement("p");
    addPhone.setAttribute('class', 'phone');
    addPhone.innerHTML = phone;
    addContainer.appendChild(addPhone);

    let addWebsite = document.createElement("a");
    addWebsite.setAttribute('class', 'website');
    addWebsite.setAttribute('href', website);
    addWebsite.innerHTML = website;
    addContainer.appendChild(addWebsite);
    
  });

  document.querySelector
  
}

