window.onload=function (){
    var onespan = document.getElementById("onespan");
    var threespan = document.getElementById("threespan");
    var sel = document.getElementById("counter");
    var sele = document.getElementById("counter2");
    var inkbutton = document.getElementById("inkbutton");
    var inkpicker = document.getElementById("inkpicker");
    var redink = document.getElementById("redink");
    var greenink = document.getElementById("greenink");
    var blackcolor = document.getElementById("blackcolor");
    var bluecolor = document.getElementById("bluecolor");
    var greencolor = document.getElementById("greencolor");
    var redcolor = document.getElementById("redcolor");

    onespan.addEventListener("click", thick);
    threespan.addEventListener("click", thick2);
    inkbutton.addEventListener("click", appear);
    inkpicker.addEventListener("click", conjure);

    function thick () {
        onespan.style.border = "2px solid black";
        threespan.style.border = "1px solid #676767";
        onespan.removeEventListener("click", thick);
        onespan.addEventListener("click", cleanslate);
    }

    function thick2 () {
        threespan.style.border = "2px solid black";
        onespan.style.border = "1px solid #676767";
        threespan.removeEventListener("click", thick2);
        threespan.addEventListener("click", cleanslate);
    }

    function cleanslate () {
        threespan.style.border = "1px solid #676767";
        onespan.style.border = "1px solid #676767";
        onespan.addEventListener("click", thick);
        threespan.addEventListener("click", thick2);
    }

    function appear () {
        greenink.style.opacity= "1";
        redink.style.opacity= "1";
        inkbutton.removeEventListener("click", appear);
        inkbutton.addEventListener("click", disappear);
    }

    function disappear () {
        greenink.style.opacity= "0";
        redink.style.opacity= "0";
        inkbutton.removeEventListener("click", disappear);
        inkbutton.addEventListener("click", appear);
    }

    function conjure () {
        greencolor.style.opacity= "1";
        redcolor.style.opacity= "1";
        blackcolor.style.opacity= "1";
        bluecolor.style.opacity= "1";
        inkpicker.removeEventListener("click", conjure);
        inkpicker.addEventListener("click", disconjure);
    }

    function disconjure () {
        greencolor.style.opacity= "0";
        redcolor.style.opacity= "0";
        blackcolor.style.opacity= "0";
        bluecolor.style.opacity= "0";
        inkpicker.removeEventListener("click", disconjure);
        inkpicker.addEventListener("click", conjure);
    }

    for(var i = 1;i<101;i++){
        sel[i] = new Option( i,i);	
    }

    for(var i = 1;i<101;i++){
        sele[i] = new Option( i,i);	
    }
}