//Preload all files
function preload() {
	
		font = loadFont(fontFile);


	tunfrogimg = loadImage("tunfrog.png");


	sound = loadSound('tungara_diep-water.wav');
	//append(allSounds, sound)
	secretSound = loadSound('frog_B. typhonius - SET 1.mp3');
	//append(allSounds, sound2);
	q0Sound=loadSound('tungara 2.5.mp3')
	q1Sound=loadSound('frog_B. typhonius - SET 1.mp3');
	q2Sound=secretSound;

	//0
	names.push("Tungara Frog (Engystomops pustulosus)");
	pics.push(loadImage("tunfrog.jpg"));
	specs.push(loadImage("tungara 3s.JPG"));
	sounds.push(loadSound('tungara 3s.mp3'));


	//1
	names.push("Veined Tree Frog (Trachycephalus typhonius)");

	pics.push(loadImage("typhonius_lucas grandinetti.JPG"));
	specs.push(loadImage("3s frog typhonius.JPG"));
	sounds.push(loadSound('3s frog_B. typhonius - SET 1.mp3'));
  

	
	//2
	names.push("Common House Gecko (Hemidactylus frenatus)");
 
	//pics.push(loadImage("gecko_H. frenatus-01 800px-Hemidactylus_frenatus_(Common_House_Gecko)_on_white_background,_focus_stacking Basile Morin.jpg"));
	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Hemidactylus_frenatus_%28Common_House_Gecko%29_on_white_background%2C_focus_stacking.jpg/800px-Hemidactylus_frenatus_%28Common_House_Gecko%29_on_white_background%2C_focus_stacking.jpg"));
	specs.push(loadImage("gecko_H. frenatus-01 gecko frenatus 3s.JPG"));
	sounds.push(loadSound('gecko_H. frenatus-01 3s gecko other.mp3'));

	//3
	

	names.push("Turnip Tailed Gecko (Thecadactylus rapicauda)");

	//pics.push(loadImage("gecko_T_rapicauda Thecadactylus_rapicauda author DuSantos flickr .jpg"));
	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/d/d5/Thecadactylus_rapicauda.jpg"));
	specs.push(loadImage("gecko_T_rapicauda gecko rapicauda 3s.JPG"));
	sounds.push(loadSound('gecko_T_rapicauda 2s_gecko_T_rapicauda_96dB.mp3'));
	
		//4
	names.push("Panama cross-banded tree frog (Smilisca sila)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Simlisca_sila.jpg/800px-Simlisca_sila.jpg"));
	specs.push(loadImage("frog sila 3s.JPG"));
	sounds.push(loadSound('frog sila 3s.mp3'));
	
	
		//5
	names.push("Dink Frog (Diasporus diastema)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_Dink_Frog_%28Diasporus_diastema%29%3F_%289426830682%29.jpg/800px-Common_Dink_Frog_%28Diasporus_diastema%29%3F_%289426830682%29.jpg"));
	specs.push(loadImage("frog e diastema 3s.JPG"));
	sounds.push(loadSound('frog e diastema 3s.mp3'));
	
		//6

	names.push("Frog moving in leaves");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Panamanian_Golden_Frog_001.jpg/500px-Panamanian_Golden_Frog_001.jpg"));
	specs.push(loadImage("Frog hop in leaves 3s.JPG"));
	sounds.push(loadSound('frog hop in leaves 3s.mp3'));
	
		//7
	names.push("Hourglass Treefrog (Dendropsophus ebraccatus)");
	
	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Hourglass_treefrog_%28Dendropsophus_ebraccatus%29.jpg/1280px-Hourglass_treefrog_%28Dendropsophus_ebraccatus%29.jpg"));
	specs.push(loadImage("3 s d ebraccatus.JPG"));
	sounds.push(loadSound('3s frog d ebraccatus.mp3'));

	
			//8
	names.push("Glass Frog (Hyalinobatrachium fleischmanni)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/0/05/Hyalinobatrachium_fleischmanni03.jpg"));
	specs.push(loadImage("frog h fleishmanni.JPG"));
	sounds.push(loadSound('3s h fleishmanni.mp3'));
	
				//9
	names.push("Cane Toad (Bufo marinus)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bufo_marinus_from_Australia.JPG/1280px-Bufo_marinus_from_Australia.JPG"));
	specs.push(loadImage("B marinus 3s spectrum.JPG"));
	sounds.push(loadSound('3s frog b marinus.mp3'));
	

					//10
	names.push("Emerald Cicada (Zammara smaragdina)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flickr_-_ggallice_-_Emerald_cicada.jpg/800px-Flickr_-_ggallice_-_Emerald_cicada.jpg"));
	specs.push(loadImage("cicada-zammara smaragdina 3s.JPG"));
	sounds.push(loadSound('cicada zammara.mp3'));
	

	
						//11
	names.push("Cicada (Quesada gigas) – main call");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flickr_-_ggallice_-_Emerald_cicada.jpg/800px-Flickr_-_ggallice_-_Emerald_cicada.jpg"));
	specs.push(loadImage("cicada-Quesada_gigas main 3s.JPG"));
	sounds.push(loadSound('cicada-Quesada_gigas main call 3s.mp3'));
	
							//12
	names.push("Cicada (Quesada gigas) – intro call)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flickr_-_ggallice_-_Emerald_cicada.jpg/800px-Flickr_-_ggallice_-_Emerald_cicada.jpg"));
	specs.push(loadImage("cicada-Quesada_gigas intro 3s.JPG"));
	sounds.push(loadSound('cicada-Quesada_gigas intro 3s.mp3'));
	
	
						//13
	names.push("Cricket (Aclodes sp)");

	pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Costa_Rica_DSCN7019-new_%2830761958390%29.jpg/800px-Costa_Rica_DSCN7019-new_%2830761958390%29.jpg"));
	specs.push(loadImage("cricket aclodes.JPG"));
	sounds.push(loadSound('cricket aclodes.mp3'));
						
	//14
	names.push("Golden Cricket(Anaxipha exigua)");

	pics.push(loadImage("Golden_Cricket_-_Flickr_-_treegrow_(3) Katja Schulz from Washington D USA.jpg"));
	specs.push(loadImage("cricket anaxipha.JPG"));
	sounds.push(loadSound('cricket anaxipha mp3.mp3'));
	
	
	reloadQs();
}

