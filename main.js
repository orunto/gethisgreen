window.onload=function() {
    var plus = getElementbyId("plus");
    var one = getElementbyId("one");
    var two = getElementbyId("two");
    var three = getElementbyId("three");
    var four = getElementbyId("four");
    var five = getElementbyId("five");
    var answer1 = getElementbyId("answer1");

    plus.addEventListener("click", drop);
    function drop (){
        two.style.opacity= "0";
        two.style.top= "252px";
        three.style.top= "296px";
        four.style.top= "340px";
        five.style.top= "384px";
    }
}