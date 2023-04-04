// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius*2;
    }
    get circumference(){
        return 2*this.radius*Math.PI;
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }

    set diameter(input){
        this.radius = input/2;
    }
    set circumference(input){
        this.radius = input/(Math.PI*2);
    }
    set area(input){
        this.radius = Math.sqrt(input/Math.PI);
    }
}