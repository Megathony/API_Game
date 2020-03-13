import $ from 'jquery';

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

	$("platform").click(function(){
		var platform = $(#platform).val();
		console.log(platform);
	});

	$("time").click(function(){
		var time = $(#time).val();
		console.log(time);
	})

	initEls(){
		this.$els = {
			quoteText: $('.js-quote-text'),
			quoteAuthor: $ ('.js-quote-author'),
			container: $ ('.js-container')
		}
	}

	initEvents(){
		this.getQuote();
	}

	getQuote(){		
		const api = {
			endpoint: 'https://api-v3.igdb.com/time_to_beats/',
			params: {
				fields *;
				where platforms:37;
				limit 500;
			}
		};

		$.ajaxSetup({cache: false});

		$.getJSON(api.endpoint, api.params)
			.then((response) => {
				console.log(response);
				this.renderQuote(response[0].content.rendered, response[0].title.rendered);
			})
			.catch((e) => {
				console.log('error with the quote :', e);
			});
	}

	renderQuote(quote,author){
		this.$els.quoteText.prepend(quote);
		this.$els.quoteAuthor.text(author);
		this.$els.container.addClass('is-ready');
	}
}