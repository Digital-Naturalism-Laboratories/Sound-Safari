let frogButt;

let infoBlue;

let juegaYabutton;

let playSoundButt;

let quizBackgroundPanelLeft;
let roundsDots;

let newRoundButt;
let correctButton,incorrectButton;
let correctRoundDot, incorrectRoundDot;

//Preload all files
function preload() {

	//load UI images

	titleImg = loadImage('UIimg/Titulo-1920x1080.png');
	startButton = loadImage("UIimg/start-buttonTitulo-1920x1080.png");

	font = loadFont(fontFile);


	infoImg.push(loadImage("UIimg/Espectrograma-1920x1080_info1.png"));
	infoImg.push(loadImage("UIimg/Espectrograma-1920x1080_info2.png"));


	frogButt = loadImage("UIimg/frog_button_Espectrograma-1920x1080.png");

	infoBlue = loadImage("UIimg/blue-zone-50per-Espectrograma-1920x1080.png");

	juegaYabutton = loadImage("UIimg/juega-ya-button-Espectrograma-1920x1080_info2.png");

	playSoundButt = loadImage("UIimg/playButt.png");

	quizBackgroundPanelLeft = loadImage("UIimg/left-bar-background.png");

	roundsDots = loadImage("UIimg/rounds-dots.png");

	nextRoundButton = loadImage("UIimg/next-round-button.png");

	newRoundButt = loadImage("UIimg/new-round.png");

	correctButton = loadImage("UIimg/correctButt.png");
	incorrectButton = loadImage("UIimg/incorrectButt.png");

	correctRoundDot = loadImage("UIimg/correctRoundDot.png");

	incorrectRoundDot = loadImage("UIimg/incorrectRoundDot.png");

	//tunfrogimg = loadImage("animals/tunfrog.png");



	//Load Sounds


	sound = loadSound('animals/tungara_diep-water.wav');
	//append(allSounds, sound)
	secretSound = loadSound('animals/frog_B. typhonius - SET 1.mp3');
	//append(allSounds, sound2);
	q0Sound = loadSound('animals/tungara 2.5.mp3')
	q1Sound = loadSound('animals/frog_B. typhonius - SET 1.mp3');
	q2Sound = secretSound;


	//Load the creatures

	//0
	names.push("Rana túngara (Engystomops pustulosus)");
	//pics.push(loadImage("animals/tunfrog.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/e-pustolosus.png"));
	sounds.push(loadSound('animals/tungara 3s.mp3'));


	//1
	names.push("Rana arbórea veteada (Trachycephalus typhonius)");

	//pics.push(loadImage("animals/typhonius_lucas grandinetti.JPG"));
	quizQuestion.push(loadImage("UIimg/animalIMG/t-typhonius.png"));
	sounds.push(loadSound('animals/3s frog_B. typhonius - SET 1.mp3'));



	//2
	names.push("Gecko casero común (Hemidactylus frenatus)");

	//pics.push(loadImage("gecko_H. frenatus-01 800px-Hemidactylus_frenatus_(Common_House_Gecko)_on_white_background,_focus_stacking Basile Morin.jpg"));
	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Hemidactylus_frenatus_%28Common_House_Gecko%29_on_white_background%2C_focus_stacking.jpg/800px-Hemidactylus_frenatus_%28Common_House_Gecko%29_on_white_background%2C_focus_stacking.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/h-frenatus.png"));
	sounds.push(loadSound('animals/gecko_H. frenatus-01 3s gecko other.mp3'));

	//3


	names.push("Geco cola de nabo (Thecadactylus rapicauda)");

	//pics.push(loadImage("gecko_T_rapicauda Thecadactylus_rapicauda author DuSantos flickr .jpg"));
	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/d/d5/Thecadactylus_rapicauda.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/t-rapicaudus.png"));
	sounds.push(loadSound('animals/gecko_T_rapicauda 2s_gecko_T_rapicauda_96dB.mp3'));

	//4
	names.push("Rana arbórea (Smilisca sila)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Simlisca_sila.jpg/800px-Simlisca_sila.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/s-sila.png"));
	sounds.push(loadSound('animals/frog sila 3s.mp3'));


	//5
	names.push("Rana de campanilla común (Diasporus diastema)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_Dink_Frog_%28Diasporus_diastema%29%3F_%289426830682%29.jpg/800px-Common_Dink_Frog_%28Diasporus_diastema%29%3F_%289426830682%29.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/d-diastema.png"));
	sounds.push(loadSound('animals/frog e diastema 3s.mp3'));

	//6

	names.push("Rana moviéndose en hojas");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Panamanian_Golden_Frog_001.jpg/500px-Panamanian_Golden_Frog_001.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/frog-moving-in-leaves.png"));
	sounds.push(loadSound('animals/frog hop in leaves 3s.mp3'));

	//7
	names.push("Rana amarillenta (Dendropsophus ebraccatus)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Hourglass_treefrog_%28Dendropsophus_ebraccatus%29.jpg/1280px-Hourglass_treefrog_%28Dendropsophus_ebraccatus%29.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/d-ebracctus.png"));
	sounds.push(loadSound('animals/3s frog d ebraccatus.mp3'));


	//8
	names.push("Rana de cristal (Hyalinobatrachium fleischmanni)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/0/05/Hyalinobatrachium_fleischmanni03.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/h-flieschmanni.png"));
	sounds.push(loadSound('animals/3s h fleishmanni.mp3'));

	//9
	names.push("Sapo gigante (Bufo marinus)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bufo_marinus_from_Australia.JPG/1280px-Bufo_marinus_from_Australia.JPG"));
	quizQuestion.push(loadImage("UIimg/animalIMG/r-marina.png"));
	sounds.push(loadSound('animals/3s frog b marinus.mp3'));


	//10
	names.push("Cigarra esmeralda (Zammara smaragdina)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flickr_-_ggallice_-_Emerald_cicada.jpg/800px-Flickr_-_ggallice_-_Emerald_cicada.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/z-smaragdi.png"));
	sounds.push(loadSound('animals/cicada zammara.mp3'));



	//11
	names.push("Cigarra (Quesada gigas) – llamado principal");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flickr_-_ggallice_-_Emerald_cicada.jpg/800px-Flickr_-_ggallice_-_Emerald_cicada.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/q-gigas.png"));
	sounds.push(loadSound('animals/cicada-Quesada_gigas main call 3s.mp3'));

	//12
	names.push("Cigarra (Quesada gigas) – inicio de llamado");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flickr_-_ggallice_-_Emerald_cicada.jpg/800px-Flickr_-_ggallice_-_Emerald_cicada.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/q-gigas-intro.png"));
	sounds.push(loadSound('animals/cicada-Quesada_gigas intro 3s.mp3'));


	//13
	names.push("Grillo (Aclodes sp)");

	//pics.push(loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Costa_Rica_DSCN7019-new_%2830761958390%29.jpg/800px-Costa_Rica_DSCN7019-new_%2830761958390%29.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/Aclodes.png"));
	sounds.push(loadSound('animals/cricket aclodes.mp3'));

	//14
	names.push("Grillo con alas de oro (Anaxipha exigua)");

	//pics.push(loadImage("animals/Golden_Cricket_-_Flickr_-_treegrow_(3) Katja Schulz from Washington D USA.jpg"));
	quizQuestion.push(loadImage("UIimg/animalIMG/a-exigua.png"));
	sounds.push(loadSound('animals/cricket anaxipha mp3.mp3'));


	reloadQs();
}

