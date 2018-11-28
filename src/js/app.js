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

// function checkurlretuern(){

//   if (url == '') {
//     window.location = ("https://www.w3schools.com");

//    }

//  }





            $('a').click(function(){
                var aattr=$(this).attr('href');
              if (aattr == '') {
                  $(this).attr("href", "http://omarmokhtar.com/");
              }

            });





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


