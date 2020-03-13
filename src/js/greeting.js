import $ from 'jquery';
import {getGreetingByTime} from './helper/greetingsHelper.js';

/*
* Objectif : déterminer un "salut" en fonction de l'heure et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récuperer une salutation en fonction de l'heure
* 3- Récuperer une valeur aléatoire à partir d'un tableau
* 4- Afficher le résultat
* */

export default class Greeting{
	constructor(){
		console.log('constructor')
		this.initEls();
		this.initEvent();
	}

	initEls(){
		this.$els = {
			greeting: $('.js-greeting'),
		};
		this.names = ['Kanji-kun', 'Chie-chan', 'Lombard-kun', 'Yukiko-chan', 'Yosuke-kun', 'Nanako-chan'];
	}

	initEvent(){
		this.displayMessage();
	}

	selectName(){
		const i = Math.floor( Math.random() * this.names.length );
		return this.names[i];
	}

	makeMessage() {
		return `Good ${getGreetingByTime()} ${this.selectName()} `;
	}

	displayMessage(){
		this.$els.greeting.text(this.makeMessage());
		console.log(this.makeMessage());
	}
}