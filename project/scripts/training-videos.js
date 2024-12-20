const locationFile = "./data/training.json";
const tertVideos = document.querySelector('#tertVideos');
const selectTag = document.querySelector('#tagDropdown');
const videoGrid = document.querySelector('#videoGrid');

let tagList = [];

// Check for data that filters the videos.
const currentURL = window.location.href;
const everything = currentURL.split('?');

if (everything[1] != null) {
    const formData = everything[1].split('&');
    formData.forEach(element => {
        if (element.startsWith("tagDropDown")) {
            result = element.split('=')[1];
            result = result.replace(/\+/g, " ");
            openTrainingJSON(result)
        }
    })
}
else {
    openTrainingJSON("All"); //openTrainingGrid
}

async function openTrainingJSON(specifier) {
    try {
        const response = await fetch(locationFile);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const trainingList = await response.json();

        // Build a list of tags that we will use for possible filters
        trainingList.trainingvideos.forEach(element => {
            element.tags.forEach(tag => {
                if (tagList.includes(tag) == false) {
                    tagList.push(tag);
                }
            });

        });
        buildTagDropdown(tagList);

        // Build Cards for each video
        const videoArray = trainingList.trainingvideos;
        if (specifier == 'All') {
            videoCardBuilder(videoArray);
        }
        else {
            const filteredMovies = videoArray.filter(video => {
                return video.tags.includes(specifier)
            });
            videoCardBuilder(filteredMovies);
        }
    }
    catch (error) {
        console.error(error.message);
    }

}

function buildTagDropdown(tags) {

    tags.forEach(tag => {
        const tagOption = document.createElement("option");
        tagOption.setAttribute("id", tag);
        tagOption.setAttribute("value", tag);
        tagOption.textContent = tag;
        selectTag.appendChild(tagOption);
    });
}

function videoCardBuilder(videoArray) {
    videoGrid.innerHTML = "";
    videoArray.forEach(element => {

        const movieDiv = document.createElement("div");
        movieDiv.setAttribute("class", "movieDiv");
        const thumbnail = document.createElement("img");
        if (element.thumbnail == "") {
            thumbnail.setAttribute("src", "images/movieIcon.png");
            thumbnail.setAttribute("width", "50");
            thumbnail.setAttribute("height", "50");
        }
        else {
            thumbnail.setAttribute("src", element.thumbnail);
            thumbnail.setAttribute("width", "150");
            thumbnail.setAttribute("height", "105");
        }
        thumbnail.setAttribute("alt", element.title);
        thumbnail.setAttribute("loading", "lazy");
        movieDiv.appendChild(thumbnail);

        const movieTitle = document.createElement("h3");
        movieTitle.textContent = element.title;
        movieDiv.appendChild(movieTitle);

        const movieLink = document.createElement("a");
        movieLink.setAttribute("href", element.path);
        movieLink.setAttribute("target", "_blank");
        movieLink.setAttribute("class", "inlineLink");
        movieLink.textContent = "View";
        movieDiv.appendChild(movieLink);

        videoGrid.appendChild(movieDiv);
    });
}