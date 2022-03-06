window.onload=function (){
    // var red = document.getElementById("red");
    // red.addEventListener("click", green);

    // function green () {
    //     red.style.background = "green";
    // }
    var black = document.getElementById("black");
    var silver = document.getElementById("silver");
    var blackhead = document.getElementById("blackhead");
    var silverhead = document.getElementById("silverhead");
    var underline = document.getElementById("underline");
    var onebox = document.getElementById("onebox");
    var threebox = document.getElementById("threebox");
    var description = document.getElementById("description");
    var engraving = document.getElementById("engraving");
    var order = document.getElementById("order");
    black.addEventListener("click", blvck);
    silver.addEventListener("click", sliver);

    // PRODUCT PAGE
    function blvck () {
        black.style.width = "246px";
        black.style.height = "436px";
        black.style.left = "-270px"
        silver.style.display = "none";
        blackhead.style.display = "block";
        underline.style.display = "block";
        onebox.style.display = "block";
        threebox.style.display = "block";
        description.style.display = "block";
        engraving.style.display = "block";
        order.style.display = "block";
    }

    function sliver () {
        silver.style.width = "246px";
        silver.style.height = "436px";
        silver.style.left = "-270px"
        black.style.display = "none";
        silverhead.style.display = "block";
        underline.style.display = "block";
        underline.style.width = "40px";
        underline.style.left = "calc(50% - 20px)";
        onebox.style.display = "block";
        description.style.display = "block";
        threebox.style.display = "block";
        engraving.style.display = "block";
        order.style.display = "block";
    }
}