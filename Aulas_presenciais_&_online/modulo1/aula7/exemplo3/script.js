const div = document.getElementById("div");

div.addEventListener("click",function(){
    console.log("elemento clicado");
});

div.addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue";
});
div.addEventListener("mouseout",function(){
    this.style.backgroundColor = "red";
});

