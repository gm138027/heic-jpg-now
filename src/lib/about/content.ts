import { defaultLocale, type Locale } from "@/lib/i18n/locales";

export const ABOUT_SLUG = "about";

export type AboutSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type AboutPage = {
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  intro: string[];
  sections: AboutSection[];
};

const ABOUT_PAGES: Record<Locale, AboutPage> = {
  ja: {
    navLabel: "このサイトについて",
    title: "HEIC JPG NOW について",
    metaTitle: "HEIC JPG NOW について | HEIC JPG NOW",
    metaDescription:
      "HEIC JPG NOW がどんな個人運営サイトで、なぜこのサイトを作ったのか、どのように改善やサポートを続けているのかをまとめたページです。",
    heroDescription:
      "HEIC JPG NOW は、個人で運営している HEIC / HEIF の一括変換サイトです。このサイトを作った理由や、どのような方針で運営しているのか、どこまでサポートしているのかをまとめています。",
    intro: [
      "HEIC JPG NOW は、個人で運営している HEIC / HEIF の一括変換サイトです。まとまった HEIC / HEIF ファイルをブラウザで扱いやすくし、変換中に起こりやすい問題も順番に確認しやすくすることを目的にしています。",
      "このサイトを作った理由や、どのような考え方で運営しているのか、改善とサポートをどう続けているのかをまとめています。",
    ],
    sections: [
      {
        title: "このサイトはどんなサイトですか？",
        paragraphs: [
          "このサイトは、HEIC / HEIF ファイルを JPG / JPEG にまとめて変換したいときに、インストールや登録なしでブラウザから使えるようにしている個人運営サイトです。",
          "変換できるかどうかだけでなく、バッチが重い、途中で一部のファイルが失敗する、一括ダウンロードしにくい、端末によって使い心地が変わるといった点も含めて、利用時に迷いやすいところをできるだけわかりやすく案内するようにしています。",
        ],
      },
      {
        title: "なぜこのサイトを作ったのですか？",
        paragraphs: [
          "HEIC / HEIF を JPG / JPEG に変換すること自体は珍しくありませんが、実際にまとまった枚数を扱うと、追加、変換、保存を何度も繰り返すことになります。さらに、一部のファイルだけ失敗する、今回のバッチが重すぎる、一括ダウンロードだけ進まない、といった実際の使いにくさも出やすくなります。",
          "このサイトは、そうした「一括変換のときにつまずきやすい点」を減らしたいという考えから作りました。単に変換できるだけではなく、まとまった HEIC / HEIF ファイルをブラウザで扱いやすい形にすることを大切にしています。",
        ],
      },
      {
        title: "このサイトで大切にしていること",
        list: [
          "HEIC / HEIF の一括変換を、ブラウザで扱いやすくすること",
          "向いている場面と向いていない場面を、できるだけ曖昧にしないこと",
          "変換に失敗したときやバッチが重いときに、ヘルプで順番に確認できるようにすること",
          "実際の利用で起こりやすい問題を、事実ベースで案内すること",
        ],
      },
      {
        title: "このサイトはどのように運営・改善していますか？",
        paragraphs: [
          "このサイトは個人で継続的に運営しています。不具合の修正、機能の改善、使い心地の見直しを続けながら、必要に応じてヘルプや案内内容も調整しています。",
          "また、実際に寄せられた困りごとや提案をもとに、機能を追加したり、使い方の案内を見直したりしていく方針です。使い方、不具合、業務相談、著作権関連の連絡など、実際の声をもとに改善を続けていきます。",
        ],
      },
      {
        title: "このサイトで案内している基本的な考え方",
        paragraphs: [
          "このツールでは、HEIC / HEIF の主な変換処理が現在の端末のブラウザ内で進みます。ファイルを最初に遠隔サーバーへ送る形ではないため、ブラウザでそのまま使い始めやすい一方で、処理の安定しやすさは端末性能、ブラウザの状態、ファイル数、ファイルサイズの影響を受けます。",
          "そのため、このサイトでは HEIC / HEIF 対応、1 回あたり 200 ファイル以内、1 ファイル 30MB 以内、合計 1GB 以内をひとつの目安にしています。EXIF も可能な範囲で扱いますが、完全な保持を前提にしたツールではありません。非常に大きなバッチを継続的に処理したい場合や、EXIF をできるだけ完全に残したい場合は、パソコンやローカルツールのほうが向いていることがあります。",
        ],
      },
      {
        title: "お問い合わせとサポート",
        paragraphs: [
          "現在の連絡窓口はメールです。使い方に関する質問、不具合報告、機能提案、業務相談、著作権関連の連絡を受け付けています。内容によっては、先にヘルプページを確認したほうが早く解決できる場合もありますが、個別に確認したい内容がある場合はお問い合わせページから連絡できます。",
        ],
      },
    ],
  },
  en: {
    navLabel: "About",
    title: "About HEIC JPG NOW",
    metaTitle: "About HEIC JPG NOW | HEIC JPG NOW",
    metaDescription:
      "A summary of what HEIC JPG NOW is, why it was created, and how this independently maintained site continues to improve and support users.",
    heroDescription:
      "HEIC JPG NOW is a HEIC / HEIF batch conversion site run by one person. This page covers why the site exists, how it is maintained, and what kind of support it offers.",
    intro: [
      "HEIC JPG NOW is a HEIC / HEIF batch conversion site run by one person. It exists to make larger HEIC / HEIF batches easier to handle in the browser and to make the common problems around batch conversion easier to understand.",
      "This page covers why the site was built, how it is maintained, and how support and product improvements are handled.",
    ],
    sections: [
      {
        title: "What kind of site is this?",
        paragraphs: [
          "This is a site run by one person for people who want to convert HEIC / HEIF files to JPG / JPEG in batches without installing software or creating an account.",
          "The goal is not only to provide the conversion itself. The site also tries to make the common batch-conversion pain points easier to understand, including batches that become too heavy, partial conversion failures, Download All issues, and the way the experience can change from one device to another.",
        ],
      },
      {
        title: "Why was this site created?",
        paragraphs: [
          "There is no shortage of ways to convert HEIC / HEIF to JPG / JPEG, but batch conversion is where the real friction tends to show up. Once you are working through a larger set of files, adding them, converting them, and saving the results quickly becomes repetitive. It is also common to run into issues such as only some files failing, a batch becoming too heavy, or the final batch download not finishing cleanly.",
          "HEIC JPG NOW was built to reduce that kind of friction. The goal is not just to convert files, but to make batch conversion easier to work through in the browser.",
        ],
      },
      {
        title: "What matters on this site",
        list: [
          "Making HEIC / HEIF batch conversion easier to handle in the browser",
          "Being clear about when the tool is a good fit and when it is not",
          "Giving users a clear help path when conversions fail or a batch feels too heavy",
          "Explaining common issues in factual, product-linked language",
        ],
      },
      {
        title: "How is the site maintained and improved?",
        paragraphs: [
          "This site is maintained by one person. Bug fixes, feature improvements, and usability updates continue over time, and the help content and guidance are adjusted when they need to be.",
          "The site is also improved based on real user feedback. Questions, bug reports, feature suggestions, business inquiries, and copyright-related requests all help shape future updates.",
        ],
      },
      {
        title: "The basic approach behind this site",
        paragraphs: [
          "The main conversion work happens in the browser on the device you are using. Files are not sent to a remote server first for conversion. That makes the tool easy to start using in the browser, but the experience still depends on device performance, browser state, file count, and file size.",
          "For that reason, the site points users to HEIC / HEIF support, up to 200 files per batch, up to 30 MB per file, and up to 1 GB total as practical guidance. EXIF is handled where possible, but the tool is not built around complete preservation. If you need to work through very large batches regularly, or you need fuller EXIF retention, a desktop workflow or dedicated local tool may be a better fit.",
        ],
      },
      {
        title: "Contact and support",
        paragraphs: [
          "Email is the current contact channel. The site accepts questions about usage, bug reports, feature suggestions, business inquiries, and copyright-related requests. In some cases, the Help pages will be the fastest way to resolve an issue, but if you need direct follow-up, you can use the Contact page.",
        ],
      },
    ],
  },
  es: {
    navLabel: "Acerca de",
    title: "Acerca de HEIC JPG NOW",
    metaTitle: "Acerca de HEIC JPG NOW | HEIC JPG NOW",
    metaDescription:
      "Resumen de qué es HEIC JPG NOW, por qué se creó y cómo este sitio mantenido de forma independiente sigue mejorando y dando soporte a sus usuarios.",
    heroDescription:
      "HEIC JPG NOW es un sitio de conversión por lotes de HEIC / HEIF mantenido por una sola persona. Esta página resume por qué existe, cómo se mantiene y qué tipo de soporte ofrece.",
    intro: [
      "HEIC JPG NOW es un sitio de conversión por lotes de HEIC / HEIF mantenido por una sola persona. Su objetivo es hacer que los lotes grandes de archivos HEIC / HEIF sean más fáciles de manejar en el navegador y que los problemas más habituales de la conversión por lotes resulten más fáciles de entender.",
      "Aquí se resume por qué se creó el sitio, cómo se mantiene y cómo se gestionan el soporte y las mejoras del producto.",
    ],
    sections: [
      {
        title: "¿Qué tipo de sitio es este?",
        paragraphs: [
          "Es un sitio mantenido por una sola persona para quienes quieren convertir archivos HEIC / HEIF a JPG / JPEG por lotes sin instalar software ni crear una cuenta.",
          "El objetivo no es solo ofrecer la conversión. El sitio también busca que sea más fácil entender los puntos que suelen complicar la conversión por lotes, como los lotes que se vuelven demasiado pesados, los fallos parciales, los problemas con `Descargar todo` o las diferencias de experiencia entre un dispositivo y otro.",
        ],
      },
      {
        title: "¿Por qué se creó este sitio?",
        paragraphs: [
          "No faltan formas de convertir HEIC / HEIF a JPG / JPEG, pero es en la conversión por lotes donde suelen aparecer más dificultades. Cuando trabajas con muchos archivos, añadirlos, convertirlos y guardar los resultados se vuelve repetitivo con rapidez. También es habitual encontrarse con casos como que solo fallen algunos archivos, que el lote se vuelva demasiado pesado o que la descarga final no termine bien.",
          "HEIC JPG NOW se creó para reducir ese tipo de dificultades. El objetivo no es solo convertir archivos, sino hacer que la conversión por lotes resulte más fácil de seguir en el navegador.",
        ],
      },
      {
        title: "Qué importa en este sitio",
        list: [
          "Hacer que la conversión por lotes de HEIC / HEIF sea más fácil de manejar en el navegador",
          "Dejar claro cuándo la herramienta es una buena opción y cuándo no",
          "Ofrecer una ayuda clara cuando la conversión falla o un lote se siente demasiado pesado",
          "Explicar los problemas más habituales con un lenguaje claro y ligado al uso real de la herramienta",
        ],
      },
      {
        title: "¿Cómo se mantiene y mejora el sitio?",
        paragraphs: [
          "Este sitio lo mantiene una sola persona. Las correcciones de errores, las mejoras de funciones y los ajustes de experiencia continúan con el tiempo, y el contenido de ayuda y las guías se revisan cuando hace falta.",
          "El sitio también se mejora a partir de comentarios reales de los usuarios. Las preguntas, los reportes de errores, las sugerencias de funciones, las consultas comerciales y las solicitudes relacionadas con derechos de autor ayudan a orientar las siguientes mejoras.",
        ],
      },
      {
        title: "En qué se basa este sitio",
        paragraphs: [
          "La parte principal de la conversión se hace en el navegador del dispositivo que estás usando. Los archivos no se envían primero a un servidor remoto para convertirlos. Eso hace que la herramienta sea fácil de usar directamente en el navegador, pero la experiencia sigue dependiendo del rendimiento del dispositivo, del estado del navegador, de la cantidad de archivos y de su tamaño.",
          "Por eso, el sitio usa como referencia práctica la compatibilidad con HEIC / HEIF, hasta 200 archivos por lote, hasta 30 MB por archivo y hasta 1 GB en total. El EXIF se maneja cuando es posible, pero la herramienta no está pensada para conservarlo por completo. Si necesitas trabajar con lotes muy grandes de forma habitual, o si necesitas una conservación más completa del EXIF, puede ser mejor usar un ordenador o una herramienta local especializada.",
        ],
      },
      {
        title: "Contacto y soporte",
        paragraphs: [
          "El correo electrónico es el canal de contacto actual. El sitio acepta preguntas de uso, reportes de errores, sugerencias de funciones, consultas comerciales y solicitudes relacionadas con derechos de autor. En algunos casos, las páginas de ayuda serán la forma más rápida de resolver un problema, pero si necesitas seguimiento directo, puedes usar la página de contacto.",
        ],
      },
    ],
  },
  fr: {
    navLabel: "À propos",
    title: "À propos de HEIC JPG NOW",
    metaTitle: "À propos de HEIC JPG NOW | HEIC JPG NOW",
    metaDescription:
      "Présentation de HEIC JPG NOW, des raisons pour lesquelles ce site indépendant a été créé et de la manière dont il continue d’évoluer et d’accompagner ses utilisateurs.",
    heroDescription:
      "HEIC JPG NOW est un site de conversion HEIC / HEIF par lot géré par une seule personne. Cette page explique pourquoi le site existe, comment il évolue et quel type d’aide il propose.",
    intro: [
      "HEIC JPG NOW est un site de conversion HEIC / HEIF par lot géré par une seule personne. Il a été conçu pour rendre les lots plus importants de fichiers HEIC / HEIF plus simples à traiter dans le navigateur et pour aider à mieux comprendre les problèmes qui reviennent le plus souvent avec la conversion par lot.",
      "Cette page explique pourquoi le site a été créé, comment il est maintenu et de quelle manière il évolue tout en accompagnant ses utilisateurs.",
    ],
    sections: [
      {
        title: "Quel type de site est-ce ?",
        paragraphs: [
          "Il s’agit d’un site géré par une seule personne, pensé pour celles et ceux qui veulent convertir des fichiers HEIC / HEIF en JPG / JPEG par lot sans installer de logiciel ni créer de compte.",
          "Le site ne se limite pas à convertir des fichiers. Il sert aussi à rendre plus clairs les points qui compliquent souvent la conversion par lot, comme les lots trop lourds, les échecs partiels, les problèmes avec `Tout télécharger` ou les différences d’expérience d’un appareil à l’autre.",
        ],
      },
      {
        title: "Pourquoi ce site a-t-il été créé ?",
        paragraphs: [
          "Les moyens de convertir des fichiers HEIC / HEIF en JPG / JPEG ne manquent pas. En revanche, c’est souvent au moment de traiter des lots que les difficultés apparaissent vraiment. Quand il faut travailler sur un volume plus important de fichiers, les étapes d’ajout, de conversion et d’enregistrement deviennent vite répétitives. Il est aussi courant de tomber sur des cas où seuls certains fichiers échouent, où le lot devient trop lourd, ou où le téléchargement final ne va pas jusqu’au bout.",
          "HEIC JPG NOW a été créé pour réduire ce type de difficultés. Le but n’est pas seulement de convertir des fichiers, mais de rendre la conversion par lot plus simple dans le navigateur.",
        ],
      },
      {
        title: "Ce qui compte sur ce site",
        list: [
          "Rendre la conversion HEIC / HEIF par lot plus simple dans le navigateur",
          "Dire clairement quand l’outil convient et quand il vaut mieux passer à une autre solution",
          "Proposer des repères d’aide clairs quand une conversion échoue ou qu’un lot semble trop lourd",
          "Expliquer les problèmes les plus fréquents dans un langage clair, au plus près de l’usage réel",
        ],
      },
      {
        title: "Comment le site est-il maintenu et amélioré ?",
        paragraphs: [
          "Ce site est maintenu par une seule personne. Les bugs sont corrigés, les fonctions sont mises à jour et l’expérience d’utilisation est revue au fil du temps. Le contenu d’aide et les explications évoluent eux aussi quand c’est nécessaire.",
          "Le site évolue aussi à partir des retours réels des utilisateurs. Les questions, les signalements de bugs, les suggestions de fonctions, les demandes professionnelles et les demandes liées aux droits d’auteur aident à orienter les évolutions suivantes.",
        ],
      },
      {
        title: "Les principes de base du site",
        paragraphs: [
          "Le cœur de la conversion se fait dans le navigateur de l’appareil utilisé. Les fichiers ne sont pas envoyés d’abord vers un serveur distant pour être convertis. Cela permet d’utiliser l’outil directement dans le navigateur, mais l’expérience dépend toujours des performances de l’appareil, de l’état du navigateur, du nombre de fichiers et de leur taille.",
          "Le site donne donc quelques repères pratiques : prise en charge de HEIC / HEIF, jusqu’à 200 fichiers par lot, jusqu’à 30 Mo par fichier et jusqu’à 1 Go au total. L’EXIF est géré quand c’est possible, mais l’outil n’a pas été pensé pour en garantir la conservation complète. Si vous devez traiter régulièrement de très gros lots, ou si vous avez besoin d’une conservation plus complète de l’EXIF, passer sur ordinateur ou vers un outil local spécialisé sera souvent plus adapté.",
        ],
      },
      {
        title: "Contact et support",
        paragraphs: [
          "Le contact se fait actuellement par e-mail. Vous pouvez envoyer des questions sur l’utilisation, des signalements de bugs, des suggestions de fonctions, des demandes professionnelles et des demandes liées aux droits d’auteur. Dans certains cas, les pages d’aide permettent de résoudre le problème plus vite ; si vous avez besoin d’un échange direct, vous pouvez passer par la page de contact.",
        ],
      },
    ],
  },
  de: {
    navLabel: "Über",
    title: "Über HEIC JPG NOW",
    metaTitle: "Über HEIC JPG NOW | HEIC JPG NOW",
    metaDescription:
      "Eine kurze Erklärung, was HEIC JPG NOW ist, warum die Website entstanden ist und wie sie als unabhängig betriebene Website weiter gepflegt und verbessert wird.",
    heroDescription:
      "HEIC JPG NOW ist eine von einer Person betriebene Website für die Batch-Konvertierung von HEIC / HEIF. Hier erfahren Sie, warum es die Website gibt, wie sie gepflegt wird und welche Unterstützung sie bietet.",
    intro: [
      "HEIC JPG NOW ist eine von einer Person betriebene Website für die Batch-Konvertierung von HEIC / HEIF. Sie wurde aufgebaut, um größere HEIC- / HEIF-Batches im Browser leichter handhabbar zu machen und typische Hürden bei der Batch-Konvertierung verständlicher zu machen.",
      "Diese Seite erklärt, warum die Website entstanden ist, wie sie gepflegt wird und wie Unterstützung und Weiterentwicklung hier aussehen.",
    ],
    sections: [
      {
        title: "Was für eine Website ist das?",
        paragraphs: [
          "Diese Website richtet sich an Menschen, die HEIC- / HEIF-Dateien gesammelt in JPG / JPEG umwandeln möchten, ohne Software zu installieren oder ein Konto anzulegen.",
          "Es geht nicht nur um die reine Konvertierung. Die Website soll auch bei typischen Stolperstellen helfen, etwa bei zu schweren Batches, teilweisen Ausfällen, Problemen mit `Alles herunterladen` oder Unterschieden zwischen Geräten und Browsern.",
        ],
      },
      {
        title: "Warum wurde diese Website erstellt?",
        paragraphs: [
          "Möglichkeiten, HEIC / HEIF in JPG / JPEG umzuwandeln, gibt es genug. Die eigentlichen Reibungen zeigen sich aber oft erst bei größeren Batches. Sobald viele Dateien zusammenkommen, werden Hinzufügen, Konvertieren und Speichern schnell zu wiederkehrenden Schritten. Dazu kommen Fälle, in denen nur einzelne Dateien scheitern, ein Batch zu schwer wird oder der abschließende Download nicht sauber durchläuft.",
          "HEIC JPG NOW wurde gebaut, um genau diese Reibung kleiner zu machen. Ziel ist nicht nur die Konvertierung selbst, sondern ein Batch-Ablauf, der sich im Browser leichter bewältigen lässt.",
        ],
      },
      {
        title: "Worauf es auf dieser Website ankommt",
        list: [
          "HEIC- / HEIF-Batches im Browser leichter handhabbar zu machen",
          "klar zu sagen, wann das Tool passt und wann ein anderer Weg sinnvoller ist",
          "klare Hilfe anzubieten, wenn Konvertierungen scheitern oder ein Batch zu schwer wird",
          "typische Probleme sachlich und nah an der tatsächlichen Nutzung zu erklären",
        ],
      },
      {
        title: "Wie wird die Website gepflegt und weiterentwickelt?",
        paragraphs: [
          "Diese Website wird von einer Person gepflegt. Fehlerbehebungen, Funktionsverbesserungen und Anpassungen an der Bedienung laufen fortlaufend. Auch Hilfetexte und Nutzungshinweise werden überarbeitet, wenn es dafür einen klaren Anlass gibt.",
          "Die Weiterentwicklung orientiert sich auch an echtem Nutzerfeedback. Fragen zur Nutzung, Fehlermeldungen, Funktionswünsche, geschäftliche Anfragen und urheberrechtliche Anliegen fließen in spätere Änderungen ein.",
        ],
      },
      {
        title: "Der grundlegende Ansatz dieser Website",
        paragraphs: [
          "Die eigentliche Konvertierung läuft im Browser auf dem Gerät, das Sie gerade verwenden. Die Dateien werden nicht zuerst an einen entfernten Server geschickt. Dadurch lässt sich das Tool direkt im Browser nutzen. Tempo und Stabilität hängen aber weiterhin von der Leistung des Geräts, dem Zustand des Browsers, der Dateianzahl und der Dateigröße ab.",
          "Darum nennt die Website HEIC / HEIF als unterstützte Formate sowie bis zu 200 Dateien pro Batch, bis zu 30 MB pro Datei und bis zu 1 GB insgesamt als praktische Richtwerte. EXIF wird nach Möglichkeit übernommen, der vollständige Erhalt aller Metadaten ist aber nicht das Ziel dieses Ablaufs. Wenn Sie regelmäßig sehr große Batches verarbeiten, ist ein Computer oft die bessere Wahl. Wenn Sie EXIF möglichst vollständig erhalten müssen, passt ein spezialisiertes lokales Tool in der Regel besser.",
        ],
      },
      {
        title: "Kontakt und Unterstützung",
        paragraphs: [
          "Der Kontakt läuft derzeit per E-Mail. Sie können Fragen zur Nutzung, Fehlermeldungen, Funktionswünsche, geschäftliche Anfragen und urheberrechtliche Anliegen senden. In manchen Fällen helfen die Hilfeseiten am schnellsten weiter. Wenn Sie direkten Kontakt brauchen, können Sie die Kontaktseite nutzen.",
        ],
      },
    ],
  },
  pt: {
    navLabel: "Sobre",
    title: "Sobre o HEIC JPG NOW",
    metaTitle: "Sobre o HEIC JPG NOW | HEIC JPG NOW",
    metaDescription:
      "Um resumo do que é o HEIC JPG NOW, por que este site independente foi criado e como ele continua sendo mantido e melhorado ao longo do tempo.",
    heroDescription:
      "O HEIC JPG NOW é um site de conversão HEIC / HEIF em lote mantido por uma pessoa. Esta página explica por que o site existe, como ele é mantido e que tipo de suporte ele oferece.",
    intro: [
      "O HEIC JPG NOW é um site de conversão HEIC / HEIF em lote mantido por uma pessoa. Ele foi criado para tornar lotes maiores de arquivos HEIC / HEIF mais fáceis de lidar no navegador e para deixar mais claros os problemas que costumam aparecer na conversão em lote.",
      "Esta página explica por que o site foi criado, como ele é mantido e como o suporte e as melhorias continuam acontecendo.",
    ],
    sections: [
      {
        title: "Que tipo de site é este?",
        paragraphs: [
          "Este site foi feito para quem quer converter arquivos HEIC / HEIF em JPG / JPEG em lote sem instalar programa nem criar conta.",
          "O objetivo não é só oferecer a conversão. O site também busca ajudar nos pontos que mais costumam travar a conversão em lote, como lotes pesados demais, falhas em parte dos arquivos, problemas com `Baixar tudo` e diferenças de experiência entre um dispositivo e outro.",
        ],
      },
      {
        title: "Por que este site foi criado?",
        paragraphs: [
          "Não faltam formas de converter HEIC / HEIF em JPG / JPEG. O atrito costuma aparecer quando o trabalho envolve lotes maiores. Quando muitos arquivos entram no mesmo processo, adicionar, converter e salvar os resultados vira uma sequência repetitiva. Também é comum aparecerem situações em que só alguns arquivos falham, o lote fica pesado demais ou o download final não termina bem.",
          "O HEIC JPG NOW foi criado para reduzir esse tipo de atrito. A proposta não é só converter arquivos, mas tornar a conversão em lote mais fácil de conduzir no navegador.",
        ],
      },
      {
        title: "O que importa neste site",
        list: [
          "tornar lotes HEIC / HEIF mais fáceis de lidar no navegador",
          "deixar claro quando a ferramenta faz sentido e quando outra opção pode ser melhor",
          "oferecer um caminho de ajuda claro quando a conversão falha ou o lote fica pesado demais",
          "explicar problemas comuns de forma direta e ligada ao uso real da ferramenta",
        ],
      },
      {
        title: "Como o site é mantido e melhorado?",
        paragraphs: [
          "Este site é mantido por uma pessoa. Correções de bugs, melhorias na ferramenta e ajustes de usabilidade continuam acontecendo ao longo do tempo. O conteúdo de ajuda e as orientações também são revistos quando precisam ser atualizados.",
          "O site também evolui com base em feedback real de usuários. Dúvidas de uso, relatos de erro, sugestões de recursos, consultas comerciais e pedidos ligados a direitos autorais ajudam a orientar mudanças futuras.",
        ],
      },
      {
        title: "Como este site funciona na prática",
        paragraphs: [
          "A parte principal da conversão roda no navegador do dispositivo que você está usando. Os arquivos não são enviados primeiro para um servidor distante para depois voltar convertidos. Isso facilita começar a usar a ferramenta direto no navegador, mas a experiência ainda depende do desempenho do dispositivo, do estado do navegador, da quantidade de arquivos e do tamanho deles.",
          "Por isso, o site trata HEIC / HEIF como formato compatível e usa até 200 arquivos por lote, até 30 MB por arquivo e até 1 GB no total como referência prática. O EXIF é preservado quando isso é possível, mas a ferramenta não foi feita para garantir preservação completa. Se você processa lotes muito grandes com frequência, usar um computador costuma fazer mais sentido. Se você precisa preservar EXIF de forma mais completa, uma ferramenta local especializada tende a ser mais adequada.",
        ],
      },
      {
        title: "Contato e suporte",
        paragraphs: [
          "O canal de contato atual é o e-mail. O site recebe dúvidas de uso, relatos de erro, sugestões de função, consultas comerciais e pedidos ligados a direitos autorais. Em alguns casos, as páginas de ajuda resolvem mais rápido. Se você precisar de contato direto, pode usar a página de contato.",
        ],
      },
    ],
  },
};

export function getAboutPage(locale: Locale) {
  return ABOUT_PAGES[locale] ?? ABOUT_PAGES[defaultLocale];
}

export function getAboutLocales() {
  return Object.keys(ABOUT_PAGES) as Locale[];
}
