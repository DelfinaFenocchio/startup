		import Actor from "./classActor.js";
		import EventEmitter from "./classEventEmitter.js";
		import Logger from "./classLogger.js";
		import Movie from "./classMovie.js";
		
		const terminator = new Movie('Terminator I', 1985, 60);
		const arnold = new Actor('Arnold Schwarzenegger', 50);
		const otherCast = [
		    new Actor('Paul Winfield', 50),
		    new Actor('Michael Biehn', 50),
		    new Actor('Linda Hamilton', 50)
		];

		terminator.addCast(arnold);
		terminator.addCast(otherCast);
		const sinEscapeMovie=new Movie("Sin escape",2015,"1h43min");
		const lbfMovie=new Movie("London bajo fuego",2016,"1h38min");
		sinEscapeMovie.on('Pause', function () { console.log(`Pausing the movie ${sinEscapeMovie.title}`) });
		sinEscapeMovie.on('Resume', function () { console.log(`Resuming the movie ${sinEscapeMovie.title}`) });
		sinEscapeMovie.on('Play',function () { console.log(`Playing the movie ${sinEscapeMovie.title}`) });
		sinEscapeMovie.play();
		sinEscapeMovie.resume();
		sinEscapeMovie.pause();
		
		const logger=new Logger();
		lbfMovie.on('Play',logger.log);
		lbfMovie.play();
		lbfMovie.on('Resume',logger.log);
		lbfMovie.resume();	

		const social={
			share(friendName){
				console.log(`${friendName} share ${this.title}`);
			},
			like(friendName){
				console.log(`${friendName} likes ${this.title}`);
			}
		};
		const ironman = new Movie("ironman",2008,"2h6min");
		Object.assign(ironman,social);
		ironman.share('Mike Blossom');

