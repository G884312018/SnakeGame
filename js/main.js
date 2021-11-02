const count = 0;
let appleX = Math.floor(Math.random()*(canv.width-4*SIZE)/SIZE +2);
let appleY = Math.floor(Math.random()*(canv.height-4*SIZE)/SIZE +2);
ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, SIZE, SIZE);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, canv.width, SIZE);
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, SIZE, canv.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(canv.width-SIZE, 0, canv.width, canv.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, canv.height-SIZE, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for (let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE,
                 snake[i].y*SIZE, SIZE-2, SIZE-2);
    if (snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
    if (snake[i].x <= 0*SIZE || snake[i].x*SIZE >= canv.width-SIZE || snake[i].y*SIZE <= 0 || snake[i].y*SIZE >= canv.height-SIZE) {
    clearInterval(false);
    return;
  }
  }
  while (snake.length > tail) {
    snake.shift();
  }
  if (appleX == px && appleY == py){
    tail++;
    appleX = Math.floor(Math.random()*(canv.width-2*SIZE)/SIZE +1);
    appleY = Math.floor(Math.random()*(canv.height-2*SIZE)/SIZE +1);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);
}, 1000/FPS)
