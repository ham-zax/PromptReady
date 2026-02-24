function drawSolid(pts) {
  let grid = Array.from({length: 26}, () => Array(26).fill(' '));
  pts.forEach(([x,y]) => { if(y>=0&&y<26&&x>=0&&x<26) grid[y][x]='█'; });
  for(let row of grid) console.log(row.join(''));
}

let cursor = [];

// Head (simple triangle first)
const headH = 12; // Let's guess 12
for(let y=0; y<headH; y++) {
  for(let x=0; x<=y; x++) cursor.push([x+6, y+6]);
}

// Cutout
// Bottom edge goes from left (x=6) to right (x=17).
// Actually, standard cursor:
// Left edge length = 15 pixels: (6,6) to (6,20).
// Right edge: (6,6) to (16,16).
// Then horizontal inward step.
cursor = [];
for(let y=0; y<15; y++) {
  // width of each row
  let w = y + 1;
  // cutout
  if (y === 11) w = 6;
  if (y === 12) w = 5;
  if (y === 13) w = 4;
  if (y === 14) w = 3;
  for(let x=0; x<w; x++) cursor.push([x+6, y+6]);
}

// Tail
// Let's add a tail starting around x=9, y=16
for(let y=12; y<19; y++) {
  for(let x=8; x<=11; x++) {
     cursor.push([x+1, y+3]);
  }
}

drawSolid(cursor);
