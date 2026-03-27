import type { HelpIndex, HelpPage } from "./content";

export const HELP_INDEX_PT: HelpIndex = {
  title: "Ajuda",
  metaTitle: "Ajuda | HEIC JPG NOW",
  metaDescription:
    'Ajuda do HEIC JPG NOW: falhas de conversão, problemas com "Baixar tudo", tamanho de lote e processamento no navegador.',
  intro: [
    "Se a conversão HEIC em lote travou, comece por aqui.",
    'Escolha o tema do seu caso: alguns arquivos falharam, "Baixar tudo" não funciona, o lote ficou pesado ou você quer entender o processamento no navegador.',
  ],
};

export const HELP_PAGES_PT: HelpPage[] = [
  {
    slug: "heic-conversion-failures",
    title: "Por que alguns arquivos HEIC não convertem?",
    metaDescription:
      "Explica as causas mais comuns para falhas na conversão de arquivos HEIC / HEIF, o que vale verificar primeiro e como separar problemas do arquivo, da origem ou do peso do lote.",
    summary:
      "Explica por que alguns arquivos HEIC podem falhar e como diferenciar problemas do arquivo, da origem, do peso do lote e da carga do dispositivo ou do navegador.",
    intro: [
      "Quando alguns arquivos HEIC convertem e outros não, vale olhar primeiro para o próprio arquivo, para a origem dele, para o tamanho do lote atual e para a carga do dispositivo e do navegador. A extensão, sozinha, explica pouco.",
    ],
    sections: [
      {
        title:
          "Por que dois arquivos com a mesma extensão podem se comportar de forma diferente?",
        paragraphs: [
          "`HEIC` é só a extensão visível. Uma foto original do iPhone, um arquivo salvo a partir de um app de mensagens e um arquivo exportado de novo por outro aplicativo podem ter estrutura interna e forma de gravação diferentes. Por isso, a mesma extensão pode acabar dando resultados diferentes.",
        ],
      },
      {
        title: "Causas mais comuns de falha na conversão",
        subsections: [
          {
            title: "1. O próprio arquivo está corrompido",
            paragraphs: [
              "Se o arquivo foi corrompido durante a transferência, exportação, gravação ou cópia, a conversão pode falhar. Esse tipo de problema muitas vezes não aparece só pelo nome do arquivo e só fica claro quando o processamento começa.",
            ],
          },
          {
            title: "2. Os arquivos não vieram todos da mesma origem",
            paragraphs: [
              "Mesmo com a mesma extensão `.heic` ou `.heif`, os arquivos podem variar conforme o dispositivo, o aplicativo e a forma como foram salvos. Quando um lote mistura arquivos de origens diferentes, é normal que alguns funcionem e outros não.",
            ],
          },
          {
            title: "3. O lote ficou pesado demais para o dispositivo atual",
            paragraphs: [
              'Quanto mais arquivos você processa de uma vez e quanto maiores eles são, maior fica a carga no dispositivo. Quando o lote pesa demais, a conversão pode ficar mais lenta, alguns arquivos podem falhar e depois até o `"Baixar tudo"` pode ficar instável.',
            ],
          },
          {
            title: "4. O dispositivo ou o navegador já estão sem folga",
            paragraphs: [
              "Mesmo quando a conversão roda no navegador, a ferramenta usa recursos do dispositivo. Muitas abas abertas, vários aplicativos em segundo plano, pouca memória livre ou um lote maior no celular podem deixar o processo mais lento ou instável.",
              "Uma falha na conversão não significa que a ferramenta inteira parou. Muitas vezes, o problema fica só em alguns arquivos ou em um lote pesado demais para o dispositivo usado.",
            ],
          },
        ],
      },
      {
        title: "Se a conversão falhar, verifique isso primeiro",
        subsections: [
          {
            title:
              "1. Veja se só alguns arquivos falham ou se o lote inteiro falha",
            paragraphs: [
              "Se só algumas imagens falham, comece por elas. Se o lote inteiro falha, vale revisar primeiro a quantidade de arquivos, o tamanho deles, o estado do dispositivo e a carga do navegador.",
            ],
          },
          {
            title: "2. Teste de novo só os arquivos que falharam",
            paragraphs: [
              "Se sempre são os mesmos arquivos que falham, a causa provavelmente está neles. Testá-los separadamente costuma ser o jeito mais rápido de confirmar isso.",
            ],
          },
          {
            title: "3. Divida o lote e tente de novo",
            paragraphs: [
              "Se você adicionou muitos arquivos de uma vez ou se eles são grandes, tentar de novo com lotes menores costuma ser mais estável. Como referência, normalmente vale ficar perto de 200 arquivos por lote, 30 MB por arquivo e 1 GB no total.",
            ],
          },
          {
            title:
              "4. Se o problema apareceu no celular, teste os mesmos arquivos em um computador",
            paragraphs: [
              "A ferramenta também funciona no celular, mas lotes maiores costumam rodar melhor no computador. Testar exatamente os mesmos arquivos ali ajuda a ver mais rápido se o bloqueio vem do ambiente do dispositivo.",
            ],
          },
          {
            title:
              "5. Se a falha continuar mesmo depois de dividir o lote, volte aos arquivos e à origem deles",
            paragraphs: [
              "Se o lote continua falhando mesmo depois de ser dividido, o arquivo pode estar corrompido. Também pode acontecer de os arquivos terem vindo de origens diferentes e, apesar da mesma extensão, terem sido salvos de maneiras diferentes.",
            ],
          },
        ],
      },
      {
        title: "Como esta ferramenta lida com arquivos que falham?",
        paragraphs: [
          "Esta ferramenta continua convertendo o que consegue, mas alguns arquivos ainda podem ficar sem resultado.",
        ],
        subsections: [
          {
            title: "1. Quando só parte dos arquivos falha",
            paragraphs: [
              "Mesmo que uma parte do lote não converta, os arquivos que deram certo continuam disponíveis no resultado. Você não precisa reiniciar todo o lote só porque uma parte falhou.",
            ],
          },
          {
            title: "2. Quando todos os arquivos falham",
            paragraphs: [
              "Se nenhum arquivo do lote converte com sucesso, não há resultado para baixar e a ferramenta mostra uma mensagem de erro. Nesse caso, volte primeiro para os próprios arquivos, para a origem deles ou para o peso do lote no dispositivo usado.",
            ],
          },
        ],
      },
      {
        title: "Quando é melhor usar um computador ou uma ferramenta local?",
        paragraphs: [
          "Nos casos abaixo, costuma fazer mais sentido sair do navegador e usar um computador ou uma ferramenta local:",
        ],
        list: [
          "você precisa processar um volume muito grande de arquivos de uma vez",
          "o lote continua falhando mesmo depois de ser dividido",
          "você precisa preservar EXIF ou outros metadados da forma mais completa possível",
          "o dispositivo já está com pouca folga e os arquivos são grandes",
          "você quer fazer sessões mais longas com menos dependência do estado do navegador",
        ],
      },
    ],
    closing: [
      "Se só alguns arquivos falham, volte primeiro para a ferramenta e teste apenas esses arquivos de novo, ou reinicie a conversão com menos arquivos no lote.",
      "Se você também quiser verificar se o problema está principalmente no peso do lote, veja em seguida `Por que a ferramenta recomenda uma quantidade e um tamanho por lote?`",
    ],
    relatedSlugs: ["batch-size-guidelines"],
  },
  {
    slug: "batch-size-guidelines",
    title: "Por que a ferramenta recomenda uma quantidade e um tamanho por lote?",
    metaDescription:
      "Explica por que a ferramenta mostra como referência 200 arquivos por vez, 30 MB por arquivo e 1 GB no total, e como perceber quando o lote atual já ficou pesado demais.",
    summary:
      "Explica por que existem referências para quantidade e tamanho dos arquivos e como reconhecer quando o lote atual já ficou pesado demais.",
    intro: [
      "A ferramenta não impõe um limite fixo para a quantidade de arquivos. Mesmo assim, lotes grandes ou pesados ficam mais lentos com facilidade, falham mais e podem complicar o download no fim. A página mostra referências, não um bloqueio rígido.",
      "Conseguir adicionar os arquivos não garante que o mesmo lote vá terminar bem no dispositivo atual.",
    ],
    sections: [
      {
        title:
          "Por que a página mostra uma referência para quantidade e tamanho dos arquivos?",
        paragraphs: [
          "Depois de adicionar os arquivos, ainda faltam a conversão, a organização dos resultados e o download. As referências existem para evitar um lote pesado demais nesse caminho.",
        ],
      },
      {
        title: "Como perceber que o lote atual já ficou pesado demais?",
        paragraphs: [
          "Se um ou mais dos sinais abaixo aparecerem, o lote provavelmente já está pesado demais:",
        ],
        list: [
          "a conversão ficou visivelmente mais lenta",
          "alguns arquivos começaram a falhar",
          "o processamento no celular ficou claramente mais pesado",
          "os arquivos individuais são grandes",
          "o download dos arquivos convertidos está difícil de concluir",
        ],
        afterList: ["Nesse caso, vale dividir o lote e tentar de novo."],
      },
      {
        title:
          "Por que fica mais lento quando há muitos arquivos ou quando cada arquivo é grande?",
        paragraphs: [
          "Muitos arquivos significam mais etapas. Arquivos grandes deixam cada etapa mais pesada.",
          "Nos dois casos, o dispositivo precisa segurar mais carga na conversão, na organização dos resultados e no download. O lote inteiro pode ficar mais lento e mais instável.",
        ],
      },
      {
        title:
          "Por que até 200 arquivos por lote, 30 MB por arquivo e 1 GB no total servem como referência?",
        paragraphs: [
          "Esses números não são limites fixos. São uma faixa prática para muitos dispositivos e navegadores comuns.",
        ],
        list: [
          {
            title: "Até 200 arquivos por lote",
            description: "Acima disso, o lote tende a ficar pesado mais rápido.",
          },
          {
            title: "Até 30 MB por arquivo",
            description:
              "Mesmo com poucos arquivos, arquivos maiores podem aumentar bastante a carga.",
          },
          {
            title: "Até 1 GB no total",
            description: "Acima disso, as etapas finais tendem a ficar mais frágeis.",
          },
        ],
        afterList: ["Use esses números como referência, não como limite."],
      },
      {
        title:
          "Por que o mesmo lote pode parecer leve em um dispositivo e pesado em outro?",
        paragraphs: [
          "Como esta ferramenta roda no navegador, o dispositivo faz diferença. Um lote que ainda parece leve em um computador pode já ficar pesado em um celular.",
          "Os números da página são só referência. O mesmo lote não vai se comportar da mesma forma em todos os dispositivos.",
        ],
      },
      {
        title: "Como vale seguir quando você precisa processar um lote muito grande?",
        paragraphs: [
          "Se você precisa processar muitos arquivos HEIC, um fluxo mais leve costuma ser mais estável:",
        ],
        list: [
          "use um computador sempre que possível",
          "divida os arquivos em lotes menores desde o início",
          "guarde primeiro os resultados que já deram certo e só depois siga para o próximo lote",
          "se você precisa preservar EXIF com mais completude ou fazer sessões longas, considere uma ferramenta local",
        ],
        afterList: [
          "Em geral, isso funciona melhor do que insistir em um lote único e muito pesado.",
        ],
      },
    ],
    closing: [
      "Se o lote atual já ficou claramente mais lento ou se alguns arquivos começaram a falhar, divida o lote antes de tentar de novo.",
      "Se já houver falhas de conversão, veja também `Por que alguns arquivos HEIC não convertem?` para separar melhor a causa.",
    ],
    relatedSlugs: ["heic-conversion-failures"],
  },
  {
    slug: "batch-download-issues",
    title: 'O que fazer quando "Baixar tudo" não funciona?',
    metaDescription:
      "Explica como distinguir um problema na conversão de um problema na etapa de preparo do download em lote e como seguir sem perder os arquivos que já converteram corretamente.",
    summary:
      'Explica por que "Baixar tudo" pode falhar depois da conversão, o que vale verificar primeiro e como preservar os resultados que já deram certo.',
    intro: [
      'Mesmo depois que a conversão em lote termina, `"Baixar tudo"` pode falhar. Isso não quer dizer que os arquivos já convertidos sumiram. Muitas vezes o problema aparece só quando o navegador tenta reunir os arquivos válidos e preparar o download.',
      "Antes de reiniciar o lote inteiro, veja primeiro se os arquivos que já deram certo continuam disponíveis, se o lote ficou pesado demais e qual é o próximo passo mais útil.",
    ],
    sections: [
      {
        title:
          'Por que "Baixar tudo" pode falhar mesmo depois que a conversão termina?',
        paragraphs: [
          "A conversão não é a última etapa. Depois que os arquivos convertem, o navegador ainda precisa organizar os resultados válidos e preparar o download em conjunto. Se o lote estiver pesado, essa etapa pode ficar lenta ou falhar, mesmo quando a conversão já terminou.",
          "A conversão pode terminar e o download em lote ainda falhar.",
        ],
      },
      {
        title: 'Em que situações "Baixar tudo" falha com mais facilidade?',
        paragraphs: [
          "O caminho até o download em lote costuma ficar mais instável quando:",
        ],
        list: [
          "o lote tem muitos arquivos",
          "os arquivos são grandes e a carga total ficou alta",
          "o navegador ou o dispositivo já estão com pouca folga",
          "há muitas abas abertas ou outros aplicativos já estão usando recursos",
          "um lote mais pesado está sendo processado no celular",
        ],
        afterList: [
          "Nesses casos, a conversão pode já ter terminado, mas a etapa seguinte de organização e download não consegue avançar bem.",
        ],
      },
      {
        title: "O que vale verificar primeiro?",
        paragraphs: [
          'Se `"Baixar tudo"` não estiver disponível, faça esta checagem:',
        ],
        subsections: [
          {
            title:
              "1. Verifique primeiro se os arquivos que já deram certo ainda estão lá",
            paragraphs: [
              "Se alguns arquivos já converteram corretamente, confirme primeiro que esses resultados continuam disponíveis. Talvez você não precise refazer o lote inteiro.",
            ],
          },
          {
            title:
              "2. Separe o problema da conversão do problema da etapa de download",
            paragraphs: [
              'Se os arquivos em si não convertem, o problema começa antes. Se eles convertem, mas só `"Baixar tudo"` falha, o bloqueio provavelmente está na preparação ou no download.',
            ],
          },
          {
            title: "3. Veja se o lote não ficou pesado demais",
            paragraphs: [
              "Se o trabalho já era grande, se os arquivos eram pesados ou se o processo já tinha ficado mais lento antes do final, o lote provavelmente está pesado demais para o dispositivo usado.",
            ],
          },
        ],
      },
      {
        title: "Qual é a forma mais segura de continuar?",
        paragraphs: [
          "Se você já tem arquivos convertidos com sucesso, preserve esses resultados primeiro.",
          "Na maioria dos casos, faça assim:",
        ],
        list: [
          "salvar primeiro os arquivos que já converteram corretamente",
          'se `"Baixar tudo"` não estiver disponível, baixar os arquivos um por um',
          "se depois você ainda quiser um conjunto completo, refazer o trabalho em lotes menores",
        ],
        afterList: [
          "Em geral, o problema está na etapa de download, não nos resultados que já foram gerados.",
        ],
      },
      {
        title:
          "Quando vale dividir o lote, mudar para um computador ou usar uma ferramenta local?",
        paragraphs: [
          "Mude a forma de processar em vez de repetir exatamente as mesmas condições quando:",
        ],
        list: [
          'a falha aparece na etapa de `"Baixar tudo"`',
          "todo o processo já ficou claramente lento antes do fim",
          "o lote tem muitos arquivos",
          "os arquivos individuais são grandes",
          "o processamento no celular está pesado demais",
          "o mesmo problema volta mesmo depois de dividir o lote",
          "você precisa processar um lote muito grande de uma vez",
          "você quer depender menos do estado do navegador",
        ],
        afterList: [
          "Se o lote só passou um pouco do razoável, dividi-lo pode bastar. Se o problema continuar mesmo assim, ou se a carga já for muito alta desde o começo, um computador ou uma ferramenta local tende a ser uma opção mais estável.",
        ],
      },
      {
        title:
          "Quando vale começar por `Por que alguns arquivos HEIC não convertem?`",
        paragraphs: [
          'Se o problema real não está em `"Baixar tudo"`, mas nos próprios arquivos falhando durante a conversão, comece por `Por que alguns arquivos HEIC não convertem?`',
          "Nesse caso, a causa provavelmente está nos arquivos, na origem deles ou no peso do lote, e não na etapa seguinte de download.",
        ],
      },
    ],
    closing: [
      "Se você já tem resultados válidos, guarde-os primeiro e depois tente de novo com um lote menor.",
      "Se o problema parecer mais uma falha de conversão do que uma falha da etapa de download, veja também `Por que alguns arquivos HEIC não convertem?`",
    ],
    relatedSlugs: ["heic-conversion-failures", "batch-size-guidelines"],
  },
  {
    slug: "browser-side-processing",
    title:
      "Os arquivos são enviados para um servidor? O que significa processar no navegador?",
    metaDescription:
      "Explica se os arquivos são enviados para um servidor e o que significa, nesta ferramenta, processar no navegador. Ajuda a entender velocidade, diferenças entre dispositivos, EXIF e quando vale usar uma ferramenta local.",
    summary:
      "Explica o que significa processar no navegador, o que isso não garante e quando faz sentido continuar assim ou usar uma ferramenta local.",
    intro: [
      "Nesta ferramenta, a conversão roda principalmente no navegador. Os arquivos não sobem primeiro para um servidor distante e depois voltam convertidos.",
      "A carga continua no dispositivo atual. Quantidade de arquivos, tamanho dos arquivos, desempenho do dispositivo e estado do navegador pesam direto na velocidade e na estabilidade.",
    ],
    sections: [
      {
        title: "O que significa processar no navegador aqui?",
        paragraphs: [
          "Depois que os arquivos são adicionados, a parte principal da conversão roda no navegador do dispositivo que você está usando.",
        ],
        list: [
          "a ferramenta não depende primeiro de um servidor distante processando os arquivos",
          "a velocidade e a estabilidade também dependem do dispositivo e do navegador usados",
          "quanto maiores os arquivos ou o lote, maior tende a ser a carga local",
        ],
      },
      {
        title:
          "O que isso muda para privacidade, velocidade e experiência em dispositivos diferentes?",
        paragraphs: [
          "O processamento fica no dispositivo atual.",
          "Se o lote for grande, se os arquivos forem pesados ou se o navegador já estiver carregado, o processo pode ficar mais lento ou menos estável.",
          "Por isso, o mesmo lote pode parecer leve em um computador e pesado em um celular.",
        ],
      },
      {
        title: "O que o processamento no navegador não garante?",
        list: [
          "que todos os arquivos vão converter sem problema",
          "que toda conversão vai terminar rápido",
          "que todos os dispositivos vão passar a mesma sensação de fluidez",
          "que todos os metadados serão preservados por completo",
        ],
        afterList: [
          'Um arquivo corrompido, salvo de outra forma ou incluído em um lote pesado ainda pode causar falhas na conversão, lentidão ou problemas com `"Baixar tudo"`.',
        ],
      },
      {
        title: "O que acontece com EXIF e outros metadados?",
        paragraphs: [
          "A ferramenta pode converter no navegador sem preservar integralmente todos os dados originais.",
          "A ferramenta preserva EXIF dentro do que for possível, mas não foi feita para garantir preservação completa.",
          "Se você só quer converter arquivos HEIC para JPG / JPEG no uso comum, isso normalmente basta.",
          "Se sua prioridade é preservar EXIF e outros metadados da forma mais completa possível, uma ferramenta local especializada costuma ser a melhor opção.",
        ],
      },
      {
        title:
          "Em que situações faz sentido continuar usando a ferramenta no navegador?",
        paragraphs: [
          "Faz sentido continuar no navegador quando:",
        ],
        list: [
          "você quer converter fotos do iPhone para JPG / JPEG no uso comum",
          "você quer colocar os arquivos rapidamente em um formato mais fácil de abrir",
          "a quantidade de arquivos não é extremamente alta",
          "você não precisa de preservação completa dos metadados",
        ],
      },
      {
        title:
          "Quando vale mais usar um computador ou uma ferramenta local?",
        paragraphs: [
          "Um computador ou uma ferramenta local costumam fazer mais sentido quando:",
        ],
        list: [
          "você precisa processar um volume muito grande de arquivos de uma vez",
          "o dispositivo já parece claramente sobrecarregado",
          'já apareceram lentidão, falhas de conversão ou problemas com `"Baixar tudo"`',
          "você precisa preservar EXIF ou outros metadados da forma mais completa possível",
          "você quer fazer sessões longas com menos dependência do estado do navegador",
        ],
      },
    ],
    closing: [
      "Se você sentir que o lote ficou pesado demais, o próximo passo mais útil é `Por que a ferramenta recomenda uma quantidade e um tamanho por lote?`",
      "Se alguns arquivos já estiverem falhando na conversão, veja também `Por que alguns arquivos HEIC não convertem?`",
      'Se o principal problema estiver na etapa seguinte de download, veja também `O que fazer quando "Baixar tudo" não funciona?`',
    ],
    relatedSlugs: [
      "batch-size-guidelines",
      "heic-conversion-failures",
      "batch-download-issues",
    ],
  },
];
