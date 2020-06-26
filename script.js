const colorbtn = document.querySelector('.colorbtn');
const bodyBcg = document.querySelector('body');
const colors = ['red', 'yellow', 'green', '#3b5998'];

colorbtn.addEventListener('click', changeColor);
 

function changeColor () {
    let random = Math.floor(Math.random() * colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}