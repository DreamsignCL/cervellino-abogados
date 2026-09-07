import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://cervellinoabogados.com';
const SITE_NAME = 'Cervellino & Asociados Abogados';
const DEFAULT_IMAGE = `${SITE_URL}/favicon-512x512.png`;

function Seo({ page }) {
  const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
  const title = page.title.includes(SITE_NAME) ? page.title : `${page.title} | ${SITE_NAME}`;
  const description = page.description;

  useEffect(() => {
    document.title = title;
  }, [title]);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': `${SITE_URL}/#legalservice`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        telephone: '+56999995314',
        email: 'gcervellino@cervellinoabogados.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Badajoz 130, Oficina 703, Piso 7',
          addressLocality: 'Las Condes',
          addressRegion: 'Región Metropolitana',
          addressCountry: 'CL',
        },
        areaServed: [{ '@type': 'Country', name: 'Chile' }],
        availableLanguage: ['es'],
        sameAs: ['https://www.linkedin.com/in/giorgiocervellino/'],
      },
      {
        '@type': page.schemaType || 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'es-CL',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#legalservice` },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'es-CL',
        publisher: { '@id': `${SITE_URL}/#legalservice` },
      },
      ...(page.faqs ? [{
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }] : []),
    ],
  };

  return (
    <Helmet>
      <html lang="es-CL" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={page.keywords} />
      <meta name="robots" content={page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      {!page.noindex && <link rel="canonical" href={url} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={page.image || DEFAULT_IMAGE} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={page.image || DEFAULT_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export default Seo;
