var thumbnails = document.getElementsByClassName("thumbnail"); 

function randomAlert() {
	alert("Event Has been Fired");
	this.lastElementChild.classList.toggle("")
	console.log(this.lastElementChild.classList);
}

function toggleTitle() {
	var tmbTitle = this.lastElementChild
	if (tmbTitle.className === "hide-title" || "show-title") {
		tmbTitle.classList.toggle("hide-title");
		tmbTitle.classList.toggle("show-title");
	}
}

function revealKnives() {
	var lftKnife = document.getElementsByClassName("knife-left")[0];
	var rgtKnife = document.getElementsByClassName("knife-right")[0];
	lftKnife.classList.toggle("knife-left");
	lftKnife.classList.toggle("knife-left-reveal");
	
	rgtKnife.classList.toggle("knife-right");
	rgtKnife.classList.toggle("knife-right-reveal");


}

setTimeout(revealKnives, 1500);