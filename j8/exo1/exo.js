// ==============Modèle================
const notes = [];
document.querySelector("#add-note").addEventListener("click", () => {
    const title = document.querySelector("#note-title").value;
        const content = document.querySelector("#note-content").value;

        if (title.trim() === "") {
            alert("Le titre ne peut pas être vide"); //=> dans contrôleur
            return;
        }

        const note = {
            id: Date.now(),
            title: title.trim(), //=> en faire un modèle
            content: content.trim(),
            createdAt: new Date()
        };

        notes.push(note);

        // =============Vue================

        const notesList = document.querySelector("#notes-list");
        notesList.innerHTML = "";

        notes.forEach(note => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");//=> factoriser
            noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${note.id})">Supprimer</button>
            `;
            notesList.appendChild(noteElement);
        });

    document.querySelector("#note-title").value = "";
    document.querySelector("#note-content").value = "";

    localStorage.setItem("notes", JSON.stringify(notes));
    });

// ============Contrôleur=============
function deleteNote(id) {
    const index = notes.findIndex(n => n.id === id);
    notes.splice(index, 1);

    const notesList = document.querySelector("#notes-list");
    notesList.innerHTML = "";

    notes.forEach(note => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button onclick="deleteNote(${note.id})">Supprimer</button>
        `;
        notesList.appendChild(noteElement);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}