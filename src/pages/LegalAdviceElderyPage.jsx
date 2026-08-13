
import LegalAdviceEldery from '../assets/img/legal-advice-eldery.jpg';
import { useNavigate } from 'react-router-dom';

function LegalAdviceElderyPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA LEGAL A PERSONAS MAYORES, FAMILIAS, EMPRESAS DE SERVICIOS, CORPORACIONES, FUNDACIONES y ORGANIZACIONES RELACIONADAS A LA TEMÁTICA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a personas mayores en el marco de la nueva <strong>Ley Integral de Personas Mayores y de Promoción del Envejecimiento Digno, Activo y Saludable</strong> (<a href="https://www.leychile.cl/Consulta/masinfo?txtId=21822" target="_blank" rel="noopener noreferrer">Ley N°21.822</a>), en materia de acceso a la justicia en áreas del derecho civil y de familia, según últimas modificaciones legales y respecto de sus derechos como consumidor,  en materia laboral y además a sus familias en procesos de planificación hereditaria, testamentos e interdicción por demencia de personas mayores como en materias de posesiones efectivas, aperturas de testamentos o particiones.
                            </p>

                            <p>
                                Asesoramos legalmente a empresas que prestan servicios a personas mayores; y a fundaciones, corporaciones y organizaciones de diversa índole en la temática que ayudan a la protección de los derechos de las personas mayores en Chile.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ LegalAdviceEldery } alt="" />
                        </div>
                    </div>
                    
                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default LegalAdviceElderyPage;
