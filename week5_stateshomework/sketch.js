var sceneStates = Object.freeze({
  SCENEZERO: 0,
  SCENEONE: 1,
  SCENETWO: 2,
  SCENETHREE: 3,
  SCENEFOUR: 4,
});
var currentState = sceneStates.SCENEZERO;
var keyOn = false;

function setup(){
  createCanvas(1500, 1500);
}

function draw(){
  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;
}

function drawScene(whichScene){
  switch(whichScene){
    case sceneStates.SCENEZERO:
      background(0);
      fill(255);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("welcome to the magic forest!\npress any key to continue", width/2, height/2);
      break;
    case sceneStates.SCENEONE:
      background(100 + sin(frameCount*0.05) * 50, 100 + sin(frameCount*0.06) * 50, 100 + sin(frameCount*0.07) * 50);
      fill(255);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("imagine...\nyou are walking along a path and come to a river\ndo you\nA. swim across\nor\nB.walk around it", width/2, height/2);
      break;
    case sceneStates.SCENETWO:
      background(100 + sin(frameCount*0.05) * 50, 100 + sin(frameCount*0.06) * 50, 100 + sin(frameCount*0.07) * 50);
      fill(255);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("congrats!\nyou have made it across\nwhat next?\nA. keep going\nB. keep going", width/2, height/2);
      break;
    case sceneStates.SCENETHREE:
      background(100 + sin(frameCount*0.05) * 50, 100 + sin(frameCount*0.06) * 50, 100 + sin(frameCount*0.07) * 50);
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("you run into a pack of unicorns in the middle of your path\nhow will you get around them?\nA. walk around them\nor\nB. hop on one and ride through the forest", width/2, height/2);
      break;
    case sceneStates.SCENEFOUR:
      background(100 + sin(frameCount*0.05) * 50, 100 + sin(frameCount*0.06) * 50, 100 + sin(frameCount*0.07) * 50);
      fill(255);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("CONGRATS!!\nYOU HAVE MADE IT THROUGH!!", width/2, height/2);
      break;
  }
}

function checkTransition(whichScene){
  switch(whichScene){
    case sceneStates.SCENEZERO:
    if(keyOn){
      currentState++;
      setUpScene(currentState);
    }
    break;
    case sceneStates.SCENEONE:
    if(keyOn){
      currentState++;
      setUpScene(currentState);
    }
    break;
    case sceneStates.SCENETWO:
    if(keyOn){
      currentState++;
      setUpScene(currentState);
    }
    break;
    case sceneStates.SCENETHREE:
    if(keyOn){
      currentState++;
      setUpScene(currentState);
    }
    break;
    case sceneStates.SCENEFOUR:
    if(keyOn){
      currentState++;
      setUpScene(currentState);
    }
    break;
    default:
    break;
  }
}

function setUpScene(whichScene){
  switch(whichScene){
    case sceneStates.SCENEZERO:
    break;
    case sceneStates.SCENEONE:
    break;
    case sceneStates.SCENETWO:
    break;
    case sceneStates.SCENETHREE:
    break;
    case sceneStates.SCENEFOUR:
    break;
    default:
    break;
  }
}

function keyPressed(){
  keyOn = true;
}