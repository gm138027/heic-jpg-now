import type { HelpIndex, HelpPage } from "./content";

export const HELP_INDEX_DE: HelpIndex = {
  title: "Hilfe",
  metaTitle: "Hilfe | HEIC JPG NOW",
  metaDescription: "Hilfe zu HEIC JPG NOW: Konvertierungsfehler, Probleme mit „Alles herunterladen“, Batch-Größen und Verarbeitung im Browser.",
  intro: [
    "Hier finden Sie Hilfe, wenn eine HEIC-Konvertierung im Batch hakt.",
    "Wählen Sie das Thema, das zu Ihrem Fall passt: einzelne Dateien schlagen fehl, „Alles herunterladen“ funktioniert nicht, der Batch ist zu schwer oder Sie möchten wissen, wie die Verarbeitung im Browser hier läuft."
  ]
};

export const HELP_PAGES_DE: HelpPage[] = [
  {
    slug: "heic-conversion-failures",
    title: "Warum lassen sich manche HEIC-Dateien nicht konvertieren?",
    metaDescription: "Erklärt die häufigsten Ursachen für fehlgeschlagene HEIC- / HEIF-Konvertierungen, was Sie zuerst prüfen sollten und wie Sie zwischen Dateiproblem, Herkunft und Batch-Größe unterscheiden können.",
    summary: "Erklärt, warum einzelne HEIC-Dateien fehlschlagen können und wie Sie Dateiprobleme, unterschiedliche Herkunft, Batch-Größe sowie Geräte- und Browserlast voneinander trennen.",
    intro: [
      "Wenn sich manche HEIC-Dateien konvertieren lassen und andere nicht, prüfen Sie zuerst die Datei selbst, ihre Herkunft, die Größe des aktuellen Batches und die Auslastung von Gerät und Browser. Die Dateiendung allein sagt wenig aus."
    ],
    sections: [
      {
        title: "Warum können sich zwei Dateien mit derselben Endung unterschiedlich verhalten?",
        paragraphs: [
          "`HEIC` ist nur die sichtbare Dateiendung. Ein Originalfoto vom iPhone, eine aus einem Chat gespeicherte Datei und eine Datei, die von einer anderen App erneut exportiert wurde, können intern unterschiedlich aufgebaut und gespeichert sein. Darum kann dieselbe Endung zu unterschiedlichen Ergebnissen führen."
        ]
      },
      {
        title: "Die häufigsten Ursachen für fehlgeschlagene Konvertierungen",
        subsections: [
          {
            title: "1. Die Datei selbst ist beschädigt",
            paragraphs: [
              "Wenn eine Datei beim Übertragen, Exportieren, Speichern oder Kopieren beschädigt wurde, kann die Konvertierung fehlschlagen. Solche Probleme lassen sich oft nicht schon am Dateinamen erkennen und werden erst während der Verarbeitung sichtbar."
            ]
          },
          {
            title: "2. Die Dateien stammen nicht alle aus derselben Quelle",
            paragraphs: [
              "Auch bei derselben Endung `.heic` oder `.heif` können sich Dateien je nach Gerät, App und Speicherweise unterscheiden. Wenn ein Batch Dateien aus verschiedenen Quellen mischt, ist es normal, dass manche Dateien funktionieren und andere nicht."
            ]
          },
          {
            title: "3. Der Batch ist für das aktuelle Gerät zu schwer",
            paragraphs: [
              "Je mehr Dateien Sie auf einmal verarbeiten und je größer die einzelnen Dateien sind, desto höher wird die Last für das Gerät. Wenn der aktuelle Batch zu schwer wird, kann die Konvertierung langsamer werden, einzelne Dateien können fehlschlagen und später kann auch „Alles herunterladen“ instabil werden."
            ]
          },
          {
            title: "4. Gerät oder Browser haben bereits wenig Reserven",
            paragraphs: [
              "Auch bei einer Konvertierung im Browser nutzt das Tool Ressourcen des Geräts. Viele offene Tabs, mehrere Apps im Hintergrund, wenig freier Speicher oder ein größerer Batch auf dem Smartphone können die Verarbeitung langsamer oder instabiler machen.",
              "Ein Konvertierungsfehler heißt nicht, dass das ganze Tool nicht funktioniert. Oft betrifft das Problem nur bestimmte Dateien oder einen Batch, der für das aktuelle Gerät zu schwer geworden ist."
            ]
          }
        ]
      },
      {
        title: "Wenn die Konvertierung fehlschlägt, prüfen Sie zuerst Folgendes",
        subsections: [
          {
            title: "1. Prüfen Sie, ob nur einzelne Dateien fehlschlagen oder der ganze Batch",
            paragraphs: [
              "Wenn nur wenige Bilder fehlschlagen, liegt der Verdacht zuerst bei diesen Dateien oder ihrer Herkunft. Wenn der gesamte Batch scheitert, sollten Sie zuerst Dateianzahl, Dateigröße, Gerätezustand und Browserumgebung prüfen."
            ]
          },
          {
            title: "2. Testen Sie nur die fehlgeschlagenen Dateien erneut",
            paragraphs: [
              "Wenn immer wieder dieselben Dateien scheitern, liegt die Ursache wahrscheinlich in genau diesen Dateien. Sie getrennt zu prüfen ist meist der schnellste Weg zur Eingrenzung."
            ]
          },
          {
            title: "3. Teilen Sie den Batch und versuchen Sie es erneut",
            paragraphs: [
              "Wenn Sie viele Dateien auf einmal hinzugefügt haben oder einzelne Dateien groß sind, ist ein neuer Versuch mit kleineren Batches oft stabiler. Als Richtwert ist es meist sinnvoll, bei bis zu 200 Dateien pro Batch, 30 MB pro Datei und insgesamt bis zu 1 GB zu bleiben."
            ]
          },
          {
            title: "4. Wenn das Problem auf dem Smartphone auftrat, testen Sie dieselben Dateien auf einem Computer",
            paragraphs: [
              "Das Tool funktioniert auch auf dem Smartphone, aber größere Batches lassen sich auf einem Computer oft stabiler verarbeiten. Wenn Sie exakt dieselben Dateien dort testen, sehen Sie schneller, ob das Problem eher an der Geräteumgebung liegt."
            ]
          },
          {
            title: "5. Wenn der Fehler auch nach dem Aufteilen wiederholt auftritt, sehen Sie sich die Dateien selbst und ihre Herkunft genauer an",
            paragraphs: [
              "Wenn ein Batch auch nach dem Aufteilen immer wieder scheitert, kann die Datei selbst beschädigt sein. Es kann auch sein, dass Dateien aus unterschiedlichen Quellen stammen und trotz gleicher Endung intern nicht gleich gespeichert wurden."
            ]
          }
        ]
      },
      {
        title: "Wie geht dieses Tool mit fehlgeschlagenen Dateien um?",
        paragraphs: [
          "Dieses Tool konvertiert weiter, soweit es möglich ist, aber einzelne Dateien können trotzdem ohne Ergebnis bleiben."
        ],
        subsections: [
          {
            title: "1. Wenn nur ein Teil der Dateien fehlschlägt",
            paragraphs: [
              "Auch wenn ein Teil des Batches nicht konvertiert werden kann, bleiben die erfolgreich verarbeiteten Dateien als Ergebnis erhalten. Sie müssen den gesamten Batch also nicht zwingend von vorne starten, nur weil ein Teil fehlgeschlagen ist."
            ]
          },
          {
            title: "2. Wenn alle Dateien fehlschlagen",
            paragraphs: [
              "Wenn in diesem Batch keine einzige Datei erfolgreich konvertiert wird, gibt es kein herunterladbares Ergebnis und das Tool zeigt eine Fehlermeldung an. In diesem Fall sollten Sie zuerst die Dateien selbst, ihre Herkunft und das Gewicht des aktuellen Batches für das verwendete Gerät prüfen."
            ]
          }
        ]
      },
      {
        title: "Wann sind ein Computer oder ein lokales Tool sinnvoller?",
        paragraphs: [
          "In den folgenden Fällen ist es oft sinnvoller, nicht im Browser weiterzumachen, sondern auf einem Computer oder mit einem lokalen Tool zu arbeiten:"
        ],
        list: [
          "Sie möchten sehr viele Dateien in einem Durchgang verarbeiten",
          "der Batch schlägt auch nach dem Aufteilen weiterhin gesammelt fehl",
          "Sie möchten EXIF oder andere Metadaten möglichst vollständig erhalten",
          "das Gerät hat nur wenig Reserven und die Dateien sind groß",
          "Sie möchten längere Serien mit möglichst wenig Abhängigkeit vom Browserzustand verarbeiten"
        ]
      }
    ],
    closing: [
      "Wenn nur einzelne Dateien fehlschlagen, gehen Sie zuerst zum Tool zurück und testen Sie nur diese Dateien erneut oder starten Sie die Konvertierung mit weniger Dateien im Batch.",
      "Wenn Sie auch prüfen möchten, ob das Problem vor allem am Batch-Gewicht liegt, lesen Sie als Nächstes `Warum empfiehlt das Tool eine bestimmte Anzahl und Größe pro Batch?`"
    ],
    relatedSlugs: [
      "batch-size-guidelines"
    ]
  },
  {
    slug: "batch-size-guidelines",
    title: "Warum empfiehlt das Tool eine bestimmte Anzahl und Größe pro Batch?",
    metaDescription: "Erklärt, warum das Tool Richtwerte von 200 Dateien pro Durchgang, 30 MB pro Datei und 1 GB insgesamt nennt und woran Sie erkennen, dass der aktuelle Batch bereits zu schwer ist.",
    summary: "Erklärt, warum es Richtwerte für Dateianzahl und Dateigröße gibt und woran Sie erkennen können, dass der aktuelle Batch zu schwer geworden ist.",
    intro: [
      "Dieses Tool setzt keine feste Obergrenze für die Anzahl von Dateien. Große oder schwere Batches werden in der Praxis aber schneller langsam, fehleranfällig oder machen später Probleme beim Download. Darum finden Sie auf der Seite Richtwerte statt fester Grenzen.",
      "Dass sich Dateien hinzufügen lassen, heißt noch nicht, dass derselbe Batch auf dem aktuellen Gerät auch sauber bis zum Ende durchläuft."
    ],
    sections: [
      {
        title: "Warum gibt die Seite Richtwerte für Dateianzahl und Dateigröße an?",
        paragraphs: [
          "Bei einem Batch geht es nicht nur um das Hinzufügen der Dateien. Danach folgen noch Konvertierung, Sortieren der Ergebnisse und der spätere Download. So bleibt der Batch eher in einem Bereich, der auf normalen Geräten besser durchläuft."
        ]
      },
      {
        title: "Woran erkennen Sie, dass der aktuelle Batch bereits zu schwer ist?",
        paragraphs: [
          "Wenn einer oder mehrere der folgenden Punkte auftreten, ist der aktuelle Batch meist schon zu schwer:"
        ],
        list: [
          "die Konvertierung ist spürbar langsamer geworden",
          "einzelne Dateien beginnen zu scheitern",
          "die Verarbeitung auf dem Smartphone wirkt deutlich schwerfälliger",
          "die einzelnen Dateien sind groß",
          "der Download der konvertierten Ergebnisse lässt sich nur schwer abschließen"
        ],
        afterList: [
          "Dann teilen Sie den Batch besser auf und starten neu."
        ]
      },
      {
        title: "Warum wird es langsamer, wenn es viele Dateien gibt oder einzelne Dateien groß sind?",
        paragraphs: [
          "Viele Dateien bedeuten mehr Schritte. Große Dateien machen jeden Schritt schwerer.",
          "Beides belastet das Gerät: die Konvertierung selbst, das Sortieren der Ergebnisse und den späteren Download.",
          "Darum wird nicht nur die Konvertierung langsamer. Oft werden auch die letzten Schritte instabiler."
        ]
      },
      {
        title: "Warum gelten bis zu 200 Dateien pro Batch, 30 MB pro Datei und 1 GB insgesamt als Richtwerte?",
        paragraphs: [
          "Diese Zahlen sind keine festen Grenzen. Für viele normale Geräte und Browser sind sie ein brauchbarer Richtwert."
        ],
        list: [
          {
            title: "Bis zu 200 Dateien pro Batch",
            description: "Darüber wird ein Batch schneller schwer."
          },
          {
            title: "Bis zu 30 MB pro Datei",
            description: "Auch wenige Dateien können schon viel Last verursachen, wenn jede einzelne groß ist."
          },
          {
            title: "Bis zu 1 GB insgesamt",
            description: "Darüber werden vor allem die letzten Schritte leichter instabil."
          }
        ],
        afterList: [
          "Sehen Sie diese Zahlen als Richtwert, nicht als feste Grenze."
        ]
      },
      {
        title: "Warum kann sich derselbe Batch je nach Gerät unterschiedlich anfühlen?",
        paragraphs: [
          "Weil dieses Tool im Browser läuft, spielt das Gerät eine große Rolle. Ein Batch, der auf einem Computer noch leicht wirkt, kann auf einem Smartphone schon zu schwer sein.",
          "Die Angaben auf der Seite sind deshalb nur Richtwerte. Derselbe Batch kann sich je nach Gerät anders anfühlen."
        ]
      },
      {
        title: "Wie gehen Sie am besten vor, wenn Sie einen sehr großen Batch verarbeiten müssen?",
        paragraphs: [
          "Wenn Sie sehr viele HEIC-Dateien verarbeiten müssen, ist ein leichterer Ablauf meist stabiler:"
        ],
        list: [
          "wenn möglich auf einem Computer arbeiten",
          "die Dateien von Anfang an in kleinere Batches aufteilen",
          "erfolgreich konvertierte Ergebnisse zuerst sichern und dann mit dem nächsten Batch weitermachen",
          "für möglichst vollständige EXIF-Erhaltung oder sehr lange Verarbeitungssitzungen ein lokales Tool in Betracht ziehen"
        ],
        afterList: [
          "Das klappt meist besser als ein einziger sehr schwerer Batch."
        ]
      }
    ],
    closing: [
      "Wenn der aktuelle Batch bereits deutlich langsamer geworden ist oder einzelne Dateien zu scheitern beginnen, teilen Sie ihn zuerst auf und versuchen Sie es erneut.",
      "Wenn bereits Konvertierungsfehler auftreten, lesen Sie zusätzlich `Warum lassen sich manche HEIC-Dateien nicht konvertieren?`, um die Ursache leichter einzugrenzen."
    ],
    relatedSlugs: [
      "heic-conversion-failures"
    ]
  },
  {
    slug: "batch-download-issues",
    title: "Was können Sie tun, wenn „Alles herunterladen“ nicht funktioniert?",
    metaDescription: "Erklärt, wie Sie erkennen können, warum „Alles herunterladen“ nach der Konvertierung nicht funktioniert, und wie Sie weiter vorgehen, ohne erfolgreiche Dateien unnötig zu verlieren.",
    summary: "Erklärt den Unterschied zwischen erfolgreicher Konvertierung und fehlgeschlagenem Sammeldownload, was Sie zuerst prüfen sollten und wie Sie erfolgreiche Ergebnisse sichern können.",
    intro: [
      "Auch nach einer abgeschlossenen Batch-Konvertierung kann „Alles herunterladen“ ausfallen. Das heißt nicht, dass alle Ergebnisse weg sind. Häufig hakt erst der Schritt, in dem der Browser erfolgreiche Dateien für den Sammeldownload zusammenstellt.",
      "Prüfen Sie dann zuerst, ob erfolgreiche Dateien noch da sind, ob der Batch zu schwer war und welcher nächste Schritt jetzt sinnvoll ist."
    ],
    sections: [
      {
        title: "Warum kann „Alles herunterladen“ nicht genutzt werden, obwohl die Konvertierung abgeschlossen ist?",
        paragraphs: [
          "Eine Batch-Verarbeitung ist nicht schon dann komplett abgeschlossen, wenn die Konvertierung der Dateien beendet ist. Auch danach muss der Browser die erfolgreichen Ergebnisse noch sortieren und für den Sammeldownload vorbereiten. Wenn viele Dateien im Batch sind, einzelne Dateien groß sind oder das aktuelle Gerät bereits stark ausgelastet ist, kann genau dieser Schritt langsam oder instabil werden.",
          "Eine erfolgreiche Konvertierung heißt also noch nicht, dass auch der Sammeldownload klappt."
        ]
      },
      {
        title: "Wann wird „Alles herunterladen“ eher instabil?",
        paragraphs: [
          "Der Ablauf bis zum Sammeldownload wird oft instabil, wenn:"
        ],
        list: [
          "der aktuelle Batch enthält viele Dateien",
          "die Dateien sind groß und die Gesamtlast ist hoch",
          "Arbeitsspeicher oder Browser-Ressourcen haben nur wenig Spielraum",
          "es sind viele Tabs offen oder mehrere Apps laufen im Hintergrund",
          "ein größerer Batch wird auf dem Smartphone verarbeitet"
        ],
        afterList: [
          "Dann liegt das Problem oft nicht mehr an der Konvertierung selbst, sondern am späteren Download-Schritt."
        ]
      },
      {
        title: "Was sollten Sie in so einem Fall zuerst prüfen?",
        paragraphs: [
          "Prüfen Sie dann am besten in dieser Reihenfolge:"
        ],
        subsections: [
          {
            title: "1. Prüfen Sie zuerst, ob erfolgreiche Dateien noch vorhanden sind",
            paragraphs: [
              "Wenn in diesem Batch bereits erfolgreiche Dateien entstanden sind, sollten Sie zuerst sicherstellen, dass diese Ergebnisse noch verfügbar sind. Sie müssen nicht automatisch alles neu starten."
            ]
          },
          {
            title: "2. Unterscheiden Sie zwischen dem Konvertierungsschritt und dem anschließenden Download-Schritt",
            paragraphs: [
              "Wenn die Dateien selbst nicht konvertiert wurden, liegt das Problem eher in der Konvertierung. Wenn die Dateien konvertiert wurden, aber nur „Alles herunterladen“ nicht funktioniert, liegt die Ursache eher in der anschließenden Vorbereitung oder im Download-Schritt."
            ]
          },
          {
            title: "3. Prüfen Sie, ob der aktuelle Batch zu schwer geworden ist",
            paragraphs: [
              "Wenn von Anfang an viele Dateien enthalten waren, einzelne Dateien groß sind oder die Verarbeitung schon unterwegs deutlich langsamer geworden ist, ist der aktuelle Batch für das verwendete Gerät oft zu schwer geworden."
            ]
          }
        ]
      },
      {
        title: "Wie gehen Sie in so einem Fall am besten vor?",
        paragraphs: [
          "Wenn noch erfolgreiche Dateien da sind, klären Sie zuerst die Priorität, statt den kompletten Batch sofort neu zu starten.",
          "Gehen Sie am besten so vor:"
        ],
        list: [
          "wenn bereits erfolgreiche Dateien vorhanden sind, sichern Sie diese zuerst",
          "wenn „Alles herunterladen“ nicht funktioniert, laden Sie die Dateien zuerst einzeln herunter",
          "wenn Sie später trotzdem wieder ein vollständiges Gesamtergebnis möchten, starten Sie den Batch in kleinerer Form erneut"
        ],
        afterList: [
          "Dann liegt das Problem meist im Sammeldownload-Schritt, nicht bei den bereits erfolgreichen Ergebnissen."
        ]
      },
      {
        title: "Wann sollten Sie den Batch verkleinern, auf einen Computer wechseln oder ein lokales Tool nutzen?",
        paragraphs: [
          "Besser ist ein anderer Weg, wenn:"
        ],
        list: [
          "der Fehler tritt im Schritt „Alles herunterladen“ auf",
          "die gesamte Verarbeitung ist schon während der Konvertierung spürbar langsamer geworden",
          "der aktuelle Batch enthält viele Dateien",
          "die einzelnen Dateien sind groß",
          "die Verarbeitung auf dem Smartphone ist deutlich zu schwer",
          "dasselbe Problem tritt auch nach dem Aufteilen wieder auf",
          "Sie möchten einen sehr großen Batch in einem Durchgang verarbeiten",
          "Sie möchten möglichst wenig Abhängigkeit vom Browserzustand"
        ],
        afterList: [
          "Wenn der aktuelle Batch nur etwas zu schwer ist, reicht es oft schon, ihn zuerst zu verkleinern. Wenn das Problem auch danach wiederkehrt oder die Gesamtmenge von Anfang an sehr groß ist, ist ein Computer oder ein lokales Tool meist die stabilere Wahl."
        ]
      },
      {
        title: "Wann sollten Sie zuerst `Warum lassen sich manche HEIC-Dateien nicht konvertieren?` lesen?",
        paragraphs: [
          "Wenn das eigentliche Problem nicht bei „Alles herunterladen“ liegt, sondern die Dateien selbst bereits nicht konvertiert werden oder der größte Teil des Batches bei der Konvertierung scheitert, sollten Sie zuerst `Warum lassen sich manche HEIC-Dateien nicht konvertieren?` lesen.",
          "Dann liegt die Ursache meist nicht im Download-Schritt, sondern an den Dateien selbst, ihrer Herkunft oder an einem Batch, der für das Gerät zu schwer geworden ist."
        ]
      }
    ],
    closing: [
      "Wenn bereits erfolgreiche Ergebnisse vorhanden sind, sichern Sie diese zuerst und versuchen Sie es dann mit einem kleineren Batch erneut.",
      "Wenn es eher so aussieht, als liege das Problem bei der Konvertierung selbst und nicht beim Download, prüfen Sie zusätzlich `Warum lassen sich manche HEIC-Dateien nicht konvertieren?`"
    ],
    relatedSlugs: [
      "heic-conversion-failures",
      "batch-size-guidelines"
    ]
  },
  {
    slug: "browser-side-processing",
    title: "Werden Dateien auf einen Server hochgeladen? Was bedeutet Verarbeitung im Browser?",
    metaDescription: "Erklärt, ob Dateien an einen Server gesendet werden und was Verarbeitung im Browser in diesem Tool bedeutet. Hilft bei Fragen zu Geschwindigkeit, Geräteunterschieden, EXIF und zur sinnvollen Nutzung dieser Verarbeitungsart.",
    summary: "Erklärt, was Verarbeitung im Browser bedeutet und wie sie mit Geschwindigkeit, Geräteunterschieden, EXIF und typischen Einsatzfällen zusammenhängt.",
    intro: [
      "Die Konvertierung in diesem Tool läuft größtenteils im Browser. Die Dateien werden also nicht zuerst an einen entfernten Server geschickt. Stattdessen läuft die Verarbeitung auf dem Gerät, das Sie gerade nutzen.",
      "Die Last bleibt aber auf dem aktuellen Gerät. Dateianzahl, Dateigröße, Geräteleistung und Browserzustand wirken sich direkt auf Tempo und Stabilität aus."
    ],
    sections: [
      {
        title: "Was bedeutet Verarbeitung im Browser?",
        paragraphs: [
          "Nach dem Hinzufügen der Dateien läuft der Hauptteil der Konvertierung in Ihrer aktuellen Browserumgebung. Das Tool arbeitet also nicht nach dem Muster: erst hochladen, später das Ergebnis vom Server zurückbekommen."
        ],
        list: [
          "die Dateien werden für die Konvertierung nicht erst an einen entfernten Server geschickt",
          "wie gut der Ablauf läuft, hängt vom aktuellen Gerät und Browser ab",
          "mehr oder größere Dateien bedeuten auch mehr Last auf diesem Gerät"
        ]
      },
      {
        title: "Was bedeutet das für Datenschutz, Geschwindigkeit und die Nutzung auf verschiedenen Geräten?",
        paragraphs: [
          "Die Verarbeitung bleibt am aktuellen Gerät. Das macht sie aber nicht automatisch schnell oder stabil. Wenn viele Dateien verarbeitet werden, einzelne Dateien groß sind, das Gerät wenig Reserven hat oder im Browser viele Tabs und Apps gleichzeitig aktiv sind, kann die Konvertierung langsamer oder instabiler werden.",
          "Darum läuft derselbe Batch auf einem Computer oft runder als auf einem Smartphone."
        ]
      },
      {
        title: "Bedeutet Verarbeitung im Browser, dass das Tool unter allen Bedingungen gleich funktioniert?",
        paragraphs: [
          "Das garantiert nicht:"
        ],
        list: [
          "jede Datei lässt sich immer stabil konvertieren",
          "die Verarbeitung ist immer schnell abgeschlossen",
          "das Tool fühlt sich auf jedem Gerät gleich an",
          "alle Metadaten bleiben vollständig erhalten"
        ],
        afterList: [
          "Bei problematischen Dateien, gemischter Herkunft, sehr schweren Batches oder wenig Reserven am Gerät kann es weiter zu Fehlern, Verzögerungen oder Problemen beim Sammeldownload kommen."
        ]
      },
      {
        title: "Was passiert mit EXIF und anderen Metadaten?",
        paragraphs: [
          "Verarbeitung im Browser ist nicht dasselbe wie vollständiger Erhalt aller Originaldaten.",
          "EXIF und andere Metadaten bleiben dabei nicht automatisch vollständig erhalten. Das Tool übernimmt EXIF nur so weit, wie es in diesem Ablauf möglich ist.",
          "Für den normalen Wechsel von HEIC zu JPG / JPEG reicht das oft aus.",
          "Wenn Sie EXIF oder andere Metadaten möglichst vollständig erhalten müssen, ist ein spezialisiertes lokales Tool meist besser geeignet."
        ]
      },
      {
        title: "Wann ist die Nutzung direkt im Browser sinnvoll?",
        paragraphs: [
          "Im Browser passt es oft gut, wenn:"
        ],
        list: [
          "Sie möchten iPhone-Fotos im Alltag gesammelt in JPG / JPEG umwandeln",
          "Sie möchten die Dateien möglichst schnell in ein leichter zu öffnendes Format bringen",
          "die Dateimenge ist nicht extrem groß",
          "Sie brauchen keine möglichst vollständige Metadaten-Erhaltung"
        ]
      },
      {
        title: "Wann sind ein Computer oder ein lokales Tool sinnvoller?",
        paragraphs: [
          "Besser ist ein Computer oder ein lokales Tool, wenn:"
        ],
        list: [
          "Sie möchten sehr viele Dateien in einem Durchgang verarbeiten",
          "das aktuelle Gerät wirkt bereits deutlich überlastet",
          "Verzögerungen, Fehler oder Probleme beim Herunterladen sind bereits aufgetreten",
          "Sie möchten EXIF oder andere Metadaten möglichst vollständig erhalten",
          "Sie möchten möglichst wenig Einfluss durch den Browserzustand"
        ]
      }
    ],
    closing: [
      "Wenn sich der aktuelle Batch bereits zu schwer anfühlt, lesen Sie zusätzlich `Warum empfiehlt das Tool eine bestimmte Anzahl und Größe pro Batch?`",
      "Wenn bereits einzelne Dateien fehlschlagen, hilft oft auch `Warum lassen sich manche HEIC-Dateien nicht konvertieren?`",
      "Wenn vor allem „Alles herunterladen“ Probleme macht, lesen Sie zusätzlich `Was können Sie tun, wenn „Alles herunterladen“ nicht funktioniert?`"
    ],
    relatedSlugs: [
      "batch-size-guidelines",
      "heic-conversion-failures",
      "batch-download-issues"
    ]
  }
];
