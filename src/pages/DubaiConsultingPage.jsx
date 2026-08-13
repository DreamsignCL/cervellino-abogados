
import Dubai from '../assets/img/dubai.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';

function DubaiConsultingPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA EN DUBAI</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a personas y familias en materias de inmigración e inversión en real estate, negocios en general y creación de filiales de negocios de Chile en Dubai.
                            </p>

                            <p>
                                Asesoramos a inversionistas en estructurar sus inversiones o negocios de diversa índole o en real estate en Dubai.
                            </p>

                            <p>
                                Asesoramos a empresas en crear filiales o nuevas unidades de negocios o inversiones en real estate en Dubai.
                            </p>

                            <p>
                                Asesoramos a Chilenos radicados en Dubai que desean asesoría legal de diversa índole en Chile.
                            </p>

                             <p>
                                Asesoramos a inversionistas y empresarios de Emiratos Árabes Unidos que deseen asesoría legal de diverso índole en Chile.
                            </p>

                            <p>
                                Contamos con asociados de primer nivel en materia legal, fiscal, en real estate y de negocios en Dubai para el logro de asesorías eficientes e integrales a nuestros clientes.
                            </p>

                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ Dubai } alt="" />
                        </div>
                    </div>

                    <h2>Preguntas Frecuentes</h2>

                    <div className="faqs mb-4">
                        <AccordionItem title="¿En qué se invierte en Dubai ?">
                            <ul>
                                <li>Proyectos de negocios.</li>
                                <li>Comercio estratégico.</li>
                                <li>
                                    Residenciales y de infraestructura.<br/>
                                    Los cuales pueden ir acompañados de Visa para empresario y su familia.
                                </li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="¿Por qué invertir en Dubai ?">
                            <ul>
                                <li>Es una de las economías más dinámicas y en crecimiento del mundo con un entorno empresarial favorable y con muchas oportunidades de negocios.</li>
                                <li>Es el segundo país más seguro del mundo.</li>
                                <li>Impuestos entre tasa 0% a 9%.</li>
                                <li>Ecosistema de crecimiento empresarial y networking de primer nivel.</li>
                                <li>Pueden obtener residencia dueños de empresas y sus familias.</li>
                                <li>Crecimiento inmobiliario y de gran plusvalía futura.</li>
                                <li>Calidad de vida inagualable.</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="¿Por qué es interesante Dubai para buscar Visa de Residencia y Desarrollar negocios?">
                            <ul>
                                <li>Conectividad</li>
                                <li>Educación de alto nivel.</li>
                                <li>Costos de vida razonables.</li>
                                <li>Ambiente Multicultural</li>
                                <li>Gran desarrollo comercial, empresarial y de inversión.</li>
                            </ul>
                        </AccordionItem>
                    </div>
                    
                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default DubaiConsultingPage
