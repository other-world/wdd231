const members = [
  {
    id: 0001
    fname: "Andrew",
    lname: "Barney",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    id: 0002
    fname: "Mark",
    lname: "Gerberding",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    id: 0003
    fname: "Heidi",
    lname: "Vawdrey",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    id: 0004
    fname: "Joshua",
    lname: "Jones",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    id: 0005
    fname: "Logan",
    lname: "Steele",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    id: 0006
    fname: "Steve",
    lname: "Fleischer",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    fname: "Jamie",
    lname: "Cummings",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: true
  },
  {
    id: 0008
    fname: "John",
    lname: "Doe",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "active",
    teamLeader: false
  },
  {
    id: 0009
    fname: "Jane",
    lname: "Smith",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "inactive",
    teamLeader: false
  },
  {
    id: 0010
    fname: "Matthew",
    lname: "Cannon",
    address: "", 
    phone: "", 
    DOB: "", 
    applicationLink: "", 
    photo: "",
    status: "inactive",
    teamLeader: false
  },
  ];


//const oldTemplesLink = document.getElementById(".old");
//const newTemplesLink = document.getElementById(".new");
//const largeTemplesLink = document.getElementById(".large");
//const smallTemplesLink = document.getElementById(".small");

/*largeTemplesLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 10000);
  console.log("Large clicked.");
  createTempleCard(largeTemples);
});

/*oldTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => temple.dedicated < 1980);
  console.log("Old clicked.");
  createTempleCard(oldTemples);
});

newTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => temple.dedicated >= 1980);
  console.log("New clicked.");
  createTempleCard(newTemples);
});



smallTemplesLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area <= 10000);
  console.log("Small clicked.");
  createTempleCard(smallTemples);
});*/
const largeTemples = temples.filter(temple => temple.area > 10000);

createTempleCard(largeTemples);

function createTempleCard(filteredTemples) {
    temples.forEach(temple => {
        console.log(`Temple Area: ${temple.area}`);

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location =  document.createElement("p");
        let dedicated =  document.createElement("p");
        let size =  document.createElement("p");
        let img =  document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        size.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    });
}