function reloadQs(){
	
	//load up all the questions
	for (let i = 0; i < names.length; i++) {
		Questions[i] = {
			x: 10,
			y: 4,
			spectrogram: specs[i],
			pic: pics[i],
			sound: sounds[i],
			name: names[i],
			correct: false,
			clicked: false

		}
	}
	Rounds=[];

		for (let i = 0; i < quizRounds; i++) {

		Rounds.push(-1); //set the wins all to NA to begin with
			//-1 will mean not yet set
			//0 will mean a loss for that round
			//1 will mean they won that round


	}
			chooseQuestions();
}

function chooseQuestions(){
		//Choose 3 questions at random
			chosen3 = Questions.slice(0);//creates a copy of the contents
	
	//now get rid of any previous answers
	
	for(let i = 0; i<previousAnswers.length;i++){
		chosen3.splice(chosen3.indexOf(previousAnswers[i]),1);

	}
	//		print("previous answers"+previousAnswers.length);
	//	print("stock left"+chosen3.length);
			
			//To choose 3, we randomly delete all the questions except for 3
			
			while(chosen3.length>3){
				
				let rando= random(0, chosen3.length-1);
				chosen3.splice(rando,1);//kills one item starting at the chosen index location in the array
				
			}
								//print(chosen3.length);
				
				
			//Set all to false
			for(let i =0; i<chosen3.length;i++){
				chosen3[i].correct=false;
				chosen3[i].clicked=false;
			}
				
				//shuffle up the 3
				  chosen3.sort(function(a, b){return 0.5 - Math.random()});


			//Select the Question that is true
			//since we display 3 questions, it will be either 0, 1, or 2)
			let Qs = [0, 1, 2];
secretQnum = random(Qs);
		//	print(secretQnum);
			chosen3[secretQnum].correct=true;
		//	print(chosen3[secretQnum].name);
	//print("is it clicked?"+chosen3[secretQnum].clicked);
		//	Object.assign(	secretSound , chosen3[secretQnum].sound);
	//secretSound = Object.assign(secretSound, chosen3[secretQnum].sound);
	//secretSound=...chosen3[secretQnum].sound;
			secretSound = chosen3[secretQnum].sound;
	
			//secretSound =	chosen3[secretQnum].sound.slice(0);
				chosen=true;
	
	//store this answer in our previous answers array so we dont get the same questions over and over
	previousAnswers.push(chosen3[secretQnum]);
}
















