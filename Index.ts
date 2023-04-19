// basic program startup
import BalenziaganizerEngine from './src/BalenciaganizerEngine';

// ! Deprecated
import UserInputReader from './src/util/UserInputReader';
/* // make a new instance of the ReadLine class, which is used to get user input (then export it. Follow the singleton pattern (available everywhere in the program)
let userInputReader = new UserInputReader();
export { userInputReader }; */

// self executing init function
(function () {
	// make new Balenciaganizer object
	let balenciaganizer = new BalenziaganizerEngine();

	// run the balenciaganizer engine; this machine of war
	balenciaganizer.run();
})();
