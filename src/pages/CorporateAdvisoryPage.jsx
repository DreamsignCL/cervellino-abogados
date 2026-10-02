
import AsesoriaCorporativa from '../assets/img/tramites-herencia.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';

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
                    <div className="row mb-4">
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

                    <div className="faqs mb-4">
                        <AccordionItem title="¿Tu empresa está preparada para las decisiones que vienen?">
                            Crecer también exige estructura, prevención y estrategia legal.<br/>
                            Una preocupación real de quien dirige una empresa: crecer, invertir o tomar decisiones sin exponerse innecesariamente.
                        </AccordionItem>
                        <AccordionItem title="¿Qué pasa cuando los socios ya no están de acuerdo?">
                           Las relaciones societarias necesitan reglas claras, incluso cuando existe confianza.<br/>
                            Pactos de accionistas, derechos y obligaciones de los socios, administración, toma de decisiones y mecanismos para abordar controversias.
                        </AccordionItem>
                        <AccordionItem title="¿Tu contrato protege realmente los intereses de tu empresa?">
                            Firmar no es lo mismo que estar protegido.
                            Contratos comerciales, obligaciones, incumplimientos, responsabilidades, condiciones de salida y riesgos que suelen pasar inadvertidos.<br/>
                        </AccordionItem>
                        <AccordionItem title="¿Qué debes revisar antes de fusionar, dividir o adquirir una empresa?">
                            Una decisión de crecimiento también requiere una estructura jurídica adecuada.<br/>
                            Estructuración de operaciones, revisión societaria, riesgos contractuales, activos, pasivos, relaciones entre socios y formalización de la operación.
                        </AccordionItem>
                        <AccordionItem title="¿Qué ocurrirá con tu empresa si mañana cambia uno de sus socios?">
                            La continuidad empresarial también se planifica.<br/>
                            Continuidad de empresas familiares, herencias con participación societaria, pactos entre socios, reorganización patrimonial y prevención de conflictos futuros.
                        </AccordionItem>
                        <AccordionItem title="Las decisiones importantes merecen respaldo jurídico.">
                            Asesoría corporativa para estructurar, proteger y acompañar tu negocio.<br/>
                            Conversemos sobre tu empresa.
                        </AccordionItem>
                    </div>
                    
                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default CorporateAdvisoryPage;
