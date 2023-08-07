//All initialized globals.
var levelNumber = 1;
var RandomNumberSet = [];
var ColorSet = 0;
var count = 0;  
var gameStarted = false;
var pass = true;
var errorCount = 0;
var colorSound = ["sounds/blue.mp3","sounds/green.mp3","sounds/red.mp3","sounds/purple.mp3","sounds/bruh.mp3"];
//Game start initializer
gameStart();
$(window).click(function(event){
    if(event.key === "F5"){
        $(window).load("./start.html");
    }
})


//The way to start the game.
function gameStart(){
    $("h2").html("PRESS ANY KEY TO START THE GAME! "); //Starts game when any key is pressed.
    $(document).keydown(function(){
        if(gameStarted == false){
            gameStarted = true; //Deactivates the keyboard event listener.
            $("h2").text("LEVEL "+ levelNumber); //Displays the level number.
            RandomNumber(); //The first random number to target a random button.
            showUser(); //Function to listen for user clicks and show and then unshow the button that has been pushed into the array. IS ACTIVE.
        }
    }
)
}





//Function to detect user button clicks and investigate wether they match the given RandomNumberSet.
//This function is always active, listening for mouseclicks.
function showUser(){
    
    $("button").click(function(){
        $("button"+"."+this.classList[1]).addClass("letUserKnow");
        setTimeout(function(){
            $("button").removeClass("letUserKnow");
        },200)
        
        if(this.classList[1] == RandomNumberSet[count]){
             switch(this.classList[1]){
                case '0':
                    var blue = new Audio(colorSound[0]);
                    blue.play();
                    break;
                case '1':
                    var green = new Audio(colorSound[1]);
                    green.play();
                    break;
                case '2':
                    var red = new Audio(colorSound[2]);
                    red.play();
                    break;
                case '3':
                    var purple = new Audio(colorSound[3]);
                    purple.play();
                    break;
                default:
                    break;

             }
             count++; //Increments count only if the button click matches the array number count in RandomNumberSet.
                if(count == RandomNumberSet.length){
                    levelNumber++;
                    ColorSet++;
                    setTimeout(function(){
                        $("h2").text("LEVEL "+ levelNumber);
                    setTimeout(function(){
                        RandomNumber();
                    },500);
                    },200);
                    count = 0; 
                }
            }

        else{
                var wrongSound = new Audio(colorSound[4]);
                wrongSound.play();
                ColorSet = 0;
                count = 0;
                var counts = 0;
                RandomNumberSet = [];
                levelNumber = 1;
                var gamestarts = false;
                errorCount++;
                //Segment to display error and ask for key from pad.

            
                
                $("h2").text("THE WORLD DESPISES YOU!");
                setTimeout(function(){
                    $("h2").text("PRESS ANY KEY TO START THE GAME!");
                },1000);

                $(document).keydown(function(){
                    if(gamestarts == false){
                        gamestarts = true;
                        
                        $("h2").text("LEVEL "+ levelNumber);
                        
                        if(pass){
                            pass=false;
                            RandomNumber();
                            $("button").click(function(){
                                pass = true; 
                                if(this.classList[1] == RandomNumberSet[counts]){
                                        counts++; //Increments count only if the button click matches the array number count in RandomNumberSet.
                                        if(count == RandomNumberSet.length){
                                            levelNumber++;
                                            ColorSet++;
                                            $("h2").text("LEVEL "+ levelNumber);
                                            RandomNumber();
                                            counts=0; 
                                }
                            }
                        }
                    )
                        }
                        
                
                }
            }
        )
            }
        }
    )
}

//Function to push a random number into array upon button click being correct. A random number needs to be generated first. 
function RandomNumber(){
        var RandomNumber = Math.floor(Math.random()*4);
        RandomNumberSet[ColorSet] = RandomNumber;
        document.querySelectorAll("button")[RandomNumberSet[ColorSet]].classList.add("shadow");
        //To set a timer to deselect an event.
        setTimeout(function(){
        document.querySelectorAll("button")[RandomNumberSet[ColorSet]].classList.remove("shadow");
       },300);

}
    
    















    
    