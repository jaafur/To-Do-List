let theInput = document.querySelector(".add-task input"),
    theAddButton = document.querySelector(".add-task .plus"),
    taskContent = document.querySelector(".task-content"),
    noTaskMsg = document.querySelector(".no-tasks-msg")
    taskCount = document.querySelector(".task-count span"),
    tasksComplete = document.querySelector(".tasks-complete span");


window.onload = function () {
    theInput.focus();
    
    calculate();
}

theAddButton.onclick = function(){
    if (theInput.value === "") {
        console.log("The Input Is Empty")
        
    }else{
        if (document.body.contains(noTaskMsg = document.querySelector(".no-tasks-msg"))) {
            noTaskMsg.remove(); 
        }
        
        let theMainSpan = document.createElement("span"),
            deleteSpan = document.createElement("span"),
            text = document.createTextNode(theInput.value),
            deleteText = document.createTextNode("delete");
        theMainSpan.appendChild(text);
        deleteSpan.appendChild(deleteText);
        theMainSpan.appendChild(deleteSpan);
        taskContent.appendChild(theMainSpan);
        theMainSpan.className = "task-box";
        deleteSpan.className = "delete";
    }
}
document.addEventListener('click',function(e){

  
    if (e.target.className == "delete") {
        e.target.parentNode.remove()
        
    }
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished")
        
    }
    if (taskContent.childElementCount == 0) {
        createMsg();
        
    }
    calculate();
})
function createMsg(){
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("There Is No Tsks");
    msgSpan.className = "no-tasks-msg";
    msgSpan.appendChild(msgText);
    taskContent.appendChild(msgSpan);
}
function calculate(){
    taskCount.innerHTML = document.querySelectorAll(".task-content .task-box").length;
    tasksComplete.innerHTML = document.querySelectorAll(".task-content .finished").length;
}