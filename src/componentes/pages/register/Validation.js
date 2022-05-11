import React from 'react';
import './Register.css';
import './Register.js'
import { useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';


const form = document.getElementById('form');
const name = document.getElementById('name')
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('login-form-btn', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs()  {
    //esta função devrá pegar os valores dos inputs

    console.log('cheguei aqui')
    const nameValue = name.value.trim()
    const emailValue = email.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();


    //devemos agora verificar e mostrar o erro (se houver), depois invocar os ícones

    if(nameValue === ''){
        mostrarErroPara(name, 'O nome não pode ficar em branco!');
    } else {
        mostrarSucessoPara(name);
    }

}


function mostrarErroPara(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');
    
    small.errorMessage = message;

    formControl.className = '.wrap-input.error'
}