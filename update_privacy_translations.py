import json
from pathlib import Path
translations = {
  'en': {
    'hero': {
      'title': 'Privacy Policy',
      'description': 'HEIC JPG NOW (the Service) prioritizes protecting your images and personal information. This policy explains our transparent and secure privacy practices.',
      'updated': 'Last updated: November 27, 2025'
    },
    'tocTitle': 'Contents',
    'toc': [
      {'id': 'privacy-section-1', 'label': '1. Information We Handle'},
      {'id': 'privacy-section-2', 'label': '2. How We Use Information'},
      {'id': 'privacy-section-3', 'label': '3. Retention and Deletion'},
      {'id': 'privacy-section-4', 'label': '4. Security and Access Controls'},
      {'id': 'privacy-section-5', 'label': '5. Cookies & Local Storage'},
      {'id': 'privacy-section-6', 'label': '6. Your Rights'},
      {'id': 'privacy-section-7', 'label': '7. Policy Changes'}
    ],
    'sections': [
      {
        'title': '1. Information We Handle',
        'body': [
          'The Service does not automatically collect personally identifiable data. All HEIC to JPG conversions run on your device, and we only process the limited information below.'
        ],
        'list': [
          'Uploaded HEIC / HEIF / JPG files stay in your browser memory only and are never transmitted to or stored on our servers.',
          'Aggregated, non-identifiable analytics events such as page views, feature usage counts, or error types.',
          'Details you voluntarily include when contacting support, limited to what is necessary to resolve the request.'
        ]
      },
      {
        'title': '2. How We Use Information',
        'body': ['We use the above information solely for the purposes below.'],
        'list': [
          'Ensure core conversion features operate reliably and troubleshoot issues using aggregated analytics.',
          'Understand usage trends to improve UI/UX and plan infrastructure capacity.',
          'Respond to legal obligations or prevent misuse when strictly necessary, using only the minimal records required.'
        ]
      },
      {
        'title': '3. Retention and Deletion',
        'body': [
          'Analytics data never includes personal identifiers, and retention windows are minimized. Files and support records are removed under the following conditions.'
        ],
        'list': [
          'Files are deleted immediately when you clear the queue, close the tab, refresh the page, or complete the workflow.',
          'Analytics metrics remain in aggregated form only; they cannot be used to reconstruct individual behavior.',
          'Support emails are erased or anonymized within 90 days after the ticket is resolved.'
        ],
        'notes': [
          'We never persist original files or converted outputs on servers.',
          'Operational logs are kept for up to 90 days for auditing, after which only summary statistics remain.'
        ]
      },
      {
        'title': '4. Security and Access Controls',
        'body': [
          'All conversions run locally so uploaded files never traverse external networks.',
          'Analytics requests use encrypted HTTPS connections, and access to dashboards is restricted to the smallest possible team.'
        ]
      },
      {
        'title': '5. Cookies & Local Storage',
        'body': [
          'We do not use advertising or behavioral tracking cookies.',
          'We may store short-lived first-party cookies or local-storage items to remember preferences or support anonymous analytics. You can clear or block them in your browser, though some features may degrade.'
        ]
      },
      {
        'title': '6. Your Rights',
        'body': [
          'If you wish to review, correct, or delete information, contact us at the email below and we will respond within a reasonable timeframe.',
          'We honor rights granted by applicable data-protection laws.'
        ]
      },
      {
        'title': '7. Policy Changes',
        'body': [
          'We may update this policy when the Service or legal requirements change. Significant updates will be announced on the site along with the new revision date.'
        ]
      }
    ],
    'contact': {
      'title': 'Contact',
      'description': 'For privacy questions or rights requests, please reach out via the email address below.',
      'emailLabel': 'Email',
      'email': 'guom0900@gmail.com',
      'response': 'We typically reply within 3 business days.'
    }
  },
  'es': {
    'hero': {
      'title': 'Política de privacidad',
      'description': 'HEIC JPG NOW (el servicio) prioriza la protección de tus imágenes y de tu información personal. Esta política describe nuestras prácticas transparentes y seguras.',
      'updated': 'Última actualización: 27 de noviembre de 2025'
    },
    'tocTitle': 'Contenido',
    'toc': [
      {'id': 'privacy-section-1', 'label': '1. Información que tratamos'},
      {'id': 'privacy-section-2', 'label': '2. Finalidad del uso de la información'},
      {'id': 'privacy-section-3', 'label': '3. Plazos de conservación y eliminación'},
      {'id': 'privacy-section-4', 'label': '4. Seguridad y controles de acceso'},
      {'id': 'privacy-section-5', 'label': '5. Cookies y almacenamiento local'},
      {'id': 'privacy-section-6', 'label': '6. Derechos del usuario'},
      {'id': 'privacy-section-7', 'label': '7. Cambios en la política'}
    ],
    'sections': [
      {
        'title': '1. Información que tratamos',
        'body': [
          'El servicio no recopila automáticamente datos que identifiquen a la persona. Todas las conversiones de HEIC a JPG se ejecutan en tu dispositivo y solo tratamos la información limitada descrita a continuación.'
        ],
        'list': [
          'Los archivos HEIC / HEIF / JPG cargados permanecen únicamente en la memoria del navegador y nunca se envían ni se almacenan en nuestros servidores.',
          'Eventos analíticos agregados y no identificables, como páginas vistas, volumen de uso de funciones o tipos de error.',
          'Datos que facilitas voluntariamente al contactar con soporte, limitados a lo necesario para resolver la solicitud.'
        ]
      },
      {
        'title': '2. Finalidad del uso de la información',
        'body': ['Usamos la información anterior exclusivamente para los siguientes fines.'],
        'list': [
          'Garantizar que las funciones principales funcionen de forma estable y diagnosticar incidencias mediante analíticas agregadas.',
          'Comprender las tendencias de uso para mejorar la experiencia y planificar la capacidad de la infraestructura.',
          'Cumplir obligaciones legales o prevenir usos indebidos cuando sea estrictamente necesario, usando solo los registros mínimos imprescindibles.'
        ]
      },
      {
        'title': '3. Plazos de conservación y eliminación',
        'body': [
          'Los datos analíticos no contienen identificadores personales y los periodos de conservación se mantienen al mínimo. Eliminamos archivos y comunicaciones de soporte en las siguientes situaciones.'
        ],
        'list': [
          'Los archivos se borran al instante cuando borras la cola, cierras la pestaña, recargas la página o finalizas el flujo.',
          'Las métricas de Analytics se conservan solo de forma agregada; no permiten reconstruir el comportamiento individual.',
          'Los correos de soporte se eliminan o anonimizan en un plazo máximo de 90 días tras la resolución.'
        ],
        'notes': [
          'Nunca almacenamos en servidores los archivos originales ni los resultados convertidos.',
          'Los registros operativos se conservan hasta 90 días con fines de auditoría y después solo mantenemos estadísticas resumidas.'
        ]
      },
      {
        'title': '4. Seguridad y controles de acceso',
        'body': [
          'Todas las conversiones se realizan localmente, por lo que los archivos cargados no viajan por redes externas.',
          'Las solicitudes de Analytics utilizan conexiones cifradas HTTPS y el acceso a los paneles se limita al equipo estrictamente necesario.'
        ]
      },
      {
        'title': '5. Cookies y almacenamiento local',
        'body': [
          'No utilizamos cookies publicitarias ni de seguimiento conductual.',
          'Podemos guardar cookies de primera parte o datos de almacenamiento local de corta duración para recordar preferencias o habilitar analíticas anónimas. Puedes eliminarlos o bloquearlos en el navegador, aunque algunas funciones podrían verse afectadas.'
        ]
      },
      {
        'title': '6. Derechos del usuario',
        'body': [
          'Si deseas acceder, corregir o eliminar información, contáctanos a través del correo indicado y responderemos en un plazo razonable.',
          'Respetamos los derechos otorgados por las leyes de protección de datos aplicables.'
        ]
      },
      {
        'title': '7. Cambios en la política',
        'body': [
          'Podemos actualizar esta política cuando cambie el servicio o la normativa. Comunicaremos los cambios importantes en el sitio junto con la nueva fecha de revisión.'
        ]
      }
    ],
    'contact': {
      'title': 'Contacto',
      'description': 'Para dudas de privacidad o solicitudes de derechos, escríbenos al correo que figura abajo.',
      'emailLabel': 'Correo electrónico',
      'email': 'guom0900@gmail.com',
      'response': 'Solemos responder en un máximo de 3 días laborables.'
    }
  },
  'fr': {
    'hero': {
      'title': 'Politique de confidentialité',
      'description': 'HEIC JPG NOW (le service) accorde la priorité à la protection de vos images et de vos données personnelles. La présente politique expose nos pratiques transparentes et sécurisées.',
      'updated': 'Dernière mise à jour : 27 novembre 2025'
    },
    'tocTitle': 'Sommaire',
    'toc': [
      {'id': 'privacy-section-1', 'label': '1. Données traitées'},
      {'id': 'privacy-section-2', 'label': '2. Finalité de l’utilisation des données'},
      {'id': 'privacy-section-3', 'label': '3. Conservation et suppression'},
      {'id': 'privacy-section-4', 'label': '4. Sécurité et contrôles d’accès'},
      {'id': 'privacy-section-5', 'label': '5. Cookies et stockage local'},
      {'id': 'privacy-section-6', 'label': '6. Droits des utilisateurs'},
      {'id': 'privacy-section-7', 'label': '7. Modifications de la politique'}
    ],
    'sections': [ ... ]
  }
}
for locale, content in translations.items():
    path = Path('public/locales') / locale / 'privacy.json'
    path.write_text(json.dumps(content, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
