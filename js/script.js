const overlay = document.querySelector('.overlay');
const formContatto = document.querySelector('form');
const closeModal = document.querySelector('.closeModal');
const buttonForm = document.getElementById('button-form');

const Nome = document.getElementById('nome');
const Email = document.getElementById('email');
const Motivo = document.getElementById('motivo');
const Data = document.getElementById('data');
const textareaMessaggio = document.getElementById('messaggio');
const checkboxConsenso = document.getElementById('consenso');
const submitbotton = formContatto.querySelector('submitbotton');

const registrazione = {
    nome: '',
    email: '',
    motivo: '',
    data: '',
    messaggio: '',
}

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
});