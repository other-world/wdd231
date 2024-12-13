const currentURL = window.location.href;
const showInfo = document.querySelector('#thankYou');
const applicationDate = new Date();

const everything = currentURL.split('?');
const formData = everything[1].split('&');

console.log(formData);


showInfo.innerHTML = `
<section>
<h2>Thank you for applying!</h2>
<h3>Someone will contact you shortly.</h3>
<p>First Name: ${show("fname")}</p>
<p>Last Name: ${show("lname")}</p>
<p>Position: ${show("orgTitle")}</p>
<p>Phone: ${show("phone")}</p>
<p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
<p>Business Name: ${show("bizName")}</p>
<p>Membership Level: ${show("membership")}</p><br><br>
<p>Submitted on</>
<p>${applicationDate}</p>
</section>
`


function show(keyValuePair){
    formData.forEach(element => {
        if (element.startsWith(keyValuePair)){
            result = element.split('=')[1].replace('%40', '@');
            //result = element.split('=')[1].replace('%2B', '+');
        }
    });
    return(result);
}
