function addComment(id, inputId) {
    if (document.getElementById(inputId).value !== '') {
        var div1 =  document.getElementById(id);
        var com = document.createElement('div');
        com.classList.add('comment');
        com.innerText = document.getElementById(inputId).value;
        div1.appendChild(com);
    }
}