import '../css/app.scss';
import Background from './background';
import Info from './info';
import leaveGame from './away';
import Flickity from 'Flickity'
class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Background();
      new Info();
    }


}

new App();
