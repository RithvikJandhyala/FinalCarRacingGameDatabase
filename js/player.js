class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
    }
    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
    update(){
        var playerIndex = "players/player"+ this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerinfo(){
        var inforead = database.ref('players');
        inforead.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    getRank(){
        var rankinfo = database.ref('rank');
        rankinfo.on("value",(data)=>{
            this.rank = data.val();
        })
    }
    static updateRank(rank){
        database.ref('/').update({
            rank: rank
        })    
    }


}