class Form {
    constructor(){
        this.input = createInput();
        this.button = createButton('Start Game');
        this.great = createElement('h1',);
        this.reset = createButton('Reset');
        this.reset.style("width","100px",);
        this.reset.style("background","green");
    }
    display(){
        var  title= createElement('h1','Car Racing Game');
        title.position(displayWidth/2 - 130,0);
        
        this.input.position(displayWidth/2 - 100,100);
       
        this.button.position(displayWidth/2 - 50,150);
        this.reset.position(20,20);
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            database.ref('/').update({
                players: null
            });

        });
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            title.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.great.html('Welcome ' + player.name);
            this.great.position(displayWidth/2 - 100,0);
            
            

        });

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.great.hide();
    }
}