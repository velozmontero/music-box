document.ready(function(){
    var cnote= document.getElementById("c-note");
    var dnote= document.getElementById("d-note");
    var enote= document.getElementById("e-note");
    var fnote= document.getElementById("f-note");
    var gnote= document.getElementById("g-note");
    var anote= document.getElementById("a-note");
    var bnote= document.getElementById("b-note");
    
   $('#c').on('click', function(){
     cnote.currentTime=0;
       cnote.play();
   }); 
});