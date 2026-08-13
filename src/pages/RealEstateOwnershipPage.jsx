
import CopropiedadInmobiliaria from '../assets/img/copropiedad-inmobiliaria.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';
import WhatsAppButton from '../assets/components/WhatsAppButton';

function RealEstateOwnershipPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>Asesoría legal especializada para comunidades y comités de administración</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Actuamos como Gerencia Legal externa para comunidades. Prevención de conflictos, cumplimiento normativo y soluciones eficientes.</h2>
                            <p>
                                En Cervellino & Asociados Abogados somos expertos en el acompañamiento legal
                                de comunidades, comités de administración y administradores de edificios y
                                condominios. Operamos como una Gerencia Legal externa que entrega soluciones
                                personalizadas y preventivas, resolviendo conflictos con eficacia y compromiso.
                                Contamos con años de experiencia en derecho de copropiedad y una reputación
                                sólida basada en la confianza, especialización y cercanía con nuestros clientes.
                                Nuestro objetivo es apoyar una gestión eficiente, transparente y en cumplimiento
                                con la normativa vigente.
                            </p>

                            <ul>
                                <li>Gerencia legal externa con enfoque preventivo.</li> 
                                <li>Acompañamiento constante a comunidades y administradores.</li> 
                                <li> Solución de conflictos legales de forma eficiente.</li> 
                                <li> Redacción y revisión de contratos, reglamentos y actas.</li> 
                                <li> Capacitación legal para comités y administradores.</li> 
                                <li> Cumplimiento con la Ley de Copropiedad Inmobiliaria N° 21.442.</li> 
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ CopropiedadInmobiliaria } alt="" />
                        </div>
                    </div>

                    <div className="text-center my-5">
                        <h2>¿Necesitas apoyo legal para tu comunidad? ¡Escríbenos por WhatsApp y te orientamos!</h2>
                        <WhatsAppButton title="Habla con un abogado ahora"/>
                    </div>
                    
                    <h2>Preguntas Frecuentes</h2>

                    <div className="faqs mb-4">
                        <AccordionItem title="¿Por qué es importante contar con asesoría legal en comunidades?">
                            Porque asegura una gestión en cumplimiento con la ley, evita conflictos internos y mejora la convivencia entre copropietarios.
                        </AccordionItem>
                        <AccordionItem title="¿Qué tipo de conflictos ayudan a resolver?">
                            Desde problemas con morosidad, desacuerdos entre copropietarios, hasta interpretación de reglamentos y contratos con proveedores.
                        </AccordionItem>
                        <AccordionItem title="¿Trabajan con comunidades pequeñas o solo grandes edificios?">
                            Ofrecemos asesoría a comunidades de todo tamaño, adaptando el servicio a la realidad y necesidades de cada una.
                        </AccordionItem>
                        <AccordionItem title="¿Cuál es la diferencia entre su servicio y una asesoría tradicional?">
                            Actuamos como una Gerencia Legal externa permanente, no como asesores puntuales. Nuestro compromiso es continuo.
                        </AccordionItem>
                    </div>

                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default RealEstateOwnershipPage
