const noteEl = document.getElementById('note-el');
const headingElement = document.querySelector('.heading-element');
const saveNoteBtn = document.getElementById('save-note-btn');




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



