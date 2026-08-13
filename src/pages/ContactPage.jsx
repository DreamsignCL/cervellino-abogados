import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocation, faTimes } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../assets/components/ContactForm';
import Edificios from '../assets/img/edificios.jpg';
import Local1 from '../assets/img/local1.jpg';
import Local2 from '../assets/img/local2.jpg';
import Local3 from '../assets/img/local3.jpg';
import Local4 from '../assets/img/local4.jpg';
import Local5 from '../assets/img/local5.jpg';
import Local6 from '../assets/img/local6.jpg';

function ContactPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    const galleryList = [
        { id: 1, img: Local1 },
        { id: 2, img: Local2 },
        { id: 3, img: Local3 },
        { id: 4, img: Local4 },
        { id: 5, img: Local5 },
        { id: 6, img: Local6 },
    ];

    return (
        <main role="main" className="single-page">
            <div className="container">
                <section className="header">
                    <h1>CONTÁCTENOS</h1>
                </section>

                <section className="image" style={{ backgroundImage: `url(${Edificios})`, height: '300px', backgroundSize: 'cover' }} />

                <section className="content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26644.921592724713!2d-70.573251!3d-33.407202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedf4443f595%3A0xcc26451fdd8ef4a1!2sBadajoz%20130%2C%207560908%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sus!4v1747607985424!5m2!1ses!2sus"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            <div className="contacts mt-3">
                                <h3>Números</h3>
                                <p>
                                    <a href="tel:+56029668980" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faPhone} /> +56 02 9668980
                                    </a><br />
                                    <a href="https://wa.me/56999995314" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} /> +569 99995314
                                    </a>
                                </p>

                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:gcervellino@cervellinoabogados.com">
                                        <FontAwesomeIcon icon={faEnvelope} /> gcervellino@cervellinoabogados.com
                                    </a>
                                </p>

                                <h3>Dirección</h3>
                                <p>
                                    <FontAwesomeIcon icon={faLocation} /> Badajoz N°130 Oficina N°703, Piso 7, Las Condes - Santiago - Chile
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </section>

                <section className="gallery row mt-4">
                    {galleryList.map(item => (
                        <div key={item.id} className="col-6 col-md-4 mb-3">
                            <button
                                onClick={() => handleOpen(item.img)}
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '150px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                title="Ver imagen"
                            />
                        </div>
                    ))}
                </section>
            </div>

            {/* Modal (solo uno visible) */}
            {showModal && selectedImage && (
                <>
                    <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} onClick={handleClose}  />

                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog">
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={handleClose}>
                                        <FontAwesomeIcon icon={ faTimes } aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="modal-body text-center">
                                    <img src={selectedImage} alt="Galería" style={{ maxWidth: '100%', maxHeight: '70vh' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}

export default ContactPage;
