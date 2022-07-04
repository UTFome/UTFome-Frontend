
import React from 'react';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import './Announce.css';
import logo from '../../../assets/images/Logo_grande.png';
import { AuthContext } from '../../../contexts/auth';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const initialValues = {
    nome: '',
    descricao: '',
    preco: '',
    quantidade: ''
}

const validateOnBlur = values => {


    let errors = {

    }

    if (!values.nome) {
        errors.nome = 'Obrigatório!'
    }
    if (!values.descricao) {
        errors.descricao = 'Obrigatório!'
    }
    
    if (!values.preco) {
        errors.preco = 'Obrigatório!'
    }
    
    if (!values.quantidade) {
        errors.quantidade = 'Obrigatório!'
    }

    return errors
}


function Announce() {
    const { createProductAndRedirect } = useContext(AuthContext);

    const onSubmit = values => {
        console.log('Submetendo dados...')
        console.log(AuthContext.user)
        createProductAndRedirect(AuthContext.user.id, values);
        console.log('Dados envidados!', values)
        return false;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnBlur
    })

    const [nome] = useState('');
    const [descricao] = useState('');
    const [preco] = useState('');
    const [quantidade] = useState('');

    return (
        <div className='container'>
            <div className='container-announce'>
                <div className='wrap-register'>
                    <form
                        className='announce-form'
                        onSubmit={formik.handleSubmit}
                        method="post"
                        >
                        <span className='announce-form-title'>
                            <Link to="/main">
                                <img src={logo}></img>
                            </Link>
                        </span>
                        <h3>Anuncie seu produto</h3>
                        <div className='form-control'>
                            <input
                                placeholder="Nome do produto"
                                className={nome !== '' ? 'has-val input' : 'input'}
                                type='text'
                                id='nome'
                                name='nome'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nome}
                                />
                            <span className='focus-input'></span>
                            {formik.touched.nome && formik.errors.nome ? (
                                <div className='error'>{formik.errors.nome}
                            </div>) : null}
                        </div>
                        <div className='form-control'>
                            <input
                                placeholder="Quantidade"
                                className={quantidade !== '' ? 'has-val input' : 'input'}
                                type='number'
                                id='quantidade'
                                name='quantidade'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantidade}
                                />
                            <span className='focus-input'></span>
                            {formik.touched.categoria && formik.errors.quantidade ? (
                                <div className='error'>{formik.errors.quantidade}
                            </div>) : null}
                        </div>
                        <div className='form-control'>
                            <input
                                placeholder="Preço do produto"
                                className={preco !== '' ? 'has-val input' : 'input'}
                                type='number'
                                id='preco'
                                name='preco'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.preco}
                            />
                            <span className='focus-input'></span>
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error'>{formik.errors.email}
                            </div>) : null}
                        </div>

                        <div className='form-control'>
                            <textarea
                                placeholder="Descrição do produto"
                                className={descricao !== '' ? 'has-val input' : 'input'}
                                type='text'
                                id='descricao'
                                name='descricao'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.descricao}
                                />
                            <span className='focus-input'></span>
                            {formik.touched.descricao && formik.errors.descricao ? (
                                <div className='error'>{formik.errors.descricao}
                            </div>) : null}
                        </div>

                       

                        <button className='announce-form-btn'
                            type='submit'>              
                            Anunciar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Announce;

