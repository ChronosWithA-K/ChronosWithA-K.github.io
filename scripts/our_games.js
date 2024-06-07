const gameList = document.createElement("ul");
gameList.classList.add("cards");

const games = [
    {
        // Copy for each game.
        name: "Upriver (placeholder)",
        // The below gradients are meant for the name of the game.
        gradientTopLeft: "red", // replace later
        gradientBottomRight: "blue", // replace later
        imageSrc: "images/placeholder.jpg", // Replace with official photo of game later
        description: "Play a game where you take control of a salmon, swimming upriver in an attempt to reach the spawn pools (idea not finalised)",
        status: "In Development",
        devlogsIcon: "images/devlog_icon.png",
        devlogLink: "upriver-devlog.html",
        downloadIcon: "images/download_icon.png", // No download link as game isn't finished
    }
];

for (let i = 0; i < games.length; i++) {
    const gameItem = document.createElement("li");

    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    // Title is game name
    const gameTitle = document.createElement("p");
    gameTitle.style.backgroundImage = `linear-gradient(to bottom right, ${games[i].gradientTopLeft}, ${games[i].gradientBottomRight})`;
    gameTitle.innerText = games[i].name;
    gameTitle.classList.add("gameTitle");

    // Image of game
    const gameImage = document.createElement("img");
    gameImage.src = games[i].imageSrc;
    gameImage.alt = "Image of " + games[i].name;

    // Icons for navigating to the game's devlog page and for installing the app
    const devlogIcon = document.createElement("img");
    devlogIcon.src = games[i].devlogsIcon;
    devlogIcon.alt = "Devlog icon";
    devlogIcon.classList.add("devlogImage");

    devlogIcon.onclick() = function(event) {
        window.location.href = games[i].devlogLink;
    }

    const installIcon = document.createElement("img");
    installIcon.src = games[i].downloadIcon;
    installIcon.alt = "Install icon";
    installIcon.classList.add("installImage");

    // Create description of game
    const gameDescription = document.createElement("p");
    gameDescription.innerText = games[i].description;

    // Create completion status of game
    const gameStatus = document.createElement("p");
    gameStatus.innerText = "Status: " + games[i].status;

    // Add created elements to each other
    gameDiv.appendChild(gameTitle);
    gameDiv.appendChild(gameImage);
    gameDiv.appendChild(gameDescription);
    gameDiv.appendChild(gameStatus);
    gameDiv.appendChild(devlogIcon);
    gameDiv.appendChild(installIcon);

    gameItem.appendChild(gameDiv);

    gameList.appendChild(gameItem);
}

document.getElementById("games").appendChild(gameList);