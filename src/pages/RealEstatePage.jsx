
import Inmobiliario from '../assets/img/inmobiliario.jpg';
import { useNavigate } from 'react-router-dom';
import AccordionItem from '../assets/components/AccordionItem';
import WhatsAppButton from '../assets/components/WhatsAppButton';
import VideoModal from '../assets/components/VideoModal';
import PuntoInflexion from '../assets/img/punto-inflexion.jpg';
import MetroCuadrado from '../assets/img/metro-cuadrado.jpg';
import WeStay from '../assets/img/we-stay.jpg';
import MetroCuadrado2 from '../assets/img/extenciones-tributarias.jpg';

function RealEstatePage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    const videoList = [
        {
            id:1,
            title: 'Educación inmobiliaria en Metro Cuadrado con Constanza Schultz',
            image: MetroCuadrado,
            video: 'QtbYIAGF0C8',
        },
        {
            id:2,
            title: 'Master Class Planificación Hereditaria De Bienes Raíces | Westay',
            image: WeStay,
            video: 'tXpKXaH7Afw',
        },
        {
            id:3,
            title: '¿Cómo Estructurar la Inversión Inmobiliaria Legal y Tributariamente?',
            image: PuntoInflexion,
            video: '6cdguLwtnU0',
        },
        {
            id:4,
            title: 'Declaración renta en 2025 y como declarar tus ingresos por arriendo',
            image: PuntoInflexion,
            video: 'EvrUevbGlRk',
        },
        {
            id:5,
            title: '¡Alza de Contribuciones en Chile 2025! | Exenciones, Beneficios y Cómo Optimizar el DFL2',
            image: PuntoInflexion,
            video: 'AZ4-kZzRIMQ',
        },
    ];

    const videoItems = videoList.map(videoItem => 
        <div className="col-12 col-md">
            <VideoModal 
                key={videoItem.id}
                title={videoItem.title}
                imageSrc={videoItem.image} 
                videoUrl={videoItem.video}
            />
        </div>
    );
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>Asesoría legal en derecho inmobiliario y urbanístico</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Apoyamos legalmente a inversionistas, inmobiliarias, constructoras y gestores en cada etapa del proceso, en Chile, EE. UU., España e Italia.</h2>
                            <p>
                                En Cervellino & Asociados Abogados ofrecemos asesoría legal especializada en
                                derecho inmobiliario, tributario y de construcción, acompañando desde la
                                planificación hasta la ejecución de proyectos inmobiliarios urbanos y rurales.
                                Nuestro equipo multidisciplinario presta servicios a inversionistas, fondos,
                                constructoras, inmobiliarias y brokers que buscan respaldo legal sólido para tomar
                                decisiones estratégicas. Contamos con experiencia nacional e internacional,
                                incluyendo operaciones en Estados Unidos y la Unión Europea.
                            </p>

                            <ul>
                                <li>Revisión de títulos, promesa y contratos de compraventa.</li>
                                <li>Asesoría en arrendamientos, hipotecas, usufructos y servidumbres.</li>
                                <li>Apoyo en fusiones y subdivisiones de terrenos.</li>
                                <li>Expropiaciones y regularización de inmuebles.</li>
                                <li>Contratación legal en proyectos de arquitectura y construcción.</li>
                                <li>Estructuración de fondos de inversión inmobiliaria.</li>
                                <li>Asesoría tributaria y contable para inversionistas e inversión inmobiliaria.</li>
                                <li>Asesoría en tributación de bienes raíces.</li>
                                <li>Asesoría en Análisis y Rebaja de Avalúos Fiscales y Contribuciones de Bienes Raíces.</li>
                                <li>Asesoría legal especializada en condominios y comités de administración.</li> 
                                <li>Asesoría Legal, Fiscal e Inmobiliaria en EE. UU., España e Italia.</li> 
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ Inmobiliario } alt="" />
                        </div>
                    </div>

                    <div className="text-center my-5">
                        <h2>¿Necesitas asesoría legal, tributaria e inmobiliaria para inversiones y proyectos inmobiliarios? ¡Escríbenos por WhatsApp y te orientamos!</h2>
                        <WhatsAppButton title="Agenda una asesoría con nuestro equipo"/>
                    </div>
                    
                    <h2>Preguntas Frecuentes</h2>

                    <div className="faqs mb-4">
                        <AccordionItem title="¿Asesoran solo en Chile o también fuera del país?">
                            Prestamos servicios legales tanto en Chile como en Estados Unidos y Europa, especialmente en inversiones inmobiliarias.
                        </AccordionItem>
                        <AccordionItem title="¿Trabajan con proyectos o también con inversionistas individuales?">
                            Atendemos desde fondos de inversión y grandes proyectos hasta inversionistas individuales que buscan respaldo legal en su compra.
                        </AccordionItem>
                        <AccordionItem title="¿Pueden ayudarme si quiero invertir en propiedades desde el extranjero?">
                            Sí, contamos con expertos que te asesoran en la estructura legal, tributaria y bancaria adecuada para tu inversión
                        </AccordionItem>
                        <AccordionItem title="¿Realizan asesoría en tributación de bienes raíces en Chile?">
                            Contamos con un equipo legal, contable y tributario para estructurar de la mejor forma tus inversiones inmobiliarias en Chile y en el extranjero.
                        </AccordionItem>
                    </div>

                    <h2>Videos</h2>

                    <div className="row mb-4">
                        {videoItems}
                        
                        <div className="col-12 col-md">
                            <div className="modal-video">
                                <a className="modal-video__button" href="https://www.instagram.com/reel/DMJWNI5Rffv/?igsh=MThtcmQ4NWhwbWlyMw%3D%3D" target='_blank'>
                                    <img src={ MetroCuadrado2 } alt="Entrevista" />
                                    <span>Conoce las exenciones tributarias</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                </section>
            </div>
        </main>
    );
}

export default RealEstatePage
