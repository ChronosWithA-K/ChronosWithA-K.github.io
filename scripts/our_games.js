const devlogList = document.createElement("ul");
devlogList.classList.add("cards");

const devlogs = [
    {
        // Copy for each game.
        name: "Upriver (placeholder)",
        // The below gradients are meant for the name of the game.
        gradientTopLeft: "red", // replace later
        gradientTopRight: "blue", // replace later
        imageSrc: "exampleimage.png", // Replace with official photo of game later
        description: "Play a game where you take control of a salmon, swimming upriver in an attempt to reach the spawn pools (idea not finalised)",
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

    // Image of game
    const devlogImage = document.createElement("img");
    devlogImage.src = devlogs[i].imageSrc;
    devlogImage.alt = "Image of " + devlogs[i].name;

    // Icons for navigating to the game's devlog page and for installing the app
    const devlogIcon = document.createElement("img");
    devlogIcon.src = devlogs[i].devlogsIcon;
    devlogIcon.alt = "Devlog icon";
    devlogIcon.classList.add("devlogImage");

    const installIcon = document.createElement("img");
    installIcon.src = devlogs[i].downloadIcon;
    installIcon.alt = "Install icon";
    installIcon.classList.add("installIcon");

    // Create description of game
    const devlogDescription = document.createElement("p");
    devlogDescription.innerText = devlogs[i].description;

    // Create completion status of game
    const devlogStatus = document.createElement("p");
    devlogStatus.innerText = devlogs[i].status;

    // Add created elements to each other
    devlogDiv.appendChild(devlogTitle);
    devlogDiv.appendChild(devlogImage);
    devlogDiv.appendChild(devlogDescription);
    devlogDiv.appendChild(devlogStatus);
    devlogDiv.appendChild(devlogIcon);
    devlogDiv.appendChild(installIcon);

    devlogItem.appendChild(devlogDiv);

    devlogList.appendChild(devlogItem);
}

document.getElementById("devlogs").appendChild(devlogList);