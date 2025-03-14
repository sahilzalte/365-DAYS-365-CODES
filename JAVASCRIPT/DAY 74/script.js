let botton = document.getElementById("btn")
 
botton.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b> Enjoy your Click </b>"
})

botton.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right click Please")
})

botton.addEventListener("keydown", (e) => {
   
   console.log(e.key,e.keyCode)
   
}) 