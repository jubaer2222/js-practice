let car = {
    name: "Fiat",
    model: 500,
    weight: "859kg",
    color: "white",
    start: function(){
        car.drive();
        this.drive();
        console.log("car has started");
    },
    drive: function(){
        console.log('car is driving');
    },
};

console.log(car.weight);
console.log(car['weight']);
console.log(car['model']);
car.start();
