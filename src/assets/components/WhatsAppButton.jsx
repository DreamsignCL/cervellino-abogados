import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = ({ title }) => {
  return (
    <a className="btn btn-outline-success" href="https://wa.me/+56999995314" target="_blank">
        <FontAwesomeIcon icon={ faWhatsapp } aria-hidden="true" />
        <span>{title}</span>
    </a>
  );
};

export default WhatsAppButton;