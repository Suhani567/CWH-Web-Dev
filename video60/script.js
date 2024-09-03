let button =document.getElementById("btn")
//list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick",()=>{
    //  alert("i was clicked")
    document.querySelector(".box").innerHTML = "<b> yay you were clocked </b> Enjoy your click!" 
})
button.addEventListener("contextmenu",()=>{
    alert("don't hack us by right click pls ")
})

document.addEventListener("keydown",e=>{
    console.log(e,e.key,e.keyCode)
})

