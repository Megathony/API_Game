import $ from 'jquery';
import Greeting from './greeting';
import Quote from './quote';

/*
* Objectif : récupérer une image aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une image de façon asynchrone à partir de l'API d'Unsplash (https://source.unsplash.com/)
* 3- Définir l'image comme fond
* */

export default class Background {
    constructor() {
		this.initEls();
		this.initEvents();
	}

	initEls() {
		this.$els = {
			background: $('.js-background'),
		}
		this.url = 'https://source.unsplash.com/collection';
		this.collection = '190727';
		this.size = '1600x900';
	}

	initEvents() {
		this.loadImage();
	}

	loadImage() {
		const promise = new Promise((resolve,reject) => {
			const image = new Image();
			image.src = `${this.url}/${this.collection}/${this.size}`;
			image.onload = () => {
				resolve(image);
			} 
			image.onerror = (error) =>{
				reject(error);
			}
		})

		promise.then( (image) => {
			console.log(image);
			this.addBackground(image);
   		    new Greeting();
    		new Quote();
		});
		promise.catch( (error) => {
			console.log('Error with the Unspash image :', error);
		});
	}

	addBackground(image){
		this.$els.background.css('background-image', `url(${image.src})`);
		this.$els.background.addClass('is-ready');
	}
}