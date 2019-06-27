var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                    {type: 'purpleCup',x:600,y:groundY-16},
                    {type: 'blueCup',x:850,y:groundY-12},
                    {type: 'purpleCup',x:1100,y:groundY-16},
                    {type: 'blueCup',x:1350,y:groundY-12},
                    {type: 'purpleCup',x:1600,y:groundY-16},
                    {type: 'blueCup',x:1850,y:groundY-12},
                    
        ],
             
            enemies: [
                {type: 'monster',x:3300,y:groundY - 50,speed:10},
                {type: 'monster',x:6000,y:groundY - 50,speed:10},
                {type: 'monster',x:9150,y:groundY - 50,speed:10},
                {type: 'monster',x:9250,y:groundY - 50,speed:10},
                {type: 'monster',x:9350,y:groundY - 50,speed:10},
        ],
              rewards: [
                {type: 'cook', x:975,y:groundY - 145},
                {type: 'cook', x:1475,y:groundY - 150},
                {type: 'cook', x:1725,y:groundY - 145},
        ],    


    };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
    function createPurpleCupcake(x,y) {
          var hitZoneSize = 6
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);  
        var obstacleImage = draw.bitmap('img/Cupcake 1.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -500
        obstacleImage.y = -700
        myObstacle.scaleX = .020;
        myObstacle.scaleY = .020;
    }
        function createBlueCupcake(x,y) {
          var hitZoneSize = 6
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);  
        var obstacleImage = draw.bitmap('img/blueCupcake.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -500
        obstacleImage.y = -700
        myObstacle.scaleX = .035;
        myObstacle.scaleY = .035;
        }
        
        function createEnemy(x, y, speed) {
        var enemy =  game.createGameItem('enemy',25);
        var monster = draw.bitmap('img/cookiemon.png');
        monster.x = -100;
        monster.y = -460;
        enemy.addChild(monster);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.scaleX = .2;
        enemy.scaleY = .2;

        enemy.velocityX =-speed;

        enemy.onPlayerCollision = function() {
         game.changeIntegrity(-10);
        };

         enemy.onProjectileCollision = function() {
         game.increaseScore(1400);
         enemy.fadeOut();
    };
 }
         
function createReward(x,y){
    var reward = game.createGameItem('reward',16);    
    var cook = draw.bitmap('img/cookie.png');
    cook.x = -300;
    cook.y = -300;
    reward.addChild(cook);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.scaleX = .08;
    reward.scaleY = .08;
    
    reward.velocityX = -2;
    reward.onPlayerCollision = function() {
        game.increaseScore(1000);
        reward.fadeOut();
    };

}    


    for (var t9 = 0; t9< levelData.gameItems.length; t9++) {
        var GameItemX = levelData.gameItems[t9].x;
        var GameItemY = levelData.gameItems[t9].y;
      if (levelData.gameItems[t9].type === "purpleCup") {
          createPurpleCupcake(GameItemX, GameItemY);
      } else if (levelData.gameItems[t9].type === "blueCup") {
          createBlueCupcake(GameItemX, GameItemY);
      }
    }
    for (t9 = 0; t9 < levelData.enemies.length; t9++){
    var enemieX = levelData.enemies[t9].x;
    var enemieY = levelData.enemies[t9].y;
    var oop = levelData.enemies[t9].speed;
    createEnemy(enemieX,enemieY,oop);
    
}   
    for (t9 = 0; t9 < levelData.rewards.length; t9++){
    var rewardX = levelData.rewards[t9].x;
    var rewardY = levelData.rewards[t9].y;
    createReward(rewardX,rewardY);
}


    }
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}