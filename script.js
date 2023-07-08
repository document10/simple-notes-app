var add = document.getElementById("add")
var clear = document.getElementById("clear")
var help = document.getElementById("help")
var input = document.getElementById("input")
var disp = document.getElementById("notes")
var notes = {}
var i = 0

var addNote = () => {
    if(input.value==""){
        alert("Cannot add an empty note")
        return;
    }
    var el = document.createElement("span")
    el.role = "textbox"
    el.innerHTML = input.value
    el.id = String(i)
    el.contentEditable = "true"
    el.className = "el"
    el.addEventListener("mouseup",(e)=>{
        if(e.button==1)removeNote(Number(el.id))
    })
    el.addEventListener("keydown",(e)=>{
        if(e.code == "Delete" || el.innerHTML == "" || el.innerHTML == null)removeNote(Number(el.id))
    })
    disp.appendChild(el)
    input.value= ""
    notes[Number(el.id)]=el
    i++
}
var clearNotes = ()=>{
    disp.innerHTML= ""
    notes = {}
    i = 0
}
var removeNote = (n) =>{
    notes[n]=null
    document.getElementById(n).remove()
}
var showHelp = () => {
    input.value = "Type a note in the above textbox and press the + button or Enter to add the note.Left-Click on a note and edit it.Middle-Click a note or press Delete while editing to remove it and press the X button to clear all notes.Press the ? button to show this help in the future."
    addNote()
}


add.addEventListener("click",(e)=>{
    addNote();
})
input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter")addNote();
})
clear.addEventListener("click",(e)=>{
    clearNotes()
})
help.addEventListener("click",(e)=>{
    showHelp()
})

showHelp()
input.value = ""