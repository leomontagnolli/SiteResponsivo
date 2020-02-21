let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");

btn.addEventListener('click', () => {
    document.body.style.backgroundColor='white';

});

btn1.addEventListener('click', () => {
    document.body.style.backgroundColor='blue';
});

//arrow function

const showMessage = () => {
    alert('messag 1');

}
// lambda = annonymous function
const showMessage2 = function() {
    alert('messsage 2');
}

//tradicional 
function ShowMessage3 () { 
    alert('messsage 3');
}


let n1 =10;
let n2 =20;

function soma () {

}