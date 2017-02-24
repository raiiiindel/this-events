//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var mcElem = document.getElementsByClassName('name');
for(var i=0; i<mcElem.length; i++){
	mcElem[i].addEventListener('click', showMcMenu);
}

function showMcMenu(){
	var menuElem = this.querySelectorAll('.menu')[0];
	if(menuElem.style.display === 'none'){
		menuElem.style.display = 'block';
	}else{
		menuElem.style.display = 'none';
	}
}



