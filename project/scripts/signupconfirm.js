const currentURL = window.location.href;
const showInfo = document.querySelector('#singlepage');
const messageP = document.createElement("p");

const everything = currentURL.split('?');
const formData = everything[1].split('&');

console.log(formData);

const thanks = document.createElement("h3");
thanks.innerHTML = `Thank you for signing up!`;
showInfo.appendChild(thanks);

paragraph = 
`
    ${show("fname")} ${show("lname")} 
    has signed up to work as a ${show("teamMember")} 
    at ${show("position")} 
    on ${show("weekend")}
`;

paragraph.replace(/\+/g, "");

messageP.innerHTML = paragraph;

showInfo.appendChild(messageP);


function show(keyValuePair){
    result = "INVALID KEY";
    formData.forEach(element => {
        if (element.startsWith(keyValuePair)){
                result = element.split('=')[1];
        }

    });
    return(result);
}
