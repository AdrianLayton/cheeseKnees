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
	// if (window.innerWidth > 800) {
	var lftKnife = document.getElementsByClassName("knife-left")[0];
	var rgtKnife = document.getElementsByClassName("knife-right")[0];
	lftKnife.classList.toggle("knife-left");
	lftKnife.classList.toggle("knife-left-reveal");
	
	rgtKnife.classList.toggle("knife-right");
	rgtKnife.classList.toggle("knife-right-reveal");
// }
	// else {
	// 	removeKnives();
	// }

}

function removeKnives() {
	if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
	var lftKnife = document.getElementsByClassName("knife-left-reveal")[0];
	var rgtKnife = document.getElementsByClassName("knife-right-reveal")[0];
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	if (window.innerWidth < 800) {
		lftKnife.remove();
		rgtKnife.remove();
	}

}



setTimeout(revealKnives, 500);