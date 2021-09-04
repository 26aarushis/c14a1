var ball= {
  x: 25,
  y: 36,
  radius: 35,
  xSpeed: 0,
  colour: ["blue","green","yellow","orange"]
}


function setup() {
  createCanvas(400, 400);
  /*console.log(student.roll_no)
  student.roll_no = 15;
  console.log(student.roll_no)*/

}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.radius);
  fill(ball.colour[1])
  ball.xSpeed = 1;
  ball.x = ball.x + ball.xSpeed;
}