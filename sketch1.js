var student= {
  name: "Aarushi",
  class: 8,
  roll_no: 10,
  marks: [45,48,50,50,49]
}

function setup() {
  createCanvas(400, 400);
  console.log(student.roll_no)
  student.roll_no = 15;
  console.log(student.roll_no)

}

function draw() {
  background(220);
}