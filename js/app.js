$(document).ready(function(){

	var guessCount = 0;
	var userGuess = 0;
	var endGame = false;
	/*--- built-in function to generate a secret number ---*/
	var secretNum = Math.floor(Math.random() * 100);
	console.log(secretNum);
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    /*Check the user input when the form is submitted*/
     $("form").submit(function(event){
     	event.preventDefault();
    	//if user finishes the game,inform him to start a new session.
        if(!endGame){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            $("#feedback").text("You already won :) Start a new game !");
        }
    	
    });

    $(".new").click(function(){
    	setNewGame();
    });


  	
  	/*function that gets user guess and gives him feedback*/
  	function userFeedback(){
		var userGuess = parseInt($("#userGuess").val());
		$("ul#guessList").append("<li>"+userGuess+"</li>");
  		    guessCount++;
  		    setCount(guessCount);
  		var difference = (Math.abs(userGuess - secretNum));
  		/*console.log(difference);*/
  		if(difference === 0){
  			$("#feedback").text("Well Done, You got It!");
  			endGame=true;	
  		}
  		else if(difference >= 30 && difference <=49){
  			$("#feedback").text("It is cold here");
  		}
  		else if(difference >= 20 && difference <=29){
  			$("#feedback").text("It is warm");
  		}
  		else if(difference >= 10 && difference <=19){
  			$("#feedback").text("It is hot");
  		}
  		else if(difference >= 6 && difference <=9){
  			$("#feedback").text("It is really really hot");
  		}
  		else if(difference >= 1 && difference <=5){
  			$("#feedback").text("You are burning");
  		}
  		else{
  			$("#feedback").text("It is freezing");
  		}
  		

  	}
    /*Checks input provided by the user*/
  	function checkInput(){
  		var userGuess = parseInt($("#userGuess").val());
	    if(userGuess == "" || isNaN(userGuess)) {
	        alert("Please enter a valid number");
	    } else if (userGuess < 0 || userGuess > 100) {
	        alert("Plese enter a number from 1 - 100!");
	    }
	    else{
	    	userFeedback();
	    }

    }

    /*function to get user attempts*/
    function setCount(count){
        $('#count').text(guessCount);
    }
    /*allow the user to start a new game*/
    function setNewGame(){
    	guessCount = 0;
        endGame = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        secretNumber = (Math.floor(Math.random()*100));
        $("#feedback").text("Make your guess!");
        console.log("new game,new secret number is " + secretNumber);
    }


});


