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

export default class Quote {

	constructor () {
		this.initEls();
		this.initEvents();
	}

	initEls(){
		this.$els = {
			quoteText: $('.js-quote-text'),
			quoteAuthor: $ ('.js-quote-author'),
			container: $ ('.js-container'),
			platform: $('#platform'),
			time: $('#time')
		}
	}

	initEvents(){

		this.$els.platform.change(() =>{
			var platform = this.$els.platform.val();
			console.log(platform);
		});
		this.$els.time.change(() =>{
			var time = this.$els.time.val();
			console.log(time);
		})
		this.getQuote();
	}

	getQuote(){		
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
		    this.addBackground(response);
		})
		.catch(err => {
		    console.error(err);
		});
	}

	renderQuote(quote,author){
		this.$els.quoteText.prepend(quote);
		this.$els.quoteAuthor.text(author);
		this.$els.container.addClass('is-ready');
	}
	addBackground(response){
		this.$els = {
			background: $('body'),
		}
		var $alea = Math.random()*10;
		this.$els.background.css('background-image', `url(${response.data.results[14].background_image})`);
		this.$els.background.addClass('is-ready');
	}
}