const p = "M12 12 v15 h1 v-1 h1 v-1 h1 v-1 h1 v-1 h1 v2 h1 v3 h1 v2 h2 v-1 h1 v-1 h-1 v-2 h-1 v-2 h-1 v-2 h4 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-1 Z";
let moves = p.match(/[a-zA-Z][^a-zA-Z]*/g);
let x=0, y=0;
for(let m of moves) {
  let cmd = m[0];
  let args = m.slice(1).trim().split(/[\s,]+/).map(Number);
  if(cmd==='M') {x=args[0]; y=args[1];}
  if(cmd==='h') x+=args[0];
  if(cmd==='v') y+=args[0];
  console.log(`${cmd} to ${x}, ${y}`);
}
