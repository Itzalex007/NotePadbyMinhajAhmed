const addButton = document.querySelector("#add")

const updateLS =()=>{ 

const textareaData = document.querySelectorAll("textarea");
const notes = [] ;
console.log(textareaData);
textareaData.forEach((note)=>{
return notes.push(note.value)
})
console.log(notes);
localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote =(text=  '')=>{
const note = document.createElement('div')
note.classList.add("centerKaro")
const htmlData = `  
<div class="opration">
<div class="twoBtn">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete" id = "dlt"><i class="fa-solid fa-trash"></i></button>
</div>
<div class = "main ${text ? "" : "hidden" }"></div>
<textarea class = "${text ? "hidden" : ""}"></textarea> 
</div> `;
note.insertAdjacentHTML('afterbegin',htmlData);
// console.log(note);


const main = note.querySelector(".main")
const editBtn = note.querySelector(".edit")
const deleteBtn = note.querySelector(".delete")
const textarea = note.querySelector("textarea")

        deleteBtn.addEventListener('click',()=>{
        note.remove();
updateLS();

})

textarea.value=text
main.innerHTML=text

editBtn.addEventListener("click",()=>{
        main.classList.toggle("hidden")
        textarea.classList.toggle("hidden")
})
 
textarea.addEventListener("change",(event)=>{
const value = event.target.value;
console.log(value);
main.innerHTML=value

updateLS();
})
document.body.appendChild(note)
}

const notes = JSON.parse(localStorage.getItem('notes')) ;
if(notes){ notes.forEach((note)=>addNewNote(note)) };


addButton.addEventListener("click",()=>addNewNote())