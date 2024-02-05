const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('listContainer');
const addButton = document.getElementById('addButton');
const cerrarToDo = document.getElementById('cerrarToDo');

addButton.addEventListener('click' , () => {
    if (inputBox.value === '') {
        alert("Debes escribir una tarea");
    }else{
        let li = document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
});

listContainer.addEventListener('click' , function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

cerrarToDo.addEventListener('click' , () => {
    window.location.href = '../Pages/contactos.html';
});

function saveData(){
    localStorage.setItem('data' , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();




