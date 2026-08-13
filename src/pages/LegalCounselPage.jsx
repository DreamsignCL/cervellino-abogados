
import Giorgio from '../assets/img/giorgio.jpg';

function LegalCounselPage() {
  return (
    <main role="main" className="single-page">
        <div className="container">
            <section className="header">
                <h1>Cervellino & Asociados</h1>
                <p>
                    Somos un Estudio de Abogados Boutique que cuenta con un equipo de alta especialización en ciertas áreas del 
                    derecho nacional e internacional, logrando para nuestros clientes servicios eficientes, integrales y globales.
                </p>
            </section>

            <section className="content">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>GIORGIO CERVELLINO DEL FIERRO</h2>

                        <p>
                            Abogado Asesor de Empresas Nacionales e Internacionales de diversos rubros en Chile, tanto en materias corporativas, laborales, tributarias, inmobiliarias, planificación patrimonial y de protección sucesoria, contratos, cobranza internacional y litigios de diversa índole.
                        </p>

                        <p>
                            <strong>Educación:</strong><br/>
                            Facultad de Derecho de la Universidad Central de Chile, Santiago, Chile.
                        </p>

                        <p>
                            <strong>Membresías:</strong><br/>
                            Miembro del Colegio de Abogados de Chile A.G.<br/>
                            Miembro del Capítulo AIDA-Chile (Abogados especialistas en Seguros).<br/>
                            Miembro de la General Bar Association de Estados Unidos de Norteamérica.<br/>
                            Miembro de la Red de Abogados Voluntarios de la Fundación Probono en Chile.<br/>
                            Miembro de La Cámara de Comercio Italiana en Chile.
                        </p>

                        <p>
                            <strong>Idiomas:</strong><br/>
                            Español e Italiano.
                        </p>

                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img src={ Giorgio } alt="Giorgio Cervellino" />
                    </div>
                </div>
            </section>
        </div>
    </main>
  );
}

export default LegalCounselPage
