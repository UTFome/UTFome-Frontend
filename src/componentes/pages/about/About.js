import './About.css';
import bunner from '../../../assets/images/about-bunner.jpg';
import felipe from '../../../assets/images/about-felipe.jpeg';
import pamella from '../../../assets/images/about-pamella.jpeg';
import thaynara from '../../../assets/images/about-thaynara.jpeg';
import reginaldo from '../../../assets/images/about-reginaldo.jpg';
import breno from '../../../assets/images/about-breno.jpg';
import marcos from '../../../assets/images/about-marcos.jpg';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

function About(){
    return (
        <>  
            <Header />
            <section className="about" id="about">
                <h1 className="heading"> <span>about</span> us </h1>

                <div className="row">

                    <div className="image">
                        <img src={bunner} alt=""/>
                    </div>

                    <div className="content">
                        <h3>Pensado para você</h3>
                        <p className="sobre">Esse site é fruto de um projeto criado na disciplina de Programação de Aplicativo do curso de Ciência da Computação. Nosso objetivo é ajudar aos alunos que vendem comida no ambiente da UTFPR, sabemos o quanto a divulgação influencia nas vendas e, por isso, queremos proporcionar a vocês uma plataforma específica de divulgação. Todos os alimentos que estão à venda na faculdade em um só lugar!</p>
                    </div>

                </div>
            </section>

            <section className='pessoas-container'>

                <div className='pessoa'>
                    <img src={felipe} alt=''/>
                    <h3>felipe archanjo da cunha mendes</h3>
                    <h4>estudante de ciência da computação - UTFPR</h4>
                </div>

                <div className='pessoa'>
                    <img src={pamella} alt=''/>
                    <h3>pamella lissa sato tamura</h3>
                    <h4>estudante de ciência da computação - UTFPR</h4>
                </div>

                <div className='pessoa'>
                    <img src={thaynara} alt=''/>
                    <h3>thaynara ribeiro falcão dos santos</h3>
                    <h4>estudante de ciência da computação - UTFPR</h4>
                </div>

                <div className='pessoa'>
                    <img src={breno} alt=''/>
                    <h3>breno farias da silva</h3>
                    <h4>estudante de ciência da computação - UTFPR</h4>
                </div>

                <div className='pessoa'>
                    <img src={marcos} alt=''/>
                    <h3>marcos bezner rampaso</h3>
                    <h4>estudante de ciência da computação - UTFPR</h4>
                </div>

                <div className='pessoa'>
                    <img src={reginaldo} alt=''/>
                    <h3>reginaldo gregório de souza neto</h3>
                    <h4>estudante de ciência da computação - UTFPR</h4>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default About;