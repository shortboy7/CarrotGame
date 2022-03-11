import GameResult from './gameResult.js';
import Field from './field.js';
import CustomButton from './CustomButton.js';

export default class GamePlayground{
    constructor(gameAction,retryAction){
        this.body = new Field();
        this.body.setOnclick(gameAction);
        this.gameResult = new GameResult();
        this.retryButton = new CustomButton('retry__button');
        this.retryButton.setOnclick(retryAction);
        this.retryButton.setShape('<i class= "fa-solid fa-arrow-rotate-right"></i>');
        this.retryButton.ableEvent();
        
    }
    showResult(id){
        this.gameResult.setLabel(id);
        this.gameResult.show();
        this.body.disableClick();
        this.retryButton.ableEvent();
        if((id == 'lose') ||(id === 'win')){
            
        }
    }
    hideResult(){
        this.body.enableClick();
        this.gameResult.hide();
    }
    init(bug_px,bug_size,carrot_px,carrot_size){
        this.body.removeItems('img');
        this.body.addItems('carrot','./img/carrot.png',carrot_px,carrot_size);
        this.body.addItems('bug','./img/bug.png',bug_px,bug_size);
    }
}