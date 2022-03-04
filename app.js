const allPlayers = () => {
    document.getElementById("player-container").innerHTML = ""
    document.getElementById("spiner").style.display = "block"

    const searchValue = document.getElementById("search-box").value
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.player == null) {
                document.getElementById("spiner").style.display = "block"
            }
            else {
                showPlayerDetails(data.player)
                document.getElementById("spiner").style.display = "none"
            }
            console.log(data)
        })
}
const showPlayerDetails = (players) => {
    if (players) {
        document.getElementById("spiner").style.display = "none"
    }
    else {
        document.getElementById("spiner").style.display = "block"
    }
    const parent = document.getElementById("player-container")
    for (const player of players) {
        // console.log(player)
        const div = document.createElement("div")
        div.innerHTML = `
                <div class="card border p-2 d-flex justify-content-center">
                    <div class="pro-pic">
                        <img class="w-50 ms-5" src="${player.strThumb}" alt="">
                    </div>
                    <h3 class="ms-5">Name: ${player.strPlayer} </h3>
                    <h3 class="ms-5">country: ${player.strBirthLocation} </h3>
                    <p></p>
                    <div class="all-button">
                        <button class="btn btn-danger ms-4">Delete</button>
                        <button onclick="details(${player.idPlayer})" class="btn btn-success ms-5">Details</button>
                    </div>
                </div>`
        parent.appendChild(div)
    }
}
const details = (id) => {
    // console.log("ok boss hoise", id)
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDeatils(data.players[0]))
}
const setDeatils = (info) => {
    console.log(info.strGender)
    if (info.strGender == "Male") {
        document.getElementById("male").style.display = "block"
        document.getElementById("female").style.display = "none"
    }
    else {
        document.getElementById("male").style.display = "none"
        document.getElementById("female").style.display = "block"
    }
    document.getElementById("details-container").innerHTML = `
    <div>
        <img src="" alt="">
        <h1>Name:${info.strPlayer} </h1>
    </div>
    `
}


meals.forEach(meal => {

});