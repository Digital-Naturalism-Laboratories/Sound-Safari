var bbox;

function drawIntro() {
	drawSpectra();
	noStroke();

	textSize(30*width/1920);
	text("Spectrograms", width / 2, 20*width/1920);

	textSize(20*width/1920);
	//ellipse(width / 2, height / 2+40, 80,50);
	noStroke();
	textAlign(CENTER, TOP);

	if (frogclicked) {
		text("Spectrograms show sounds as a picture.\n \n" +
			"HIGH frequency sounds are shown at the top. ↑\n" +
			"LOW frequency sounds are at the bottom. ↓\n" +
			"LOUD frequencies are shown in different colors.\n\n" +
			"When you click the frog, do you see how it makes a \nunique pattern of frequencies?\n\n" +

			"Try singing or whistling into your microphone!\n\n" , width / 2,  60*width/1920);



		let rectCorners = 20;


		let rectwidth = 100;
		let rectheight = 60;

		fill(100, 200, 255, 150);
textAlign(CENTER,CENTER);

		//	rect(width/2-rectwidth,height-60-rectheight, rectwidth,rectheight,rectCorners);
		let textString = 'Play the Game!';
		bbox = font.textBounds(textString, width / 2, height - 80*width/1920, 60*width/1920);

		stroke(250, 200, 200, 200);
		strokeWeight(3);
		colorMode(HSB);
		soundcolor = color(fft.getEnergy(100, 3000), 30 + fft.getEnergy(100, 3000), 200, .5);
		if (mouseX > bbox.x - 20 && mouseY > bbox.y && mouseX < bbox.x - 20 + bbox.w + 30 && mouseY < bbox.y + bbox.h + 20) {
			fill(100, 100);
			strokeWeight(8);
		} else {
			fill(soundcolor);
		}
		rect(bbox.x - 20, bbox.y, bbox.w + 30, bbox.h + 20, rectCorners);
		//	fill(100,200,255,150);
		//							soundcolor = color( fft.getEnergy(100, 3000), 30 + fft.getEnergy(100, 3000), 200,.5);

		fill(0, 0, 0, .7);

		textSize(60*width/1920);
		strokeWeight(1);

		text(textString, width / 2, height - 80*width/1920);

		colorMode(RGB);

	} else {
		text("In thick jungles, scientists cannot always see the animals they are looking for. \n" +
			"Instead, they often have to search for their animals by the sounds they make \n \n" +
			"To do this, they use a tool called a spectrogram.\n \n" ,  width / 2, 60*width/1920);
	}

let tunwidth=300*width/1920;
	let tunheight=170*width/1920;
	
	if(sound.isPlaying()){
		push();
		translate(width/2, height/2);
		drawSpectrumCircleFrog();
		pop();
	}
	
	image(tunfrogimg, width / 2 - tunwidth/2, height / 2 - tunheight/2, tunwidth, tunheight);

	if (mouseX > width / 2 - tunwidth/2 && mouseY > height / 2 - tunheight/2 && mouseX < width / 2 - tunwidth/2 +tunwidth && mouseY < height / 2 - tunheight/2+tunwidth) {
		push();
		tint(0,240, 0,100); // Tint blue and set transparency
		image(tunfrogimg, width / 2 - tunwidth/2, height / 2 - tunheight/2, tunwidth, tunheight);
		pop();
	}
			textSize(30*width/1920);

	if (!frogclicked) {
		text(			"Click the Tungara Frog to start!", width/2, height/2+tunheight);
	} else{
				text(			"Click below when you are ready to test \nhow well you can recognize Spectrograms!", width/2, height/2+tunheight);

	}
	
}