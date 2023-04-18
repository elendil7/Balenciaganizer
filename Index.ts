// basic program startup

import BalenziaganizerEngine from './src/BalenciaganizerEngine';

// self executing init function
(function () {
	// make new Balenciaganizer object
	let balenciaganizer = new BalenziaganizerEngine();

	// run the balenciaganizer engine; this machine of war
	balenciaganizer.run();
})();
