var openDonate = document.getElementById("call-to-donate");
var closeDonate = document.getElementById("btnClose");
var closeDonate1 = document.getElementById("maskBackground");



openDonate.addEventListener('click', function(){
    console.log('----Dat----')
    var element = document.getElementById("modalDonate");
    element.classList.add("open");
});

closeDonate.addEventListener('click', function(){
    console.log('----Dat----')
    var element = document.getElementById("modalDonate");
    element.classList.remove("open");
});

closeDonate1.addEventListener('click', function(){
    console.log('----Dat----')
    var element = document.getElementById("modalDonate");
    element.classList.remove("open");
});