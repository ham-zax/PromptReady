const grid = Array.from({length: 26}, () => Array(26).fill(' '));
function set(x, y) { if(y>=0&&y<26&&x>=0&&x<26) grid[y][x]='█'; }

// Sparks
for(let y=0;y<=2;y++) set(8, y); set(8, 4); // Top
for(let x=0;x<=2;x++) set(x, 10); set(4, 10); // Left
set(5, 6); // Top-left
set(13, 6); // Top-right

// Cursor Tip
const tx=8, ty=7;

// Head left edge
for(let y=ty; y<=ty+13; y++) {
  for(let x=tx; x<=tx+(y-ty); x++) {
    set(x, y);
  }
}

// Cutout
for(let y=ty+10; y<=ty+13; y++) {
  // from right edge inward
  for(let x=tx+(y-ty)-5; x<=tx+(y-ty); x++) {
    grid[y][x] = ' ';
  }
}

for(let row of grid) console.log(row.join(''));
