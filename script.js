


const cardList = document.querySelector('.second-card-container');
const clearBtn=  document.getElementById('clear-btn')

// Get notes from localStorage
function getNotes(){
    return  JSON.parse(localStorage.getItem('notesEntities')) || [];
    

}


displayNotes()

function displayNotes() {
    const notesStorage = getNotes()
  cardList.innerHTML = '';

  notesStorage.forEach((note, index) => {
    const card = document.createElement('div');
    card.className = "card";

    card.innerHTML = `
      <div class="card-header">
        <h2>${note.heading}</h2>
      </div>
      <div class="card-body">
        <p>${note.note}</p>
      </div>
      <div class="card-footer">
        <a href="#"><i class="fa-solid fa-pen-to-square"> Edit</i></a>
        <a onClick ="deleteNote(${index})"><i class="fa-solid fa-trash"> Delete</i></a>
        <a href="#"><img src="images/red_pin.png" alt="Pin Note"/></a>
      </div>
    `;

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


