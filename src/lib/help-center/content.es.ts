import type { HelpIndex, HelpPage } from "./content";

export const HELP_INDEX_ES: HelpIndex = {
  title: "Ayuda",
  metaTitle: "Ayuda | HEIC JPG NOW",
  metaDescription:
    'Ayuda de HEIC JPG NOW. Aquí puedes consultar errores de conversión, problemas con "Descargar todo", recomendaciones de tamaño por lote y el significado del procesamiento en el navegador.',
  intro: [
    "Aquí tienes ayuda para los problemas más habituales al convertir archivos HEIC por lotes.",
    'Si fallan algunos archivos, "Descargar todo" no funciona, el lote se ha vuelto demasiado pesado o quieres saber qué significa procesar los archivos en el navegador, entra en el tema que mejor se ajuste a lo que te está pasando.',
  ],
};

export const HELP_PAGES_ES: HelpPage[] = [
  {
    slug: "heic-conversion-failures",
    title: "¿Por qué fallan algunos archivos HEIC al convertirlos?",
    metaDescription:
      "Explica las causas más comunes por las que algunos archivos HEIC / HEIF fallan al convertirse, qué revisar primero y cómo distinguir entre un problema del archivo, de su origen o del peso del lote.",
    summary:
      "Explica por qué pueden fallar algunos archivos HEIC, qué revisar primero y cómo distinguir entre un problema del archivo, del origen o del peso del lote.",
    intro: [
      "Si algunos archivos HEIC se convierten y otros no, mira primero el archivo, su origen, el tamaño del lote y la carga del dispositivo. La extensión por sí sola no lo explica.",
    ],
    sections: [
      {
        title: "¿Por qué dos archivos con la misma extensión pueden comportarse de forma distinta?",
        paragraphs: [
          "HEIC es solo la extensión visible. Una foto original tomada con iPhone, un archivo guardado desde una app de chat y otro exportado otra vez desde otra aplicación no tienen por qué compartir la misma estructura interna ni la misma forma de guardado. Por eso uno puede convertirse sin problema y otro no.",
        ],
      },
      {
        title: "Motivos más habituales por los que falla la conversión",
        subsections: [
          {
            title: "1. El archivo está dañado",
            paragraphs: [
              "Si el archivo se dañó durante la transferencia, la exportación, el guardado o la copia, puede fallar al convertirse. Este tipo de problema no siempre se nota a simple vista y a veces solo aparece cuando intentas procesarlo.",
            ],
          },
          {
            title: "2. Los archivos no vienen todos del mismo origen",
            paragraphs: [
              "Incluso con la misma extensión .heic o .heif, los archivos pueden variar según el dispositivo, la aplicación y la forma en que se guardaron. Si en un mismo lote mezclas archivos de orígenes distintos, es normal que algunos se conviertan y otros fallen.",
            ],
          },
          {
            title: "3. El lote es demasiado pesado para el dispositivo que estás usando",
            paragraphs: [
              'Cuantos más archivos conviertes de una sola vez, y cuanto más pesa cada uno, mayor es la carga. Si el lote se vuelve demasiado pesado, la conversión puede ir más lenta, algunos archivos pueden fallar y después también puede complicarse Descargar todo.',
            ],
          },
          {
            title: "4. El dispositivo o el navegador ya van justos de recursos",
            paragraphs: [
              "La conversión en el navegador también usa recursos del dispositivo. Si tienes muchas pestañas abiertas, varias aplicaciones en segundo plano, poca memoria disponible o estás procesando un lote relativamente grande en un teléfono, el proceso puede ir más lento o volverse menos estable.",
              "Que una conversión falle no significa que toda la herramienta esté fallando. Muchas veces el problema está en uno o varios archivos concretos, o en que el lote actual es demasiado pesado para el dispositivo que estás usando.",
            ],
          },
        ],
      },
      {
        title: "Si la conversión falla, revisa primero esto",
        subsections: [
          {
            title: "1. Comprueba si fallan unos pocos archivos o todo el lote",
            paragraphs: [
              "Si solo fallan unas pocas imágenes, empieza por esos archivos. Si falla todo el lote, revisa primero la cantidad de archivos, el tamaño, el estado del dispositivo y la carga del navegador.",
            ],
          },
          {
            title: "2. Prueba solo con los archivos que fallaron",
            paragraphs: [
              "Si siempre fallan los mismos archivos dentro del lote, lo más probable es que la causa esté en esos archivos. Separarlos y probarlos por su cuenta es la forma más rápida de aislar el problema.",
            ],
          },
          {
            title: "3. Divide el lote y vuelve a intentarlo",
            paragraphs: [
              "Si añadiste muchos archivos de una vez o los archivos son grandes, divide el lote y vuelve a intentarlo. Como referencia práctica, normalmente es más fácil avanzar si te mantienes cerca de 200 archivos por lote, 30 MB por archivo y 1 GB en total.",
            ],
          },
          {
            title: "4. Si empezó a fallar en el teléfono, prueba los mismos archivos en un ordenador",
            paragraphs: [
              "La herramienta también funciona en teléfonos, pero los lotes más pesados suelen llevarse mejor en un ordenador. Probar exactamente los mismos archivos en escritorio ayuda a ver rápido si el problema viene del entorno del dispositivo.",
            ],
          },
          {
            title: "5. Si el mismo fallo se repite incluso después de dividir el lote, vuelve a mirar los archivos",
            paragraphs: [
              "Si el lote sigue fallando después de dividirlo, es posible que los archivos estén dañados. Otra posibilidad es que procedan de orígenes distintos y no se hayan guardado de la misma manera, aunque la extensión parezca idéntica.",
            ],
          },
        ],
      },
      {
        title: "¿Cómo trata esta herramienta los archivos que fallan?",
        paragraphs: [
          "La herramienta sigue convirtiendo dentro de lo que puede, pero hay archivos que pueden quedarse fuera del resultado.",
        ],
        subsections: [
          {
            title: "1. Si solo fallan algunos archivos",
            paragraphs: [
              "Aunque una parte del lote no se convierta, los archivos que sí salieron bien se mantienen como resultado. La idea es que no tengas que reiniciar todo el lote solo porque una parte falló.",
            ],
          },
          {
            title: "2. Si fallan todos los archivos",
            paragraphs: [
              "Si nada del lote se convierte correctamente, no habrá ningún resultado descargable y la herramienta mostrará un mensaje de error. En ese caso, revisa primero los archivos, su origen o si el lote es demasiado pesado para el dispositivo que estás usando.",
            ],
          },
        ],
      },
      {
        title: "¿Cuándo es mejor pasar a un ordenador o a una herramienta local?",
        paragraphs: [
          "Seguir insistiendo con el mismo trabajo en el navegador no siempre es la mejor opción. Es mejor pasar a un ordenador o a una herramienta local cuando:",
        ],
        list: [
          "necesitas procesar un volumen muy grande de archivos de una sola vez",
          "el lote sigue fallando incluso después de dividirlo",
          "necesitas conservar EXIF u otros metadatos de la forma más completa posible",
          "el dispositivo ya va justo de recursos y los archivos son grandes",
          "quieres hacer sesiones largas con menos dependencia del estado del navegador",
        ],
      },
    ],
    closing: [
      "Si solo fallan algunos archivos, vuelve a la herramienta y prueba esos archivos por separado, o repite la conversión con menos archivos en el lote.",
      "Si también quieres comprobar si el problema está en el peso del lote, revisa: ¿Por qué la herramienta recomienda una cantidad y un tamaño por lote?",
    ],
    relatedSlugs: ["batch-size-guidelines"],
  },
  {
    slug: "batch-size-guidelines",
    title: "¿Por qué la herramienta recomienda una cantidad y un tamaño por lote?",
    metaDescription:
      "Explica por qué la herramienta da una referencia de cantidad y tamaño por lote, qué señales muestran que el lote actual ya es demasiado pesado y por qué 200 archivos, 30 MB por archivo y 1 GB total sirven como punto de referencia.",
    summary:
      "Explica por qué existe una referencia de cantidad y tamaño por lote y cómo reconocer cuándo el lote actual ya es demasiado pesado.",
    intro: [
      "La herramienta no fija un número cerrado de archivos. Aun así, cuando el lote crece demasiado, es más fácil que la conversión se ralentice, falle a medias o complique la descarga final.",
      "Que puedas añadir los archivos no significa que ese mismo dispositivo vaya a terminar todo el lote sin problemas en una sola tanda.",
    ],
    sections: [
      {
        title: "¿Por qué la página muestra una referencia sobre cantidad y tamaño?",
        paragraphs: [
          "Un lote no termina cuando pulsas Convertir. El navegador todavía tiene que ordenar los resultados y preparar la descarga posterior. Por eso damos una referencia de cantidad y tamaño: cuanto más crece el lote, más fácil es que el proceso se complique.",
        ],
      },
      {
        title: "¿Qué señales indican que el lote actual ya es demasiado pesado?",
        paragraphs: [
          "Si aparece una o varias de estas señales, es mejor dividir el lote antes de seguir:",
        ],
        list: [
          "la conversión se ha vuelto claramente más lenta",
          "algunos archivos han empezado a fallar",
          "el proceso se siente pesado en un teléfono",
          "los archivos individuales son grandes",
          "la descarga de los resultados convertidos se vuelve más difícil de completar",
        ],
        afterList: [
          "En esos casos, dividir el lote y volver a intentarlo suele funcionar mejor que insistir con todo de una sola vez.",
        ],
      },
      {
        title: "¿Por qué se vuelve más lento cuando hay muchos archivos o cuando cada archivo pesa mucho?",
        paragraphs: [
          "Si hay muchos archivos, el navegador tiene que hacer más trabajo en secuencia. Si cada archivo pesa mucho, también aumenta la carga por archivo. En ambos casos, el dispositivo tiene más trabajo que sostener durante la conversión, la organización de resultados y la preparación de la descarga.",
          "Por eso el proceso puede volverse más lento incluso aunque la carga inicial de archivos no haya dado problemas.",
        ],
      },
      {
        title: "¿Por qué se toman como referencia 200 archivos por lote, 30 MB por archivo y 1 GB en total?",
        paragraphs: [
          "Estos números no son límites rígidos. Son una referencia práctica pensada para que el flujo completo resulte más manejable en muchos dispositivos y navegadores habituales.",
        ],
        list: [
          {
            title: "Alrededor de 200 archivos por lote",
            description:
              "Suele ser un rango razonable para muchos trabajos por lote sin volver demasiado pesado todo el proceso.",
          },
          {
            title: "Alrededor de 30 MB por archivo",
            description:
              "Si cada archivo es grande, la carga puede dispararse incluso cuando el número total de archivos no es muy alto.",
          },
          {
            title: "Alrededor de 1 GB en total",
            description:
              "Ayuda a evitar que el lote completo se vuelva tan pesado que las etapas posteriores empiecen a fallar o a degradarse.",
          },
        ],
        afterList: [
          "Tómalos como una guía práctica, no como una prohibición fija.",
        ],
      },
      {
        title: "¿Por qué el mismo lote puede sentirse distinto según el dispositivo?",
        paragraphs: [
          "Como la herramienta trabaja en el navegador, el dispositivo importa mucho. El mismo lote puede ir razonablemente bien en un ordenador y sentirse bastante más pesado en un teléfono.",
          "Es normal. La referencia sirve para que la herramienta siga siendo utilizable en distintos dispositivos, no para decir que todos van a soportar exactamente la misma carga.",
        ],
      },
      {
        title: "¿Cómo avanzar si necesitas procesar un lote muy grande?",
        paragraphs: [
          "Si necesitas procesar un gran número de archivos HEIC, lo más seguro es esto:",
        ],
        list: [
          "usar un ordenador siempre que puedas",
          "dividir el trabajo en lotes más pequeños desde el principio",
          "conservar primero los resultados que ya salieron bien y después pasar al siguiente lote",
          "si necesitas una conservación más completa de EXIF o sesiones largas, usar una herramienta local",
        ],
      },
    ],
    closing: [
      "Si el lote ya se ha vuelto lento o algunos archivos han empezado a fallar, divídelo y vuelve a intentarlo.",
      "Si el problema parece menos relacionado con el peso del lote y más con algunos archivos concretos, revisa: ¿Por qué fallan algunos archivos HEIC al convertirlos?",
    ],
    relatedSlugs: ["heic-conversion-failures"],
  },
  {
    slug: "batch-download-issues",
    title: '¿Qué hacer si falla "Descargar todo"?',
    metaDescription:
      'Explica cómo distinguir entre un problema en la conversión y un problema al preparar la descarga por lote, y cómo avanzar sin perder los archivos que ya se convirtieron correctamente.',
    summary:
      'Explica por qué puede fallar "Descargar todo" después de la conversión, qué revisar primero y cómo conservar los resultados que ya salieron bien.',
    intro: [
      'A veces los archivos terminan de convertirse, pero "Descargar todo" sigue fallando. Cuando pasa eso, el problema aparece en la etapa en la que el navegador reúne los archivos convertidos correctamente y los prepara para descargarlos, no en las conversiones anteriores en sí.',
      "Empieza revisando qué resultados ya salieron bien. No des por hecho que tienes que repetir todo el lote desde el principio.",
    ],
    sections: [
      {
        title: '¿Por qué puede fallar "Descargar todo" aunque la conversión ya haya terminado?',
        paragraphs: [
          "La conversión no es el último paso. Después de convertir los archivos, el navegador todavía tiene que ordenar los resultados correctos y preparar la descarga agrupada. Si el lote es lo bastante pesado, esa etapa posterior puede volverse lenta o fallar incluso aunque la conversión ya haya terminado.",
          'Por eso, que la conversión termine no garantiza que "Descargar todo" vaya a funcionar.',
        ],
      },
      {
        title: '¿En qué casos es más fácil que falle "Descargar todo"?',
        paragraphs: ['"Descargar todo" da más problemas en situaciones como estas:'],
        list: [
          "el lote contiene muchos archivos",
          "los archivos individuales son grandes y la carga total es alta",
          "el navegador o el dispositivo ya tienen muy poco margen libre",
          "hay muchas pestañas abiertas o varias aplicaciones ya están usando recursos",
          "un lote relativamente pesado se está procesando en un teléfono",
        ],
      },
      {
        title: "¿Qué revisar primero en esta situación?",
        paragraphs: ['Si no puedes usar "Descargar todo", revisa esto en este orden.'],
        subsections: [
          {
            title: "1. Comprueba primero si los archivos que sí salieron bien siguen ahí",
            paragraphs: [
              "Si algunos archivos ya se convirtieron correctamente, lo primero es confirmar que esos resultados siguen disponibles. Puede que no haga falta repetir todo el lote.",
            ],
          },
          {
            title: "2. Separa los problemas de conversión de los problemas de la etapa de descarga",
            paragraphs: [
              'Si los propios archivos no llegan a convertirse, el problema empieza antes. Si sí se convierten pero solo falla "Descargar todo", es más probable que el problema esté en la etapa posterior en la que el navegador empaqueta los resultados para descargarlos.',
            ],
          },
          {
            title: "3. Comprueba si el lote simplemente es demasiado pesado",
            paragraphs: [
              "Si el trabajo ya era grande, los archivos pesaban mucho o el proceso ya se estaba volviendo más lento antes de terminar, es muy posible que el lote sea demasiado pesado para el dispositivo que estás usando.",
            ],
          },
        ],
      },
      {
        title: "¿Cuál es la forma más segura de seguir?",
        paragraphs: [
          "Si ya tienes archivos convertidos correctamente, consérvalos primero.",
          "Lo más práctico es seguir este orden:",
        ],
        list: [
          "guardar primero los archivos que ya se convirtieron bien",
          'si "Descargar todo" no está disponible, descargar antes los archivos uno por uno',
          "si aun así quieres volver a tener un conjunto completo al final, repetir el trabajo en lotes más pequeños",
        ],
        afterList: [
          "En muchos casos, esto indica que falló la etapa posterior de descarga, no que hayan desaparecido todos los resultados anteriores.",
        ],
      },
      {
        title: "¿Cuándo conviene dividir el lote, pasar al ordenador o usar una herramienta local?",
        paragraphs: [
          "Conviene cambiar de estrategia en lugar de repetir exactamente lo mismo cuando:",
        ],
        list: [
          'el fallo aparece en "Descargar todo"',
          "todo el flujo se vuelve claramente lento antes de terminar",
          "el lote contiene muchos archivos",
          "los archivos individuales son grandes",
          "el proceso se siente pesado en un teléfono",
          "el mismo problema sigue reapareciendo incluso después de dividir el lote",
          "necesitas procesar un lote muy grande de una sola vez",
          "quieres depender menos del estado del navegador",
        ],
        afterList: [
          "Si el lote solo está un poco por encima de lo razonable, dividirlo puede ser suficiente. Si el problema sigue repitiéndose incluso después de dividirlo, o si la carga ya era muy grande desde el principio, normalmente conviene más pasar a un ordenador o usar una herramienta local.",
        ],
      },
      {
        title: "¿Cuándo mirar primero ¿Por qué fallan algunos archivos HEIC al convertirlos??",
        paragraphs: [
          'Si el problema real no es "Descargar todo", sino que los propios archivos están fallando durante la conversión, empieza por: ¿Por qué fallan algunos archivos HEIC al convertirlos?',
          "Eso suele indicar que la causa está en los archivos, en su origen o en el tamaño del lote, y no en la etapa posterior de descarga.",
        ],
      },
    ],
    closing: [
      "Si ya tienes resultados correctos, consérvalos primero y después vuelve a probar con un lote más pequeño si hace falta.",
      "Si el problema se parece más a un fallo de conversión que a un fallo de la descarga posterior, revisa también: ¿Por qué fallan algunos archivos HEIC al convertirlos?",
    ],
    relatedSlugs: ["heic-conversion-failures", "batch-size-guidelines"],
  },
  {
    slug: "browser-side-processing",
    title: "¿Los archivos se suben a un servidor? ¿Qué significa procesarlos en el navegador?",
    metaDescription:
      "Explica qué significa en esta herramienta que el procesamiento se haga en el navegador, cómo se relaciona con la privacidad, la velocidad, las diferencias entre dispositivos y la conservación de EXIF, y cuándo conviene usar una herramienta local.",
    summary:
      "Explica qué significa aquí procesar en el navegador, qué no garantiza y cuándo tiene sentido seguir así o pasar a una herramienta local.",
    intro: [
      "La conversión principal de esta herramienta se hace en el navegador. No funciona como un servicio que primero sube tus archivos a un servidor remoto y luego te devuelve una copia ya convertida.",
      "Esto ayuda a entender la parte de privacidad. Pero la carga sigue siendo local. El trabajo se sigue haciendo en tu dispositivo, así que el tamaño de los archivos, el tamaño del lote y el estado del navegador siguen marcando la diferencia.",
    ],
    sections: [
      {
        title: "¿Qué significa aquí procesar en el navegador?",
        paragraphs: [
          "Después de agregar los archivos, la parte principal de la conversión se ejecuta en el navegador del dispositivo que estás usando.",
          "En la práctica:",
        ],
        list: [
          "la herramienta no depende de subir primero los archivos y esperar a que el resultado vuelva desde fuera",
          "la velocidad y la estabilidad dependen en parte del dispositivo y del navegador que estás usando",
          "cuanto mayores sean los archivos o el lote, mayor será la carga local",
        ],
      },
      {
        title: "¿Cómo afecta eso a la privacidad, la velocidad y la experiencia según el dispositivo?",
        paragraphs: [
          "En un uso normal, el trabajo se queda en tu dispositivo en lugar de salir primero a un servicio de conversión remoto.",
          "También significa que el rendimiento depende de ese dispositivo. Si el lote es grande, los archivos pesan mucho o el navegador ya va cargado, el proceso puede ir más lento o perder estabilidad.",
          "Por eso un mismo lote puede sentirse llevadero en un ordenador y pesado en un teléfono.",
        ],
      },
      {
        title: "Que el procesamiento se haga en el navegador no garantiza lo siguiente",
        paragraphs: [
          "Procesar los archivos en el navegador no garantiza automáticamente todo esto:",
        ],
        list: [
          "que todos los archivos se conviertan sin problemas",
          "que todas las ejecuciones terminen rápido",
          "que todos los dispositivos se sientan igual de fluidos",
          "que todos los metadatos se conserven por completo",
        ],
        afterList: [
          'Si un archivo está dañado, se guardó de otra manera o forma parte de un lote demasiado pesado para el dispositivo, aun así pueden aparecer fallos de conversión, lentitud o problemas con "Descargar todo".',
        ],
      },
      {
        title: "¿Qué ocurre con EXIF y otros metadatos?",
        paragraphs: [
          "Procesar en el navegador no es lo mismo que conservar todos los metadatos sin cambios.",
          "La herramienta conserva EXIF cuando puede, pero no está pensada para garantizar una conservación completa.",
          "Si solo quieres pasar archivos HEIC a JPG / JPEG para un uso cotidiano, eso suele ser suficiente.",
          "Si necesitas conservar EXIF y otros metadatos de la forma más completa posible, una herramienta local especializada es mejor opción.",
        ],
      },
      {
        title: "¿En qué casos tiene sentido seguir usando la herramienta en el navegador?",
        paragraphs: ["Seguir en el navegador tiene sentido cuando:"],
        list: [
          "quieres convertir fotos de iPhone a JPG / JPEG para un uso cotidiano",
          "quieres pasar los archivos rápidamente a un formato más fácil de abrir",
          "la cantidad de archivos no es extremadamente grande",
          "no necesitas una conservación completa de los metadatos",
        ],
      },
      {
        title: "¿En qué casos es mejor usar un ordenador o una herramienta local?",
        paragraphs: ["Suele ser mejor pasar a un ordenador o a una herramienta local cuando:"],
        list: [
          "necesitas procesar un volumen muy grande de archivos de una sola vez",
          "el dispositivo ya se siente claramente sobrecargado",
          'ya han aparecido lentitud, fallos de conversión o problemas con "Descargar todo"',
          "necesitas conservar EXIF u otros metadatos de la forma más completa posible",
          "quieres sesiones largas con menos dependencia del estado del navegador",
        ],
      },
    ],
    closing: [
      "Si notas que el lote se ha vuelto demasiado pesado, el siguiente paso más útil es revisar: ¿Por qué la herramienta recomienda una cantidad y un tamaño por lote?",
      "Si algunos archivos ya están fallando en la conversión, revisa: ¿Por qué fallan algunos archivos HEIC al convertirlos?",
      'Si el problema principal está en la etapa posterior de descarga, revisa: ¿Qué hacer si falla "Descargar todo"?',
    ],
    relatedSlugs: ["batch-size-guidelines", "heic-conversion-failures", "batch-download-issues"],
  },
];
