
import DerechoInternacionalPrivado from '../assets/img/derecho-internacional-privado2.jpg';
import { useNavigate } from 'react-router-dom';

function InternationalPrivateLawPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>DERECHO INTERNACIONAL PRIVADO</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Contamos con amplia experiencia en tramitaciones legales administrativas como judiciales, en derecho de familia y herencias internacionales. Tenemos un equipo legal altamente especializado para resolver en el menor plazo posible temas como comunidades hereditarias y/o adjudicaciones de bienes para los herederos legales.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ DerechoInternacionalPrivado } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default InternationalPrivateLawPage
