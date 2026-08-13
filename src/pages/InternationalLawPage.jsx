
import Flags from '../assets/img/flags.jpg';
import DerechoInternacional from '../assets/img/derecho-internacional.jpg';
import { useNavigate } from 'react-router-dom';

function InternationalLawPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>DERECHO INTERNACIONAL PRIVADO, NEGOCIOS Y LITIGIO INTERNACIONAL</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a personas y familias en materias de herencia, testamento, inversión inmobiliaria, negocios y contencioso o litigios en Chile, Estados Unidos (Estado de Florida), Italia, España y la Unión Europea en general. Contamos con asociados de primer nivel en cada país para el logro de asesorías eficientes e integrales a nuestros clientes.
                            </p>

                            <p>
                                <img src={ Flags } alt="banderas" />
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ DerechoInternacional } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default InternationalLawPage
