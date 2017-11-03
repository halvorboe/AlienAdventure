class World {

	constructor(tiles){
	  	this.tiles = generate();
  	}

  	generate() {
  		tiles = [];
  		for(let x = 0; x < 100; x++) {
  			for(let y = 0; y < 100; y++) {
  				tiles.push(new Tile({'x': x * SCALE, 'y': y * SCALE}));
  			}
  		}
  		return tiles;
  	}

	draw(){
		this.tiles.forEach(tile => tile.draw());
	}

}