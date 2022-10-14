import EventEmitter from "events";

const customEmitter = new EventEmitter();
//name of the event => event listen
customEmitter.on("response", () => {
	console.log("data received ");
});
customEmitter.on("response", (a) => {
	console.log("hi how are you " + a);
});
/*emitting the event =>order matters 
first we listen to event then we emit it
the emit only runs events that were listened before it 
*/
customEmitter.emit("response", "khaled");
