var idx=1;
displayweb(idx);
function shiftidx(n){
    idx=idx+n;
    displayweb(idx);
}
function displayweb(n){
    var i;
    var w=document.getElementsByClassName("web");
    if(n>w.length){ 
        idx=1;
    }
    if(n<1) {
        idx=w.length;
    }
    for(i=0;i<w.length;i++){
        w[i].style.display = "none";
    }
    w[idx-1].style.display = "block";  
}