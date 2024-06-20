const formNote=document.getElementById('noteForm');
const tambahNote=document.getElementById('tambah');
const judulInput=formNote.elements.title;
const bodyTextarea=formNote.elements.body;

// 'use strict';

formNote.addEventListener('submit', (e) => {
    e.preventDefault();
    validasiInput();

    judulInput.value='';
    bodyTextarea.value='';

});
   
const customValidationUsernameHandler=e=>{
    e.target.setCustomValidity('');
    if(e.target.validity.valueMissing){
        e.target.setCustomValidity('Field Ini Wajib Diisi!');
        return;
    }
}

judulInput.addEventListener('invalid', customValidationUsernameHandler);
bodyTextarea.addEventListener('invalid', customValidationUsernameHandler);

function validasiInput(){
    if(judulInput.value==='' && bodyTextarea.value===''){
        judulInput.classList.add('input-error');
        bodyTextarea.classList.add('textarea-error');
    }else{
        judulInput.classList.remove('input-error');
        bodyTextarea.classList.remove('textarea-error');

    }
}


const fromLogin=document.querySelector('#form-login');
const loaderLogin=document.getElementById('loaderLogin');
fromLogin.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const headerNotes=document.querySelector('header-notes');
    const mainNotes=document.querySelector('main');
    const footerNotes=document.querySelector('footer-notes');
    const wrapper=document.querySelector('.wrapper');
    loaderLogin.style.display = 'block'; 

    setTimeout(function() {
    if (username === 'user' && password === '123') {
        headerNotes.removeAttribute('hidden');
        mainNotes.removeAttribute('hidden');
        footerNotes.removeAttribute('hidden');
        fromLogin.setAttribute('hidden', true);
        wrapper.style.display='none';
        console.log('login berhasil');
        loaderLogin.style.display = 'none';

    } else {
        loaderLogin.style.display = 'none';
        document.getElementById('errorMessage').style.display = 'block'; 
            setTimeout(function() {
                document.getElementById('errorMessage').style.display = 'none'; 
             }, 2000);
        loaderLogin.style.display = 'none';

    }
    },2000);
});



