$('.arrow').click( function (){
 $('html, body').animate({
   scrollTop: $('#navbarcontainer').offset().top
 }, 1000);

});

$('.adcarobg').carousel({
  interval: 10000
});

function openNav() {
  document.getElementById("menubar").style.height = "100%";
}

function closeNav() {
  document.getElementById("menubar").style.height = "0%";
}


$(document).ready(function(){
	$('.mobile-menu').click(function() {
		$('body').toggleClass('menu-open');
	});
});




// // disable right click
// $(document).bind("contextmenu",function(e){
//   e.preventDefault()
// });

// //end  disable right click

// $(document).keydown(function(e){
//   if(e.which === 123){

//      return false;

//   }

// });


// if(document.getElementById("status") != null){
//   var idPost=document.getElementById("status").innerHTML;
// }



