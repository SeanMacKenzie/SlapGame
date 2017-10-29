

var captainMarvel = {
    health: 100,
    name: 'Captain Marvel',
    attacks:{
        punch: 5,
        speedStike: 10,
        energyBlast: 20
    },
    teams: []
}

var thanos = {
    health: 2000,
    name: 'Thanos',
    attacks:{
        pummel: 20,
        cosmicBlast: 40,
        gauntletStrike: 60
    }
}

var team = function(name, modifier, description){
    this.name = name,
    this.modifier = modifier,
    this.description = description
}

var teams = {
    alphaFlight:new team('Alpha Flight', 2.5, 'Danver\'s family attacks!'),
    avengers:new team('Avengers', 5, 'Earth\'s Mightiest Heroes'),
    ultimates:new team('Ultimates', 10, 'Earth\'s ultimate power!')
}

function giveAlphaFlight(){
    captainMarvel.teams.push(teams.alphaFlight)
    console.log(captainMarvel)
}

function giveAvengers(){
    captainMarvel.teams.push(teams.avengers)
}

function giveUltimates(){
    captainMarvel.teams.push(teams.ultimates)
}

function addMods(){
    var power = 1
    for (var i = 0; i < captainMarvel.teams.length; i++) {
        var team = captainMarvel.teams[i];
        if (team.name == 'Alpha Flight' || team.name == 'Avengers' || team.name == 'Ultimates') {
            power *= team.modifier
        }
    }
    return power
}

function punch(){
    addMods()
    thanos.health -= 5 * addMods();
    update(thanos.health)
}
   
function speedStrike(){
    addMods()
    thanos.health -= 10 * addMods();
    update(thanos.health)
}

function energyBlast(){
    addMods()
    thanos.health -= 20 * addMods();
    update(thanos.health)
}

function death(){
    if (thanos.health <= 0){
        document.getElementById('game-over').innerText = 'Game Over'
      
    }
}

function update() {
    document.getElementById('thanos-health').innerText = thanos.health
}
update()


console.log(captainMarvel.teams)