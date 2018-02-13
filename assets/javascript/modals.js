
/*  Scripts for GIF Demo  */

/* These are al of the scripts to control the 

    modal pop-up windows withing the demo

    OLD ROUTINES copied from other games.  Therefore, not jQuery.
    will eventually convert to jQuery

    */

// prepare the modals
var modalHelp = document.getElementById('modHelp');
var modalHelp2 = document.getElementById('modHelp2');
var modalSettings = document.getElementById('modSettings');

// Get the button that opens the modal
var btnHelp = document.getElementById("btnHelp");
btnHelp.onclick = function () {
    modalHelp.style.display = "block";
}
var btnHelp2 = document.getElementById("btnHelp2");
//wants the technical details, but could only 
//get here by clicking button on the main help modal. So close the main modal
btnHelp2.onclick = function () {
    modalHelp2.style.display = "block";
}
var btnSettings = document.getElementById("btnSettings");
btnSettings.onclick = function () {
    modalSettings.style.display = "block";
}



// Get the <span> element that closes the modal
//var closeModHelp = document.getElementsByClassName("close")[0];
var closeModHelp = document.getElementById("closeModHelp");
var closeModHelp2 = document.getElementById("closeModHelp2");
var closeModSettings = document.getElementById("closeModSettings");


// When the user clicks on <span> (x), close the modal
closeModHelp.onclick = function () {
    modalHelp.style.display = "none";
}
closeModHelp2.onclick = function () {
    modalHelp2.style.display = "none";
}
closeModSettings.onclick = function () {
    modalSettings.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    //can NOT just mass close all modals because
    //on first open, modal closes right after opening
    //have to make sure the target is the modal
    //then knwo it's safe to close modal
    //replace with Case statement  in future
    if (event.target == modalHelp) {
        modalHelp.style.display = "none";
    }
    if (event.target == modalHelp2) {
        //might want to close both help windows
        modalHelp2.style.display = "none";
    }
    if (event.target == modalSettings) {
        modalSettings.style.display = "none";
    }

}

