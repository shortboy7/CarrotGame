export default class MusicPlayer{
    constructor(){
        this.win = new Audio();
        this.win.src = './sound/game_win.mp3';
        this.lose = new Audio();
        this.lose.src = './sound/alert.wav';
        this.bug_pull = new Audio();
        this.bug_pull.src = './sound/bug_pull.mp3';
        this.carrot_pull = new Audio();
        this.carrot_pull.src = './sound/carrot_pull.mp3';
        this.bg = new Audio();
        this.bg.src = './sound/bg.mp3';
    }
    play(id){
        switch(id){
            case 'win':
                this.winPromise = this.win.play();
                break;
            case 'lose':
                this.losePromise = this.lose.play();
                break;
            case 'bg':
                this.bgPromise = this.bg.play();
                break;
            case 'bug':
                this.bugPromise = this.bug_pull.play();
                break;
            case 'carrot':
                this.carrotPromise = this.carrot_pull.play();
                break;
        }
    }
    pause(id){
        switch(id){
            case 'win':
                this.__pausePromise(this.winPromise,this.win);
                break;
            case 'lose':
                this.__pausePromise(this.losePromise,this.lose);
                break;
            case 'bg':
                this.__pausePromise(this.bgPromise,this.bg);
                break;
            case 'bug':
                this.__pausePromise(this.bugPromise,this.bug_pull);
                break;
            case 'carrot':
                this.__pausePromise(this.carrotPromise,this.carrot_pull);
                break;
        }
    }
    __pausePromise(promise,music){
        if(promise !== undefined){
            promise.then(_=>{
                music.pause();
            })
            .catch(error => {

            });
        }
    }
}