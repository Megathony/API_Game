import $ from 'jquery';
import axios from 'axios';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Info {

	constructor () {
		
	}

	getInfo(){
	}

	addInfo(response){
		this.$els.newGame.removeClass('is-ready');
	}
}