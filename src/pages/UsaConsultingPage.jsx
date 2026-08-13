
import AsesoriaUsa from '../assets/img/asesoria-usa.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';
import WhatsAppButton from '../assets/components/WhatsAppButton';

function UsaConsultingPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>Estrategia legal de inversión, negocios o inmigración a Estados Unidos</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Acompañamos a personas, familias y empresas en su proceso de inversión, migración o expansión de negocios en EE.UU.</h2>

                            <p>
                                En Cervellino & Asociados Abogados ayudamos a personas, emprendedores y
                                empresas a concretar sus proyectos en Estados Unidos. Brindamos asesoría legal,
                                fiscal e inmobiliaria personalizada, desde trámites migratorios hasta inversiones en
                                real estate, franquicias o negocios en funcionamiento. También apoyamos a
                                chilenos ya radicados en EE.UU. que necesiten orientación legal en Chile.
                                Contamos con un equipo experto y asociado en Florida que nos permite entregar
                                soluciones integrales y estratégicas en ambos países.
                            </p>

                            <ul>
                                <li>Asesoría para obtener visa E-2, EB-1, EB-2 NIW, O-1, entre otras.</li>
                                <li>Compra y estructuración de franquicias rentables.</li>
                                <li>Adquisición de negocios operativos en EE.UU.</li>
                                <li>Inversión en bienes raíces: casas, departamentos, locales comerciales, terrenos.</li>
                                <li>Constitución de filiales o unidades de negocio en EE.UU.</li>
                                <li>Asesoría legal para chilenos residentes en Estados Unidos.</li>
                                <li>Apoyo fiscal, contable y legal en ambas jurisdicciones.</li>
                                <li>Equipo experto en Florida: abogados, contadores, realtors y consultores.</li> 
                                <li>Asesoramos a Chilenos radicados en Estados Unidos que desean asesoría legal de diversa índole en Chile.</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ AsesoriaUsa } alt="" />
                        </div>
                    </div>

                    <div className="text-center my-5">
                        <h2>¿Estás listo para dar el salto a EE.UU.? Agenda tu asesoría por WhatsApp.</h2>
                        <WhatsAppButton title="Habla con un abogado experto ahora"/>
                    </div>
                    
                    <h2>Preguntas Frecuentes</h2>

                    <div className="faqs mb-5">
                        <AccordionItem title="¿Qué tipo de visa me conviene si quiero invertir en EE.UU.?">
                            La visa E-2 es ideal para inversionistas activos. Nuestro equipo te orienta según tu perfil, objetivos y presupuesto.
                        </AccordionItem>
                        <AccordionItem title="¿Puedo abrir una filial de mi empresa chilena en EE.UU.?">
                            Sí, te guiamos en todo el proceso: desde la elección del estado y estructura legal hasta los permisos y trámites tributarios
                        </AccordionItem>
                        <AccordionItem title="¿Puedo invertir en EE.UU. sin tener visa?">
                            Sí. Puedes comprar propiedades o negocios como extranjero. Luego, evaluamos contigo si puedes optar a una visa de inversión.
                        </AccordionItem>
                        <AccordionItem title="¿Qué tipo de franquicias recomiendan?">
                            Trabajamos con franquicias en múltiples industrias (no solo alimentos), adaptadas a tu inversión y nivel de participación.
                        </AccordionItem>
                        <AccordionItem title="¿También me asesoran legalmente en temas en Chile?">
                            Sí, apoyamos a chilenos que viven en EE.UU. y necesitan resolver temas legales en Chile como herencias, contratos, etc
                        </AccordionItem>
                    </div>
                    
                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default UsaConsultingPage
