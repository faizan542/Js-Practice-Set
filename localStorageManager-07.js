// 7. The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note){
    if(typeof(Storage)!== undefined){
        const noteJson = JSON.stringify(note);
        localStorage.setItem("Note" + Date.now(), noteJson);
        console.log("Note Saved Successfully!");
    }else{
        console.log("This browser does not support local storage");
    }
}

const notes = {
    title: `Hello World`,
    desc: `This is a first note`
};
saveNoteToLocalStorage(notes);