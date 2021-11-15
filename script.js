let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let spriteNum = 100
let spriteList = []
class sprite {
    constructor(x = Math.random() * windowWidth, y=Math.random() * windowHeight, state) {
        this.x = x;
        this.y = y;
        this.state = state
        // Direction is determined by +1 or -1
        this.dirX = 1
        this.dirY = 1 
        
    }
    function moveRandom(){
        this.x += this.dirX
        this.y += this.dirY
        checkCollision
    }
    function checkCollision(){
        // TODO: Implement collision function
    }
}


for(let i = 0; i < spriteNum; i++){
    let s = new sprite()
    spriteList.push(s)
}
// Main Game loop
while(true){
 spriteList.forEach(sprite => sprite.moveRandom)
}