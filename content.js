const noteEl = document.getElementById('note-el');
const headingElement = document.querySelector('.heading-element');
const saveNoteBtn = document.getElementById('save-note-btn');

const notesCategories = [];


  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const selectedColor = document.querySelector('.selected-color');




saveNoteBtn.addEventListener('click', () => {
    const heading = headingElement.value.trim();
    const note = noteEl.value.trim();

    if (!heading && !note) return;
    const noteStorage = JSON.parse(localStorage.getItem('notesEntities')) || [];
    

    noteStorage.push({ heading, note });

   console.log ("save Btn:", localStorage.setItem('notesEntities', JSON.stringify(noteStorage)));

    window.dispatchEvent(new Event('storage'))

    headingElement.value = '';
    noteEl.value = '';

    window.location.href= "index.html"

    console.log({ heading, note });
});



dropdownToggle.addEventListener('click', ()=>{
    dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', (e)=>{
    if(!e.target.closest('.dropdown')){
        dropdownMenu.classList.remove('show')
    }
})

document.querySelectorAll('.color-option').forEach(option=>{
    option.addEventListener('click', function(){
        const color = this.getAttribute('data-color');
        noteEl.style.backgroundColor=color;

        selectedColor.style.backgroundColor= color;

        localStorage.setItem('bgcolor', color)
        dropdownMenu.classList.remove('show')
    })
})

const savedColour = localStorage.getItem('bgcolor');

if(savedColour){
    document.body.style.backgroundColor = savedColour;
    selectedColor.style.backgroundColor = savedColour;
}