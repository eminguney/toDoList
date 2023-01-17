let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('todoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

//let title = document.getElementById('title');

//title.style.color = "red";

//addToDoButton.style.color= "white";

addToDoButton.addEventListener('click', function(){
    //Paragraf oluşturup tıklanınca içine aktaracak
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);  
    paragraph.innerHTML = inputText.value;
    inputText.value="";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph); 
    });

    clearToDo.addEventListener('click', function(){
        //toDoContainer.remove(); div'i tamamen siler
        //paragraph.style.display = 'none'; görünümü gizle
        paragraph.remove(); 
    })
})
