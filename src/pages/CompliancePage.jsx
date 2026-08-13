import Compliance from '../assets/img/compliance.jpg';
import { useNavigate } from 'react-router-dom';

function CompliancePage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>COMPLIANCE</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos en un modelo preventivo del riesgo legal en materia de ley penal y del consumidor a empresas nacionales como extranjeras en requerimientos de asistencia preventiva, due diligence, investigaciones internas, capacitaciones y litigación. Además asistimos en la adopción de estándares requeridos bajo normativas extranjeras
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ Compliance } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default CompliancePage
