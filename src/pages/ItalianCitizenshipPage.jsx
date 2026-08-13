
import CiudadaniaItaliana from '../assets/img/ciudadania-italiana.jpg';
import { useNavigate } from 'react-router-dom';

function ItalianCitizenshipPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>RECONOCIMIENTO DE CIUDADANÍA ITALIANA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos en el análisis, investigación, búsqueda y recopilación de antecedentes (actas chilenas o italianas u otros antecedentes, etc.), para ayudar a nuestros clientes a recopilar y armar antecedentes consulares para el reconocimiento de la ciudadanía italiana ya sea por descendencia, adopción, residencia o matrimonio por vía administrativa o judicial. Somos expertos y contamos con años de experiencia en la materia.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ CiudadaniaItaliana } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ItalianCitizenshipPage
