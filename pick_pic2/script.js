
function addMouseMoveListener(e, elem) {

	console.log('added mousemove listener');
	e.target.addEventListener('mousemove', function(f){

		elem.style.left = f.offsetX + 15 + 'px';
		elem.style.top  = f.offsetY + 15 + 'px';

	});
}

 var currImage = '';

document.querySelector('.grid').addEventListener('contextmenu', function(e) {

  e.preventDefault();

  if (e.target.tagName === 'IMG' && currImage == '') {

	currImage = e.target.src;

  	var myElement = document.createElement('div');
  	// console.log('created my element');

  	myElement.className = 'preview';
  	e.target.parentNode.appendChild(myElement);

  	var myImage = document.createElement('img');
  	var imgLoc = e.target.src;
  	
  	myImage.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';

  	myElement.style.left = e.offsetX + 15 + 'px';
  	myElement.style.top  = e.offsetY + 15 + 'px';

  	myElement.appendChild(myImage);

	e.target.addEventListener('mouseout', function handler(d) {

		var myNode = d.target.parentNode.querySelector('div.preview');
		myNode.parentNode.removeChild(myNode);
		myNode = null;

		e.target.removeEventListener('mouseout', handler, false);
		currImage = '';

	}, false);

	// addMouseMoveListener(e, myElement);

	e.target.addEventListener('mousemove', function(f){

		myElement.style.left = f.offsetX + 15 + 'px';
		myElement.style.top  = f.offsetY + 15 + 'px';

	});

  } // check to see that I clicked on IMG only
}, false); // click event