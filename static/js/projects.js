function selectProfessional() {
    $("#selector-own").removeClass("selected");
    $("#selector-professional").addClass("selected");
    $("#own").fadeOut(250, function (){
        $("#professional").fadeIn(250);
    });
}

function selectOwn() {
    $("#selector-own").addClass("selected");
    $("#selector-professional").removeClass("selected");
    $("#professional").fadeOut(250, function (){
        $("#own").fadeIn(250);
    });
}
