import EventEmitter from "./classEventEmitter.js";
export default class Movie extends EventEmitter{
	constructor(title, year,duration){
		super();
		this.title=title;
		this.year=year;
		this.duration=duration;
		this.actors=[];
	}		
	pause(){
		super.emit("Pause");
	}
	play(){
		super.emit("Play");
	}

	resume(){
		super.emit("Resume");
	}
	addCast(cast){
		const actors=this.actors;
		if(Array.isArray(cast)){
			cast.forEach(function(actor) {
				actors.push(actor);
			});
		}else
			actors.push(cast);
	}
}