// RedirectPage.js
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function RedirectWhatsappPage() {
  useEffect(() => {
    window.location.href = 'https://wa.me/56999995314';
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <p className="text-center">
        <FontAwesomeIcon className="text-success fs-1" icon={ faWhatsapp } aria-hidden="true" /><br/>
        Redirigiendo a WhatsApp...
      </p>
    </div>
  );
}

export default RedirectWhatsappPage;