const devlogList = document.createElement("ul");
devlogList.classList.add("cards");

const devlogs = [
    {
        name: "Upriver (placeholder)", // Copy for each game with a devlog site.
        // The below gradients are meant for the name of the game.
        gradientTopLeft: "red", // replace later
        gradientTopRight: "blue", // replace later
        imageSrc: "exampleimage.png", // Replace with photo of game later
        description: "Play a game where you take control of a salmon, swimming upriver in an attempt to reach the spawn pools (not finalised)",
        status: "In Development",
        devlogsIcon: "images/devlog_icon.png",
        downloadIcon: "images/download_icon.png",
    }
];

for (let i = 0; i < devlogs.length; i++) {
    const devlogItem = document.createElement("li");

    const devlogDiv = document.createElement("div");
    devlogDiv.classList.add("devlog");

    // Title is game name
    const devlogTitle = document.createElement("h2");
    devlogTitle.style.color = devlogs[i].gradientTopLeft; // Change later so title is actually linear gradient
    devlogTitle.innerText = devlogs[i].name;

    const devlogImage = document.createElement("img");
    devlogImage.src = "images/" + devlogs[i].imageSrc;
    devlogImage.alt = "Image of " + devlogs[i].name;

    // Icons for navigating to the game's devlog page and for installing the app
    const devlogIcon = document.createElement("img");
    devlogIcon.src = "images/" + devlogs[i].devlogsIcon;
    devlogIcon.alt = "Devlog icon";

    const installIcon = document.createElement("img");
    installIcon.src = "images/" + devlogs[i].downloadIcon;
    installIcon.alt = "Install icon";

    // Create description of game
    const devlogDescription = document.createElement("p");
    devlogDescription.innerText = devlogs[i].description;

    // Create completion status of game
    const devlogStatus = document.createElement("p");
    devlogStatus.innerText = devlogs[i].status;

    // Add created elements to each other, in nested order
    devlogDiv.appendChild(devlogTitle);
    devlogDiv.appendChild(devlogImage);
    devlogDiv.appendChild(devlogDescription);
    devlogDiv.appendChild(devlogStatus);
    devlogDiv.appendChild(devlogIcon);

    devlogItem.appendChild(devlogDiv);

    devlogList.appendChild(devlogIcon);
}

document.getElementById("devlogs").appendChild(devlogList);