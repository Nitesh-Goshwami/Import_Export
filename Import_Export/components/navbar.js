function navbar(){
    return `<div id="navbar">
    <img id = "logo" src= "https://www.clipartmax.com/png/small/112-1129793_healthy-food-logo-png.png"/>
    <h3><input type="text" id="userInput" placeholder="Search"><button id="searchbutton" onclick="searchfeature()">Search</button></h3>

    <div class="options">
        <h3><a href="./dayReceipe.html">Receipe of The Day</a></h3>
        <h3><a href="./latestReceipe.html">Latest Receipe</a></h3>
    </div>
</div>
<div id="data"></div>`
}

export default navbar