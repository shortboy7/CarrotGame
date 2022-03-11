'strict use'
import GameController from './gameController.js';
import GamePlayground from './gamePlayground.js';
import MusicPlayer from './music.js';

const CARROT_SIZE = 10;
const BUG_SIZE = 10;
const BUG_PX = 60;
const CARROT_PX = 80;
const LIMIT_TIME = 10;
let timer = null;
let score = 0;
let second = LIMIT_TIME;
let stop = false;

const musicPlayer = new MusicPlayer();
const gameController = new GameController(playControl);
gameController.start(LIMIT_TIME,CARROT_SIZE);
const gamePlayground = new GamePlayground(pull,startGame);
gamePlayground.hideResult();



// const bg = document.createElement('audio');
// const result = document.createElement('audio');
// const pull_sound = document.createElement('audio');
// bg.src = './sound/bg.mp3';

function resultSound(success){
    if(success){
        musicPlayer.play('win');
    }else{
        musicPlayer.play('lose');
    }
}

function pullSound(className){
    musicPlayer.play(className);
}

function playControl(){
    if(!timer && !stop){
        startGame();
    }else if(!timer && stop){
        onGame();
    }else{
        stopGame();
    }
}

function startGame(){
    initalizeValues();
    onGame();
}

function onGame(){
    musicPlayer.play('bg');
    gamePlayground.hideResult();
    gameController.on();
    stop = false;
    timer = setInterval(()=>{
        second -=1;
        gameController.updateLabel(second);
        if(second === 0){
            finishGame('lose');
        }
    },1000);
}

function finishGame(id){
    stopGame();
    stop = false;
    resultSound(id);
    gamePlayground.showResult(id);
    gameController.finish();
}

function stopGame(){
    musicPlayer.pause('bg');
    clearInterval(timer);
    timer = null;
    stop = true;
    gamePlayground.showResult('pause');
    gameController.stop();
}



function initalizeValues(){
    gameController.start(LIMIT_TIME,CARROT_SIZE);
    gamePlayground.init(BUG_PX,BUG_SIZE,CARROT_PX,CARROT_SIZE);
    
    second = LIMIT_TIME;
    score = 0;
    stop = false;
    timer = null;
}

function pull(event){
    pullSound(event.target.className);
    switch(event.target.className){
        case 'carrot':
            score++;
            gameController.updateScore(score,CARROT_SIZE);
            event.target.remove();
            if(score === CARROT_SIZE) finishGame('win');
            break;
        case 'bug':
            finishGame('lose');
            break;
    }
}


