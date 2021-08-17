function sayHello(nameOfPerson, age){
    console.log("Hello! My name is " + nameOfPerson+ "and I'm " + age);
}

sayHello("Nico",10);
sayHello("Lynn",20);
sayHello("Jane",24);

function Plus(a,b){
    console.log(a+b);
}

Plus(8,60);
Plus(15,32);
Plus(13,90);

const player = {
    name: "Nico",
    sayHello: function (otherPersonsName) {
        console.log("Hello! "+otherPersonsName+ " nice to meet you!");
    }
};

console.log(player.name);
player.sayHello("Lynn");
player.sayHello("June");