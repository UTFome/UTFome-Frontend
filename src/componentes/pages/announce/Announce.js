
import React from 'react';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import './Announce.css';
import logo from '../../../assets/images/Logo_grande.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';


const initialValues = {
    nome: '',
    valor: '',
    descricao: '',
    categoria: '',
}
const onSubmit = values => {
    console.log('Dados envidados!', values)
}

const validate = values => {


    let errors = {

    }

    if (!values.nome) {
        errors.nome = 'Obrigatório!'
    }
    if (!values.lastName) {
        errors.lastName = 'Obrigatório!'
    }
    
    if (!values.descricao) {
        errors.password = 'Obrigatório!'
    }
    
    return errors
}


function Announce() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    const [nome] = useState('');
    const [valor] = useState('');
    const [descricao] = useState('');
    const [categoria] = useState('');


    return (
        <div className='container'>
            <div className='container-announce'>
                <div className='wrap-register'>
                    <form
                        className='announce-form'
                        onSubmit={formik.handleSubmit}>
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
                                placeholder="Categoria"
                                className={categoria !== '' ? 'has-val input' : 'input'}
                                type='text'
                                id='categoria'
                                name='categoria'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.categoria}
                                />
                            <span className='focus-input'></span>
                            {formik.touched.categoria && formik.errors.categoria ? (
                                <div className='error'>{formik.errors.categoria}
                            </div>) : null}
                        </div>
                        <div className='form-control'>
                            <input
                                placeholder="Valor do produto"
                                className={valor !== '' ? 'has-val input' : 'input'}
                                type='number'
                                id='valor'
                                name='valor'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.valor}
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

