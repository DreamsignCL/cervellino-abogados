
import TramitesHerencia from '../assets/img/tramites-herencia.jpg';
import { useNavigate } from 'react-router-dom';

function InheritanceProceduresPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORÍA LEGAL EN HERENCIA, TESTAMENTOS Y PARTICIONES</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Somos expertos en asesorar legalmente en tramitaciones de posesiones efectivas, aperturas de testamentos y judicialmente particiones de herencias. Contamos con amplia experiencia en dichas tramitaciones legales tanto administrativas como judiciales. Tenemos un equipo legal altamente especializado para resolver en el menor plazo posible temas como comunidades hereditarias y/o adjudicaciones de bienes para los herederos legales.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ TramitesHerencia } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default InheritanceProceduresPage
