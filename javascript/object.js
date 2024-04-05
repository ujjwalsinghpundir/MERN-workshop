let studentInfo={
    rollno:1,
    name:"ujjwal singh pundir",
    course:"MCA",
    college:"KIET",
    marks:[10,23,45,67,78],
    music:()=>console.log("play music"),
    play:function playfun(){console.log("play cricket")},
}
console.log(studentInfo.music());
console.log(studentInfo.play());
console.log(studentInfo.marks);