function reloadQs() {

	//load up all the questions
	for (let i = 0; i < names.length; i++) {
		Questions[i] = {
			x: 10,
			y: 4,
			quizQ: quizQuestion[i],
			//pic: pics[i],
			sound: sounds[i],
			name: names[i],
			correct: false,
			clicked: false

		}
	}
	Rounds = [];

	for (let i = 0; i < quizRounds; i++) {

		Rounds.push(-1); //set the wins all to NA to begin with
		//-1 will mean not yet set
		//0 will mean a loss for that round
		//1 will mean they won that round


	}
	chooseQuestions();
}

function chooseQuestions() {
	//Choose 3 questions at random
	chosen3 = Questions.slice(0);//creates a copy of the contents

	//now get rid of any previous answers

	for (let i = 0; i < previousAnswers.length; i++) {
		chosen3.splice(chosen3.indexOf(previousAnswers[i]), 1);

	}
	//		print("previous answers"+previousAnswers.length);
	//	print("stock left"+chosen3.length);

	//To choose 3, we randomly delete all the questions except for 3

	while (chosen3.length > 3) {

		let rando = random(0, chosen3.length - 1);
		chosen3.splice(rando, 1);//kills one item starting at the chosen index location in the array

	}
	//print(chosen3.length);


	//Set all to false
	for (let i = 0; i < chosen3.length; i++) {
		chosen3[i].correct = false;
		chosen3[i].clicked = false;
	}

	//shuffle up the 3
	chosen3.sort(function (a, b) { return 0.5 - Math.random() });


	//Select the Question that is true
	//since we display 3 questions, it will be either 0, 1, or 2)
	let Qs = [0, 1, 2];
	secretQnum = random(Qs);
	//	print(secretQnum);
	chosen3[secretQnum].correct = true;
	//	print(chosen3[secretQnum].name);
	//print("is it clicked?"+chosen3[secretQnum].clicked);
	//	Object.assign(	secretSound , chosen3[secretQnum].sound);
	//secretSound = Object.assign(secretSound, chosen3[secretQnum].sound);
	//secretSound=...chosen3[secretQnum].sound;
	secretSound = chosen3[secretQnum].sound;

	//secretSound =	chosen3[secretQnum].sound.slice(0);
	chosen = true;

	//store this answer in our previous answers array so we dont get the same questions over and over
	previousAnswers.push(chosen3[secretQnum]);
}
















