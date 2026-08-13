
import PlanificacionHereditaria from '../assets/img/planificacion-hereditaria.jpg';
import { useNavigate } from 'react-router-dom';

function EstatePlanningPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>PLANIFICACIÓN HEREDITARIA</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Somos expertos en materia de planificación hereditaria en materia legal y tributaria (optimizando la carga tributaria al respecto), redacción y apertura de testamentos. Contamos con años de experiencia en la materia.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ PlanificacionHereditaria } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default EstatePlanningPage
