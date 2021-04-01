// let student = {
//     name: "Isaiah Romo" ,
//     height: "5 8" ,
//     id: 237 ,
//     favColor: "Red"
// };

// let student = {}
// let input = prompt("What is your name?", "Isaiah");
// let input2 = prompt("What is your height?", "5 8");
// let input3 = prompt("What is your ID?", "237");
// let input4 = prompt("What is your favorite color?", "Red");
// student["Name"] = input;
// student["Height"] = input2;
// student["ID"] = input3;
// student["Favorite Color"] = input4;
// console.log(student);

function createStudent(name, height, id, favColor) {
    return {
        name,
        height,
        id,
        favColor
    };
}

let student = createStudent("Isaiah", "5 8", 237, "Red");
console.log(student);