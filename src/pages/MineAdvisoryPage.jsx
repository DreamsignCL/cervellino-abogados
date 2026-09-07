
import { useNavigate } from 'react-router-dom';
import DerechoMinero from '../assets/img/derecho-minero.jpg';

function RealEstatePage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA DERECHO MINERO</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a nuestros clientes en materias relativas a la constitución, adquisición, regularización, protección y ejercicio de derechos mineros, así como en los distintos aspectos legales que surgen en el desarrollo de proyectos y operaciones del sector minero.
                            </p>

                            <p>Acompañamos a empresas en materias de concesiones, servidumbres, amparo, oposiciones, conflictos de superposición y procedimientos administrativos y judiciales.</p>

                            <p>Asimismo, contamos con experiencia en negociación de contratos mineros de todo tipo, incluyendo acuerdos complejos, relacionados al financiamiento de proyectos mineros, con un enfoque práctico y orientado al negocio.</p>

                            <p>Tenemos vasta experiencia en los más diversos litigios relacionados con la actividad minera.</p>

                            <p>Por ende nuestro objetivo es entregar soluciones jurídicas estratégicas, oportunas como eficaces para prevenir y resolver conflictos vinculados a la actividad minera.</p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ DerechoMinero } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default RealEstatePage
