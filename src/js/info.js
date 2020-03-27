import $ from 'jquery';
import axios from 'axios';
import TemplateGame from '../templates/game.hbs';

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
		this.initEls();
		this.initEvents();
	}

	initEls(){
		this.$els = {
			newGame: $('.newGame'),
			button:$('#discovery'),
			cross:$('#cross'),
			inBox:$('#inBox')
		}
	}

	initEvents(){
		this.$els.button.click(()=>{
			console.log('test');
			this.getInfo();
		})
		this.$els.cross.click(()=>{
			console.log('cross');
			this.away();
		})
	}

	away(){
		this.$els.newGame.removeClass('active');
	}

	getInfo(){	
		axios({
			url: "https://www.giantbomb.com/api/games/?api_key=a0351833cd6565f905fbb167ed3ca83564063741&format=jsonp&json_callback=json_callback",
			method: 'POST',
			headers: {
			},
			data: "Access-Control-Allow-Origin: *",
		})
		.then(response => {
		    console.log(response);
		    this.addInfo(response);
		})
		.catch(err => {
		    console.error(err);
		});
	}

	addInfo(response){
		this.$els.newGame.addClass('active');
		let target = inBox;
		const template = TemplateGame({
		imgURL: response,
		name: response,
		});
		target.innerHTML = template;
		console.log("ajouté");
	}
}