welcomeVisitor = document.querySelector('#visitorMessage');
let message = "";

convertToDay = 24 * 60 * 60 * 1000;

if (localStorage.getItem('lastVisit') != null) {
    oldVisit = Number(localStorage.getItem('lastVisit'));

    localStorage.setItem('lastVisit', Date.now());
    newVisit = Number(localStorage.getItem('lastVisit'));

    visitDifferenceDays = Math.round(((newVisit - oldVisit) / convertToDay));

    if (visitDifferenceDays < 1) {
        message = "Back so soon! Awesome!";
    }
    else {
        if (visitDifferenceDays = 1) {
            message = `You last visited ${visitDifferenceDays} day ago.`;
        }
        else {
            message = `You last visited ${visitDifferenceDays} days ago.`;
        }
    }
}
else {
    message = `Welcome! Let us know if you have any questions.`;
}

welcomeVisitor.innerHTML = message;
