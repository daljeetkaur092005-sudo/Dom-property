
const parent=document.querySelector(".parent")

const write=document.querySelector("#task")
const categories=document.querySelector("#cat")

const form=document.querySelector("form")

//task1 append,creatElement,createTextNode,appendchild
const button=document.createElement("button")
form.append(button)

const buttonchild=document.createTextNode("Task submit")
button.appendChild(buttonchild)
const para=document.createElement("p")
form.prepend(para)

const parachild=document.createTextNode("Welcome")
para.appendChild(parachild)
para.style.backgroundColor="white"
para.style.color="blue"
para.style.textAlign="center"
para.style.fontSize="2rem"
   const btnn=document.querySelector("#btnn")
   
    


button.style.margin="auto"
button.style.width="70%"


//task2 Attribute vs properties
//setAttribute(),getAttribute(),removeAttribute,hasAttribute,dataset
const select=document.querySelector("select")
select.style.backgroundColor="lightblue"
select.style.color="blue"
console.log(select.dataset.id)
button.setAttribute("id","review")
button.hasAttribute("id")

let geo=categories.getAttribute("id")
console.log(geo);
const h1=document.querySelector(".h1")


 const dele=document.querySelector("del")


form.addEventListener('submit',(events)=>{
   events.preventDefault()

   set=write.value
   parent.innerHTML +=`<div class="html">
<h1 class="h1">${set}</h1>

<div id="btnn" class="child">
<button class="btn1">Edit</button>
<button class="btn2">Completed</button>
<button class="btn3">Delete</button>
</div>
<h2 class="heading2">Well done! Your task is completed.</h2>
</div>`
form.reset()

})

parent.addEventListener('click',(e)=>{
   if(e.target.classList.contains("btn3")){
      e.target.closest(".html").remove()
   }

})









