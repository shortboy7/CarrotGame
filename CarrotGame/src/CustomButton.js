export default class CustomButton{
    constructor(className){
        this.button = document.querySelector(`.${className}`);
    }
    setOnclick(onclick){
        this.onclick = onclick;
    }
    ableEvent(){
        this.onclick && this.button.addEventListener('click',this.onclick);
    }
    disableEvent(){
        this.onclick && this.button.removeEventListener('click',this.onclick);
    }
    setShape(tag){
        this.button.innerHTML = `${tag}`;
    }
    hide(){
        this.button.classList.add(`${this.className}--hidden`);
    }
    show(){
        this.button.classList.remove(`${this.className}--hidden`);
    }
}