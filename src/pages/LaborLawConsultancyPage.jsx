
import AsesoriaLaboral from '../assets/img/asesoria-laboral.jpg';
import { useNavigate } from 'react-router-dom';

function LaborLawConsultancyPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA LABORAL</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos en materias de derecho laboral y legislación sobre contrataciones, asesorando a todo tipo de empleadores del sector privado, tanto nacionales como extranjeros, tales como:
                            </p>

                            <ul>
                                <li>Asesoría en materias laborales, previsionales, materias sindicales y relaciones laborales.</li>
                                <li>Estructuración y redacción de contratos de trabajo individuales y colectivos.</li>
                                <li>En procesos de due diligence laboral y en la organización de áreas de recursos humanos en la adquisición, reestructuración o transformación de empresas.</li>
                                <li>Auditorías laborales y previsionales.</li>
                                <li>Temas de despidos y restructuraciones.</li>
                                <li>Legislación en seguridad social, pensiones, salud y accidentes laborales.</li>
                                <li>Llevar a cabo, negociar y documentar procesos de negociación colectiva.</li>
                                <li>Cumplimiento de la normativa laboral.</li>
                                <li>Procedimientos administrativos y contencioso-administrativos.</li>
                                <li>Representación en todo tipo de juicios laborales. Contamos con un equipo especialista en litigios de alta complejidad con vasta experiencia en tramitación ante las Cortes de Apelaciones y ante la Corte Suprema.</li>
                                <li>Asesoría en temas migratorios y contrataciones de trabajadores extranjeros.</li>
                            </ul>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ AsesoriaLaboral } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default LaborLawConsultancyPage
