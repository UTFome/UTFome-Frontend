import React from 'react';
import './Register.css';
import logo from '../../../assets/images/Logo_grande.png';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';


const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const onSubmit = values => {
    console.log('Dados envidados!', values)
}

const validate = values => {


    let errors = {

    }

    if (!values.name) {
        errors.name = 'Obrigatório!'
    }
    if (!values.lastName) {
        errors.lastName = 'Obrigatório!'
    }
    if (!values.email) {
        errors.email = 'Obrigatório!'
    }else if(!/^[A-Z0-9._%+-]+@[utfpr.edu.]+\.[B-R]{2,4}$/i.test(values.email)){
        errors.email = 'email inválido! (utilize seu email institucional)'
    }
    if (!values.password) {
        errors.password = 'Obrigatório!'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Obrigatório'
    }else if(values.password != values.confirmPassword){
        errors.confirmPassword = 'As senhas devem ser iguais!'
    }
    return errors
}


function Register() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    const [name] = useState('');
    const [lastName] = useState('');
    const [email] = useState('');
    const [password] = useState('');
    const [confirmPassword] = useState('');


    return (
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-register'>
                    <form
                        className='login-form'
                        onSubmit={formik.handleSubmit}>
                        <span className='login-form-title'>
                            <Link to="/main">
                                <img src={logo}></img>
                            </Link>
                        </span>

                        <div className='form-control'>

                            <input
                                placeholder="Digite seu nome"
                                className={name !== '' ? 'has-val input' : 'input'}
                                type='text'
                                id='name'
                                name='name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <span className='focus-input'></span>
                            { formik.touched.name && formik.errors.name ? (
                            <div className='error'>{formik.errors.name}
                            </div>) : null}
                        </div>

                        <div className='form-control'>

                            <input
                                placeholder="Digite seu sobrenome"
                                className={lastName !== '' ? 'has-val input' : 'input'}
                                type='text'
                                id='lastName'
                                name='lastName'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            <span className='focus-input'></span>
                            { formik.touched.lastName && formik.errors.lastName ? (
                            <div className='error'>{formik.errors.lastName}
                            </div>) : null}
                        </div>

                        <div className='form-control'>

                            <input
                                placeholder="Digite seu email institucional"
                                className={email !== '' ? 'has-val input' : 'input'}
                                type='email'
                                id='email'
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <span className='focus-input'></span>
                            {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}
                            </div>) : null}
                        </div>

                        <div className='form-control'>

                            <input
                                placeholder="Digite sua senha"
                                className={password !== '' ? 'has-val input' : 'input'}
                                type='password'
                                id='password'
                                name='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <span className='focus-input'></span>
                            {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}
                            </div>) : null}
                        </div>

                        <div className='form-control'>

                            <input
                                placeholder="Confirme sua senha"
                                className={confirmPassword !== '' ? 'has-val input' : 'input'}
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            <span className='focus-input'></span>
                            {formik.touched.confirmPassword  && formik.errors.confirmPassword ? (
                            <div className='error'>{formik.errors.confirmPassword}
                            </div>) : null}
                        </div>


                        <button className='login-form-btn'
                            type='submit'>              
                            Cadastre-se
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Register;