import $ from 'jquery';
import axios from 'axios';
import TemplateGame from '../templates/game.hbs';
import TemplateGenre from '../templates/genre.hbs';
import TemplateTime from '../templates/playtime.hbs';

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
			inBox:$('#inBox'),
			inGenre:$('#inGenre'),
			inBoxFollow:$('#inGenre')
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
		    this.addInfo(response.data.results);
		})
		.catch(err => {
		    console.error(err);
		});
	}

	addInfo(response){
		let target = inBox;
		let targetgenre = inGenre;
		let targetTime = inBoxFollow;
		const i = Math.floor( Math.random() * 20 - 1);
		const template = TemplateGame({
			imgURL: response[i].background_image,
			name: response[i].name,
			video: response[i].clip.clip,
			genre: response[i].genres,
			time: response[i].playtime,
		});
		target.innerHTML = template;
		for(let j = 0; j < response[i].genres.length; j++){
			let templategenre = TemplateGenre({
				namegenre: response[i].genres[j].name,
			});
			console.log(response[i].genres[j].name);
			targetgenre.innerHTML = templategenre;//j'ai pas trouvé pour ajouter :'(
		}
		const templatetime = TemplateTime({
			time: response[i].playtime,
		});
		targetTime.innerHTML = templatetime;
		console.log("ajouté");
		this.$els.newGame.addClass('active');
	}
}