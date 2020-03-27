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
		this.getInfo();
		console.log("test");	
	}

	getInfo(){	
		axios({
			url: "https://rawg-video-games-database.p.rapidapi.com/games",
			method: 'GET',
			headers: {
			    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
				"x-rapidapi-key": "6670c57321msh8b9e19e8314b4d1p1312c7jsn270a144d2945"
			},
			data: "",
		})
		.then(response => {
		    console.log(response.data.results);
		    this.addInfo(response);
		})
		.catch(err => {
		    console.error(err);
		});
	}

	addInfo(response){
		newGame: $('.newGame'),
		this.$els.newGame.css('background-image', `url(${response.data.results[1].background_image})`);
		this.$els.newGame.addClass('is-ready');
	}
}