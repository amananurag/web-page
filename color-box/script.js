

document.addEventListener('DOMContentLoaded', function (){
document.querySelectorAll('button').forEach((button) => {
     button.onclick = function (){
        document.querySelector('.box').style.backgroundColor = button.dataset.color;
         
     }
})
 
   

});