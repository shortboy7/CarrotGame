'use strict';
export default class Field{
    constructor(){
        this.body = document.querySelector('.game__playground');
    }
    __randomNumber(min,max){
        return (Math.random()*(max-min)+min).toFixed();
    }
    __getRandomList(min,max,size){
        const list = [];
        for(let i = 0 ; i < size; i++){
            list.push(this.__randomNumber(min,max));
        }
        return list;
    }
    __getCordinates(item_size,length){
        const rect = this.body.getBoundingClientRect();
        const list_x = this.__getRandomList(0,rect.width-item_size,length);
        const list_y = this.__getRandomList(0,rect.height-item_size,length);
        
        for(let i = 0 ; i < length; i++){
            for(let j = i+1 ; j < length; j++){
                if((list_x[i] === list_x[j]) && (list_y[i] === list_y[j])){
                    return this.__getCordinates(item_size,length);
                }
            }
        }
        return [list_x,list_y];
    }
    addItems(imgClass,imgPath,item_size,size){
        const list = this.__getCordinates(item_size,size);
        const list_x = list[0];
        const list_y = list[1];
        for(let i = 0 ; i < size; i++){
            const img = document.createElement('img');
            img.setAttribute('class',imgClass);
            img.src = `${imgPath}`;
            img.style.left = `${list_x[i]}px`;
            img.style.top = `${list_y[i]}px`;
            this.body.appendChild(img);
        }
    }
    removeItems(className){
        const items = this.body.querySelectorAll(className);
        items && items.forEach((item)=>{
            item.remove();
        })
    }
    setOnclick(onclick){
        this.onclick = onclick;
    }
    enableClick(){
        this.onclick && this.body.addEventListener('click',this.onclick);
    }
    disableClick(){
        this.onclick && this.body.removeEventListener('click',this.onclick);
    }
}