const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist .box");
const deleteAll = document.querySelector(".btn");





inputBox.onkeyup = () =>{
    let userData = inputBox.value;

    if(userData.trim()!=0) addBtn.classList.add("active")
        else addBtn.classList.remove("active");
    
}

//Calling on load
ShowLists();

addBtn.onclick = () =>{
    let userData = inputBox.value;
    let storeData = localStorage.getItem("New List");
    if(storeData==null){
        listArr = [];
    }else{
        listArr = JSON.parse(storeData);
    }
    listArr.push(userData);
    localStorage.setItem("New List",JSON.stringify(listArr));
    ShowLists();
}

function ShowLists() {
    let storeData = localStorage.getItem("New List");
    if(storeData==null){
        listArr = [];
    }else{
        listArr = JSON.parse(storeData);
    }
    const pendingTask = document.querySelector(".pending");
    pendingTask.textContent = listArr.length;
    if(listArr.length >0) deleteAll.classList.add("active");
    else deleteAll.classList.remove("active");
    let newParaTag = '';
    
    listArr.forEach((element,index) => {
        newParaTag += `
        <div class="list">
                <div class="imgbox">
                    <img src="./assets/img/logo/logoicon.png" alt="img">
                </div>
                    <div class="content">
                    <h2  class="rank"><small><i onclick="deleteList(${index})" class="fa-solid fa-trash"></i></small></h2>
                    <h4>${element}</h4>
                    <p style="color:#ff0156c9"></p>
                    </div>
                </div>
        `;
        
    });
    todoList.innerHTML = newParaTag;

    inputBox.value="";
}

function deleteList(index){
    let storeData = localStorage.getItem("New List");
    listArr = JSON.parse(storeData);
    listArr.splice(index,1);
    localStorage.setItem("New List",JSON.stringify(listArr));
    ShowLists();
}

deleteAll.onclick = () =>{
    listArr = [];
    localStorage.setItem("New List",JSON.stringify(listArr));
    ShowLists();

}