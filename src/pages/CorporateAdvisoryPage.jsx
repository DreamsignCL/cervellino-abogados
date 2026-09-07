
import AsesoriaCorporativa from '../assets/img/tramites-herencia.jpg';
import { useNavigate } from 'react-router-dom';

function CorporateAdvisoryPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA CORPORATIVA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>Asesoramos a nuestros clientes en:</p>

                            <ul>
                                <li>Estructuración, Organización y Constitución, Modificaciones y Transformación de sociedades como además brindar asesoría en la ejecución de sus negocios y relaciones societarias.</li>
                                <li>Adquisiciones, Estructuraciones, Fusiones y Divisiones Sociales.</li>
                                <li>Directorios, Juntas de Accionistas y Pacto de Accionistas.</li>
                                <li>Controversias entre inversionistas, socios y administradores.</li>
                                <li>Redacción de Contratos Comerciales.</li>
                                <li>Tributación de empresas y sus socios accionistas.</li>
                                <li>Asesoría Legal en comercio exterior y bancarios, bienes raíces, aduaneros, marítimos, derecho de autor y marcas, herencias, inversiones nacionales y extranjeras, laboral y negociación colectiva, protección al consumidor, resoluciones alternativas de conflictos, reclamos y recursos tanto administrativos como constitucionales y de responsabilidades.</li>
                                <li>Constitución, modificación o disolución de Fundaciones y Corporaciones.</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ AsesoriaCorporativa } alt="" />
                        </div>
                    </div>
                    
                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default CorporateAdvisoryPage;
