let screen = document.getElementById("display")
let buttons = document.querySelectorAll(".btn")

buttons.forEach( (buttons) =>{
    buttons.addEventListener("click",(e)=>{
        let value = e.target.dataset.num;
        screen.value +=value;
    })
})