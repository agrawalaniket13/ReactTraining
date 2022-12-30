let notes=[];
document.querySelector("form").onsubmit=(e)=>{
    e.preventDefault();
    const title=document.getElementById("title");
    const description=document.getElementById("description");
    console.log(title.value, description.value);

    if(!title && title.trim() === "" && !description && description.trim() === ""){
        return console.log("Invalid input")
    }
    createNote(title.value,description.value);
};
function createNote(title,description){
    const newNote={title,description,id:Date.now()};
    notes.push(newNote);
    localStorage.setItem("notes",JSON.stringify(notes));
    console.log(notes);
    displayNotes();
}
function displayNotes(){
    if(localStorage.getItem('notes')){
        notes=JSON.parse(localStorage.getItem("notes"));
        console.log(notes);
        const ul=document.querySelector("ul");
        document.querySelectorAll("li").forEach((child) => child.remove());
        notes.forEach((note)=>{
            const li=document.createElement("li");
            const div=document.createElement("div");
            const h6=document.createElement("h6");
            const p=document.createElement("p");
            h6.innerText=note.title;
            p.innerText=note.description;
            div.appendChild(h6);
            div.appendChild(p);
            li.appendChild(div);
            ul.appendChild(li);
        });
    }
    
}
window.onload=()=>{
    displayNotes();
}