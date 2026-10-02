const pages = {
  '/': { 
    title: 'Cervellino & Asociados Abogados', 
    description: 'Cervellino & Asociados Abogados entrega asesoría legal a personas, familias, empresas e inversionistas en Chile y el extranjero.', 
    keywords: 'abogados Santiago, estudio jurídico Chile, asesoría legal, abogados internacionales Chile', 
    path: '/', 
    schemaType: 'WebPage' 
  },

  '/quienes-somos': { 
    title: 'Quienes somos | Cervellino & Asociados Abogados', 
    description: 'Conoce a Giorgio Cervellino del Fierro, abogado y asesor de empresas nacionales e internacionales en Chile.', 
    keywords: 'Giorgio Cervellino, abogado Santiago, asesor legal empresas Chile, abogado corporativo', 
    path: '/quienes-somos', 
    schemaType: 'ProfilePage' 
  },

  '/areas-de-practica': { 
    title: 'Áreas de práctica | Cervellino & Asociados Abogados', 
    description: 'Conoce las áreas de práctica de Cervellino & Asociados: derecho internacional, corporativo, inmobiliario, minero y más.', 
    keywords: 'áreas de práctica abogados, derecho internacional, derecho corporativo, derecho inmobiliario Chile', 
    path: '/areas-de-practica', 
    schemaType: 'CollectionPage' 
  },

  '/soluciones-legales': { 
    title: 'Soluciones legales | Cervellino & Asociados Abogados', 
    description: 'Servicios de asesoría laboral, herencias, ciudadanía italiana, inversión internacional, compliance y protección de datos.', 
    keywords: 'soluciones legales Chile, asesoría laboral, herencias, ciudadanía italiana, compliance', 
    path: '/soluciones-legales', 
    schemaType: 'CollectionPage' 
  },

  '/contacto': { 
    title: 'Contacto | Cervellino & Asociados Abogados', 
    description: 'Contacta a Cervellino & Asociados Abogados en Las Condes, Santiago. Agenda tu consulta por teléfono, WhatsApp, correo o formulario.', 
    keywords: 'contacto abogados Las Condes, estudio jurídico Santiago, abogados Badajoz 130', 
    path: '/contacto', 
    schemaType: 'ContactPage' 
  },

  '/derecho-internacional-privado-y-litigio-internacional': { 
    title: 'Derecho internacional privado y litigio internacional | Cervellino & Asociados Abogados', 
    description: 'Asesoría en herencias, inversiones, negocios y litigios internacionales en Chile, Estados Unidos, Italia, España y Europa.', 
    keywords: 'derecho internacional privado Chile, litigio internacional, abogados internacionales, herencias internacionales', 
    path: '/derecho-internacional-privado-y-litigio-internacional', 
    schemaType: 'Service' 
  },

  '/comercio-internacional-internacionalizacion-contratos-internacionales-y-busqueda-de-inversiones': { 
    title: 'Comercio internacional y contratos internacionales | Cervellino & Asociados Abogados', 
    description: 'Asesoría para empresas e inversionistas en comercio internacional, contratos, importación, exportación e inversión extranjera en Chile.', 
    keywords: 'comercio internacional Chile, contratos internacionales, inversión extranjera, joint venture Chile', 
    path: '/comercio-internacional-internacionalizacion-contratos-internacionales-y-busqueda-de-inversiones', 
    schemaType: 'Service'
  },

  '/asesoria-corporativa': { 
    title: 'Asesoría corporativa y legal para empresas | Cervellino & Asociados Abogados', 
    description: 'Servicios legales corporativos integrales para empresas. Expertos en constitución y modificación de sociedades, pacto de accionistas, contratos comerciales, venta de empresas y asesoría tributaria especializada.', 
    keywords: 'Asesoría en Constitución de Sociedades, Redacción y revisión de Contratos Comerciales, Asesoría Tributaria Especializada', 
    path: '/asesoria-corporativa', 
    schemaType: 'Service',
    faqs: [
    { 
      question: '¿Tu empresa está preparada para las decisiones que vienen?', 
      answer: 'Crecer también exige estructura, prevención y estrategia legal. Una preocupación real de quien dirige una empresa: crecer, invertir o tomar decisiones sin exponerse innecesariamente.' 
    },
    { 
      question: '¿Qué pasa cuando los socios ya no están de acuerdo?', 
      answer: 'Las relaciones societarias necesitan reglas claras, incluso cuando existe confianza. Pactos de accionistas, derechos y obligaciones de los socios, administración, toma de decisiones y mecanismos para abordar controversias.' 
    },
    { 
      question: '¿Tu contrato protege realmente los intereses de tu empresa?', 
      answer: 'Firmar no es lo mismo que estar protegido. Contratos comerciales, obligaciones, incumplimientos, responsabilidades, condiciones de salida y riesgos que suelen pasar inadvertidos.' 
    },
    { 
      question: '¿Qué debes revisar antes de fusionar, dividir o adquirir una empresa?', 
      answer: 'Una decisión de crecimiento también requiere una estructura jurídica adecuada. Estructuración de operaciones, revisión societaria, riesgos contractuales, activos, pasivos, relaciones entre socios y formalización de la operación.' 
    },
    { 
      question: '¿Qué ocurrirá con tu empresa si mañana cambia uno de sus socios?', 
      answer: 'La continuidad empresarial también se planifica. Continuidad de empresas familiares, herencias con participación societaria, pactos entre socios, reorganización patrimonial y prevención de conflictos futuros.' 
    },
    { 
      question: 'Las decisiones importantes merecen respaldo jurídico.', 
      answer: 'Asesoría corporativa para estructurar, proteger y acompañar tu negocio. Conversemos sobre tu empresa.' 
    },
  ] 
  },

  '/asesoria-legal-en-derecho-inmobiliario-y-urbanistico': { 
    title: 'Asesoría legal inmobiliaria y urbanística | Cervellino & Asociados Abogados', 
    description: 'Asesoría inmobiliaria, tributaria y urbanística para inversiones, proyectos, construcción y bienes raíces en Chile y el extranjero.', 
    keywords: 'abogado inmobiliario Chile, derecho urbanístico, inversión inmobiliaria, tributación bienes raíces', 
    path: '/asesoria-legal-en-derecho-inmobiliario-y-urbanistico', 
    schemaType: 'Service', 
    faqs: [
      { 
        question: '¿Asesoran solo en Chile o también fuera del país?', 
        answer: 'Prestamos servicios legales tanto en Chile como en Estados Unidos y Europa, especialmente en inversiones inmobiliarias.' 
      },
      { 
        question: '¿Trabajan con proyectos o también con inversionistas individuales?', 
        answer: 'Atendemos desde fondos de inversión y grandes proyectos hasta inversionistas individuales que buscan respaldo legal en su compra.' 
      },
      { 
        question: '¿Pueden ayudarme si quiero invertir en propiedades desde el extranjero?', 
        answer: 'Sí, contamos con expertos que asesoran en la estructura legal, tributaria y bancaria adecuada para la inversión.' 
      },
      { 
        question: '¿Realizan asesoría en tributación de bienes raíces en Chile?', 
        answer: 'Contamos con un equipo legal, contable y tributario para estructurar inversiones inmobiliarias en Chile y en el extranjero.' 
      },
    ]
  },

  '/derecho-internacional-privado-negocios-y-litigio-internacional': { 
    title: 'Derecho internacional privado | Cervellino & Asociados Abogados', 
    description: 'Asesoría en derecho internacional privado para personas, familias y empresas con asuntos legales entre Chile y el extranjero.', 
    keywords: 'derecho internacional privado, abogado internacional Chile, negocios internacionales, litigios internacionales', 
    path: '/derecho-internacional-privado-negocios-y-litigio-internacional', 
    schemaType: 'Service' 
  },

  '/tramites-por-herencia-sucesiones-testamentos-y-particiones': { 
    title: 'Herencias, testamentos y particiones | Cervellino & Asociados Abogados', 
    description: 'Asesoría legal en posesiones efectivas, herencias, apertura de testamentos, particiones y adjudicación de bienes.', 
    keywords: 'abogado herencias Chile, posesión efectiva, testamentos, partición de herencia', 
    path: '/tramites-por-herencia-sucesiones-testamentos-y-particiones', 
    schemaType: 'Service' 
  },

  '/interdiccion-por-demencias': { 
    title: 'Interdicción por demencias | Cervellino & Asociados Abogados', 
    description: 'Asesoría legal para procesos de interdicción por demencias, protección patrimonial y cuidado de personas mayores.', 
    keywords: 'interdicción por demencia Chile, abogado personas mayores, protección patrimonial, curaduría', 
    path: '/interdiccion-por-demencias', 
    schemaType: 'Service',
    faqs: [
    { 
      question: '¿Qué pasa si una persona mayor ya no puede administrar sus bienes?', 
      answer: 'No basta con que la familia quiera ayudar. Es necesario evaluar qué mecanismos legales permiten proteger a la persona y administrar sus asuntos conforme a derecho. Familias que enfrentan una pérdida de autonomía y no saben cómo actuar sin vulnerar los derechos de su familiar.' 
    },
    { 
      question: '¿La demencia implica automáticamente una interdicción?', 
      answer: 'Un diagnóstico médico, por sí solo, no equivale automáticamente a una declaración judicial de interdicción. La situación debe analizarse y, cuando corresponda, seguir el procedimiento legal respectivo. Confusión entre diagnóstico, cuidado familiar y representación legal. La interdicción como un procedimiento judicial que puede dar lugar al nombramiento de un curador.' 
    },
    { 
      question: '¿Ser hijo o cuidador permite administrar los bienes de un familiar?', 
      answer: 'Ser familiar o estar a cargo del cuidado no significa, por sí solo, tener facultades para representar legalmente a otra persona o disponer de sus bienes. Familias que necesitan resolver trámites bancarios, patrimoniales o administrativos y desconocen qué facultades tienen.' 
    },
    { 
      question: '¿Por qué es importante ordenar el patrimonio antes de una situación de dependencia?', 
      answer: 'Revisar anticipadamente la situación patrimonial, los documentos y las decisiones que podrían requerir apoyo permite detectar problemas antes de que se transformen en conflictos o urgencias. Patrimonios desordenados, falta de documentación y decisiones familiares postergadas.' 
    },
    { 
      question: '¿Qué relación existe entre la protección patrimonial y una futura herencia?', 
      answer: 'La administración de bienes durante la vida y la planificación sucesoria son asuntos relacionados, pero no son lo mismo. Conviene revisar cada situación con anticipación para evitar confusiones y conflictos posteriores. Familias que solo comienzan a ordenar el patrimonio cuando ocurre un fallecimiento.' 
    },
    { 
      question: '¿Proteger a una persona mayor significa decidir todo por ella?', 
      answer: 'La protección jurídica debe considerar la dignidad, los derechos y la autonomía de la persona mayor. No toda dificultad justifica reemplazar su capacidad de decisión. Familias que buscan proteger, pero pueden terminar tomando decisiones sin conocer los límites legales. Contexto normativo: La Ley N.º 21.822 establece un marco de protección de derechos de las personas mayores y reconoce, entre otros aspectos, su independencia y autonomía. Su publicación fue el 1 de junio de 2026 y su entrada en vigor general está prevista para el 1 de junio de 2027.' 
    },
  ]
  },

  '/copropiedad-inmobiliaria': { 
    title: 'Asesoría legal para comunidades y condominios | Cervellino & Asociados Abogados', 
    description: 'Gerencia legal externa para comunidades, comités de administración y condominios: prevención de conflictos y cumplimiento normativo.', 
    keywords: 'abogado copropiedad inmobiliaria, asesoría condominios, comités administración, Ley 21442', 
    path: '/copropiedad-inmobiliaria', 
    schemaType: 'Service', 
    faqs: [
      { 
        question: '¿Por qué es importante contar con asesoría legal en comunidades?', 
        answer: 'Asegura una gestión en cumplimiento con la ley, evita conflictos internos y mejora la convivencia entre copropietarios.' 
      },
      { 
        question: '¿Qué tipo de conflictos ayudan a resolver?', 
        answer: 'Desde problemas con morosidad y desacuerdos entre copropietarios, hasta interpretación de reglamentos y contratos con proveedores.' 
      },
      { 
        question: '¿Trabajan con comunidades pequeñas o solo grandes edificios?', 
        answer: 'Ofrecemos asesoría a comunidades de todo tamaño, adaptando el servicio a su realidad y necesidades.' 
      },
      { 
        question: '¿Cuál es la diferencia entre su servicio y una asesoría tradicional?', 
        answer: 'Actuamos como una gerencia legal externa permanente, con un compromiso continuo y no como asesores puntuales.' 
      },
    ] 
  },

  '/compliance-3': { 
    title: 'Compliance empresarial | Cervellino & Asociados Abogados', 
    description: 'Asesoría en compliance, prevención de riesgos legales, due diligence, investigaciones internas y capacitaciones para empresas.', 
    keywords: 'compliance Chile, prevención riesgos legales, due diligence, investigaciones internas', 
    path: '/compliance-3', 
    schemaType: 'Service' 
  },

  '/asesoria-en-espana': { 
    title: 'Asesoría legal en España | Cervellino & Asociados Abogados', 
    description: 'Asesoría para personas, familias, empresas e inversionistas con negocios, inmigración, real estate y asuntos legales entre Chile y España.', 
    keywords: 'abogado Chile España, asesoría legal España, inversión inmobiliaria España, negocios España', 
    path: '/asesoria-en-espana', 
    schemaType: 'Service' 
  },

  '/asesoria-en-estados-unidos': { 
    title: 'Asesoría legal para inversión y negocios en Estados Unidos | Cervellino & Asociados Abogados', 
    description: 'Asesoría legal, fiscal e inmobiliaria para inversión, migración, franquicias y expansión de negocios en Estados Unidos.', 
    keywords: 'abogado Chile Estados Unidos, inversión Estados Unidos, visa E-2, negocios Florida, franquicias EE UU', 
    path: '/asesoria-en-estados-unidos', 
    schemaType: 'Service', 
    faqs: [
      { 
        question: '¿Qué tipo de visa me conviene si quiero invertir en EE.UU.?', 
        answer: 'La visa E-2 es ideal para inversionistas activos. El equipo orienta según perfil, objetivos y presupuesto.' 
      },
      { 
        question: '¿Puedo abrir una filial de mi empresa chilena en EE.UU.?', 
        answer: 'Sí, se guía el proceso desde la elección del estado y estructura legal hasta permisos y trámites tributarios.' 
      },
      { 
        question: '¿Puedo invertir en EE.UU. sin tener visa?', 
        answer: 'Sí. Es posible comprar propiedades o negocios como extranjero y luego evaluar una visa de inversión.' 
      },
      { 
        question: '¿Qué tipo de franquicias recomiendan?', 
        answer: 'Se trabaja con franquicias en múltiples industrias, adaptadas a la inversión y nivel de participación del cliente.' 
      },
      { 
        question: '¿También me asesoran legalmente en temas en Chile?', 
        answer: 'Sí, se apoya a chilenos residentes en EE.UU. en temas legales en Chile, como herencias y contratos.' 
      },
    ]
  },

  '/reconocimiento-de-ciudadania-italiana': { 
    title: 'Reconocimiento de ciudadanía italiana | Cervellino & Asociados Abogados', 
    description: 'Asesoría para reunir antecedentes y tramitar el reconocimiento de ciudadanía italiana por descendencia, adopción, residencia o matrimonio.', 
    keywords: 'ciudadanía italiana Chile, reconocimiento ciudadanía italiana, nacionalidad italiana por descendencia', 
    path: '/reconocimiento-de-ciudadania-italiana', 
    schemaType: 'Service' 
  },

  '/asesoria-en-dubai': { 
    title: 'Asesoría legal para inversión y negocios en Dubái | Cervellino & Asociados Abogados', 
    description: 'Asesoría para inmigración, inversiones inmobiliarias, negocios y creación de filiales entre Chile y Dubái.', 
    keywords: 'asesoría legal Dubái, inversión Dubái, negocios Emiratos Árabes Unidos, visa residencia Dubái', 
    path: '/asesoria-en-dubai', 
    schemaType: 'Service', 
    faqs: [
      { 
        question: '¿En qué se invierte en Dubái?', 
        answer: 'En proyectos de negocios, comercio estratégico, inversiones residenciales y de infraestructura, que pueden incluir visa para el empresario y su familia.' 
      },
      { 
        question: '¿Por qué invertir en Dubái?', 
        answer: 'Es una economía dinámica, con oportunidades de negocios, entorno empresarial favorable, opciones de residencia e inversión inmobiliaria.' 
      },
      { 
        question: '¿Por qué es interesante Dubái para buscar visa de residencia y desarrollar negocios?', 
        answer: 'Por su conectividad, educación, ambiente multicultural y desarrollo comercial, empresarial y de inversión.' 
      },
    ]
  },

  '/asesoria-legal-a-personas-mayores-y-familias': { 
    title: 'Asesoría legal a personas mayores y familias | Cervellino & Asociados Abogados', 
    description: 'Asesoría legal a personas mayores, familias y organizaciones en derechos, herencias, testamentos, interdicción y protección jurídica.', 
    keywords: 'abogado personas mayores Chile, derechos adultos mayores, herencias, interdicción por demencia', 
    path: '/asesoria-legal-a-personas-mayores-y-familias', 
    schemaType: 'Service' 
  },

  '/asesoria-en-italia': { 
    title: 'Asesoría legal en Italia | Cervellino & Asociados Abogados', 
    description: 'Estudio jurídico especializado en asesoría legal entre Chile e Italia. Expertos en ciudadanía e inmigración, compraventa de inmuebles, herencias, divorcios, litigios y asesoría corporativa a través de nuestra red de abogados en Italia.', 
    keywords: 'Abogado en Chile e Italia para trámites legales, Asesoría Trámites Legales en Italia, Ciudadania Italiana', 
    path: '/asesoria-en-italia', 
    schemaType: 'Service',
    faqs: [
    {
      question: '¿Debes realizar trámites legales desde Chile en Italia?',
      answer: 'Contamos con equipo en Chile e Italia para ayudarte y asesorarte en la gestión de trámites y asuntos legales que requieran actuaciones en Italia.'
    },
    {
      question: '¿Tienes deseos de comprar un inmueble en Italia?',
      answer: 'Encantados te podemos ayudar a buscarlo y asesorarte legalmente durante el proceso de compra, revisando los antecedentes y coordinando las gestiones necesarias.'
    },
    {
      question: '¿Necesitas resolver una herencia en Italia desde Chile?',
      answer: 'Podemos ayudarte y asesorarte desde Chile. Contamos con una red de abogados asociados expertos en Italia para coordinar las gestiones necesarias en materia de herencias y sucesiones.'
    },
    {
      question: '¿Necesitas orientación para estudiar y obtener becas en Italia?',
      answer: 'Podemos ayudarte a conocer las alternativas disponibles y orientarte en los aspectos legales y administrativos relacionados con tu proyecto de estudios en Italia.'
    },
    {
      question: '¿Tienes problemas de cobranza con una empresa italiana?',
      answer: 'Te podemos ayudar a abordar y coordinar la solución de problemas de cobranza o incumplimientos con empresas italianas, sin necesidad de que te desplaces desde tu empresa en Chile.'
    },
    {
      question: '¿Deseas crear una filial de tu empresa o desarrollar un negocio en Italia?',
      answer: 'Encantados te podemos ayudar a evaluar las alternativas para ingresar al mercado italiano y coordinar la asesoría legal necesaria para desarrollar tu empresa o negocio en Italia.'
    },
    {
      question: '¿Necesitas un mandato urgente en Chile para trámites legales en Italia?',
      answer: 'Podemos orientarte en la preparación y otorgamiento del mandato que necesites para determinadas gestiones legales en Italia y coordinar su tramitación a la brevedad.'
    }
  ]
  
  },

  '/compliance-ley-proteccion-de-datos-personales': { 
    title: 'Compliance y protección de datos personales | Cervellino & Asociados Abogados', 
    description: 'Asesoría para evaluar, diseñar e implementar programas de cumplimiento de la Ley de Protección de Datos Personales.', 
    keywords: 'protección de datos personales Chile, compliance datos, programa protección datos, auditoría datos', 
    path: '/compliance-ley-proteccion-de-datos-personales', 
    schemaType: 'Service' 
  },

  '/asesoria-laboral': { 
    title: 'Asesoría laboral para empresas | Cervellino & Asociados Abogados', 
    description: 'Asesoría en derecho laboral, contratos, relaciones sindicales, auditorías, despidos, negociación colectiva y litigios laborales.', 
    keywords: 'abogado laboral empresas Chile, asesoría laboral, contratos trabajo, negociación colectiva', 
    path: '/asesoria-laboral', 
    schemaType: 'Service' 
  },

  '/asesoria-derecho-minero': { 
    title: 'Asesoría en derecho minero | Cervellino & Asociados Abogados', 
    description: 'Asesoría legal para concesiones, derechos mineros, contratos, proyectos, conflictos y litigios del sector minero.', 
    keywords: 'abogado minero Chile, derecho minero, concesiones mineras, contratos mineros, litigios mineros', 
    path: '/asesoria-derecho-minero', 
    schemaType: 'Service' 
  },

  '/redirect': { 
    title: 'Contacto por WhatsApp | Cervellino & Asociados Abogados', 
    description: 'Redirección de contacto por WhatsApp de Cervellino & Asociados Abogados.', 
    keywords: 'contacto abogados WhatsApp', 
    path: '/redirect', 
    noindex: true, 
    schemaType: 'WebPage' 
  },

  '/asuntos-legales-entre-chile-italia': { 
    title: 'Asuntos legales entre Chile e Italia', 
    description: 'Asesoría para inmigración, inversiones inmobiliarias, negocios y creación de filiales entre Chile e Italia.', 
    keywords: 'asesoría legal Italia, inversión Italia, negocios Italia, visa residencia Italia', 
    path: '/asuntos-legales-entre-chile-italia', 
    schemaType: 'Service', 
    faqs: [
      { 
        question: '¿Puedo realizar trámites legales en Italia estando en Chile?', 
        answer: 'Sí. En muchos casos es posible gestionar trámites y asuntos legales en Italia sin que usted tenga que viajar. En Cervellino Asociados Abogados contamos con coordinación y apoyo profesional en Chile e Italia, lo que nos permite orientar a nuestros clientes y gestionar asuntos legales que requieren actuaciones en Italia. Analizamos cada caso, determinamos qué documentación se necesita y coordinamos las actuaciones correspondientes con nuestra red de profesionales asociados en Italia. ¿Necesita realizar un trámite legal en Italia desde Chile? Contáctenos para analizar su caso.' 
      },
      { 
        question: '¿Puedo comprar un inmueble en Italia viviendo en Chile?', 
        answer: 'Sí. Es posible recibir asesoría legal desde Chile para el proceso de compra de un inmueble en Italia. En Cervellino Asociados podemos asesorarlo en las distintas etapas de una operación inmobiliaria en Italia, desde la revisión inicial de antecedentes y documentación hasta la coordinación con profesionales locales que intervengan en la operación. Nuestro objetivo es que el comprador chileno pueda tomar decisiones informadas y reducir los riesgos jurídicos asociados a una adquisición inmobiliaria en Italia. ¿Está buscando comprar una propiedad en Italia? Podemos acompañarlo durante el proceso.' 
      },
      { 
        question: '¿Puedo resolver una herencia en Italia desde Chile?', 
        answer: 'Sí. Una herencia ubicada en Italia puede requerir actuaciones y asesoría jurídica en Italia, y podemos coordinar el proceso desde Chile. En Cervellino Asociados asesoramos a clientes que necesitan gestionar herencias, sucesiones y asuntos patrimoniales en Italia, coordinando con nuestra red de abogados asociados especializados en dicho país. Analizamos los antecedentes familiares y patrimoniales, identificamos las actuaciones necesarias y coordinamos con los profesionales que correspondan en Italia. Si recibió una herencia en Italia y vive en Chile, podemos orientarlo sobre cómo comenzar el proceso.' 
      },
      { 
        question: '¿Pueden orientarme para estudiar y acceder a becas en Italia?', 
        answer: 'Sí. Podemos orientarlo respecto de los aspectos legales y administrativos relacionados con su proyecto de estudios en Italia. Italia ofrece diversas alternativas para estudiantes internacionales, pero cada situación requiere revisar requisitos, documentación y procedimientos específicos. En Cervellino Asociados podemos entregar orientación y coordinar el apoyo necesario para quienes desde Chile desean estudiar, desarrollarse profesionalmente o proyectarse académicamente en Italia. ¿Tiene el proyecto de estudiar en Italia? Conversemos sobre su situación y las alternativas disponibles.' 
      },
      { 
        question: '¿Pueden ayudar a una empresa chilena con una cobranza en Italia?', 
        answer: 'Sí. Podemos coordinar la asesoría necesaria para abordar una situación de cobranza o incumplimiento contractual relacionada con una empresa o persona en Italia. En Cervellino Asociados podemos analizar los antecedentes contractuales y comerciales desde Chile y coordinar, cuando corresponda, la intervención de abogados asociados en Italia. Esto permite a una empresa chilena contar con asesoría y coordinación jurídica internacional sin necesidad de trasladar inicialmente a sus ejecutivos a Italia. ¿Una empresa italiana mantiene una deuda con su empresa en Chile? Analicemos el caso.' 
      },
      { 
        question: '¿Pueden ayudarme a crear una filial o desarrollar un negocio en Italia?', 
        answer: 'Sí. Podemos orientar a empresas y empresarios chilenos que buscan desarrollar actividades comerciales o abrir una operación en Italia. Antes de iniciar una expansión internacional es necesario analizar aspectos jurídicos, societarios, contractuales, tributarios y regulatorios, según las características del proyecto. En Cervellino Asociados podemos coordinar desde Chile la asesoría necesaria y vincular al cliente con profesionales especializados en Italia. ¿Está evaluando ingresar al mercado italiano? Conversemos sobre su proyecto.' 
      },
      { 
        question: '¿Necesito otorgar un mandato en Chile para realizar un trámite legal en Italia?', 
        answer: 'En determinados casos, sí. Un mandato correctamente preparado puede permitir que un tercero actúe en representación del interesado, evitando desplazamientos innecesarios. En Cervellino Asociados podemos orientar sobre la documentación y poderes que sean necesarios para determinadas gestiones vinculadas con Italia, coordinando posteriormente con los profesionales que correspondan. La estructura del mandato dependerá del trámite, de las facultades que deban otorgarse y de los requisitos que correspondan en cada caso. ¿Necesita otorgar un mandato desde Chile para un trámite en Italia? Consúltenos antes de firmarlo.' 
      },
    ]
  },
};

export default pages;
