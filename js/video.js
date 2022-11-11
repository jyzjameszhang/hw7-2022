var video;

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").textContent = volume + '%';
 });


 document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});



document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("New Speed: " + video.playbackRate);
});




document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (10/9) * video.playbackRate;
	console.log("New Speed: " + video.playbackRate);
});




document.querySelector("#skip").addEventListener("click", function() {
	newTime = video.currentTime + 10;
	if(newTime < video.duration) {
		video.currentTime = newTime;
		console.log(video.currentTime);
	} 
	else {
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	
});


document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute';
	} 
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute';
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	volume = document.querySelector("#slider").value;
	document.querySelector("#volume").textContent = volume + '%';
	video.volume = volume / 100;
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.className = 'oldSchool';
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = 'video';
});