

function clock(el) {
	let div = document.createElement("div");
	div.innerHTML = `<span class="red"></span>:<span class="green"></span>:<span class="blue"></span>`;
	el.appendChild(div);
	document.querySelector(".red").style.color = "red";
	document.querySelector(".green").style.color = "green";
	document.querySelector(".blue").style.color = "blue";
	// var timerId = setInterval(function() {
 //  	alert( "тик" );
	// }, 2000);
// }

	setInterval(function() {
		let date = new 	Date();
		let hours = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();
		if(hours < 10) hours = "0" + hours;
		
		if(min < 10) min = "0" + min;
		if(sec < 10) sec = "0" + sec;
		document.querySelector(".red").innerHTML = hours;
		document.querySelector(".green").innerHTML = min;
		document.querySelector(".blue").innerHTML = sec;

	}, 1000);
}

clock(table)