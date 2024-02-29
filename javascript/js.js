//alert("Hello World!")
//console.log("Console Message Test")

// $(".menu-area").addClass("active")

$(".menu-area").click(function() {
    /*if ($(".menu-area").hasClass("active")){
        $(".menu-area").removeClass("active")
    } else {
        $(".menu-area").addClass("active")
    }*/
    $(".menu-area").toggleClass("active")
})

/*var x = 5;
if (x = 4) {
    do this
} else {
    then do this instead
}*/

var studentName = "Ray" //variable for one object
var allStudents = ["Ray","Naveena","Turba", "Warrick", "Yuna", "Beatrice", "Priscilla", "Julia", "Ashley", "William"] //array for multiple variables
console.log(allStudents)
//alert(studentName)


var i = 0;
while (i < allStudents.length ){ //7 names
    console.log(allStudents[i])
    i = i + 1;
}

var k = 0; 
while (k < allStudents.length){
    console.log(allStudents[k])
    $("<div></div>")
    .addClass("student")
    .html(allStudents[k])
    .appendTo("#everything")

    k = k + 1;
}

$(window).on('resize', function() {
    var win = $(window);
    if (win.width() > 1280){
        $("#everything").css("grid-template-columns","repeat(4, 1fr)")
    }
    if (win.width() < 1280){
        $("#everything").css("grid-template-columns","repeat(3, 1fr)")
    }
})

/*while (i < 5)
{
    do this
    i = i+1;
}*/

$(document).scroll(function() {
    $("<div></div>")
    .addClass("newBox")
    .appendTo("body")
    .html("Number of students: " + allStudents.length)

})




   var mouseX;
   var mouseY;

   $(document).on( "mousemove", function( event ) {
    //pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
    mouseX = event.pageX;
    mouseY = event.pageY;
    /*console.log("Mouse X = " + mouseX)
    console.log("Mouse y = " + mouseY)*/

    $(selected)
    .css("top", mouseY)
    .css("left", mouseX)


  } );

  var selected;
  var count = 0;
  

  $("img").click(function(){

    if ($(this).hasClass("yy")){
        //console.log("clicked")

       // $(this)
        //.css("top", mouseY)
        //.css("left", mouseX)

        selected = $(this)
        
        count = count + 1;
        if (count % 2 == 0){
            selected = 0;
            //console.log(count)
        }

        
    }
  })

  $("#img1").dblclick(function(){
    window.location.href = 'page2.html';
  })

  $("#img2").dblclick(function(){
    window.location.href = 'page3.html';
  })
  let b = Math.random() * 10;
  console.log("Random number" + b)
