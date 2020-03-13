import '../css/app.scss';
import Background from './background';
import Flickity from 'Flickity'
class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Background();
    }
}

new App();
