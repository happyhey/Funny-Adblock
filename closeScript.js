window.onload = function() { 
	debugger; 
	var clickGifElements = document.querySelectorAll('.closeSpecialGifs'); 
	for(var k = 0; k < clickGifElements.length; k++) 
	{ 
		clickGifElements[k].addEventListener('click', function(ev){
			ev.preventDefault(); console.log(ev); 
			ev.currentTarget.offsetParent.style.display = 'none';
		})
	} 

}