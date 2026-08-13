import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useGtagConversion() {
  const location = useLocation();

  useEffect(() => {
    // Define las rutas que necesitan el script
    const rutasConConversion = [
      '/inmobiliario-ingenieria-y-construccion',
      '/asesoria-en-estados-unidos',
      '/asesoria-en-dubai'
    ];

    // Verifica si la ruta actual está en la lista
    if (rutasConConversion.includes(location.pathname)) {
      // Crea la función global
      window.gtag_report_conversion = function (url) {
        const callback = function () {
          if (typeof url !== 'undefined') {
            window.location = url;
          }
        };

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-17293798618/FODvCPeA5pAbENrZqbZA',
            value: 1.0,
            currency: 'CLP',
            event_callback: callback
          });
        }

        return false;
      };
    } else {
      // Elimina la función si no está en una ruta válida
      delete window.gtag_report_conversion;
    }
  }, [location.pathname]);
}

export default useGtagConversion;
