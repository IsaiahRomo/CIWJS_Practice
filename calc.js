
// let calculator = {
//     read(){
//         this.val1 = prompt("What is the first value?", 0);
//         this.val2 = prompt("What is the second value?", 0);
//     },
//     sum() {
//         return this.val1 + this.val2
//     },
//     mul() {
//         return this.val1 * this.val2
//     }
// };

// calculator.read(); //Prompts for 2 values and saves them as object

// alert(calculator.sum()); //returns the sum of the 2 values

// alert(calculator.mul()); //returns the product of the 2 values

let ladder = {
    step: 0,
    maxStep: prompt("How many steps are on the ladder?", 5),
    up() {
        if(this.step > this.maxStep){
            this.step++;
            
        }else{
            alert("You exceeded the amount of steps on the ladder");
        }
    },
    down() {
        this.step--;
    },
    showStep() {
        console.log("You are on step " + this.step);
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
