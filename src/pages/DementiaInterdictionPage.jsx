
import InterdiccionDemencias from '../assets/img/interdiccion-demencias.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';

function DementiaInterdictionPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>INTERDICCIÓN POR DEMENCIAS</h1>
                </section>

                <section className="content">
                    <div className="row mb-4">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a familias en una solución integral legal en la materia, con el objeto de brindar a la persona mayor con incapacidades un cuidado personal de calidad y protección patrimonial de sus bienes e inversiones y otorgar a las familias una tranquilidad que sólo puede otorgar un especialista en la materia. Contamos con un equipo y una mirada multidisciplinaria para resolver dichos casos no sólo desde el punto de vista legal, sino también médico, psicológico, familiar, de su cuidado y social. Años de experiencia y especialización nos avalan.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ InterdiccionDemencias } alt="" />
                        </div>
                    </div>

                    <div className="faqs mb-4">
                        <AccordionItem title="¿Qué pasa si una persona mayor ya no puede administrar sus bienes?">
                            No basta con que la familia quiera ayudar. Es necesario evaluar qué mecanismos legales permiten proteger a la persona y administrar sus asuntos conforme a derecho.<br/>
                            Familias que enfrentan una pérdida de autonomía y no saben cómo actuar sin vulnerar los derechos de su familiar.
                        </AccordionItem>
                        <AccordionItem title="¿La demencia implica automáticamente una interdicción?">
                            Un diagnóstico médico, por sí solo, no equivale automáticamente a una declaración judicial de interdicción. La situación debe analizarse y, cuando corresponda, seguir el procedimiento legal respectivo.<br/>
                            Confusión entre diagnóstico, cuidado familiar y representación legal.<br/>
                            La interdicción como un procedimiento judicial que puede dar lugar al nombramiento de un curador.
                        </AccordionItem>
                        <AccordionItem title="¿Ser hijo o cuidador permite administrar los bienes de un familiar?">
                            Ser familiar o estar a cargo del cuidado no significa, por sí solo, tener facultades para representar legalmente a otra persona o disponer de sus bienes.<br/>
                            Familias que necesitan resolver trámites bancarios, patrimoniales o administrativos y desconocen qué facultades tienen.
                        </AccordionItem>
                        <AccordionItem title="¿Por qué es importante ordenar el patrimonio antes de una situación de dependencia?">
                            Revisar anticipadamente la situación patrimonial, los documentos y las decisiones que podrían requerir apoyo permite detectar problemas antes de que se transformen en conflictos o urgencias.<br/>
                            Patrimonios desordenados, falta de documentación y decisiones familiares postergadas.
                        </AccordionItem>
                        <AccordionItem title="¿Qué relación existe entre la protección patrimonial y una futura herencia?">
                            La administración de bienes durante la vida y la planificación sucesoria son asuntos relacionados, pero no son lo mismo. Conviene revisar cada situación con anticipación para evitar confusiones y conflictos posteriores.<br/>
                            Familias que solo comienzan a ordenar el patrimonio cuando ocurre un fallecimiento.
                        </AccordionItem>
                        <AccordionItem title="¿Proteger a una persona mayor significa decidir todo por ella?">
                            La protección jurídica debe considerar la dignidad, los derechos y la autonomía de la persona mayor. No toda dificultad justifica reemplazar su capacidad de decisión.<br/>
                            Familias que buscan proteger, pero pueden terminar tomando decisiones sin conocer los límites legales.<br/>
                            Contexto normativo: La Ley N.º 21.822 establece un marco de protección de derechos de las personas mayores y reconoce, entre otros aspectos, su independencia y autonomía. Su publicación fue el 1 de junio de 2026 y su entrada en vigor general está prevista para el 1 de junio de 2027.
                        </AccordionItem>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default DementiaInterdictionPage
