let upperLimit = 25;
let lowerLimit = 10;

class BitLine{
    constructor(){
        this.bitArray = new Array(floor(random(10,25)));
        for(let i = 0; i < this.bitArray.length ; i++){
            this.bitArray[i] = char(floor(random(255)));
        }
        this.x = random(width);
        this.y = random(height);
        this.textsize = random(lowerLimit, upperLimit);
        this.alphavalue = 255;
        this.fontFamily = loadFont('dot-matrix/DOTMATRIX.TTF');
    }
    20
    show(){
        noStroke();
        textSize(this.textsize);
        textFont(this.fontFamily);
        for(let i = 0 ; i < this.bitArray.length ; i++){
            fill(0, 255, 65, (height - this.y - this.textsize*i) / height * this.alphavalue);
            text(this.bitArray[i], this.x, this.y + this.textsize*i);
        }
        if(frameCount % 5 == 0){
            this.bitArray[floor(random(this.bitArray.length))] = char(floor(random(255)));
        }
    }

    fall(){
        this.y+=3;
        if(this.y > height){
            this.x = random(width);
            this.textsize = random(lowerLimit, upperLimit);
            this.y = -this.bitArray.length * this.textsize;
            this.alphavalue = 255;
        }
    }
};