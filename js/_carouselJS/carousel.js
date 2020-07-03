window.load = slide(1);
let bgImage = 1;
let bgNumbers = 1;

function slide(n){
  let allBg = 3; 
  document.getElementById("item").style.backgroundImage = "url('img/Carousel_image/"+n+".jpg')";
}

function anterior(){
  if(bgNumbers>1){
    bgNumbers--;
    slide(bgNumbers);
  }
}

function proximo(){
  if(bgNumbers<3){
    bgNumbers++;
    slide(bgNumbers);
  }
}

