var list = document.getElementById("list");

function addTodo(){
    var todo = document.getElementById("todo_item");
    var li= document.createElement("li");
    var liText = document.createTextNode(todo.value);
    li.setAttribute("class","liEdit")
    //////Delete btn ///////////////////
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","delbtn");
    delBtn.setAttribute("onclick","delItem(this)")
    delBtn.appendChild(delText);

    /////////Edit btn //////////////////
    var edit = document.createElement("button");
    var editText = document.createTextNode("Edit");
    edit.appendChild(editText);
    edit.setAttribute("class","editBtn");
    edit.setAttribute("onClick","editItems(this)");

    li.appendChild(delBtn);
    li.appendChild(liText);
   
    list.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(edit);
    todo.value = "";
}

function delItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    var orderList = document.getElementById("list");
    orderList.innerHTML = "";
}
function editItems(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter Todo to add",val);
    e.parentNode.firstChild.nodeValue = editVal; 
}
