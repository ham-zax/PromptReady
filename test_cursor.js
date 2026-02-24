function drawSolidCursor(size=14, tailWidth=4, tailLength=6) {
  const grid = Array.from({length: 24}, () => Array(24).fill('.'));
  
  // Head
  for(let y=0; y<size; y++) {
    for(let x=0; x<=y; x++) {
      grid[y+4][x+6] = '#';
    }
  }
  
  // Cutout from bottom to make the "arrow" shape
  // Typically, bottom edge goes up-right
  let cutoutWidth = size - tailWidth - 1; 
  for(let y=size-1; y>=size-4; y--) {
    for(let x=2; x<size-2; x++) { // very rough
      // grid[y+4][x+6] = '.';
    }
  }

  for(let row of grid) console.log(row.join(''));
}
drawSolidCursor();
