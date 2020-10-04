class Game {
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        car1.addImage("car1",car1i);
        car2.addImage("car2",car2i);
        car3.addImage("car3",car3i);
        car4.addImage("car4",car4i);
        
        cars = [car1,car2,car3,car4]


    }
    play(){
        form.hide();
        Player.getPlayerinfo();
        player.getRank();
       
        if(allPlayers!== undefined){
            image(track,0,-displayHeight*4 +320,displayWidth,displayHeight*5);
            var index = 0;
            var x = 200;
            var y; 
            for(var plr in allPlayers){
                /*if(plr==="player"+player.index){
                    fill("red");

                }else{
                    fill("black");
                }
                ypos=ypos+20;
                text(allPlayers[plr].name + ":"+allPlayers[plr].distance,120,ypos);
                
            */
                index=index+1;
                x=x+200;
                y= displayHeight - allPlayers[plr].distance +250;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                   
                    stroke("red");
                    strokeWeight(5);
                    ellipse(x,y,100,80);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y-250;
                    
                }
           }
        }
        if(keyIsDown(UP_ARROW) && player.index!=null ){
            player.distance+= 50;
            player.update();
            
        }
        if(keyIsDown(DOWN_ARROW) && player.index!=null ){
            player.distance-= 50;
            player.update();
            
        }
        if(player.distance>3860){
            gameState = 2;
            player.rank+= 1;
            Player.updateRank(player.rank);
        }

        drawSprites();
    }
    end(){
        console.log(player.rank);
    }

}