import '../css/app.scss';
import Background from './background';
import getGame from './newgame';
import leaveGame from './away';
import Flickity from 'Flickity'
class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Background();
    }

    newgame(){
    	new getGame();
    }

    away(){
    	new leaveGame();
    }
}

new App();
