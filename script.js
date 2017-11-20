//$(document).ready(function(){
$(window).load(function() {
   $("#loading").fadeOut(500);
})

  var main = function () {
  $('.small-box').hide();
  $('.knockout').hide();
  $('.line').hide();
  $('.mine').hide();
  $('.past').hide();
  $('.present').hide();

$('.btn1').click(function(){
  $(this).fadeOut();
  $('.name').animate({top :'10vw'},500);
  $('.line').fadeIn();
  $('.line').animate({
    left:"30vw"
  },500);


  $('.knockout').delay(1500).fadeIn().queue();
  


});
$('#cont').click(function(){
  $('.mine').slideUp();
  $('.img').slideUp();
  $('.small-box').slideDown();
});
$('#ach').click(function(){
  
  $('.mine').slideUp();
  $('.small-box').slideUp();
  $('.img').slideDown(800);
  $('.line').hide();
  $('.knockout').hide();
  $('.btn1').show();
  
});
$('#goal').click(function(){
  $('.small-box').fadeOut();
  $('.img').fadeOut();
  $('.mine').fadeIn(1000);
  
})
var modal = document.getElementById('myModal');
var btn = document.getElementById("gall");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
$(document).ready(function(){
  $('.container').fadeOut();
});
$('.btn').click(function(){
  $('.container').fadeIn();
});
var i = document.getElementsByClassName("slide");
var n=0;
i[n].style.display ="block";
var j = document.getElementsByClassName("caption");
var k=0
j[0].style.display="block";
$('#left').click(function(){
 i[n].style.display="none";
 n++;
 if(n>=i.length){
    //i[0].css({display:"block"});
    i[0].style.display="block";
    n=0;
  }
  else
    i[n].style.display ="block";
    //i[n].css({display:"block"});

  });
$('#right').click(function(){

 i[n].style.display="none";
 n--;
 if(n<0){
  i[i.length-1].style.display="block";
  n=i.length-1;

}
else
  i[n].style.display="block";


});
j[0].style.display="block";
$('#left').click(function(){
 j[k].style.display="none";
 k++;
 if(k>=j.length){

  j[0].style.display="block";
  k=0;
}
else
  j[k].style.display ="block";

});
$('#right').click(function(){

  j[k].style.display="none";
  k--;
  if(k<0){
    j[j.length-1].style.display="block";
    k=j.length-1;
    
  }
  else
    j[k].style.display="block";
  

});
$("#past").click(function() {
  $(".heisenberg").slideUp();
  $(".past").slideDown();
});
$(".cross").click(function() {
  $(".past").slideUp();
  $(".heisenberg")
  .delay(200)
  .slideDown();
});
$("#present").click(function(){
  $('.present').slideDown();
  $('.heisenberg').slideUp();
})
var e = document.getElementsByClassName("psi");
var f = 0;
var g = document.getElementsByClassName("p");
var  h = 0;

e[0].style.display = "block";
$("#left1").click(function() {
  e[f].style.display = "none";
  f++;
  if (f >= e.length) {
    e[0].style.display = "block";

    f = 0;
  } else e[f].style.display = "block";
});
$("#right1").click(function() {
  e[f].style.display = "none";
  f--;
  if (f < 0) {
    e[e.length - 1].style.display = "block";
    f = e.length - 1;
  } else e[f].style.display = "block";
});
g[0].style.display = "block";
$("#left1").click(function() {
  g[h].style.display = "none";
  h++;
  if (h >= g.length) {
    g[0].style.display = "block";
    h = 0;
  } else g[h].style.display = "block";
});
$("#right1").click(function() {
  g[h].style.display = "none";
  h--;
  if (h < 0) {
    g[g.length - 1].style.display = "block";
    h = g.length - 1;
  } else g[h].style.display = "block";
});
$('.crossy').click(function(){
  $('.present').slideUp();
  $('.heisenberg').delay(200).slideDown();
})
}
$(document).ready(main);
document.addEventListener('DOMContentLoaded',function(){
  var dataText = [ "Student at IIIT Hyderabad", "ML VR  Web Dev apprentice", "Travel Enthusiast", 'Foodie','star wars fan','anime lover','Biryani Fanatic'];

  function typeWriter(text, i, fnCallback) {
   if (i < (text.length)) {
      // add next character to h1
      document.querySelector(".knockout").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 80);
    }
    else if (typeof fnCallback == 'function') {

      setTimeout(fnCallback, 1200);
    }
  }
  
  function StartTextAnimation(i) {
   if (typeof dataText[i] == 'undefined'){
    setTimeout(function() {
      StartTextAnimation(0);
    }, 500);
  }
     // check if dataText[i] exists
     if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  
  StartTextAnimation(0);
});