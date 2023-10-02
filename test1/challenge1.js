let studentGrade = ['A', 'B', 'C', 'D', 'E'];
let Marks;
function studentGradeGenerator(Marks = 0){
if(Marks > 79){
console.log("The student grade is: ", studentGrade[0]);
}
else if(Marks >= 60 && Marks <= 79)
{
console.log("The student grade is: ", studentGrade[1]);
}
else if(Marks >= 49 && Marks <= 59)
{
console.log("The student grade is: ", studentGrade[2]);
}
else if(Marks >= 40 && Marks < 49)
{
console.log("THe student grade is: ", studentGrade[3]);
}
else if(Marks >= 0 && Marks < 40)
{
console.log("The student grade is: ", studentGrade[4]);
}
else if(Marks < 0 || Marks > 100){
throw new Error("Invalid Input");
}

}
studentGradeGenerator(Marks);