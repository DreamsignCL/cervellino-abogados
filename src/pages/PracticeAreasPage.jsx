
import DerechoInternacional from '../assets/img/derecho-internacional.jpg';
import ComercioInternacional from '../assets/img/comercio-internacional.jpg';
import PlanificacionHereditaria from '../assets/img/planificacion-hereditaria.jpg';
import Inmobiliario from '../assets/img/inmobiliario.jpg';
import CopropiedadInmobiliaria from '../assets/img/copropiedad-inmobiliaria.jpg';

function PracticeAreaPage() {
    const servicesList = [
        {
            id: 1,
            img: DerechoInternacional,
            title: 'DERECHO INTERNACIONAL PRIVADO, NEGOCIOS Y LITIGIO INTERNACIONAL',
            detail: 'Asesoramos a personas y familias en materias de herencia, testamento, inversión inmobiliaria, negocios y contencioso o litigios',
            link: '/derecho-internacional-privado-y-litigio-internacional'
        },
        {
            id: 2,
            img: ComercioInternacional,
            title: 'COMERCIO INTERNACIONAL, INTERNACIONALIZACIÓN, CONTRATOS INTERNACIONALES Y BÚSQUEDA DE INVERSIONES',
            detail: 'Asesoramos a empresas extranjeras interesadas en realizar negocios en Chile o Joint Ventures con',
            link: '/comercio-internacional-internacionalizacion-contratos-internacionales-y-busqueda-de-inversiones'
        },
        {
            id: 3,
            img: PlanificacionHereditaria,
            title: 'ASESORÍA CORPORATIVA',
            detail: 'Asesoramos en temas tales como: Constitución, modificaciones y transformación de sociedades. Adquisiciones',
            link: '/asesoria-corporativa'
        },
        {
            id: 4,
            img: CopropiedadInmobiliaria,
            title: 'ASESORÍA LEGAL EN DERECHO INMOBILIARIO Y URBANÍSTICO',
            detail: 'Tenemos amplia experiencia en todas las áreas del derecho inmobiliario en Chile, tales como:',
            link: '/asesoria-legal-en-derecho-inmobiliario-y-urbanistico'
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
                    <h1>ÁREAS DE PRÁCTICA</h1>
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

export default PracticeAreaPage
