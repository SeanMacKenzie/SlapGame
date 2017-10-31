function SlapService() {

    function addMods() {
        var power = 1
        for (var i = 0; i < captainMarvel.teams.length; i++) {
            var team = captainMarvel.teams[i];
            if (team.name == 'Alpha Flight' || team.name == 'Avengers' || team.name == 'Ultimates') {
                power *= team.modifier
            }
        }
        return power
    }

    // function Target(name,health,punch,speedStike,energyBlast){
    //     this.name = name;
    //     this.health = health;
    //     this.attacks = {
    //         punch: punch,
    //         speedStike: speedStrike,
    //         energyBlast: energyBlast
    //     }
    //     this.team = []
    //     this.hits = 0
    // }

    // var thanos = new Target('Thanos', 2000, 5, 10, 20)

    var captainMarvel = {
        health: 100,
        name: 'Captain Marvel',
        attacks: {
            punch: 5,
            speedStrike: 10,
            energyBlast: 20
        },
        teams: []
    }

    var thanos = {
        health: 2000,
        name: 'Thanos',
        attacks: {
            pummel: 20,
            cosmicBlast: 40,
            gauntletStrike: 60
        }
    }

    var team = function (name, modifier, description) {
        this.name = name,
            this.modifier = modifier,
            this.description = description
    }

    var teams = {
        alphaFlight: new team('Alpha Flight', 2.5, 'Danver\'s family attacks!'),
        avengers: new team('Avengers', 5, 'Earth\'s Mightiest Heroes'),
        ultimates: new team('Ultimates', 10, 'Earth\'s ultimate power!')
    }

    this.giveTeam = function giveTeam(team) {
        captainMarvel.teams.push(teams[team])
    }

    // this.giveAlphaFlight = function giveAlphaFlight(){
    //     captainMarvel.teams.push(teams.alphaFlight)

    // }

    // this.giveAvengers = function giveAvengers(){
    //     captainMarvel.teams.push(teams.avengers)
    // }

    // this.giveUltimates = function giveUltimates(){
    //     captainMarvel.teams.push(teams.ultimates)
    // }

    this.attack = function attack(type) {
        if (captainMarvel.attacks[type]) {

            thanos.health -= captainMarvel.attacks[type] * addMods()
            if (thanos.health < 0) {
                thanos.health = 0
            }
            if (thanos.health > 2000) {
                thanos.health = 2000
            }
        }


    }

    this.getThanos = function getThanos() {
        return JSON.parse(JSON.stringify(thanos))
    }

    this.getCaptainMarvel = function getCaptainMarvel() {
        return JSON.parse(JSON.stringify(captainMarvel))
    }

    // this.getTeams = function getTeams() {
    //     return JSON.parse(JSON.stringify(teams))
    // }

}