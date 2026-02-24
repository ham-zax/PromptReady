function drawGrid(pts) {
  let minX=100, maxX=-100, minY=100, maxY=-100;
  pts.forEach(([x,y]) => {
    if(x<minX) minX=x; if(x>maxX) maxX=x;
    if(y<minY) minY=y; if(y>maxY) maxY=y;
  });
  
  for(let y=0; y<=18; y++) {
    let row = '';
    for(let x=0; x<=18; x++) {
      if (pts.some(p => p[0]===x && p[1]===y)) row += '##';
      else row += '..';
    }
    console.log(row);
  }
}

// Let's guess the coordinates based on a standard 1-pixel thick hollow cursor.
let outline = [];

// Left edge
for(let y=0; y<=14; y++) outline.push([0, y]);

// Right diagonal edge
// To match "hollow" look, and looking at the image:
// Tip is (0,0)
// The right diagonal steps down-right
outline.push([1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9], [10,10]);

// Bottom edge connecting left to center
outline.push([1,13], [2,12], [3,11]); // this is inner part of bottom edge

// Wait, standard cursor has a tail
// Tail right edge
outline.push([11,11], [11,12], [11,13]); 
outline.push([12,13], [12,14], [12,15], [12,16], [12,17]);

drawGrid(outline);
