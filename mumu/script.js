var states = [[0,0,0],
              [0,0,0],
              [0,0,0]];

function $(s){
  return document.querySelector(s);
}

function restart(){
  states = [[0,0,0],[0,0,0],[0,0,0]];
  $("#winbox").style.display = "none";
  for(var i=0; i<10; i++){
    lightToggle({
      dataset: {
        x: Math.floor(Math.random()*3),
        y: Math.floor(Math.random()*3),
      }
    },false)
  }
  render();
}

function check(){
  !$("button[style='background: yellow;']") && ($("#winbox").style.display = "block");
}

function render(){
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      var el = $("button[data-x='"+i+"'][data-y='"+j+"']");
      if(states[i][j]){
        el.style.background = "yellow";
        el.innerText = "💡";
      }else{
        el.style.background = "black";
        el.innerText = "⚫";
      }
    }
  }
  check();
}

function lightToggle(el,flush){
  flush = flush === undefined? true : flush;
  var x = +el.dataset.x, y = +el.dataset.y;
  states[x][y] = +!states[x][y]
  x > 0 && (states[x-1][y] = +!states[x-1][y]);
  x < 2 && (states[x+1][y] = +!states[x+1][y]);
  y > 0 && (states[x][y-1] = +!states[x][y-1]);
  y < 2 && (states[x][y+1] = +!states[x][y+1]);
  flush && render();
}

restart();