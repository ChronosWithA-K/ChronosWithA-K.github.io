const gameList = document.createElement("ul");
gameList.classList.add("cards");

const games = [
    {
        name: "Upriver (placeholder)",
        gradientTopLeft: "rgb(72, 172, 234)",
        gradientBottomRight: "rgb(252, 70, 221)",
        imageSrc: "images/placeholder.jpg", // Replace with official photo of game later
        description: "As a salmon, swim upriver to find a mate.",
        status: "On Hold",
        devlogsIcon: "images/devlog_icon.png",
        devlogLink: "upriver-devlog.html",
        downloadIcon: "images/download_icon.png",
        downloadLink: ""
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
    gameImage.classList.add("gameImage");

    // Icons for navigating to the game's devlog page and for installing the app
    const devlogIcon = document.createElement("img");
    devlogIcon.src = games[i].devlogsIcon;
    devlogIcon.alt = "Devlog icon";
    devlogIcon.classList.add("devlogImage");

    devlogIcon.addEventListener("click",function() {
        window.location.href = games[i].devlogLink;
        window.location.href = games[i].downloadLink;
    });

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