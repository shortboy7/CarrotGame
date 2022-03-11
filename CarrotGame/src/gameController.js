'use strict';
import CustomButton from './CustomButton.js';

export default class GameController{
    constructor(onclick){
        this.timeLabel = document.querySelector('.timer');
        this.scoreBoard = document.querySelector('.scoreboard');
        this.playButton = new CustomButton('play__button');
        this.setPlayControl(onclick);
    }
    setPlayControl(onclick){
        this.playButton.setOnclick(onclick);
        this.playButton.ableEvent();
    }
    updateLabel(second){
        this.timeLabel.textContent = this.__timeString(second);
    }
    updateScore(score,score_max){
        this.scoreBoard.textContent = `${score_max - score}`;
    }
    start(sec,num){
        this.updateScore(0,num);
        this.updateLabel(sec);
        this.on();
        this.playButton.show();
        this.playButton.ableEvent();
        this.playButton.setShape('<i class="fa-solid fa-play"></i>');    
    }
    on(){
        this.playButton.setShape('<i class="fa-solid fa-stop"></i>');
    }
    stop(){
        this.playButton.setShape('<i class="fa-solid fa-play"></i>');
    }
    finish(){
        this.playButton.disableEvent();
        this.playButton.hide();
    }
    __timeString(sec){
        if(sec%60 < 10) return `${Math.floor(sec/60)}:0${sec%60}`;
        else return `${Math.floor(sec/60)}:${sec%60}`;
    }
}

