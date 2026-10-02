
import BanderaItaliana from '../assets/img/bandera-italiana.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';

function AdvisoryInItalyPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA LEGAL EN ITALIA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a personas o familias en materias de Herencias, Protección Patrimonial, Testamento, Compra y Venta de inmuebles, Becas y Estudios para estudiantes o profesionales, Visas y materias relacionadas con inmigración, derecho de familia, trámites legales en general (mandatos, pensiones, etc.), y Litigios de diversa índole, por medio de nuestra red multidisciplinaria de asociados en Italia.
                            </p>
                            <p>
                                Asesoramos a Empresas en temas legales y comerciales, negociaciones, contratos, temas fiscales y contables. controversias o litigios en general en Italia por medio de nuestros asociados.
                            </p>
                            <p>
                                Asesoramos a Chilenos radicados en Italia que desean asesoría legal de diversa índole en Chile.
                            </p>
                            <p>
                                Asesoramos a Italianos que desean asesoría legal de diversa índole en Chile.
                            </p>
                            <p>
                                Asesoramos a Inversionistas y Empresarios Italianos que deseen asesoría legal de diversa índole en Chile.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ BanderaItaliana } alt="" />
                        </div>
                    </div>

                    <div className="faqs mb-4">
                        <AccordionItem title="¿Debes realizar tramites legales desde Chile en Italia ?">
                            Contamos con equipo en Chile e Italia para ayudarte y asesorar.
                        </AccordionItem>

                        <AccordionItem title="¿Tienes deseos de comprar un inmueble en Italia?">
                           Encantados te podemos ayudar en buscarla y asesorarte legalmente en su compra.
                        </AccordionItem>

                        <AccordionItem title="¿Necesitas resolver una Herencia en Italia desde Chile?">
                            Podemos ayudarte y asesorar desde Chile ! Contamos con una red de Abogados asociados expertos en Italia.
                        </AccordionItem>

                        <AccordionItem title="¿Necesitas orientacion para estudiar y obtener becas en Italia ?">
                            Podemos ayudarte a lograr tus sueños.
                        </AccordionItem>

                        <AccordionItem title="¿Tienes problemas de cobranza con una empresa Italia?">
                            Te podemos ayudar a resolverlo sin moverte de tu empresa en Chile.
                        </AccordionItem>

                        <AccordionItem title="¿Deseas crear una filial de tu empresa en Chile o negocio en Italia?">
                            Encantado te podemos ayudar a buscar nuevo mercado Italiano.
                        </AccordionItem>

                        <AccordionItem title="¿Necesitas mandato urgente en Chile para tramites legales en Italia?">
                            Podemos resolverlo a la brevedad.
                        </AccordionItem>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AdvisoryInItalyPage
