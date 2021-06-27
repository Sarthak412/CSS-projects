// Get modal element 
let modal = document.getElementById('simpleModal');
// get modal button
let modalbtn = document.getElementById('modalbtn');

let modalbtn2 = document.getElementById('modalbtn2');

let modalbtn3 = document.getElementById('modalbtn3');
// get close button
let closebtn = document.getElementsByClassName('closebtn')[0];

//listen for click
modalbtn.addEventListener('click', openModal);

modalbtn2.addEventListener('click', openModal);

modalbtn3.addEventListener('click', openModal);
// listen for close 
closebtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', clickOutside);

//function open modal
function openModal(){
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// function to close modal if clicked outside

function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }    
}