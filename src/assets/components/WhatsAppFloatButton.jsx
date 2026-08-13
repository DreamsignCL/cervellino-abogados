import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';

const WhatsAppFloatButton = () => {
    const location = useLocation();

    // Define aquí las rutas donde se debe activar gtag_report_conversion
    const rutasConConversion = [
        '/inmobiliario-ingenieria-y-construccion',
        '/asesoria-en-estados-unidos',
        '/asesoria-en-dubai'
    ];

    const handleClick = () => {
        const shouldTrackConversion = rutasConConversion.includes(location.pathname);

        if (shouldTrackConversion && typeof window.gtag_report_conversion === 'function') {
            // Llama a la conversión y redirige
            window.gtag_report_conversion('/redirect');
        } else {
            // Comportamiento normal
            window.open('/redirect', '_blank');
        }
    };

    return (
        <button className="btn btn-whatsapp" onClick={handleClick}>
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
        </button>
    );
};

export default WhatsAppFloatButton;
