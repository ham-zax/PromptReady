const p = "M12 12 v15 h1 v-1 h1 v-1 h1 v-1 h1 v-1 h1 v2 h1 v3 h1 v2 h2 v-1 h1 v-1 h-1 v-2 h-1 v-2 h-1 v-2 h4 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 Z";
function drawGrid(pathStr) {
  let x=0, y=0;
  const moves = pathStr.match(/[a-zA-Z][^a-zA-Z]*/g);
  let pts = [];
  for (const m of moves) {
    const cmd = m[0];
    const args = m.slice(1).trim().split(/[\s,]+/).map(Number);
    if (cmd === 'M') { x = args[0]; y = args[1]; pts.push([x,y]); }
    else if (cmd === 'h') { x += args[0]; pts.push([x,y]); }
    else if (cmd === 'v') { y += args[0]; pts.push([x,y]); }
    else if (cmd === 'Z') { pts.push([pts[0][0], pts[0][1]]); }
  }
  
  const grid = Array.from({length: 32}, () => Array(32).fill('.'));
  for (let row=0; row<32; row++) {
    for (let col=0; col<32; col++) {
      const px = col + 0.5, py = row + 0.5;
      let inside = false;
      for (let i=0, j=pts.length-1; i<pts.length; j=i++) {
        const xi = pts[i][0], yi = pts[i][1];
        const xj = pts[j][0], yj = pts[j][1];
        const intersect = ((yi > py) !== (yj > py))
            && (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      if (inside) grid[row][col] = '#';
    }
  }
  console.log(grid.map(r=>r.join('')).join('\n'));
}

drawGrid(p);
