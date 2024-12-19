let positions = document.signupForm.position;
const formAdditions = document.querySelector("#mainForm");
const positionFieldset = document.createElement("fieldset");
const submitPosition = document.querySelector('#submitButton');

console.log(positions);

let active = null;
for (i=0; i<positions.length; i++) {
    positions[i].addEventListener('change', function() {
        active = this.value;
        console.log(active)
        buildTeam(active);
    });
}

function buildTeam(location) {
    positionFieldset.innerHTML = "";
    submitPosition.innerHTML = "";

    const positionLegend = document.createElement("legend");
    const teamPositions = document.createElement("div");
    teamPositions.setAttribute("id", "teamPositions");

    positionFieldset.appendChild(teamPositions);

    if (location == "Aspen Grove"){
        positionLegend.textContent = "Aspen Grove Available Positions";
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Team Member"));
    }
    else if (location == "Stewart Falls"){
        positionLegend.textContent = "Stewart Falls Available Positions";
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Primary Medical"));
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Secondary Medical"));
        
    }
    else if (location == "Timpooneke"){
        positionLegend.textContent = "Timpooneke Available Positions";
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Team Member"));

    }
    else if (location == "High Camp"){
        positionLegend.textContent = "High Camp Available Positions";
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Primary Team Leader"));
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Secondary Team Leader"));
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Communications"));
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Medical"));
        teamPositions.appendChild(buildTeamMemberPosition("teamMember", "Runner"));
    }

    positionFieldset.appendChild(positionLegend);
    formAdditions.appendChild(positionFieldset);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("name", "submitButton");
    submitButton.setAttribute("value", "Sign Me Up");
    
    submitPosition.appendChild(submitButton);

}

function buildTeamMemberPosition(position, positionName) {
    const radioSpan = document.createElement("span");
        const teamMemberRadioButton = document.createElement("input");
        teamMemberRadioButton.setAttribute("type", "radio");
        teamMemberRadioButton.setAttribute("name", position);
        teamMemberRadioButton.setAttribute("id", position);
        teamMemberRadioButton.setAttribute("value", positionName);
        const teamMemberLabel = document.createElement("label");
        teamMemberLabel.setAttribute("for", position);
        teamMemberLabel.textContent = positionName;

        radioSpan.appendChild(teamMemberRadioButton);
        radioSpan.appendChild(teamMemberLabel);

    return (radioSpan);
}