const currentURL = window.location.href;

const everything = currentURL.split('?');
const formData = everything[1].split('&');


const showInfo = document.querySelector('#results');

showInfo.innerHTML = `
<p>Appointment for: ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} at the ${show("location")} Temple.</p>
<p>Phone: ${show("phone")}</p>
<p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
`


function show(keyValuePair){
    formData.forEach(element => {
        if (element.startsWith(keyValuePair)){
            result = element.split('=')[1].replace('%40', '@');
        }
    });
    return(result);
}
