const grid = Array.from({length: 24}, () => Array(24).fill(' '));
function set(x, y, char='█') { if(y>=0&&y<24&&x>=0&&x<24) grid[y][x]=char; }

// Top spark
set(6,0); set(6,1); set(6,2); set(6,4);
// Left spark
set(0,8); set(1,8); set(2,8); set(4,8);
// Top-Left spark
set(3,4);
// Top-Right spark
set(10,4); // changed to 10 for symmetry

// Cursor tip
set(6,7); // let's try tip at 6,7

for(let row of grid) console.log(row.join(''));
