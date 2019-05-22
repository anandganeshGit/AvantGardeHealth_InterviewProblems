const imgDiv = document.getElementById('img')

var json_obj;
var count = 0;
function getImages() {
  // TODO make me get some images!
  var yourUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&page=1&api_key=e6qeMVwVAobScq3QGBBCsWdk4haOxrTmcBfB3RPI';
  json_obj = JSON.parse(Get(yourUrl));
  document.getElementById('imgBtn').style.display = "none";
	imgDiv.getElementsByTagName('button')[1].style.display = 'block';
	imgDiv.getElementsByTagName('button')[2].style.display = 'block';
	//imgDiv.getElementsByTagName('button')[2].style.cssFloat = 'right';
  
  return displayImages(json_obj.photos[0].img_src);
}

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function getNextImages() {
  // TODO make me get some images!
	if(count < json_obj.photos.length){
			return displayImages(json_obj.photos[++count].img_src);
	}else{
			alert('This is the last image');
	}
}

function getPreviousImages(){
  if(count > 0){
	  return displayImages(json_obj.photos[--count].img_src);
  }else{
	  alert('This is the First image');
  }
}

function displayImages(images) {
  // TODO make this display image(s) instead!
  imgDiv.childNodes = new Array();
  var img = document.createElement('img');
  img.src = images;
  img.height=300;
  img.width=700;
  if(imgDiv.hasChildNodes){
    imgDiv.removeChild(imgDiv.lastChild);
  }
  imgDiv.appendChild(img);
}