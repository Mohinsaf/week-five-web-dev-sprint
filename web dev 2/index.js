//1
//Bob says hi, immediately
//2
function sayHello () {
	alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
sayHello.call(alice);
//3 
//20

//4
var result = "Hi I am window"

//5
var result = 20

//6
alert("alice says hi") //after 1 second

//7
// all of em