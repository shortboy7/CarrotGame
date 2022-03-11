import CustomButton from './CustomButton.js';

export default class GameResult{
    constructor(){
        this.body = document.querySelector('.game__result');
        this.label = document.querySelector('.result__label');
        this.button = new CustomButton('retry__button');
    }
    show(){
        this.body.classList.remove('game__result--hidden');
    }
    hide(){
        this.body.classList.add('game__result--hidden');
    }
    setLabel(id){
        switch(id){
            case 'pause':
                this.label.textContent = 'Pause';
                break;
            case 'win':
                this.label.textContent = 'You Win 😁';
                break;
            case 'lose':
                this.label.textContent = 'You Die 💩';
                break;
        }
    }
}