function parallax(){

  var layer1 = document.getElementById('layer1');
  var layer2 = document.getElementById('layer2');
  var layer3 = document.getElementById('layer3');
  var layer4 = document.getElementById('layer4');

  layer1.style.top = -(window.pageYoffset / 10) + 'px';
  layer2.style.top = -(window.pageYoffset / 8) + 'px';
  layer3.style.top = -(window.pageYoffset / 6) + 'px';
  layer4.style.top = -(window.pageYoffset / 4) + 'px';
}

window.addEventListner("scroll" , parallax , false);
