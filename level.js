export default class Level {
    
    level_width; //Altezza e larghezza dell livello (in tiles)
    level_height;
    tile_width; //Dimensione di ogni tile
    tile_height;
    acqua; //Mappa dei diversi livelli di tiles
    terreno;
    percorso;
    oggetti;
    albero1Image; //L'immagine da cui recuperare tutti i tile
    albero1ImgHeight; //Le dimensioni della mappa da cui recupero i tile
    albero1ImgWidth;
    albero3Image;
    albero3ImgHeight;
    albero3ImgWidth;
    casa1Image;
    casa1ImgHeight;
    casa1ImgWidth;
    casa2Image;
    casa2ImgHeight;
    casa2ImgWidth;
    casa4Image;
    casa4ImgHeight;
    casa4ImgWidth;
    cespuglio1Image;
    cespuglio1ImgHeight;
    cespuglio1ImgWidth;
    pietra1Image;
    pietra1ImgHeight;
    pietra1ImgWidth;
    pietra5Image;
    pietra5ImgHeight;
    pietra5ImgWidth;
    pietra6Image;
    pietra6ImgHeight;
    pietra6ImgWidth;
    rovine2Image;
    rovine2ImgHeight;
    rovine2ImgWidth;
    rovine3Image;
    rovine3ImgHeight;
    rovine3ImgWidth;
    rovine4Image;
    rovine4ImgHeight;
    rovine4ImgWidth;
    ship1Image;
    ship1ImgHeight;
    ship1ImgWidth;
    tileMapImage;
    tileMapImgHeight; 
    tileMapImageWidth;
    constructor(level_width, level_height, tile_width, tile_height, acqua, terreno, percorso, oggetti, albero1, albero1ImgHeight, albero1ImgWidth, albero3, albero3ImgHeight, albero3ImgWidth, casa1, casa1ImgHeight, casa1ImgWidth, casa2, casa2ImgHeight, casa2ImgWidth, casa4, casa4ImgHeight, casa4ImgWidth, cespuglio1, cespuglio1ImgHeight, cespuglio1ImgWidth, pietra1, pietra1ImgHeight, pietra1ImgWidth, pietra5, pietra5ImgHeight, pietra5ImgWidth, pietra6, pietra6ImgHeight, pietra6ImgWidth, rovine2, rovine2ImgHeight, rovine2ImgWidth, rovine3, rovine3ImgHeight, rovine3ImgWidth, rovine4, rovine4ImgHeight, rovine4ImgWidth, ship1, ship1ImgHeight, ship1ImgWidth, tileMapsrc, tileMapImgHeight, tileMapImageWidth) {
        this.level_width = level_width;
        this.level_height = level_height;
        this.tile_width = tile_width;
        this.tile_height = tile_height;
        this.acqua = acqua;
        this.terreno = terreno;
        this.percorso = percorso;
        this.oggetti = oggetti;
        
        this.albero1Image = new Image(this.width, this.height);
        this.albero1Image.src = albero1;
        this.albero1ImgHeight = albero1ImgHeight;
        this.albero1ImgWidth = albero1ImgWidth;

        this.albero3Image = new Image(this.width, this.height);
        this.albero3Image.src = albero3;
        this.albero3ImgHeight = albero3ImgHeight;
        this.albero3ImgWidth = albero3ImgWidth;
        
        this.casa1Image = new Image(this.width, this.height);
        this.casa1Image.src = casa1;
        this.casa1ImgHeight = casa1ImgHeight;
        this.casa1ImgWidth = casa1ImgWidth;
        
        this.casa2Image = new Image(this.width, this.height);
        this.casa2Image.src = casa2;
        this.casa2ImgHeight = casa2ImgHeight;
        this.casa2ImgWidth = casa2ImgWidth;
        
        this.casa4Image = new Image(this.width, this.height);
        this.casa4Image.src = casa4;
        this.casa4ImgHeight = casa4ImgHeight;
        this.casa4ImgWidth = casa4ImgWidth;
        
        this.cespuglio1Image = new Image(this.width, this.height);
        this.cespuglio1Image.src = cespuglio1;
        this.cespuglio1ImgHeight = cespuglio1ImgHeight;
        this.cespuglio1ImgWidth = cespuglio1ImgWidth;
        
        this.pietra1Image = new Image(this.width, this.height);
        this.pietra1Image.src = pietra1;
        this.pietra1ImgHeight = pietra1ImgHeight;
        this.pietra1ImgWidth = pietra1ImgWidth;
        
        this.pietra5Image = new Image(this.width, this.height);
        this.pietra5Image.src = pietra5;
        this.pietra5ImgHeight = pietra5ImgHeight;
        this.pietra5ImgWidth = pietra5ImgWidth;
        
        this.pietra6Image = new Image(this.width, this.height);
        this.pietra6Image.src = pietra6;
        this.pietra6ImgHeight = pietra6ImgHeight;
        this.pietra6ImgWidth = pietra6ImgWidth;
        
        this.rovine2Image = new Image(this.width, this.height);
        this.rovine2Image.src = rovine2;
        this.rovine2ImgHeight = rovine2ImgHeight;
        this.rovine2ImgWidth = rovine2ImgWidth;
        
        this.rovine3Image = new Image(this.width, this.height);
        this.rovine3Image.src = rovine3;
        this.rovine3ImgHeight = rovine3ImgHeight;
        this.rovine3ImgWidth = rovine3ImgWidth;
        
        this.rovine4Image = new Image(this.width, this.height);
        this.rovine4Image.src = rovine4;
        this.rovine4ImgHeight = rovine4ImgHeight;
        this.rovine4ImgWidth = rovine4ImgWidth;
        
        this.ship1Image = new Image(this.width, this.height);
        this.ship1Image = ship1;
        this.ship1ImgHeight = ship1ImgHeight;
        this.ship1ImgWidth = ship1ImgWidth;
        
        this.tileMapImage = new Image(this.width, this.height);
        this.tileMapImage.src = tileMapsrc;
        this.tileMapImgHeight = tileMapImgHeight;
        this.tileMapImageWidth = tileMapImageWidth;
    }
    
    draw(canvasContext) {
        //Disegno mappa
       this.drawLayer(this.acqua, canvasContext);
       this.drawLayer(this.terreno, canvasContext);
       this.drawLayer(this.percorso, canvasContext);
       this.drawLayer(this.oggetti, canvasContext);
    }

    drawLayer(layerMap, canvasContext) {
        for (let i = 0; i < layerMap.length; i++) {
            //Ottengo le coordinate sulla canvas
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            let tile = layerMap[i];
            
            //Ottengo le coordinate sulla tilemap
            let sx = ((tile-1)  % (this.tileMapImageWidth/32)) * 32;
            let sy = Math.floor((tile-1) / (this.tileMapImgHeight/32)) * 32;
            
            if (tile != 0) {
                canvasContext.drawImage(this.tileMapImage, sx, sy, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                if (tile == 145) {
                    canvasContext.drawImage(this.cespuglio1Image, 0, 0, this.cespuglio1ImgWidth, this.cespuglio1ImgHeight, dx, dy, this.cespuglio1ImgWidth, this.cespuglio1ImgHeight);
                }
                if (tile == 146) {
                    canvasContext.drawImage(this.casa1Image, 0, 0, this.casa1ImgWidth, this.casa1ImgHeight, dx, dy, this.casa1ImgWidth, this.casa1ImgHeight);
                }
                if (tile == 147) {
                    canvasContext.drawImage(this.casa2Image, 0, 0, this.casa2ImgWidth, this.casa2ImgHeight, dx, dy, this.casa2ImgWidth, this.casa2ImgHeight);
                }
                if (tile == 148) {
                    canvasContext.drawImage(this.casa4Image, 0, 0, this.casa4ImgWidth, this.casa4ImgHeight, dx, dy, this.casa4ImgWidth, this.casa4ImgHeight);
                }
                if (tile == 150) {
                    canvasContext.drawImage(this.albero1Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 151) {
                    canvasContext.drawImage(this.albero3Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 152) {
                    canvasContext.drawImage(this.rovine3Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 153) {
                    canvasContext.drawImage(this.rovine2Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 154) {
                    canvasContext.drawImage(this.rovine4Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 155) {
                    canvasContext.drawImage(this.pietra1Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 156) {
                    canvasContext.drawImage(this.pietra5Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
                if (tile == 157) {
                    canvasContext.drawImage(this.pietra6Image, 0, 0, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
                }
            }
        }
    }
}