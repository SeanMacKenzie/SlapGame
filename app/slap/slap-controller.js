function SlapController() {
    var slapService = new SlapService()

    function update() {
        var thanos = slapService.getThanos()
        var captainMarvel = slapService.getCaptainMarvel()
        document.getElementById('thanos-health').innerText = thanos.health
        document.getElementById('marvel-health').innerText = captainMarvel.health
        if (thanos.health <= 0) {
            document.getElementById('game-over').innerText = 'Victory'
        }
    }
    update()

    this.attack = function attack(type){
        slapService.attack(type)
        update()
    }

    this.giveTeam = function giveTeam(team){
        slapService.giveTeam(team)
        update()
    }

    // this.giveAlphaFlight = function giveAlphaFlight(){
    //     slapService.giveAlphaFlight()
    // }

    // this.giveAvengers = function giveAvengers(){
    //     slapService.giveAvengers()
    // }

    // this.giveUltimates = function giveUltimates(){
    //     slapService.giveUltimates()
    // }


    update()

}