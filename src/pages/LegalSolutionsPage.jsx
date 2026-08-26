
import DerechoInternacional from '../assets/img/derecho-internacional2.jpg';
import TramitesHerencia from '../assets/img/tramites-herencia.jpg';
import DerechoInternacionalPrivado from '../assets/img/derecho-internacional-privado2.jpg';
import InterdiccionDemencias from '../assets/img/interdiccion-demencias.jpg';
import Compliance from '../assets/img/compliance.jpg';
import AsesoriaEspana from '../assets/img/asesoria-espana.jpg';
import AsesoriaUsa from '../assets/img/asesoria-usa.jpg';
import CiudadaniaItaliana from '../assets/img/ciudadania-italiana.jpg';
import Dubai from '../assets/img/dubai.jpg';
import LegalAdviceEldery from '../assets/img/legal-advice-eldery.jpg';
import AsesoriaItalia from '../assets/img/bandera-italiana.jpg';
import DatosPersonales from '../assets/img/datos-personales.jpg';
import AsesoriaLaboral from '../assets/img/asesoria-laboral.jpg';

function LegalSolutionsPage() {
    const servicesList = [
        /*
        {
            id: 1,
            img: DerechoInternacionalPrivado,
            title: 'DERECHO INTERNACIONAL PRIVADO',
            detail: 'Asesoramos a personas y familias en materias de sucesiones o herencia en España e Italia',
            link: '/derecho-internacional-privado-negocios-y-litigio-internacional'
        },
        */
       {
            id: 1,
            img: AsesoriaLaboral,
            title: 'ASESORÍA LABORAL',
            detail: 'Asesoramos en materias de derecho laboral y legislación sobre contrataciones, asesorando a todo tipo de empleadores, del sector privado tanto nacionales como extranjeros',
            link: '/asesoria-laboral'
        },
        {
            id: 2,
            img: TramitesHerencia,
            title: 'ASESORIA LEGAL EN HERENCIA, TESTAMENTOS Y PARTICIONES',
            detail: 'Somos expertos en asesorar legalmente en tramitaciones de posesiones efectivas, aperturas de testamentos y judicialmente particiones de herencias.',
            link: '/tramites-por-herencia-sucesiones-testamentos-y-particiones'
        },
        {
            id: 3,
            img: InterdiccionDemencias,
            title: 'INTERDICCIÓN POR DEMENCIAS',
            detail: 'Asesoramos a familias en una solución integral legal en la materia, con el objeto de brindar a la persona mayor con incapacidades',
            link: '/interdiccion-por-demencias'
        },
        
        {
            id: 4,
            img: LegalAdviceEldery,
            title: 'ASESORÍA LEGAL A PERSONAS MAYORES, FAMILIAS, EMPRESAS DE SERVICIOS, CORPORACIONES, FUNDACIONES y ORGANIZACIONES RELACIONADAS A LA TEMÁTICA',
            detail: 'Asesoramos a personas mayores en el marco de la nueva Ley Integral de Personas Mayores y de Promoción del Envejecimiento Digno, Activo y Saludable',
            link: '/asesoria-legal-a-personas-mayores-y-familias'
        },
        {
            id: 5,
            img: AsesoriaEspana,
            title: 'ASESORÍA EN ESPAÑA',
            detail: 'Asesoramos a personas y familias en materias de inmigración e inversión en real estate, franquicias, negocios en general',
            link: '/asesoria-en-espana'
        },
        {
            id: 6,
            img: AsesoriaUsa,
            title: 'ESTRATEGIA LEGAL DE INVERSIÓN, NEGOCIOS O INMIGRACIÓN A ESTADOS UNIDOS',
            detail: 'Asesoramos a personas y familias en materias de inmigración e inversión en real estate, franquicias, negocios en general',
            link: '/asesoria-en-estados-unidos'
        },
        {
            id: 7,
            img: CiudadaniaItaliana,
            title: 'RECONOCIMIENTO DE CIUDADANÍA ITALIANA',
            detail: 'Asesoramos en el análisis, investigación, búsqueda y recopilación de antecedentes (actas chilenas o italianas u otros antecedentes, etc.),',
            link: '/reconocimiento-de-ciudadania-italiana'
        },
        {
            id: 8,
            img: Dubai,
            title: 'ASESORÍA EN DUBAI',
            detail: 'Asesoramos a personas y familias en materias de inmigración e inversión en real estate, negocios y creación de filiales de negocios de Chile en Dubai.',
            link: '/asesoria-en-dubai'
        },        
        {
            id: 9,
            img: AsesoriaItalia,
            title: 'ASESORÍA LEGAL EN ITALIA',
            detail: 'Asesoramos a empresas y personas en temas legales y comerciales, negociaciones, contratos, temas fiscales y contables.',
            link: '/asesoria-en-italia'
        },
        {
            id: 10,
            img: DatosPersonales,
            title: 'COMPLIANCE POR CUMPLIMIENTO LEY PROTECCIÓN DE DATOS PERSONALES',
            detail: 'Asesoramos a Empresas en Evaluar, Diseñar, Implementar y por ende realicen Cumplimiento en su organización empresarial respecto de la Ley de Protección de datos personales.',
            link: '/compliance-ley-proteccion-de-datos-personales'
        },
    ];

    const servicesItems = servicesList.map(servicesItem => 
        <div className="card card-service" key={ servicesItem.id }>
            <div className="card-image" style={{ backgroundImage: `url(${servicesItem.img})` }}></div>
            <div className="card-body">
                <h2 className="card-title">{ servicesItem.title }</h2>
                <p className="card-text">{ servicesItem.detail }</p>
                <a href={ servicesItem.link } title={ servicesItem.title } rel="noopener noreferrer">SABER MÁS</a>
            </div>
        </div>
    );

    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>SOLUCIONES LEGALES</h1>
                </section>

                <section className="content">
                    <div className="services">
                        { servicesItems }
                    </div>
                </section>
            </div>
        </main>
    );
}

export default LegalSolutionsPage
