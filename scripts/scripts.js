// body fade-in on load

document.body.classList.add('fade-out');
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});


// navigation triggers

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// image viewer modal

$(".images img").click(function(){
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
  });
  
  $("#image-viewer .close").click(function(){
    $('#image-viewer').hide();
  });
