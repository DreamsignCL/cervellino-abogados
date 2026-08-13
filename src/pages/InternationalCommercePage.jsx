
import ComercioInternacional from '../assets/img/comercio-internacional.jpg';
import { useNavigate } from 'react-router-dom';

function InternationalCommercePage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>COMERCIO INTERNACIONAL, INTERNACIONALIZACIÓN, CONTRATOS INTERNACIONALES Y BÚSQUEDA DE INVERSIONES</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a empresas extranjeras interesadas en realizar negocios en Chile o Joint Ventures con empresas chilenas o en la búsqueda de una agencia o establecimiento permanente o constitución de una sociedad, de representación, distribución o franquicia. Contamos con experiencia en materia de importaciones, exportaciones, inversión extranjera, derecho aduanero y una plataforma de asociados y alianzas de excelencia para asesorar a inversionistas en la región o en Latam
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ ComercioInternacional } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default InternationalCommercePage
