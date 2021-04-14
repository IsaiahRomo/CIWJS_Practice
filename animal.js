class Animal {
    constructor(fname) {
        this.speed = 0;
        this.fname = fname;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.speed} runs with speed ${this.spped}`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.fname} stands still.`);
    }
}

let animal = new Animal('Gerald');

class Giraffe extends Animal {
    hide() {
        alert(`${this.fname} hides!`);
    }
    stop() {
        // ..now this will be used for giraffe,stop()
        // instead of the stop method from the Animal class
        super.stop(); // this will be the animal stop and run first
        this.hide(); // then our animal will hide
    }
}

let giraffe = new Giraffe('Chad');

giraffe.run(5);
giraffe.hide();