export default class EventEmitter{
	constructor(){
		this.events={};
	}
	on(eventName, callback){
		if(!this.events[eventName] ) {
			this.events[eventName]=[];
  		}
    	this.events[eventName].push(callback);
	} 
	emit(eventName){
		const event = this.events[eventName];
  		if(event) {
    		event.forEach(callback=>{
       			callback.call(eventName);
     		});
  		 }
	}
	off(eventName, callback){
		const events = this.events[eventName];
		events.forEach(function(event,index){
		if(event==callback)
			events.splice(index,1);
		});
	}
}