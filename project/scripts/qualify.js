const currentURL = window.location.href;
const showInfo = document.querySelector('#singlepage');
const messageP = document.createElement("p");

const everything = currentURL.split('?');
const formData = everything[1].split('&');

let medMember="no";
let radioMember="no";

const thanks = document.createElement("h3");
thanks.innerHTML = `Thank you for updating!`;
showInfo.appendChild(thanks);

/* *** Medical Check *** */
let medQualification = "";

if (show("cpr") == "no"){
    medQualification = `All TERT members must have CPR certification at minimum.`;
}

if (show("wfa") == "yes"){
    medMember="yes"
}
else if (show("wfr") == "yes"){
    medMember="yes"
}
else if (show("emt") == "yes"){
    medMember="yes"
}
else if (show("nurse") == "yes"){
    medMember="yes"
}
else if (show("md") == "yes"){
    medMember = "yes"
}
else {
    medMember = "no";
}

if (medMember == "yes"){
    medQualification = `You qualify to be a medical team lead.`;
}


/* *** HAM Radio Check *** */
if (show("hamRadio") == "none") {
    radioMember = "no";
}
else {
    radioMember = "yes";
}

if (radioMember == "yes") {
    radioQualification = `Hi ${show("callSign")}! You qualify to be a communications lead.`;
}

message = `<div>
            <p>${radioQualification}</p><br>
            <p>${medQualification}</p>
           </div>`;
messageP.innerHTML = message;

showInfo.appendChild(messageP);





function show(keyValuePair){
    result = "no";
    formData.forEach(element => {
        if (element.startsWith(keyValuePair)){
                result = element.split('=')[1];
        }

    });
    return(result);
}
