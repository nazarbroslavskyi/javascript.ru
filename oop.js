// const circle = {
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1
// 	},

// 	draw: function() {
// 		console.log("draw");
// 	}
// };


// circle.draw();

// function createCircle(radius) {
// 	return {
// 		radius,
// 		draw: function() {
// 			console.log("draw");
// 		}
// 	}
// }


// const circle = createCircle(1);
// circle.draw();

// function Circle(radius) {

// 	this.radius = radius;
// 	let defaultLocation = {
// 		x: 0,
// 		y: 0
// 	};

// 	this.getDefaultLocation = function() {
// 		return defaultLocation;
// 	};

// 	this.draw = function() {
// 		console.log("draw");
// 	};

// 	Object.defineProperty(this, "defaultLocation", {
// 		get: function() {
// 			return defaultLocation;
// 		},

// 		set: function(value) {
// 			if(!value.x || !value.y) {
// 				throw new Error("Invalid location.");
// 			}
// 		}
// 	});
// }

// const circle = new Circle(1);
// circle.defaultLocation = {x: 4,
// y: 5};
// circle.draw();





// function StopWatch() {
// 	let startDate;
// 	let stopDate;
// 	let flagOfStart = true;
// 	let duration = 0;

// 	this.duration = function() {
// 		return duration;
// 	};

// 	this.start = function() {
// 		if(flagOfStart) {
// 			startDate = new Date().getSeconds();
// 			flagOfStart = false;
// 		} else {
// 			throw new Error("watch has already started");
// 		}
		
// 	};

// 	this.stop = function() {
// 		if(!flagOfStart) {
// 			flagOfStart = true;
// 			stopDate = new Date().getSeconds();
// 			duration = stopDate - startDate;
// 		} else {
// 			throw new Error("stopWatch is not started");
// 		}
// 	};

// 	this.reset = function() {
// 		duration = 0;
// 	}

// }


// const sw = new StopWatch();
// // console.log(sw.start());
// // console.log(sw.stop());
// // console.log(sw.duration());


//  	this.sayHi = function() {
//  		alert(`hellol ${name}`);
//  	}
//  }

//  var vasy = new User("nazar");
// vasy.sayHi();

"use strict"

// function CoffeeMachine(power, capacity) {
// 	let waterAmount = 0;
// 	let WATER_HEAT_CAPACITY = 420;
// 	let self = this;
// 	let timer;

//   // расчёт времени для кипячения
//  	function getBoilTime() {
//     	return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
//   	}

//   	this.setWaterAmount = function(amount) {
//   		if(amount < 0) {
//   			throw new Error("the value must be positive");
//   		} 
//   		if(amount > capacity) {
//   			throw new Error("you cannot pour water more than" + capacity);
//   		}

//   		waterAmount = amount;
//   	}


// 	function onReady() {
// 		alert("coffe is ready");
// 	}

// 	this.run = function() {
// 		timer = setTimeout(onReady, getBoilTime());
// 	}

// 	this.stop = function () {
// 		clearTimeout(timer);
// 	}


// 	this.getWaterAmount = function() {
//     return waterAmount;
//   };

// }

// var coffeeMachine = new CoffeeMachine(1000, 500);
// coffeeMachine.setWaterAmount(200); // упс, ошибка!


// alert( coffeeMachine.getWaterAmount() );



// function User() {
// 	let name = "nazar";
// 	let lastname = "broslavskyi";
// 	this.setfirstName = function(firstname) {
// 		name = firstname;
// 	}

// 	this.sETlASTNAME = function(last) {
// 		lastname = last;
// 	}

// 	this.getfULLname = function() {
// 		return `${name}  ${lastname}`;
// 	}
// }

// var user = new User();
// user.setfirstName("Петя");
// user.sETlASTNAME("Иванов");

// alert( user.getfULLname() );


// let animal = {
// 	eats: true
// };

// function Rabbit(name) {
// 	this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("nazar");

// console.log(rabbit.eats);


'use strict';

let animal = {
  walk() {
    alert("I'm walking");
  }
};

let rabbit = {
  __proto__: animal,
  wa() {
    alert(super.walk); // walk() { … }
    super.walk(); // I'm walking
  }
};

rabbit.wa();