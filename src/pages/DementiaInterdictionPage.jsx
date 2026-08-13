
import InterdiccionDemencias from '../assets/img/interdiccion-demencias.jpg';
import { useNavigate } from 'react-router-dom';

function DementiaInterdictionPage() {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };
    
    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>INTERDICCIÓN POR DEMENCIAS</h1>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Asesoramos a familias en una solución integral legal en la materia, con el objeto de brindar a la persona mayor con incapacidades un cuidado personal de calidad y protección patrimonial de sus bienes e inversiones y otorgar a las familias una tranquilidad que sólo puede otorgar un especialista en la materia. Contamos con un equipo y una mirada multidisciplinaria para resolver dichos casos no sólo desde el punto de vista legal, sino también médico, psicológico, familiar, de su cuidado y social. Años de experiencia y especialización nos avalan.
                            </p>

                            <button className="btn btn-outline-primary" type="button" onClick={handleVolver}>Volver</button>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <img className="img-fluid" src={ InterdiccionDemencias } alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default DementiaInterdictionPage
