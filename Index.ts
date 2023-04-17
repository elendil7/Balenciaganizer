// basic program startup

import Balenziaganizer from './src/Balenciaganizer';

// self executing init function
(function () {
	// make new Balenciaganizer object
	let balenciaganizer = new Balenziaganizer();

	// run the balenciaganizer engine; this machine of war
	balenciaganizer.run();
})();
