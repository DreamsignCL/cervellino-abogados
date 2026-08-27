
import BanderaItaliana from '../assets/img/bandera-italiana.jpg';
import { useNavigate } from 'react-router-dom';

function AdvisoryInItalyPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA LEGAL EN ITALIA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a personas o familias en materias de Herencias, Protección Patrimonial, Testamento, Compra y Venta de inmuebles, Becas y Estudios para estudiantes o profesionales, Visas y materias relacionadas con inmigración, derecho de familia, trámites legales en general (mandatos, pensiones, etc.), y Litigios de diversa índole, por medio de nuestra red multidisciplinaria de asociados en Italia.
                            </p>
                            <p>
                                Asesoramos a Empresas en temas legales y comerciales, negociaciones, contratos, temas fiscales y contables. controversias o litigios en general en Italia por medio de nuestros asociados.
                            </p>
                            <p>
                                Asesoramos a Chilenos radicados en Italia que desean asesoría legal de diversa índole en Chile.
                            </p>
                            <p>
                                Asesoramos a Italianos que desean asesoría legal de diversa índole en Chile.
                            </p>
                            <p>
                                Asesoramos a Inversionistas y Empresarios Italianos que deseen asesoría legal de diversa índole en Chile.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ BanderaItaliana } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AdvisoryInItalyPage
