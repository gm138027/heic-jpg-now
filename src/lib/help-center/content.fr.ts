import type { HelpIndex, HelpPage } from "./content";

export const HELP_INDEX_FR: HelpIndex = {
  title: "Aide",
  metaTitle: "Aide | HEIC JPG NOW",
  metaDescription:
    'Aide pour HEIC JPG NOW. Consultez les échecs de conversion, les problèmes avec "Tout télécharger", les repères de taille par lot et ce que recouvre le traitement dans le navigateur.',
  intro: [
    "Vous trouverez ici quoi faire quand une conversion HEIC par lot ne se passe pas comme prévu.",
    'Choisissez le sujet qui vous correspond : certains fichiers échouent, "Tout télécharger" ne fonctionne pas, le lot semble trop lourd, ou vous voulez comprendre le traitement dans le navigateur.',
  ],
};

export const HELP_PAGES_FR: HelpPage[] = [
  {
    slug: "heic-conversion-failures",
    title: "Pourquoi certains fichiers HEIC ne se convertissent-ils pas ?",
    metaDescription:
      "Explique les causes les plus fréquentes des échecs de conversion HEIC / HEIF, ce qu'il faut vérifier en premier et comment distinguer un problème de fichier, de provenance ou de poids du lot.",
    summary:
      "Explique pourquoi certains fichiers HEIC peuvent échouer, quoi vérifier d'abord et comment distinguer un problème de fichier, de provenance ou de poids du lot.",
    intro: [
      "Si certains fichiers HEIC passent et que d'autres échouent, vérifiez d'abord le fichier lui-même, sa provenance, le poids du lot et l'état de l'appareil. L'extension ne suffit pas.",
    ],
    sections: [
      {
        title: "Pourquoi deux fichiers avec la même extension peuvent-ils se comporter différemment ?",
        paragraphs: [
          "`HEIC` n'est que l'extension visible. Une photo prise sur iPhone, un fichier enregistré depuis une messagerie et un fichier réexporté par une autre application peuvent avoir une structure interne ou une méthode d'enregistrement différente. Même avec la même extension, deux fichiers peuvent donc ne pas se convertir de la même façon.",
        ],
      },
      {
        title: "Causes les plus fréquentes d'un échec de conversion",
        subsections: [
          {
            title: "1. Le fichier est endommagé",
            paragraphs: [
              "Si le fichier a été endommagé pendant le transfert, l'export, l'enregistrement ou la copie, la conversion peut échouer. Ce genre de problème n'est pas toujours visible avant le traitement.",
            ],
          },
          {
            title: "2. Les fichiers ne viennent pas tous de la même source",
            paragraphs: [
              "Même avec la même extension `.heic` ou `.heif`, les fichiers peuvent varier selon l'appareil, l'application et la façon dont ils ont été enregistrés. Si vous mélangez plusieurs provenances dans un même lot, il est normal que certains fichiers passent et que d'autres échouent.",
            ],
          },
          {
            title: "3. Le lot est trop lourd pour l'appareil utilisé",
            paragraphs: [
              "Plus vous lancez de fichiers à la fois, et plus chaque fichier est lourd, plus la charge augmente. Quand le lot devient trop lourd, la conversion peut ralentir, certains fichiers peuvent échouer et `Tout télécharger` peut aussi devenir plus fragile ensuite.",
            ],
          },
          {
            title: "4. L'appareil ou le navigateur manque déjà de ressources",
            paragraphs: [
              "La conversion dans le navigateur utilise aussi les ressources de l'appareil. Beaucoup d'onglets ouverts, plusieurs applications en arrière-plan, peu de mémoire disponible ou un lot déjà lourd sur téléphone peuvent rendre le traitement plus lent ou moins stable.",
              "Un échec de conversion ne veut pas dire que tout l'outil est en panne. Le plus souvent, le blocage vient de quelques fichiers précis ou d'un lot devenu trop lourd pour l'appareil utilisé.",
            ],
          },
        ],
      },
      {
        title: "Si la conversion échoue, vérifiez d'abord ceci",
        subsections: [
          {
            title: "1. Regardez si seuls quelques fichiers échouent ou si tout le lot échoue",
            paragraphs: [
              "Si seules quelques images échouent, commencez par elles. Si tout le lot échoue, vérifiez d'abord le nombre de fichiers, leur taille, l'état de l'appareil et la charge du navigateur.",
            ],
          },
          {
            title: "2. Réessayez uniquement avec les fichiers en échec",
            paragraphs: [
              "Si ce sont toujours les mêmes fichiers qui échouent, la cause se trouve probablement dans ces fichiers. Les tester séparément permet de le vérifier plus vite.",
            ],
          },
          {
            title: "3. Divisez le lot et réessayez",
            paragraphs: [
              "Si vous avez ajouté beaucoup de fichiers d'un coup ou si les fichiers sont lourds, divisez le lot et recommencez. En restant autour de 200 fichiers par lot, 30 Mo par fichier et 1 Go au total, le traitement tient souvent mieux.",
            ],
          },
          {
            title: "4. Si le problème a commencé sur téléphone, essayez les mêmes fichiers sur un ordinateur",
            paragraphs: [
              "L'outil fonctionne aussi sur téléphone, mais les lots plus lourds passent en général mieux sur ordinateur. Tester exactement les mêmes fichiers sur bureau permet de voir rapidement si le blocage vient de l'environnement de l'appareil.",
            ],
          },
          {
            title: "5. Si le même échec se répète même après avoir divisé le lot, revenez aux fichiers eux-mêmes",
            paragraphs: [
              "Si le lot continue d'échouer après avoir été divisé, les fichiers sont peut-être endommagés. Ils peuvent aussi venir de sources différentes et ne pas avoir été enregistrés de la même manière, même si l'extension paraît identique.",
            ],
          },
        ],
      },
      {
        title: "Comment cet outil gère-t-il les fichiers en échec ?",
        paragraphs: [
          "L'outil continue à convertir ce qu'il peut, mais certains fichiers peuvent rester hors du résultat final.",
        ],
        subsections: [
          {
            title: "1. Si seuls certains fichiers échouent",
            paragraphs: [
              "Même si une partie du lot ne se convertit pas, les fichiers réussis restent disponibles dans le résultat. Vous n'avez donc pas à relancer tout le lot juste parce qu'une partie a échoué.",
            ],
          },
          {
            title: "2. Si tous les fichiers échouent",
            paragraphs: [
              "Si aucun fichier du lot ne se convertit correctement, aucun résultat téléchargeable n'est disponible et l'outil affiche un message d'erreur. Dans ce cas, revenez d'abord aux fichiers eux-mêmes, à leur provenance ou au poids du lot pour l'appareil utilisé.",
            ],
          },
        ],
      },
      {
        title: "Quand vaut-il mieux passer sur un ordinateur ou un outil local ?",
        paragraphs: [
          "Passer à autre chose que le navigateur est souvent plus logique quand :",
        ],
        list: [
          "vous devez traiter un très grand volume de fichiers en une seule fois",
          "le lot continue d'échouer même après avoir été divisé",
          "vous devez conserver EXIF ou d'autres métadonnées aussi complètement que possible",
          "l'appareil manque déjà de ressources et les fichiers sont lourds",
          "vous voulez faire de longues sessions avec moins de dépendance à l'état du navigateur",
        ],
      },
    ],
    closing: [
      "Si seuls quelques fichiers échouent, retournez dans l'outil et réessayez ces fichiers séparément, ou relancez avec moins de fichiers dans le lot.",
      "Si vous voulez aussi vérifier si le problème vient surtout du poids du lot, consultez : `Pourquoi l'outil recommande-t-il un nombre de fichiers et une taille par lot ?`",
    ],
    relatedSlugs: ["batch-size-guidelines"],
  },
  {
    slug: "batch-size-guidelines",
    title: "Pourquoi l'outil recommande-t-il un nombre de fichiers et une taille par lot ?",
    metaDescription:
      "Explique pourquoi l'outil affiche un repère pour le nombre et la taille des fichiers par lot, quels signes montrent que le lot actuel est déjà trop lourd et pourquoi 200 fichiers, 30 Mo par fichier et 1 Go au total servent de repères pratiques.",
    summary:
      "Explique pourquoi il existe un repère pour le nombre et la taille des fichiers par lot et comment reconnaître quand le lot actuel est déjà trop lourd.",
    intro: [
      "L'outil n'impose pas de nombre fixe de fichiers. Mais quand le lot devient trop lourd, la conversion peut ralentir, une partie des fichiers peut échouer et le téléchargement final peut devenir plus instable.",
      "Pouvoir ajouter les fichiers ne veut pas dire que le même appareil ira facilement jusqu'au bout du lot en une seule fois.",
    ],
    sections: [
      {
        title: "Pourquoi la page affiche-t-elle un repère sur le nombre et la taille ?",
        paragraphs: [
          "Cliquer sur `Convertir` ne suffit pas. Le navigateur doit encore finir le traitement, ranger les résultats et préparer le téléchargement. Ces repères servent surtout à éviter un lot trop lourd sur un appareil ou un navigateur courant.",
        ],
      },
      {
        title: "Quels signes montrent que le lot actuel est déjà trop lourd ?",
        paragraphs: [
          "Si vous voyez un ou plusieurs des signes suivants, mieux vaut diviser le lot avant de continuer :",
        ],
        list: [
          "la conversion est devenue clairement plus lente",
          "certains fichiers ont commencé à échouer",
          "le traitement paraît lourd sur téléphone",
          "les fichiers pris individuellement sont volumineux",
          "le téléchargement des résultats convertis devient difficile à terminer",
        ],
        afterList: ["Dans ce cas, mieux vaut diviser le lot puis réessayer."],
      },
      {
        title: "Pourquoi le traitement ralentit-il quand il y a beaucoup de fichiers ou quand chaque fichier est lourd ?",
        paragraphs: [
          "Plus il y a de fichiers, plus le navigateur a d'étapes à enchaîner. Plus chaque fichier est lourd, plus chaque étape coûte. Dans les deux cas, l'appareil doit tenir la charge pendant la conversion, l'organisation des résultats et la préparation du téléchargement.",
          "Le lot peut donc se dégrader après l'ajout des fichiers, même si cette première étape s'est bien passée.",
        ],
      },
      {
        title: "Pourquoi 200 fichiers, 30 Mo par fichier et 1 Go au total servent-ils de repères ?",
        paragraphs: ["Ces chiffres ne sont pas des limites fixes. Ils donnent un point de départ qui tient mieux sur beaucoup d'appareils et de navigateurs."],
        list: [
          {
            title: "Autour de 200 fichiers par lot",
            description: "Au-delà, le lot devient plus vite lourd.",
          },
          {
            title: "Autour de 30 Mo par fichier",
            description: "Même avec peu de fichiers, des fichiers lourds font vite monter la charge.",
          },
          {
            title: "Autour de 1 Go au total",
            description: "Au-delà, la fin du traitement ou le téléchargement deviennent plus fragiles.",
          },
        ],
        afterList: ["Prenez ces chiffres comme un repère. Pas comme une limite."],
      },
      {
        title: "Pourquoi un même lot peut-il sembler correct sur un appareil et lourd sur un autre ?",
        paragraphs: [
          "Comme l'outil fonctionne dans le navigateur, l'appareil compte beaucoup. Un lot qui reste fluide sur ordinateur peut déjà paraître lourd sur téléphone. Le repère sert à garder une marge sur des cas courants, pas à promettre la même charge partout.",
        ],
      },
      {
        title: "Comment avancer si vous devez quand même traiter un très gros lot ?",
        paragraphs: [
          "Si vous devez traiter un grand nombre de fichiers HEIC, mieux vaut partir tout de suite sur une organisation plus légère :",
        ],
        list: [
          "utilisez un ordinateur dès que possible",
          "divisez le travail en lots plus petits dès le départ",
          "conservez d'abord les résultats déjà réussis, puis passez au lot suivant",
          "si vous avez besoin d'une conservation plus complète d'EXIF ou de longues sessions, utilisez un outil local",
        ],
      },
    ],
    closing: [
      "Si le lot est déjà devenu lent ou si certains fichiers ont commencé à échouer, divisez-le puis réessayez.",
      "Si le problème semble moins lié au poids du lot qu'à certains fichiers précis, consultez : `Pourquoi certains fichiers HEIC ne se convertissent-ils pas ?`",
    ],
    relatedSlugs: ["heic-conversion-failures"],
  },
  {
    slug: "batch-download-issues",
    title: "Que faire si « Tout télécharger » ne fonctionne pas ?",
    metaDescription:
      "Explique comment distinguer un problème de conversion d'un problème au moment de préparer le téléchargement par lot, et comment avancer sans perdre les fichiers déjà convertis correctement.",
    summary:
      "Explique pourquoi « Tout télécharger » peut échouer après la conversion, quoi vérifier d'abord et comment conserver les résultats déjà réussis.",
    intro: [
      "Il arrive que les fichiers soient déjà convertis mais que `Tout télécharger` échoue ensuite. Dans ce cas, le blocage apparaît souvent au moment où le navigateur regroupe les fichiers valides et prépare le téléchargement, pas pendant la conversion elle-même.",
      "Commencez par voir ce qui a déjà marché. Ne relancez pas tout le lot d'emblée.",
    ],
    sections: [
      {
        title: "Pourquoi `Tout télécharger` peut-il échouer alors que la conversion est terminée ?",
        paragraphs: [
          "La conversion n'est pas la dernière étape. Une fois les fichiers convertis, le navigateur doit encore organiser les résultats valides et préparer le téléchargement groupé. Si le lot est assez lourd, cette étape peut ralentir ou échouer même si la conversion est déjà terminée.",
          "Une conversion terminée et un `Tout télécharger` qui fonctionne ne désignent donc pas la même étape.",
        ],
      },
      {
        title: "Dans quels cas `Tout télécharger` échoue-t-il plus facilement ?",
        paragraphs: ["`Tout télécharger` pose plus souvent problème dans les situations suivantes :"],
        list: [
          "le lot contient beaucoup de fichiers",
          "les fichiers pris individuellement sont lourds et la charge totale est élevée",
          "le navigateur ou l'appareil ont déjà très peu de marge disponible",
          "beaucoup d'onglets sont ouverts ou d'autres applications utilisent déjà des ressources",
          "un lot assez lourd est en cours de traitement sur téléphone",
        ],
      },
      {
        title: "Que faut-il vérifier d'abord ?",
        paragraphs: ["Si vous ne pouvez pas utiliser `Tout télécharger`, vérifiez les points suivants dans cet ordre."],
        subsections: [
          {
            title: "1. Vérifiez d'abord si les fichiers déjà réussis sont toujours là",
            paragraphs: [
              "Si certains fichiers ont déjà été convertis correctement, confirmez d'abord que ces résultats sont toujours disponibles. Il n'est peut-être pas nécessaire de refaire tout le lot.",
            ],
          },
          {
            title: "2. Distinguez les problèmes de conversion des problèmes liés à l'étape de téléchargement",
            paragraphs: [
              "Si les fichiers eux-mêmes n'arrivent pas à se convertir, le problème commence plus tôt. S'ils se convertissent bien mais que seul `Tout télécharger` échoue, le blocage se situe plus probablement dans l'étape où le navigateur prépare les résultats pour le téléchargement.",
            ],
          },
          {
            title: "3. Vérifiez si le lot n'est pas tout simplement trop lourd",
            paragraphs: [
              "Si le travail était déjà important, si les fichiers étaient lourds ou si le processus ralentissait déjà avant la fin, le lot est probablement trop lourd pour l'appareil utilisé.",
            ],
          },
        ],
      },
      {
        title: "Quelle est la manière la plus sûre de continuer ?",
        paragraphs: [
          "Si vous avez déjà des fichiers convertis correctement, gardez-les d'abord.",
          "Le plus simple est souvent de faire ainsi :",
        ],
        list: [
          "sauvegarder d'abord les fichiers déjà convertis correctement",
          "si `Tout télécharger` n'est pas disponible, télécharger d'abord les fichiers un par un",
          "si vous voulez ensuite récupérer un ensemble complet, relancer le travail par lots plus petits",
        ],
        afterList: ["Souvent, le blocage vient de l'étape de téléchargement, pas des résultats déjà produits."],
      },
      {
        title: "Quand faut-il diviser le lot, passer sur ordinateur ou utiliser un outil local ?",
        paragraphs: ["Changez d'approche au lieu de relancer exactement la même chose quand :"],
        list: [
          "l'échec apparaît au niveau de `Tout télécharger`",
          "tout le traitement devient clairement lent avant la fin",
          "le lot contient beaucoup de fichiers",
          "les fichiers individuels sont volumineux",
          "le traitement paraît lourd sur téléphone",
          "le même problème revient encore après avoir divisé le lot",
          "vous devez traiter un très gros lot en une seule fois",
          "vous voulez moins dépendre de l'état du navigateur",
        ],
        afterList: [
          "Si le lot dépasse seulement un peu ce qui reste raisonnable, le diviser peut suffire. Si le problème revient malgré cela, ou si la charge était déjà très importante dès le départ, mieux vaut passer sur ordinateur ou utiliser un outil local.",
        ],
      },
      {
        title: "Quand faut-il commencer par `Pourquoi certains fichiers HEIC ne se convertissent-ils pas ?` ?",
        paragraphs: [
          "Si le vrai problème n'est pas `Tout télécharger`, mais les fichiers eux-mêmes qui échouent pendant la conversion, commencez par : `Pourquoi certains fichiers HEIC ne se convertissent-ils pas ?`",
          "Dans ce cas, la cause se trouve plus probablement dans les fichiers, dans leur provenance ou dans le poids du lot, et non dans l'étape suivante de téléchargement.",
        ],
      },
    ],
    closing: [
      "Si vous avez déjà des résultats valides, gardez-les d'abord, puis réessayez au besoin avec un lot plus petit.",
      "Si le problème ressemble davantage à un échec de conversion qu'à un échec de l'étape de téléchargement, consultez aussi : `Pourquoi certains fichiers HEIC ne se convertissent-ils pas ?`",
    ],
    relatedSlugs: ["heic-conversion-failures", "batch-size-guidelines"],
  },
  {
    slug: "browser-side-processing",
    title: "Les fichiers sont-ils envoyés sur un serveur ? Que signifie le traitement dans le navigateur ?",
    metaDescription:
      "Explique ce que signifie, dans cet outil, le traitement dans le navigateur, ce que cela change pour la confidentialité, la vitesse, les différences entre appareils et EXIF, et quand il vaut mieux utiliser un outil local.",
    summary:
      "Explique ce que signifie ici le traitement dans le navigateur, ce qu'il ne garantit pas et quand il vaut mieux continuer ainsi ou passer à un outil local.",
    intro: [
      "La conversion principale de cet outil se fait dans votre navigateur. L'outil n'est pas conçu autour d'un envoi initial des fichiers vers un serveur distant qui renverrait ensuite une copie convertie.",
      "Le traitement principal reste donc sur l'appareil utilisé. La charge reste locale elle aussi. La taille des fichiers, le poids du lot et l'état du navigateur continuent donc de compter.",
    ],
    sections: [
      {
        title: "Que signifie ici le traitement dans le navigateur ?",
        paragraphs: ["Après l'ajout des fichiers, l'essentiel de la conversion se fait dans le navigateur de l'appareil utilisé."],
        list: [
          "l'outil n'attend pas d'abord qu'un serveur distant traite les fichiers avant de renvoyer un résultat",
          "la vitesse et la stabilité dépendent aussi de l'appareil et du navigateur utilisés",
          "plus les fichiers ou le lot sont lourds, plus la charge locale augmente",
        ],
      },
      {
        title: "Qu'est-ce que cela change pour la confidentialité, la vitesse et l'expérience selon l'appareil ?",
        paragraphs: [
          "Pour un usage courant, le travail reste sur votre appareil au lieu de partir d'abord vers un service de conversion distant.",
          "Les performances dépendent donc aussi de cet appareil. Si le lot est important, si les fichiers sont lourds ou si le navigateur est déjà chargé, le traitement peut ralentir ou devenir moins stable.",
          "Un même lot peut donc sembler fluide sur ordinateur et lourd sur téléphone.",
        ],
      },
      {
        title: "Ce que le traitement dans le navigateur ne garantit pas",
        paragraphs: ["Le traitement dans le navigateur ne garantit pas pour autant :"],
        list: [
          "que tous les fichiers se convertiront sans problème",
          "que toutes les conversions se termineront rapidement",
          "que tous les appareils donneront la même impression de fluidité",
          "que toutes les métadonnées seront conservées intégralement",
        ],
        afterList: [
          "Un fichier endommagé, enregistré autrement ou inclus dans un lot trop lourd peut tout de même provoquer des échecs de conversion, des ralentissements ou des problèmes avec `Tout télécharger`.",
        ],
      },
      {
        title: "Qu'en est-il d'EXIF et des autres métadonnées ?",
        paragraphs: [
          "Le traitement dans le navigateur et la conservation intégrale des métadonnées sont deux choses différentes.",
          "L'outil conserve EXIF quand c'est possible, mais il n'est pas conçu pour garantir une conservation complète.",
          "Si vous voulez simplement convertir des fichiers HEIC en JPG / JPEG pour un usage courant, cela suffit souvent.",
          "Si votre priorité est de conserver EXIF et d'autres métadonnées aussi complètement que possible, un outil local spécialisé sera une meilleure option.",
        ],
      },
      {
        title: "Dans quels cas est-il logique de continuer à utiliser l'outil dans le navigateur ?",
        paragraphs: ["Continuer dans le navigateur a du sens quand :"],
        list: [
          "vous voulez convertir des photos iPhone en JPG / JPEG pour un usage courant",
          "vous voulez passer rapidement les fichiers dans un format plus simple à ouvrir",
          "le nombre de fichiers n'est pas extrêmement élevé",
          "vous n'avez pas besoin d'une conservation complète des métadonnées",
        ],
      },
      {
        title: "Dans quels cas vaut-il mieux utiliser un ordinateur ou un outil local ?",
        paragraphs: ["Mieux vaut passer sur un ordinateur ou un outil local quand :"],
        list: [
          "vous devez traiter un très grand volume de fichiers en une seule fois",
          "l'appareil paraît déjà clairement surchargé",
          "vous voyez déjà des ralentissements, des échecs de conversion ou des problèmes avec `Tout télécharger`",
          "vous devez conserver EXIF ou d'autres métadonnées aussi complètement que possible",
          "vous voulez faire de longues sessions avec moins de dépendance à l'état du navigateur",
        ],
      },
    ],
    closing: [
      "Si vous sentez que le lot est devenu trop lourd, l'étape suivante la plus utile est : `Pourquoi l'outil recommande-t-il un nombre de fichiers et une taille par lot ?`",
      "Si certains fichiers échouent déjà à la conversion, consultez : `Pourquoi certains fichiers HEIC ne se convertissent-ils pas ?`",
      "Si le problème principal se situe dans l'étape suivante de téléchargement, consultez : `Que faire si « Tout télécharger » ne fonctionne pas ?`",
    ],
    relatedSlugs: ["batch-size-guidelines", "heic-conversion-failures", "batch-download-issues"],
  },
];
