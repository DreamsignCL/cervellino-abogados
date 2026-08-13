
import AsesoriaEspana from '../assets/img/asesoria-espana.jpg';
import { useNavigate } from 'react-router-dom';

function SpainConsultingPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>ASESORIA EN ESPAÑA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a personas y familias en materias de inmigración e inversión en real estate, franquicias, negocios en general y litigios en España.
                            </p>

                            <p>
                                Asesoramos a inversionistas en estructurar sus inversiones o negocios de diversa índole como franquicias o inversiones inmobiliarias en España.
                            </p>

                            <p>
                                Asesoramos a empresas en crear filiales o nuevas unidades de negocios o inversiones en real estate en España
                            </p>

                            <p>
                                Asesoramos a Chilenos radicados en España que desean asesoría legal de diversa índole en Chile.
                            </p>

                            <p>
                                Contamos con asociados de primer nivel en materia legal, fiscal, en real estate y de negocios en España para el logro de asesorías eficientes e integrales a nuestros clientes.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ AsesoriaEspana } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default SpainConsultingPage
