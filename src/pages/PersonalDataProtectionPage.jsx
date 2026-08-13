
import DatosPersonales from '../assets/img/datos-personales.jpg';
import { useNavigate } from 'react-router-dom';

function PersonalDataProtectionPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>COMPLIANCE POR CUMPLIMIENTO LEY PROTECCIÓN DE DATOS PERSONALES</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a Empresas en Evaluar, Diseñar, Implementar y por ende realicen Cumplimiento en su organización empresarial respecto de la Ley de Protección de Datos Personales. Para ello, pueden requerir de un programa de protección de datos, que contempla implementar una estructura destinada a identificar, analizar y evaluar los riesgos para poder gestionarlos de manera adecuada.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ DatosPersonales } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default PersonalDataProtectionPage
