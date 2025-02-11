class Squirrel {
    constructor(x,y,size,furColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.furColor = furColor;

        this.squirrelBodyDiv = document.createElement('div');

        this.textSmiley = ':)';

        
    }
    renderSquirrel() {
        let self = this;
        window.requestAnimationFrame(function(){
            self.animateSquirrels()
        });
        this.squirrelBodyDiv.classList.add('squirrel-body');
        this.squirrelBodyDiv.style.width = this.size + 'px'
        this.squirrelBodyDiv.style.height = this.size + 'px'
        this.squirrelBodyDiv.style.background = `rgb(${this.furColor.r},${this.furColor.g},${this.furColor.b})`;
        this.squirrelBodyDiv.style.left = this.x+"px";
        this.squirrelBodyDiv.style.top = this.y+"px";

        //add squirrels to DOM
        document.getElementsByClassName('grass')[0].appendChild(this.squirrelBodyDiv);
    }

    animateSquirrels(){
        let self = this;
        let d = this.squirrelBodyDiv;
        d.style.left = parseInt(d.style.left) + 5 + 'px';
        d.style.top = parseInt(d.style.top) + 5 + 'px';
        window.requestAnimationFrame(function(){
            self.animateSquirrels()
        });
    }
}