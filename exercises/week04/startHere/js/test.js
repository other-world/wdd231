const url="data/memberLevels.json";

// const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

const memberLevel = document.querySelector("#memberlevels");

closeButton.addEventListener("click", () => dialogBox.close());

async function apiFetch(url) {
// First:  await fetch(weatherUrl);      for the web page to responsd
// Second: await response.json(); for the web page to send us the requested data
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);    // testing only
            displayMemberInfo(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayMemberInfo(data) {
    console.log(data);
    // const memberLevel = document.createElement("#memberlevels");

    data.memberLevels.forEach(item => {
        const levelDiv = document.createElement("div");
        levelDiv.classList.add("card");

        levelDiv.innerHTML = `
        <h4>${item.name}</h4>
        <button>More Level Infomation</button>
        `;

        levelDiv.addEventListener("click", () => {
            console.log(item);
            displayLevelDetails(item);
        });

        memberLevel.appendChild(levelDiv);
    });
};


function displayLevelDetails(item) {
    console.log("This displayLevelsData One!");
    console.log(item);
    const myheader = document.createElement("h4");
    dialogBox.appendChild(myheader);
    dialogBox.showModal();
};

apiFetch(url);

