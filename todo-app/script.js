document.addEventListener('DOMContentLoaded', function (){
document.querySelector('#form').onsubmit = function(){
    const li = document.createElement('li');
    li.innerHTML = document.querySelector('#task').value;
    li.classList.add('list');
    document.querySelector('#tasks').append(li);
    document.querySelector('#task').value = '';
    return false
}
});