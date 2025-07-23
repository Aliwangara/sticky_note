


const cardList = document.querySelector('.second-card-container');
const clearBtn=  document.getElementById('clear-btn')

// Get notes from localStorage
function getNotes(){
    return  JSON.parse(localStorage.getItem('notesEntities')) || [];
    

}

function bacgroudDisplay(){
   return localStorage.getItem('bgcolor') || '#f9fafb';
}

displayNotes()

function displayNotes() {
    const notesStorage = getNotes()
    const bgcolor = bacgroudDisplay()
  cardList.innerHTML = '';

  notesStorage.forEach((note, index) => {
    const card = document.createElement('div');
    card.className = "card";
    card.style.backgroundColor = bgcolor;

    card.innerHTML = `
      <div class="card-header">
        <h2 class="note-heading"contenteditable="true">${note.heading}</h2>
      </div>
      <div class="card-body">
        <p contenteditable="true">${note.note}</p>
      </div>
      <div class="card-footer">
        <a  class="edit-text"><i class="fa-solid fa-pen-to-square"> Edit</i></a>
        <a onClick ="deleteNote(${index})"><i class="fa-solid fa-trash"> Delete</i></a>
      </div>
    `;

    const noteHeading = card.querySelector('.note-heading');
    const noteBody = card.querySelector('.card-body p');

   const editText = card.querySelector('.edit-text');

   editText.addEventListener('click', ()=>{


       noteHeading.addEventListener('blur', ()=>{
        if(noteHeading){
            notesStorage[index].heading = noteHeading.innerHTML.trim();
            localStorage.setItem('notesEntities', JSON.stringify(notesStorage))
        }
    })

    noteBody.addEventListener('blur', ()=>{
        if(noteBody){
            notesStorage[index].note= noteBody.innerHTML.trim();
            localStorage.setItem('notesEntities', JSON.stringify(notesStorage))
        }
    })




   })
   

    cardList.appendChild(card);
  });
}


function deleteNote(index){
    const notesStorage = getNotes();
    notesStorage.splice(index, 1)

    const setLocal = localStorage.setItem('notesEntities', JSON.stringify(notesStorage));
    console.log("deletedItems:", setLocal)

    displayNotes()

}

window.addEventListener('storage', ()=>{
    displayNotes()
})

displayNotes(); 

clearBtn.addEventListener('click', ()=>{
    
    console.log("clearItems",localStorage.removeItem('notesEntities') );
    displayNotes()
   
})






