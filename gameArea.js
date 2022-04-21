import Level from "./level.js";
import Level1 from "./level1.js";

export default class GameArea {    
    constructor() {  
        this.level = new Level(
            30,
            30,
            32,
            32,
            Level1.acqua,   
            Level1.terreno,
            Level1.percorso,
            Level1.oggetti,
            "albero1.png",
            44,
            27,
            "albero3.png",
            32,
            28,
            "casa1.png",
            38,
            32,
            "casa2.png",
            38,
            33,
            "casa4.png",
            63,
            35,            
            "cespuglio1.png",
            20,
            26,
            "pietra1.png",
            47,
            39,
            "pietra5.png",
            35,
            39,
            "pietra6.png",
            10,
            27,
            "rovine2.png",
            13,
            32,
            "rovine3.png",
            27,
            32,
            "rovine4.png",
            47,
            23,
            "Ship1.png",
            38,
            45,
            "Map_tiles.png",
            384,
            384
        );
  
      this.canvas = document.getElementById("canvas");
      this.canvas.width = 1500;
      this.canvas.height = 1500;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    }

    drawAnimatedObject(gameObject) {
      this.context.drawImage(
        gameObject.image,
        gameObject.x,
        gameObject.y,
        gameObject.width,
        gameObject.height
      );
    }
  
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    updateGameArea = () => {
        this.clear();
        this.level.draw(this.context); 
    };
}