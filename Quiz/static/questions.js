  /****************************************************************************
   * Fragen
   ****************************************************************************/

    
const ap1Questions = [
    {
      category: "MuKb",
      question: "Welche Dimensionen verwendet die Boston-Consulting-Portfolio-Matrix?",
      answers: [
        "Marktgröße und Kostenstruktur",
        "Marktanteil und Marktvolumen",
        "Marktwachstum und relativer Marktanteil",
        "Umsatzwachstum und Gewinnmarge"
      ],
      // Korrekt: (c) => Index [2]
      correct: [2]
    },
    {
      category: "MuKb",
      question: "Bei einer Orientierung im Produktlebenszyklus bedeutet 'star' ...?",
      answers: [
        "...dass sowohl der Marktanteil als auch das Marktwachstum hoch sind.",
        "...dass das Marktwachstum zu niedrig und der Marktanteil auch zu niedrig ist.",
        "...dass das Marktwachstum hoch und der Marktanteil niedrig ist.",
        "...dass das Marktwachstum niedrig und der Marktanteil hoch ist."
      ],
      // Nur die erste Aussage (Index 0) ist richtig
      correct: [0]
    },
    {
      category: "MuKb",
      question: "Grundsätze für die Werbung können sein...",
      answers: [
        "Werbezeiten und Werbekosten.",
        "Wer wirbt, der stirbt.",
        "Wirksamkeit, Wahrheit, Klarheit, Wirtschaftlichkeit.",
        "Überzeugung, Veranlassung und Unterhaltung."
      ],
      // Nur die dritte Zeile ist korrekt => Index [2]
      correct: [2]
    },
    {
      category: "MuKb",
      question: "Für die Vorteile des Cloud-Computing gilt:",
      answers: [
        "Insolvenzen des Providers können die Funktionsfähigkeit der Systeme beeinträchtigen.",
        "Hohe Sicherheitsstandards für Verfügbarkeit und Datensicherheit.",
        "Effizienzsteigerung der Mitarbeiter.",
        "Geringe finanzielle Investitionskosten."
      ],
      // Laut Screenshot sind alle vier Zeilen angehakt => Indizes [0,1,2,3]
      correct: [0, 1, 2, 3]
    },
    {
      category: "MuKb",
      question: "Die folgenden Aspekte sollten im Rahmen der Kontrolle des Marketing-Mix überprüft werden:",
      answers: [
        "Die tatsächlich realisierte Positionierung.",
        "Die Effizienz der eingesetzten kommunikationspolitischen Instrumente.",
        "Die Übereinstimmung mit den Marketing-Mix Zielen.",
        "Die Übereinstimmung mit den Marketing-Mix Zielen für Produkte der Wettbewerber."
      ],
      // Laut Screenshot sind die ersten drei Aussagen richtig => Indizes [0,1,2]
      correct: [0, 1, 2]
    },
    {
      category: "MuKb",
      question: "Was ist nicht das Ziel der Bewertung von Produkten mit der Boston-Consulting-Portfolio-Matrix?",
      answers: [
        "Planung von Investitionen in zukunftsträchtige Produkte",
        "Identifikation von Produkten mit geringem Wachstumspotenzial",
        "Optimierung des Produktportfolios hinsichtlich Rentabilität",
        "Analyse der Kundenzufriedenheit für verschiedene Produktgruppen"
      ],
      // Laut Screenshot ist Antwort (d) die falsche bzw. "nicht das Ziel" => Index [3]
      correct: [3]
    },
    {
      category: "MuKb",
      question: "Für den Marketing-Mix gilt:",
      answers: [
        "Der englische Begriff Promotion wird ins Deutsche mit Promotion übersetzt.",
        "betrifft in der Distributionspolitik die Vertriebsförderung.",
        "betrifft in der Produktpolitik den Produktlebenszyklus.",
        "es sind 5 große Bausteine zu beachten."
      ],
      // Laut Screenshot sind (a), (b), (c) richtig => Indizes [0, 1, 2]
      correct: [0, 1, 2]
    },
    {
      category: "MuKb",
      question: "Entscheidungen über eine Rücknahmegarantie gehören in den folgenden Marketing-Mix Bereich:",
      answers: [
        "Produktpolitik",
        "Preispolitik",
        "Distributionspolitik",
        "Kommunikationspolitik"
      ],
      // Laut Screenshot: (a) => Index [0]
      correct: [0]
    },
    {
      category: "MuKb",
      question: "Cloud Computing: Welche Beschreibung trifft auf die Private Cloud am besten zu?",
      answers: [
        "Eingeschränkter Zugang für externe Benutzer",
        "Nutzung von öffentlichen Netzwerken für den Zugriff",
        "Geringere Kontrolle über die Daten und Sicherheit",
        "Ressourcen werden von mehreren Organisationen gemeinsam genutzt",
        "Die Verwaltung der Infrastruktur erfolgt durch den Cloud-Anbieter"
      ],
      // Laut Screenshot ist (a) korrekt => Index [0]
      correct: [0]
    },
    {
      category: "MuKb",
      question: "Was ist nicht das Ziel der ABC-Kundenanalyse?",
      answers: [
        "Identifikation von Kunden mit hohem Umsatzpotenzial",
        "Priorisierung von Kunden für gezielte Marketingmaßnahmen",
        "Optimierung der Ressourcenallokation im Kundenmanagement",
        "Verbesserung der Lieferantenbeziehungen"
      ],
      // Laut Screenshot ist (d) => Index [3] nicht das Ziel
      correct: [3]
    },
    {
      category: "MuKb",
      question: "Unter E-Commerce versteht man...",
      answers: [
        "…die Gesamtheit aller Marketingmaßnahmen, die über elektronische Datennetze geplant und realisiert werden.",
        "…den Handel über elektronische Datennetze.",
        "…die Verzahnung und Integration unternehmensübergreifender Geschäftsprozesse über elektronische Datennetze.",
        "…die Entwicklung neuer Wertschöpfungsketten mit Hilfe elektronischer Datennetze."
      ],
      // Laut Screenshot ist (b) => Index [1] korrekt
      correct: [1]
    },
    {
      category: "MuKb",
      question: "Finanzielle Aspekte wie z.B. die Liquidität eines Unternehmens …",
      answers: [
        "… sollten bei der Festlegung des Marketingbudgets nicht berücksichtigt werden.",
        "… können die Höhe des Marketingbudgets begrenzen.",
        "… sollten nicht alleiniges Kriterium bei der Festlegung des Marketingbudgets sein.",
        "… spielen in der Praxis bei der Festlegung des Marketingbudgets keine Rolle."
      ],
      // Laut Screenshot sind die ersten drei Optionen angehakt => Indizes [0,1,2]
      correct: [0, 1, 2]
    },
    {
      category: "MuKb",
      question: "Entscheidungen zur Distributionspolitik betreffen …",
      answers: [
        "die Logistik",
        "Preisnachlässe",
        "den Kundendienst",
        "Sortimentsbreite und -tiefe"
      ],
      // Nur die Logistik (Index 0) ist angehakt
      correct: [0]
    },
    {
      category: "MuKb",
      question: "Das Internet bietet für Marketingmaßnahmen folgende Möglichkeiten:",
      answers: [
        "Einbindung der Kunden in die Produktentwicklung.",
        "Schnelle Aktualisierung von Informationen.",
        "Einfache Kontaktaufnahme mit den potenziellen Kunden.",
        "Individualisierung der Kommunikationspolitik.",
        "Das Internet ist das wichtigste Kriterium für Marketing.",
        "Das Internet sollte für das Marketing nicht benutzt werden."
      ],
      // Laut Screenshot sind die ersten vier (0,1,2,3) richtig
      correct: [0, 1, 2, 3]
    },
    {
      category: "MuKb",
      question: "Welches sind keine Nachteile des Cloud-Computing?",
      answers: [
        "Nutzer machen sich rechtlich und technologisch abhängig vom Provider.",
        "Cyberattacken können Daten verändern oder ausspähen.",
        "Neue Geschäftsmodelle werden ermöglicht.",
        "Rechtsklarheit ist evtl. nicht sichergestellt."
      ],
      // Nur Option 2 (Index [2]) ist kein Nachteil
      correct: [2]
    },
    {
      category: "MuKb",
      question: "Durch das Internet …",
      answers: [
        "… können Marketingaktivitäten stärker individuell auf einzelne Kunden zugeschnitten werden.",
        "… wird tendenziell der Wettbewerbsdruck abnehmen.",
        "… werden die Unternehmen tendenziell zu schnelleren Reaktionszeiten gezwungen.",
        "… wird das Marketing tendenziell an Bedeutung verlieren."
      ],
      // Laut Screenshot sind (0,1,2) richtig
      correct: [0, 1, 2]
    },
    {
      category: "MuKb",
      question: "Welche Aussage trifft auf Produkte im „Poor Dog“-Quadranten zu?",
      answers: [
        "Sie haben einen hohen Marktanteil in einem wachsenden Markt.",
        "Sie generieren hohe Gewinne bei minimalem Risiko.",
        "Sie binden Ressourcen und bieten kaum Potenzial.",
        "Sie haben ein hohes Wachstumspotenzial bei geringen Investitionen."
      ],
      // Laut Screenshot ist Option 2 (Index [2]) richtig
      correct: [2]
    },
    {
      category: "MuKb",
      question: "Die Tatsache, dass das Internet ständig verfügbar ist, zwingt die Unternehmen unter Umständen...",
      answers: [
        "zu einer stärkeren zeitlichen Präsenz der Mitarbeiter.",
        "zu einer höheren Individualisierung des eigenen Angebots.",
        "zu schnelleren Reaktionszeiten auf Kundenanfragen.",
        "zu einer stärkeren Integration der Kunden.",
        "zu weniger Kunden.",
        "zur regionalen Eingrenzung des Kundenbereichs."
      ],
      // Laut Screenshot sind die ersten vier Optionen (0,1,2,3) angehakt
      correct: [0, 1, 2, 3]
    },
    {
      category: "MuKb",
      question: "Fehlentscheidungen in folgenden Teilbereichen des Marketing-Mix können den Erfolg der Marketingstrategie gefährden:",
      answers: [
        "Produktpolitik",
        "Preispolitik",
        "Kommunikationspolitik",
        "Distributionspolitik",
        "Positionsmarketing"
      ],
      // Laut Screenshot sind alle fünf angehakt => [0,1,2,3,4]
      correct: [0, 1, 2, 3, 4]
    },
    {
      category: "MuKb",
      question: "In welchem Quadranten der Matrix befinden sich Produkte mit hohem Marktwachstum, aber geringem Marktanteil?",
      answers: [
        "Stars",
        "Question Marks",
        "Cash Cows",
        "Poor Dogs"
      ],
      // Laut Screenshot ist „Question Marks“ (Index 1) korrekt
      correct: [1]
    },
    {
      category: "MuKb",
      question: "Die qualitative Gestaltung des Marketing-Mix ist in der Regel nicht abhängig von:",
      answers: [
        "Marketingmaßnahmen von Wettbewerbern in anderen Branchen",
        "den Marketingzielen des Unternehmens",
        "der Marketingstrategie des Unternehmens",
        "den Marketing-Mix Zielen des Unternehmens"
      ],
      // Laut Screenshot ist nur (0) richtig
      correct: [0]
    },
    {
      category: "MuKb",
      question: "Office-Programme können über das Internet von jedem aufgerufen werden. Welche Zuordnung betrifft dieser Aspekt?",
      answers: [
        "SaaS",
        "PaaS",
        "public cloud",
        "private cloud",
        "IaaS",
        "hybrid cloud"
      ],
      // In der Praxis ist das typischerweise SaaS. 
      // Sollte dein Screenshot etwas anderes zeigen, passe den Index an.
      correct: [0]
    },
    {
      category: "MuKb",
      question: "Eine gelungene Abstimmung der einzelnen Marketing-Mix Bereiche aufeinander …",
      answers: [
        "…kann man durch ein schrittweises Vorgehen erreichen.",
        "…sollte am besten im Nachhinein erfolgen.",
        "…erfordert in der Regel mehrere Grob- und Feinabstimmungsprozesse.",
        "…ist in der Praxis nicht nötig."
      ],
      // Laut Screenshot sind (0) und (2) richtig
      correct: [0, 2]
    },
    {
      category: "MuKb",
      question: "Welches Ziel verfolgt die ABC-Kundenanalyse nicht?",
      answers: [
        "Kategorisierung von Kunden basierend auf ihrem Umsatzbeitrag.",
        "Ermittlung von Kunden, die besondere Pflege erfordern.",
        "Analyse der Kundenzufriedenheit und Optimierung der Kundenbindung.",
        "Fokussierung auf umsatzstarke Kunden zur Steigerung der Effizienz."
      ],
      // Laut Screenshot ist (2) ("Analyse der Kundenzufriedenheit...") das „nicht“-Ziel => Index [2]
      correct: [2]
    },
    {
      category: "MuKb",
      question: "Zur Preispolitik gehören Entscheidungen über:",
      answers: [
        "die Logistik",
        "Finanzierungskonditionen",
        "Rabatte",
        "den Listenpreis"
      ],
      // Laut Screenshot sind (0) und (1) als richtig markiert => Indizes [0, 1]
      correct: [0, 1]
    },
    {
      category: "MuKb",
      question: "Unter Kommunikationspolitik versteht man...",
      answers: [
        "… Mengenrabatte und Treuebonus.",
        "… Verkaufsförderung und PR.",
        "… Garantien und Verpackungsdesign.",
        "… die Anordnung von Produkten nach den Ergebnissen einer ABC Analyse."
      ],
      // Laut Screenshot ist (1) korrekt => Index [1]
      correct: [1]
    },
    {
      category: "MuKb",
      question: "Erhebungsmethoden für die Marktforschung können sein...",
      answers: [
        "Direkte Kundenbefragung am Marktplatz.",
        "Verkaufsschulungen.",
        "Analyse der Umsatzzahlen des letzten Quartals.",
        "Elimination eines Produktes."
      ],
      // Laut Screenshot sind (0), (1), (2) richtig => Indizes [0, 1, 2]
      correct: [0, 1, 2]
    },
    {
      category: "MuKb",
      question: "Transaktionsbereiche im E-Commerce können sein...",
      answers: [
        "… ABC-Analyse.",
        "… SWOT-Analyse.",
        "… A2C und B2A.",
        "… CRM2 E-Shops."
      ],
      // Laut Screenshot ist (2) richtig => Index [2]
      correct: [2]
    },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Wichtige Dateiformate sind CSV, JSON und XML. Welche Aussagen über JSON-Dateien treffen zu?",
    answers: [
      "JSON-Dateien werden binär geschrieben.",
      "JSON-Dateien enthalten gelegentlich verschachtelte Datenstrukturen.",
      "JSON-Dateien werden nur mit Leerzeichen als Trennzeichen generiert.",
      "JSON-Dateien enthalten key-value-Paare."
    ],
    // Korrekt: b), d) => Indizes [1, 3]
    correct: [1, 3],
    videoUrl:"https://www.youtube.com/watch?v=KccgQkIdMnU"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Programmiersprachen verwenden zur Speicherung von Informationen (Daten) Datentypen. Welche Datentypen aus der Auswahl sind in Python zu finden?",
    answers: [
      "integer",
      "string",
      "array",
      "double"
    ],
    // Laut Screenshot: integer und string => Indizes [0, 1]
    correct: [0, 1],
    videoUrl:"https://www.youtube.com/watch?v=n9WJXUDpMC8"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Es gibt grundlegende Teilprozesse in einer Abarbeitung von Befehlen (ein Algorithmus). Dazu gehört die Schleife. Wozu kann man Schleifen eigentlich verwenden?",
    answers: [
      "Zeilenweise aus einer Datei einlesen",
      "eine Zählschleife von... bis for i in range(...)",
      "jedes Element einer Liste bearbeiten",
      "allen Variablen des Quellcodes einen anderen Wert erteilen"
    ],
    // Angenommen laut Screenshot: a), b), c) richtig => Indizes [0, 1, 2]
    correct: [0, 1, 2],
    videoUrl:"https://www.youtube.com/watch?v=rMjxuWE0YRY"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Welche Codezeile erzeugt einen Wert vom Datentyp integer?",
    answers: [
      `intPrimzahl = "13"   intPrimzahl = 12`,
      `intPrimzahl = "1"`,
      `intPrimzahl = 13/3`,
      `intPrimzahl = 14.7 / 1`
    ],
    // Laut Screenshot: (a) und (b) als richtig markiert => Indizes [0,1]
    // (Hier wird offenbar angenommen, dass am Ende "intPrimzahl" = 12 oder = "1" => 
    //   evtl. die erste Zeile bedeutet "intPrimzahl" = 12 (Integer), 
    //   und die zweite Zeile "intPrimzahl = '1'" mag als String wirken, 
    //   aber laut Screenshot sind a) + b) als "richtig" gekennzeichnet.
    correct: [0, 1],
    videoUrl: "https://www.youtube.com/watch?v=77TsTM3XxmA"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: `Jede Programmiersprache „lebt“ davon, Daten einzulesen, zu bearbeiten und auszugeben. 
  Welche grundsätzlichen Operationen müssen vor dem Lesen/Schreiben von Dateien beachtet werden?`,
    answers: [
      "Bevor man mit einer Datei arbeiten kann, muss diese geöffnet werden.",
      "Wenn wir eine Datei lesen wollen, muss man den Modifikator 'w' angeben.",
      "Man kann 'import' nutzen, um den Umgang mit Dateien zu ermöglichen.",
      "Daten können ohne 'open' direkt angesprochen werden."
    ],
    // Laut Screenshot ist nur (a) als „richtig“ markiert => Index [0]
    correct: [0],
    videoUrl: "https://www.youtube.com/watch?v=UrVW15hb75A"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: `Eine Möglichkeit mit Strings umzugehen, ist das „slicen“. 
  Angenommen strVoelligSinnfrei = "meinVater hat eine Doenerbude oder was?" 
  und wir führen print(strVoelligSinnfrei[4:12]) aus. Welches Ergebnis ist richtig?`,
    answers: [
      `"Vater ha"`,
      `"einVater"`,
      `"ater hat"`,
      `"Vater hat "`
    ],
    // Im Screenshot bzw. aus Indizes: "meinVater hat..." => str[4..11] = "Vater ha"
    // => Index [0]
    correct: [0],
    videoUrl: "https://www.youtube.com/watch?v=ajrtAuDg3yw"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: `Nicht nur im realen Leben, sondern auch in der IT-Abbildung von Geschäftsprozessen 
  werden Entscheidungen getroffen. Welche Formen sind in Python syntaktisch richtig?`,
    answers: [
      "if bedingung:",
      "if bedingung: else:",
      "if bedingung: elif bedingung: else:",
      "if(bedingung){}"
    ],
    // In Python sind (a), (b) und (c) korrekt => Indizes [0,1,2]
    correct: [0, 1, 2],
    videoUrl: "https://www.youtube.com/watch?v=lWyFzOhlOr8"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: `Sie sehen im Code:
  \`\`\`
  import collections
  d = collections.deque([8,18,28])
  \`\`\`
  Worum handelt es sich hierbei?`,
    answers: [
      "Es ist ein Deck, eine Art Kartenstapel, der random Elemente ausgeben kann.",
      "Es ist ein 'deck', das wie eine entkoppelte Queue, also eine Sonderform des sets.",
      "Man kann damit eine Liste behandeln, bei der an Anfang und Ende eingefügt wird (Doppelte Ended Queue).",
      "Es erhöht die Performance von normalem Python-Code."
    ],
    // Laut Screenshot: (c) => Deque = doppelte Ended Queue => Index [2]
    correct: [2],
    videoUrl: "https://www.youtube.com/watch?v=048xwushoBA"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: `Wichtige Dateiformate sind CSV, JSON und XML. Welche Aussagen über CSV-Dateien treffen zu?`,
    answers: [
      "CSV-Dateien werden aus key-value Paaren aufgebaut.",
      "CSV-Dateien enthalten verschachtelte Dateien.",
      "CSV-Dateien werden oft mit einem Trennzeichen (z.B. Komma) generiert.",
      "CSV-Dateien können die Zeilen mehrerer Tabellen enthalten."
    ],
    // Aus dem Screenshot: Richtig ist (c) => Index [2].
    correct: [2],
    videoUrl: "https://www.youtube.com/watch?v=UrVW15hb75A"
  },
  
  {
    apGroup: "AP1",
    category: "Python",
    question: "Bei dem Zugriff auf externe Datenquellen wird try: ... except: ... verwendet. Warum macht man das eigentlich?",
    answers: [
      "das Betriebssystem verwaltet eine Statistik über erfolgreiches Öffnen von Dateien",
      "die Datei wird geöffnet, aber im Except-Bereich wird eine wichtigere Aktion ausgeführt",
      "der Quellcode wird so bis zum Ende ausgeführt, es gibt keine optionale Ausschmückung des Quellcodes",
      "der Mechanismus dient dazu, auf entstehende Fehler zu reagieren"
    ],
    // Laut Screenshot sind (d) richtig => Index [3]
    correct: [3],
    videoUrl: "https://www.youtube.com/watch?v=9A3GtZxB4ug"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Python besitzt Datentypen, die typisch für die Verarbeitung von strukturierten Daten sind. Welche Datentypen sind das?",
    answers: [
      "integer",
      "string",
      "float",
      "list"
    ],
    // Laut Screenshot sind alle vier (a,b,c,d) richtig => Indizes [0,1,2,3]
    correct: [0, 1, 2, 3],
    videoUrl: "https://www.youtube.com/watch?v=s0TDQLb4U6o"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Im Unterricht haben wir häufig so etwas wie print(f\"...\" geschrieben. Beschreibe, was f\"...\" macht!",
    answers: [
      "f\" ermöglicht das Einfügen von Variableninhalten",
      "f\" ersetzt die print-Anweisung",
      "f\" leitet eine Funktionsdefinition ein",
      "f\" ist eine Kurzschreibweise für eine for-Schleife"
    ],
    // Laut Screenshot ist (a) richtig => Index [0]
    correct: [0],
    videoUrl: "https://www.youtube.com/watch?v=EGbRISQi7HY"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: `Was ist die richtige Ausgabe zu folgendem Quellcode?
  
  \`\`\`
  dictVerstoerend = [666, "Hexe", {"verbrannt": True, "begraben": false}]
  print( len(dictVerstoerend) )
  \`\`\`
  `,
    answers: [
      "TypeError",
      "4",
      "3",
      "5"
    ],
    // Laut Screenshot ist (c) => 3 => Index [2]
    correct: [2],
    videoUrl: "https://www.youtube.com/watch?v=daefaLgNkw0"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Funktionen werden dann erstellt, wenn immer gleiche Instruktionen mit lediglich anderen Werten durchlaufen werden. Welche Aussagen über Funktionen sind richtig?",
    answers: [
      "Funktionen können Übergabewerte erhalten (Parameter)",
      "Funktionen müssen immer mit return beendet werden",
      "Funktionen dürfen keine eigenen lokalen Variablen haben",
      "Funktionen dürfen keine Dateien öffnen"
    ],
    // Laut Screenshot sind (a) richtig => Index [0].
    // (b), (c), (d) scheinen falsch markiert zu sein.
    correct: [0],
    videoUrl: "https://www.youtube.com/watch?v=LQCfN5HS9xI"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Schleifen dienen dazu, immer wiederkehrende Prozesse aufzurufen. Python kennt mehrere Schleifen. Welche sind das?",
    answers: [
      "foreach",
      "for(anfangswert;bedingung;inkrement)",
      "while bedingung:",
      "for element in dictionary:"
    ],
    // Laut Screenshot sind (c) und (d) richtig => Indizes [2,3]
    correct: [2, 3],
    videoUrl: "https://www.youtube.com/watch?v=BbBGkE8_Ox4"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Welche der nachfolgenden Datentypen stellt ausschließlich Python bereit?",
    answers: [
      "list",
      "tupel",
      "set",
      "array"
    ],
    // Laut Screenshot sind (b) tupel und (c) set als 'exklusiv in Python' markiert => Indizes [1,2]
    correct: [1, 2],
    videoUrl: "https://www.youtube.com/watch?v=s0TDQLb4U6o&t=5s"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Klammern definieren sogleich Datentypen. Welche Deklarationen der unten gezeigten Deklarationen sind richtig?",
    answers: [
      "Tupel tuAmpel = (\"rot\", \"gelb\", \"grün\")",
      "set.Lottzahlen = set(1,3,27,39,49)",
      "set.Lottzahlen = {1,3,27,39,49}",
      "kunden = {\"id\":3, \"nachname\":\"Maier\", \"vorname\":\"Manfred\"}"
    ],
    // Laut Screenshot sind (c) und (d) richtig => Indizes [2,3]
    correct: [2, 3],
    videoUrl: "https://www.youtube.com/watch?v=eQbBD7d4PQI"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Sie beabsichtigen eine Datei zu öffnen. Was ist die beste Art, das zu tun?",
    answers: [
      "einfach mit open(dateiname) öffnen",
      "if not exists dateiname: vorschalten",
      "try: except: Fehler abfangen",
      "if datei.open(dateiname), error==True benutzen"
    ],
    // Angenommen laut Screenshot ist (a) und (c) korrekt => Indizes [0,2]
    correct: [0, 2],
    videoUrl: "https://www.youtube.com/watch?v=9A3GtZxB4ug&t=328s"
  },
  {
    apGroup: "AP1",
    category: "Python",
    question: "Welche Codezeilen definieren einen Datentyp string?",
    answers: [
      "strVerhalten = {\"halten\":\"rot\", \"warten\":\"gelb\", \"fahren\":\"grün\"}",
      "strFarben = \"rot\", \"gelb\", \"grün\", \"blau\"",
      "strName = [\"martin\", \"Meyer\"]",
      "strName = \"martin meyer\""
    ],
    // Angenommen laut Screenshot ist nur (d) korrekt => Index [3]
    correct: [3],
    videoUrl: "https://www.youtube.com/watch?v=s0TDQLb4U6o&t=5s"
  },
    {
      apGroup: "AP1",
      category: "Python",
      question: "Welche Aufgabe haben Funktionen?",
      answers: [
        "Funktionen erledigen unwichtige Aufgaben.",
        "Funktionen sind eine Art 'black box'. Was darin passiert, ist dem aufrufenden Code unbekannt.",
        "Funktionen heißen Methoden, wenn sie Teil einer Klasse sind.",
        "Funktionen dürfen keine Datenbankabfragen absetzen."
      ],
      // Laut Screenshot sind a), c), d) als 'richtig' markiert => Indizes [0, 2, 3]
      correct: [0, 2, 3],
      videoUrl: "https://www.youtube.com/watch?v=LQCfN5HS9xI"
    },
    {
      apGroup: "AP1",
      category: "Python",
      question: "Wichtige Dateiformate sind CSV, JSON und XML. Welche Aussagen über XML-Dateien treffen zu?",
      answers: [
        "Es gibt eine Bibliothek xml.etree.ElementTree.",
        "Es gibt den Konstruktor Element.",
        "Es gibt den Konstruktor SubElement.",
        "Es werden mehrere Wurzelebenen verwendet."
      ],
      // Laut Screenshot sind a), b), c) als 'richtig' markiert => Indizes [0, 1, 2]
      correct: [0, 1, 2],
      videoUrl: "https://www.youtube.com/watch?v=oUTzO00Ph8g"
    },
    {
      apGroup: "AP1",
      category: "Python",
      question: `Sie haben folgenden Code ausgeführt:
  \`\`\`
  data = open("vorhandeneDatei.txt","w")
  data.write("irgendwas")
  data.close()
  \`\`\`
  Nach dem Ausführen sehen Sie, dass die Datei leer bleibt. Warum ist das so?`,
      answers: [
        "try... except ignoriert diesen Fehler",
        "andstr. close verwendet man nicht",
        "mit .write() werden keine Daten geschrieben",
        "Funktionen brauchen Parameterübergaben"
      ],
      // Laut Screenshot ist nur c) als 'richtig' => Index [2]
      correct: [2],
      videoUrl: "https://www.youtube.com/watch?v=rI_R086GUgo"
    },
    {
      apGroup: "AP1",
      category: "Python",
      question: `Es gibt folgende Zeile im Quelltext:
  \`\`\`
  geraet = "Bohrmaschine"
  \`\`\`
  Wie gibt man den Inhalt der Variablen 'geraet' aus?`,
      answers: [
        "print('Bohrmaschine')",
        "print('geraet')",
        "print(geraet)",
        "return geraet"
      ],
      // Laut Screenshot sind alle markiert => Indizes [0, 1, 2, 3]
      correct: [2],
      videoUrl: "https://www.youtube.com/watch?v=jfOLXKPGXJ0"
    },
    {
      apGroup: "AP1",
      category: "Python",
      question: `Unter Python werden Klammern abgesetzt, um den Datentyp festzulegen. Welche Aussagen sind richtig?`,
      answers: [
        "() wird für Listen verwendet",
        "[] wird für Sets verwendet",
        "Tupel kann man ohne Klammern schreiben",
        "Dictionaries werden mit {} definiert"
      ],
      // Laut Screenshot sind a), c), d) als 'richtig' => Indizes [0, 2, 3]
      correct: [0, 2, 3],
      videoUrl: "https://www.youtube.com/watch?v=eQbBD7d4PQI&t=39s"
    },
  
  
  
  
      // Fragen für AP1 → Kategorie "SQL"
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche der nachfolgend genannten Funktionen sind Gruppenfunktionen?",
        answers: [
          "AVG",
          "COUNT",
          "MIN",
          "MOD",
          "DISTINCT"
        ],
        // Laut Screenshot: AVG, COUNT, MIN und DISTINCT wurden als Gruppenfunktionen markiert.
        // => Indizes [0,1,2,4]
        correct: [0, 1, 2, 4],
        videoUrl: "https://www.youtube.com/watch?v=HS2CVjQ6WfM"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche Aussagen zu OUTER JOINS sind richtig?",
        answers: [
          "Sie verhindern das Auftreten von NULL-Werten.",
          "Man kann sie nur über zwei Tabellen ausführen.",
          "Sie werden meist in LEFT, FULL und RIGHT JOIN unterteilt.",
          "Sie bilden den Oberbegriff aller Joins."
        ],
        // Laut Screenshot ist nur (c) richtig => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=kXCf96BAsb8"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Subselects werden häufig in der WHERE-Klausel eingesetzt. Welche Aussagen treffen über diese Subselects zu?",
        answers: [
          "es muss immer ein einziger Wert durch das Subselect erzeugt werden",
          "ein Vergleich über den IN-Operator ist möglich",
          "ein Wert kann mit einer Menge von Werten des Subselects verglichen werden",
          "Subselects in der WHERE-Klausel ersetzen einen JOIN"
        ],
        // Laut Screenshot sind b), c) und d) korrekt => Indizes [1, 2, 3]
        correct: [1, 2, 3],
        videoUrl: "https://www.youtube.com/watch?v=D96GwECf0NY"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: `Consider a table testtab with two columns x1 and x2 and the query:
        
        SELECT x1 x2
        FROM testtab;
        
    What does it mean that x1 and x2 are juxtaposed only a space in-between (no punctuation)? (Choose 2)`,
        answers: [
          "This is a syntax error as identifiers can’t be juxtaposed without an operator in-between.",
          "The syntax is valid, irrespective of the question whether the semantics are what the query's author originally intended.",
          "The space works as a separator here equivalent to a comma, i.e. the columns x1 and x2 will be selected.",
          "Only the content of column x1 will be shown, but labeled as x2."
        ],
        // Laut Screenshot sind a) und b) richtig => Indizes [0, 1]
        correct: [0, 1],
        videoUrl: "https://www.youtube.com/watch?v=DVm_1KyuoY4&t=183s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Wodurch ist die erste Normalform (1NF) gekennzeichnet?",
        answers: [
          "Datensätze sind durch einen Primärschlüssel eindeutig gekennzeichnet",
          "atomare Informationen",
          "keine Wiederholungsgruppen",
          "keine transitiven Abhängigkeiten"
        ],
        // Laut Screenshot sind a), b), c) richtig => Indizes [0, 1, 2]
        correct: [0, 1, 2],
        videoUrl: "https://www.youtube.com/watch?v=wznoISlyMf0&t=305s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Ordnen Sie den besten Datentyp zu! (Drag & Drop)",
        answers: [
          "email-adresse → VARCHAR(255)",
          "Hausnummer → VARCHAR(5)",
          "Postleitzahl → CHAR(5)",
          "ein Feld mit auto_increment → INTEGER"
        ],
        // Alle 4 Zuordnungen sind korrekt => Indizes [0,1,2,3]
        correct: [0, 1, 2, 3],
        videoUrl: "https://www.youtube.com/watch?v=jxsG8oMBodE"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: `Ein Mitarbeiter hat folgende Abfrage in seiner Anwendung integriert:
    
    SELECT kundeID, COUNT(rechnungsdatum) AS Anzahl
    FROM kunde AS k
    LEFT JOIN rechnung AS r ON k.KundeID = r.kundeID
    WHERE COUNT(rechnungsdatum) > 10
    GROUP BY k.KundenID
    
    Beurteilen Sie dieses SQL-Statement:`,
        answers: [
          "LEFT JOIN darf nicht zusammen mit GROUP BY verwendet werden.",
          "COUNT darf nicht zusammen mit GROUP BY verwendet werden.",
          "Beide Aussagen sind falsch, da LEFT JOIN, COUNT und GROUP BY in Kombination zulässig sind."
        ],
        // Korrekt: c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=SBiuRA1RVnw&t=3s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: `Ein Subselect wird in der FROM-Zeile eingesetzt. Welche Behauptungen treffen zu?`,
        answers: [
          "ein ALIAS für das Subselect ist sinnlos",
          "ein Subselect schließt den JOIN mit weiteren Tabellen aus",
          "es darf nur eine Spalte ausgegeben werden",
          "es dürfen mehrere Zeilen erzeugt werden"
        ],
        // Laut Screenshot sind a), b) und d) richtig => Indizes [0, 1, 3]
        correct: [0, 1, 3],
        videoUrl: "https://www.youtube.com/watch?v=D96GwECf0NY"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: `Es gibt mehrere Arten von Subselects. Welche sind das?`,
        answers: [
          "unkorrelierte",
          "korrelierte",
          "redundanzfreie",
          "eindeutige"
        ],
        // Laut Screenshot sind unkorrelierte, korrelierte, redundanzfreie richtig => Indizes [0, 1, 2]
        correct: [0, 1, 2],
        videoUrl: "https://www.youtube.com/watch?v=D96GwECf0NY"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: `Um mit einer Datenbank arbeiten zu können, benötigt man ein SCHEMA (Oracle) oder eine … (MySQL) als Container?`,
        answers: [
          "DATABASE",
          "TABLE",
          "SEQUENCE",
          "TRIGGER"
        ],
        // Korrekt: a) => Index [0]
        correct: [0],
        videoUrl: "https://www.youtube.com/watch?v=6XH5hAEqE4k"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: `In Datenbanken gibt es zur Einschränkung des Wertebereiches „constraints“. Welche der aufgeführten Begriffe sind constraints?`,
        answers: [
          "ALTER",
          "FOREIGN KEY",
          "INDEX",
          "PRIMARY KEY",
          "auto_increment",
          "NOT NULL",
          "DISTINCT",
          "UNIQUE",
          "CHECK"
        ],
        // Korrekt: FOREIGN KEY (1), PRIMARY KEY (3), NOT NULL (5), UNIQUE (7), CHECK (8)
        correct: [1, 3, 5, 7, 8],
        videoUrl: "https://www.youtube.com/watch?v=4NEZzaAvMIs"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche Datentypen sind bei relationalen Datenbanksystemen definiert?",
        answers: [
          "struct",
          "record",
          "INTEGER",
          "BOOLEAN",
          "string",
          "CHAR"
        ],
        // Laut Screenshot wurden "struct", "record", "INTEGER", "BOOLEAN" und "CHAR" als richtig markiert,
        // "string" war nicht markiert. Hier also Indizes [0, 1, 2, 3, 5]
        correct: [0, 1, 2, 3, 5],
        videoUrl: "https://www.youtube.com/watch?v=jxsG8oMBodE"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "In einer Datenbank gibt es die Tabellen 'Kunden' und 'Leihfahrzeuge'. Es soll eine Abfrage gestellt werden, die ein Leihfahrzeug und dazu alle Kunden, die es genutzt haben, wiedergibt. Welches Statement erfüllt diese Anforderung?",
        answers: [
          "SELECT * FROM kunden LEFT JOIN leihfahrzeuge ON ...",
          "SELECT * FROM kunden RIGHT JOIN leihfahrzeuge ON ...",
          "SELECT * FROM kunden CROSS JOIN leihfahrzeuge ON ...",
          "SELECT * FROM kunden JOIN leihfahrzeuge ON ..."
        ],
        // Laut Screenshot sind LEFT, RIGHT und CROSS fehlerhaft markiert,
        // also bleibt "JOIN" (inner join) als korrekt => Index [3]
        correct: [3],
        videoUrl: "https://www.youtube.com/watch?v=SBiuRA1RVnw&t=4s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Sie sollen analysieren, wie viele Kunden je PLZ existieren. Für welches SQL-Statement entscheiden Sie sich?",
        answers: [
          "SELECT COUNT(*) FROM kunden;",
          "SELECT COUNT(*) FROM kunden ORDER BY plz;",
          "SELECT COUNT(*) FROM kunden GROUP BY kundennummer;",
          "SELECT COUNT(*) FROM kunden GROUP BY plz;"
        ],
        // Korrekt: d) => Index [3]
        correct: [3],
        videoUrl: "https://www.youtube.com/watch?v=1X4cXdU4nDM"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche Attribute passen zu welchen Datentypen? (Drag & Drop)",
        answers: [
          "Vorname → VARCHAR(35)",
          "Geburtsdatum → VARCHAR(10)",
          "Preis → DECIMAL(0,2)",
          "Ganzzahlige Werte 0..149 → TINYINT UNSIGNED"
        ],
        // Laut Screenshot: Vorname, Geburtsdatum und Ganzzahlige Werte sind korrekt,
        // Preis mit DECIMAL(0,2) ist markiert als fehlerhaft.
        // Wir nehmen also Indizes [0,1,3] als korrekt
        correct: [0, 1, 3],
        videoUrl: "https://www.youtube.com/watch?v=jxsG8oMBodE"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche Regeln treffen auf Subselects zu?",
        answers: [
          "Subselects werden immer in runde Klammern gesetzt.",
          "Subselects werden immer in eckige Klammern gesetzt.",
          "Subselects werden immer in geschweifte Klammern gesetzt.",
          "Subselects werden immer in Klammern gesetzt, die Art der Klammern ist egal."
        ],
        // Laut Screenshot ist nur a) richtig => Index [0]
        correct: [0],
        videoUrl: "https://www.youtube.com/watch?v=vndRMEEWIUk"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche Aussagen über COUNT treffen zu?",
        answers: [
          "COUNT(NULL) ergibt NULL.",
          "COUNT(*) zählt die Anzahl Datensätze.",
          "COUNT(DISTINCT plz) führt zu einer Fehlermeldung."
        ],
        // Laut Screenshot ist nur b) korrekt => Index [1]
        correct: [1],
        videoUrl: "https://www.youtube.com/watch?v=vxxouOFQijM"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welcher Datentyp ist für ein relationales Datenbanksystem definiert?",
        answers: [
          "VARCHAR",
          "VARCHAR3",
          "long",
          "string"
        ],
        // Korrekt: a) => Index [0]
        correct: [0],
        videoUrl: "https://www.youtube.com/watch?v=h-L0GvuqOio"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Sie wollen wissen, wie viele Datensätze mit dem Vornamen 'Igor' existieren. Welches Statement ist richtig?",
        answers: [
          "SELECT * FROM tabelle WHERE Vorname='Igor';",
          "SELECT COUNT(Vorname) FROM tabelle WHERE Vorname='Igor';",
          "SELECT COUNT(*) FROM tabelle;",
          "SELECT 'Igor' FROM tabelle;"
        ],
        // Korrekt: b) => Index [1]
        correct: [1],
        videoUrl: "https://www.youtube.com/watch?v=vndRMEEWIUk"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Der Preis wird in der Tabelle Positionen gespeichert. Wieso ist das so?",
        answers: [
          "Das ist ein Fehler, der sich schon vor Jahrzehnten eingeschlichen hat.",
          "Würde man den Preis in der Tabelle Rechnung speichern, müsste man zusätzlich einen LEFT JOIN verwenden.",
          "UPDATEs sind so mit weniger CPU-Kosten verbunden.",
          "Ein UPDATE des Artikelpreises soll die gespeicherte Rechnung nicht verändern."
        ],
        // Korrekt: d) => Index [3]
        correct: [3],
        videoUrl: "https://www.youtube.com/watch?v=6XH5hAEqE4k"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "In einer Datenbank gibt es die Tabellen 'wetterstationen' und 'messgeraete'. Alle Wetterstationen sollen ausgegeben werden, auch wenn manche Stationen keine Messgeräte haben. Welche SQL-Anweisung löst diese Anforderung?",
        answers: [
          "wetterstationen JOIN messgeraete",
          "wetterstationen LEFT JOIN messgeraete",
          "messgeraete RIGHT JOIN wetterstationen",
          "messgeraete SELF JOIN wetterstationen"
        ],
        // Korrekt: b) => Index [1]
        correct: [1],
        videoUrl: "https://www.youtube.com/watch?v=SBiuRA1RVnw&t=7s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Mit welchem optionalen Schlüsselwort kann man die Spaltenüberschriften der Ausgabe umbenennen?",
        answers: [
          "RENAME",
          "AS",
          "DISTINCT",
          "AVG"
        ],
        // Korrekt: b) => Index [1]
        correct: [1],
        videoUrl: "https://www.youtube.com/watch?v=DVm_1KyuoY4&t=187s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Wie lautet die richtige Zeile zum Login der MariaDB?",
        answers: [
          "mysql -uroot;",
          "mariadb -uroot;",
          "mysql -uroot",
          "mariadb -uroot"
        ],
        // Korrekt ist c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=6XH5hAEqE4k"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Ein Mitarbeiter hat folgende Abfrage in seiner Anwendung integriert:\n\nSELECT kundeID, COUNT(rechnungsdatum) AS Anzahl\nFROM kunde AS k\nLEFT JOIN rechnung AS r ON k.KundeID = r.kundeID\nWHERE COUNT(rechnungsdatum) > 10\nGROUP BY k.KundenID\n\nBeurteilen Sie dieses SQL-Statement:",
        answers: [
          "LEFT JOIN darf nicht zusammen mit GROUP BY verwendet werden.",
          "COUNT darf nicht zusammen mit GROUP BY verwendet werden.",
          "Beide Aussagen sind falsch, da LEFT JOIN, COUNT und GROUP BY in Kombination zulässig sind."
        ],
        // Korrekt ist c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=lL_ElI2ENeE"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welche der folgenden Funktionen sind Gruppenfunktionen?",
        answers: [
          "AVG",
          "COUNT",
          "MIN",
          "MOD",
          "DISTINCT"
        ],
        // Korrekt: AVG, COUNT, MIN => Indizes [0, 1, 2]
        correct: [0, 1, 2],
        videoUrl: "https://www.youtube.com/watch?v=Hqcv8PkDJ7A&t=162s"
      },
      {
        apGroup: "AP1",
        category: "SQL",
        question: "Welches Verhalten beschreibt die referentielle Integrität?",
        answers: [
          "Fremdschlüsselwerte haben keine Einschränkung.",
          "Primärschlüsselwerte haben keine Einschränkung.",
          "Primärschlüsselwerte sind UNIQUE.",
          "Fremdschlüsselwerte dürfen auch NULL sein.",
          "Primärschlüsselwerte sind die Werte, die auch als Fremdschlüssel vorkommen und NULL."
        ],
        // Korrekt: c) und d) => Indizes [2, 3]
        correct: [2, 3],
        videoUrl: "https://www.youtube.com/watch?v=w5eAmcpDJsk&t=16s"
      },
      
   
      // Fragen für AP1 → Kategorie "Datenschutz"
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Wie muss die Eingabemaske für einen Online-Büchershop nach dem Grundsatz der Datensparsamkeit (DSGVO) konditioniert werden?",
        answers: [
          "Alle Eingabefelder sind Pflichtfelder und müssen ausgefüllt werden.",
          "Alle Eingabefelder sind optional, es gibt keine Pflichtfelder.",
          "Nur die zur Vertragserfüllung relevanten Felder (z.B. Name, Kontakt, Zahlungsdaten) sind Pflichtfelder, weitere Felder (Einkommen, Alter, Familienstand) sind optional oder entfallen.",
          "Es dürfen gar keine personenbezogenen Daten erhoben werden."
        ],
        // Korrekt: c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=bPS3ojekcKw"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Welches ist im normalen kommerziellen Verkehr die sicherste und stärkste Rechtsgrundlage für die Verarbeitung personenbezogener Daten?",
        answers: [
          "Die Einwilligung, weil sie jederzeit widerruflich ist.",
          "Berechtigte Interessen, weil sie am breitesten ausgelegt werden können.",
          "Ein Vertrag, der auf Anfrage der betroffenen Person zustande kommt.",
          "Es gibt keine einheitliche Rechtsgrundlage, es muss immer Einwilligung vorliegen."
        ],
        // Korrekt: c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=U3yHpgQbtVY"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Damit eine natürliche oder juristische Person als 'Verantwortlicher' (verantwortliche Stelle) gilt, muss sie Entscheidunggewalt über zwei Dinge haben:",
        answers: [
          "Zeitpunkt und Art der Daten.",
          "Erhebung und Verwendung der personenbezogenen Daten.",
          "Mittel und Zwecke der Verarbeitung von personenbezogenen Daten.",
          "Organisieren und Auslesen von personenbezogenen Daten."
        ],
        // Korrekt: c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=nwTliqrZqww"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Kennzeichnen Sie die falsche Aussage zum Verzeichnis von Verarbeitungstätigkeiten (VVT)!",
        answers: [
          "Die meisten Unternehmen sind zum Erstellen eines VVT verpflichtet.",
          "Ein fehlendes VVT kann zur Verhängung eines Bußgeldes führen.",
          "Die Mindestinhalte des VVT sind in der DSGVO definiert, die Form des VVT hingegen nicht.",
          "Das VVT muss der Aufsichtsbehörde spätestens bis zum 01.03. eines jeden Jahres unaufgefordert vorgelegt werden."
        ],
        // Falsch ist d) => Index [3]
        correct: [3],
        videoUrl: "https://www.youtube.com/watch?v=Gh3GymHKe-0"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Welche der folgenden Aussagen ist falsch (im Kontext Datenschutz vs. Datensicherheit)?",
        answers: [
          "Die DSGVO beschäftigt sich überwiegend mit Datenschutz, enthält aber auch Vorschriften zur Datensicherheit.",
          "Beim Datenschutz geht es um die Grundrechte und Grundfreiheiten von natürlichen Personen.",
          "Datensicherheit beschäftigt sich überwiegend mit den juristischen Aspekten des Schutzes von Geschäftsgeheimnissen.",
          "Die Schnittmenge aus Datenschutz und Datensicherheit sind die sogenannten technischen und organisatorischen Maßnahmen (TOM)."
        ],
        // Falsch ist c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=pXWMbQInubU"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Ein kanadischer Konzern möchte Produkte online in EWR-Ländern anbieten. Er entwickelt Online-Shops in Englisch, Deutsch und Französisch auf einem Rechenzentrum in Südafrika. Welche Aussage zum Datenschutz ist richtig?",
        answers: [
          "Die Regeln der DSGVO müssen nicht beachtet werden, da der Sitz des Unternehmens in Kanada und der Online-Shop in Südafrika liegt.",
          "Der Konzern unterliegt nur den kanadischen Datenschutzgesetzen, weil sein Sitz in Kanada ist.",
          "Sobald sich ein Unternehmen an Kunden (betroffene Personen) im EWR richtet, müssen die Vorgaben der DSGVO beachtet werden."
        ],
        // Richtig ist c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=pXWMbQInubU"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Welche der folgenden Rechte sind keine Betroffenenrechte nach Kapitel 3 DSGVO?",
        answers: [
          "Recht auf Berichtigung",
          "Recht auf Verschlüsselung",
          "Recht auf Einschränkung der Verarbeitung",
          "Recht, dass die Daten nicht in der Cloud gespeichert werden"
        ],
        // Keine Betroffenenrechte sind (b) und (d) → Indizes [1, 3]
        correct: [1, 3],
        videoUrl: "https://www.youtube.com/watch?v=_Tq9bJwQcFM"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Welche beiden Aussagen zu den gesetzlichen Grundlagen des Datenschutzes sind korrekt?",
        answers: [
          "Die DSGVO gilt ausschließlich für Unternehmen, das BDSG ausschließlich für öffentliche Stellen.",
          "Die DSGVO ist europäisches Recht; die nationalen Parlamente mussten der DSGVO nicht gesondert zustimmen.",
          "In Deutschland existieren neben dem BDSG und der DSGVO weitere Gesetze zum Datenschutz.",
          "Die Landesdatenschutzbehörden sind allein für den Datenschutz in Bund und Ländern verantwortlich."
        ],
        // Angenommen richtig sind (b) und (c) → Indizes [1, 2]
        correct: [1, 2],
        videoUrl: "https://www.youtube.com/watch?v=pXWMbQInubU"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Welche der folgenden Aussagen ist richtig (Urheberrecht)?",
        answers: [
          "Das Urheberrecht gilt nur für Werke der Musik und bildende Kunst, nicht aber für Software.",
          "Das Urheberrecht wird erst mit der Veröffentlichung des Werkes wirksam.",
          "Das Urheberrecht erlischt 70 Jahre nach dem Tod des Urhebers.",
          "Urheberrecht kann nur für Werke in Anspruch genommen werden, die ein Copyright-Symbol tragen."
        ],
        // Richtig: (c) → Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=F2iBIT4xid8"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Was versteht man im Datenschutz unter einer Schutzbedarfsanalyse?",
        answers: [
          "Die Methode, wie alle Informationen im Unternehmen abgesichert werden müssen.",
          "Bildung von Schutzbedarfskategorien aus einer Risikoanalyse über personenbezogene Daten.",
          "Beschreibung, welche technischen und organisatorischen Maßnahmen (TOMs) zu welchem Risiko passen."
        ],
        // Richtig: (b) → Index [1]
        correct: [1],
        videoUrl: "https://www.youtube.com/watch?v=mtm36toRX-o"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Was sind personenbezogene Daten?",
        answers: [
          "Alle Daten, die eine identifizierte Person bezeichnen.",
          "Ausschließlich Name, Adresse und Kontaktdaten, da diese Daten die Person direkt bezeichnen.",
          "Alle Daten, die ständig verfügbar sein müssen und eine natürliche Person betreffen.",
          "Alle Daten, von denen man direkt oder indirekt eine natürliche Person ermitteln kann."
        ],
        // Richtig: (d) → Index [3]
        correct: [3],
        videoUrl: "https://www.youtube.com/watch?v=MIKwWRkHnMM"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Wann spricht man von einer Auftragsverarbeitung?",
        answers: [
          "Wenn ein Unternehmen die Daten von einer dritten Stelle bekommt und sie für eigene Zwecke verarbeitet.",
          "Wenn ein weiteres Unternehmen über Mittel und Zwecke der Verarbeitung entscheidet.",
          "Wenn eine natürliche oder juristische Person, Behörde oder Einrichtung personenbezogene Daten im Auftrag der verantwortlichen Stelle verarbeitet."
        ],
        // Korrekt: Nur c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=WEu8Zr_NdHU"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Die Verarbeitung personenbezogener Daten darf nur zweckgebunden erfolgen. Nach der Zweckerfüllung darf auch keine Identifizierung der betroffenen Person mehr möglich sein. Welche Aussagen sind richtig?",
        answers: [
          "Nach der Zweck­erfüllung müssen die personenbezogenen Daten sofort gelöscht oder anonymisiert werden, wenn keine gesetzlichen Regelungen entgegenstehen.",
          "Wenn die gesetzliche Aufbewahrungsfrist noch nicht abgelaufen ist, bleiben die Daten gespeichert, müssen aber dem allgemeinen Zugriff entzogen werden.",
          "Wenn die gesetzliche Aufbewahrungsfrist abgelaufen ist, bleiben die Daten unverändert gespeichert, damit sie jederzeit eingesehen werden können."
        ],
        // Korrekt: a), b) => Indizes [0, 1]
        correct: [0, 1],
        videoUrl: "https://www.youtube.com/watch?v=MIKwWRkHnMM"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Innerhalb welchem Zeitraum nach Bekanntwerden muss die verantwortliche Stelle meldepflichtige Datenschutzverstöße der Aufsichtsbehörde melden?",
        answers: [
          "Innerhalb 1 Monat",
          "Innerhalb 72 Stunden",
          "Innerhalb 3 Monate"
        ],
        // Korrekt: b) => Index [1]
        correct: [1],
        videoUrl: "https://www.youtube.com/watch?v=uxQwCgavsVc"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Welche beiden der folgenden Aussagen sind falsch? Das Auskunftsrecht nach Art. 15 DSGVO ...",
        answers: [
          "... gilt nur gegenüber Behörden, nicht gegenüber Privatunternehmen.",
          "... wird durch die Aufsichtsbehörde ausgeübt.",
          "... schließt das Recht auf eine Kopie der Daten ein.",
          "... kann bei exzessiver Nutzung verweigert werden."
        ],
        // Die Frage lautet: Welche beiden Aussagen sind *falsch*? => a) und b) => Indizes [0, 1]
        correct: [0, 1],
        videoUrl: "https://www.youtube.com/watch?v=6V60YpSb4K4"
      },
      {
        apGroup: "AP1",
        category: "Datenschutz",
        question: "Wer ist bei einer verantwortlichen Stelle immer für die Einhaltung der Datenschutzvorschriften verantwortlich?",
        answers: [
          "Der Datenschutzbeauftragte",
          "Der Abteilungsleiter, in dessen Abteilung die Daten verarbeitet werden",
          "Die oberste Leitungsebene"
        ],
        // Korrekt: c) => Index [2]
        correct: [2],
        videoUrl: "https://www.youtube.com/watch?v=nwTliqrZqww"
      },
    {
      apGroup: "AP1",                 // Falls du in deinem Code so ein Feld verwendest
      category: "Datenschutz",        // Keine Unterkategorie
      question: "Welchen Risikoansatz verfolgen die Verarbeitung personenbezogener Daten nach DSGVO im Vergleich zur allgemeinen IT?",
      answers: [
        "Es gibt keinen Unterschied, es wird dieselbe Risikoberechnung wie in der allgemeinen IT genutzt.",
        "Der Datenschutz nach DSGVO betrachtet nicht direkt monetär messbare Risiken, sondern die Rechte und Freiheiten natürlicher Personen.",
        "Es werden primär technische Risiken für Geräte und Systeme betrachtet.",
        "Die allgemeine IT verfolgt oft einen quantitativen Ansatz (Wahrscheinlichkeit, Schadenhöhe), während DSGVO-Risiken stärker auf immaterielle Schäden fokussieren."
      ],
      // Angenommen, richtig sind (b) und (d) => Indizes [1, 3]
      correct: [1, 3],
      videoUrl: "https://www.youtube.com/watch?v=BBBCRx5k8MU"
    },
    {
      apGroup: "AP1",
      category: "Datenschutz",
      question: "Die besonderen Kategorien des Art. 9 DSGVO bezeichnen besonders schützenswerte personenbezogene Daten. Es gibt aber Ausnahmen. Welche Aussagen sind richtig?",
      answers: [
        "Die Einwilligung der betroffenen Person liegt in rechtssicherer Form vor.",
        "Die Datenverarbeitung dient dem berechtigten Interesse der verantwortlichen Stelle.",
        "Die Verarbeitung ist aus arbeits- und sozialrechtlichen Gründen notwendig.",
        "Einfachheit und Praktikabilität."
      ],
      // Laut Screenshot sind die ersten drei richtig => Indizes [0, 1, 2]
      correct: [0, 1, 2],
      videoUrl: "https://www.youtube.com/watch?v=FmBrh8_zd_A"
    },
    {
      apGroup: "AP1",
      category: "Datenschutz",
      question: "Welche der folgenden Daten zählen nicht zu den „Daten besonderer Kategorie“ nach Art. 9 DSGVO?",
      answers: [
        "Kontostand",
        "Gewerkschaftszugehörigkeit",
        "Religiöse Überzeugung",
        "Schulabschluss"
      ],
      // Nicht zu Art. 9 gehören Kontostand & Schulabschluss => Indizes [0, 3]
      correct: [0, 3],
      videoUrl: "https://www.youtube.com/watch?v=FmBrh8_zd_A"
    },
    {
      apGroup: "AP1",
      category: "Datenschutz",
      question: "Die DSGVO enthält keine detaillierten Regelungen zur Verarbeitung von personenbezogenen Daten für Werbezwecke. Welche Aussage ist richtig?",
      answers: [
        "Da das UWG ein nationales Gesetz ist, müssen die Vorgaben der DSGVO in Bezug auf Datenverarbeitung nicht beachtet werden.",
        "Es reicht, wenn §7 UWG beachtet wird, weil personenbezogene Daten ausschließlich Bestandskunden betreffen.",
        "Zusätzlich zu den Erlaubnistatbeständen des UWG müssen Informationen der DSGVO unbedingt mitberücksichtigt werden."
      ],
      // Laut Screenshot ist c) richtig => Index [2]
      correct: [2],
      videoUrl: "https://www.youtube.com/watch?v=FmBrh8_zd_A"
    },
    {
      apGroup: "AP1",
      category: "Datenschutz",
      question: "Ein Mitarbeiter verlässt nach vielen Jahren das Unternehmen und verlangt gem. Art. 15 DSGVO Auskunft darüber, wo im Unternehmen seine Daten zur Firmenzugehörigkeit gespeichert sind. Mit welchem Instrument findet man am ehesten heraus, an welchen Stellen diese Daten liegen?",
      answers: [
        "Personalakte",
        "Mitarbeiterverzeichnis der Personalabteilung",
        "Gehaltsüberweisungen",
        "Verzeichnis der Verarbeitungstätigkeiten (VVT) im Datenschutzmanagementsystem"
      ],
      // Laut Screenshot ist d) korrekt => Index [3]
      correct: [3],
      videoUrl: "https://www.youtube.com/watch?v=6V60YpSb4K4&t=4s"
    },
  
      {
        category: "WiSo",
        question: "Welche der folgenden Aussagen kann aus der Grafik abgeleitet werden?",
        answers: [
          "Trotz verstärkter Werbung ging die Nachfrage zurück.",
          "Mit dem größeren Angebot im II. Quartal wurde eine höhere Nachfrage erzielt.",
          "Nach dem Nachfragerückgang besteht kein Marktgleichgewicht.",
          "Abgesetzte Menge und Preise sind zurückgegangen.",
          "Trotz gesunkenen Preisen besteht ein Nachfrageüberhang.",
          "Aufgrund des angekündigten Modellwechsels ist die Nachfrage zurückgegangen."
        ],
        correct: [3]
      },
      {
        category: "WiSo",
        question: "Die Summer IT GmbH ist tarifgebunden und schließt Arbeitsverträge auf der Grundlage des aktuellen Tarifvertrags. Welche der folgenden Aussagen treffen auf einen Tarifvertrag zu?",
        answers: [
          "kommt durch freie Vereinbarung der Tarifpartner zustande.",
          "bedarf der Genehmigung eines staatlich bestellten Schlichters.",
          "gibt Höchstgrenzen für Löhne und Gehälter an.",
          "darf nur für gewerkschaftlich organisierte Arbeitnehmer angewendet werden.",
          "darf nicht gekündigt werden.",
          "kann durch Betriebsvereinbarung ergänzt werden."
        ],
        correct: [0,1,2,3,4,5]
      },
      {
        category: "WiSo",
        question: "Was ist eine typische Pflichtverletzung seitens des Arbeitgebers?",
        answers: [
          "Nichteinhaltung des gesetzlichen Mindestlohns",
          "Teilnahme an Betriebsversammlungen",
          "Einhaltung der gesetzlichen Kündigungsfristen",
          "Gewährung von Sonderurlaub nach Absprache"
        ],
        correct: [0]
      },
      {
        category: "WiSo",
        question: "Die Compu AG hat schließlich die Potter GmbH gekauft und betreibt diese unter Beibehaltung der Firma Potter GmbH weiter. Um welche der folgenden Formen eines Unternehmenszusammenschlusses handelt es sich?",
        answers: [
          "Fusion",
          "Arbeitsgemeinschaft",
          "Konzern",
          "Kartell",
          "Interessengemeinschaft"
        ],
        correct: [2]
      },
      {
        category: "WiSo",
        question: "Die Compu AG will die Arbeitsproduktivität je Stunde in der Fertigung steigern. Welche der folgenden Maßnahmen ist dazu am ehesten geeignet?",
        answers: [
          "Erhöhung der Verkaufspreise",
          "Erhöhung des Tariflohns",
          "Umstellung von Zeitlohn (Anwesenheitszeit) auf Leistungslohn (z.B. Akkord- oder Prämienlohn)",
          "Umstellung von Leistungslohn auf Zeitlohn"
        ],
        correct: [2]
      },
      {
        category: "WiSo",
        question: "Eine Aushilfskraft bittet in der Personalabteilung der Compu AG um Informationen zur Sozialversicherung. Welche der folgenden Einzelversicherungen sind nicht im Beitragssatz der Sozialversicherung enthalten? Nennen Sie zwei Versicherungen.",
        answers: [
          "Krankenversicherung",
          "Pflegeversicherung",
          "Lebensversicherung",
          "Rentenversicherung",
          "Arbeitslosenversicherung",
          "Private Unfallversicherung"
        ],
        correct: [2,5]
      },
      {
        category: "WiSo",
        question: "Was darf jemand mit einer Prokura nicht?",
        answers: [
          "Prozesse für das Unternehmen führen.",
          "Bilanzen unterschreiben.",
          "Rechtsgeschäfte zur Änderung des Unternehmens.",
          "Artvollmacht erteilen.",
          "Gesamtvollmacht entziehen."
        ],
        correct: [0,1,3]
      },
      {
        category: "WiSo",
        question: "Um welche der folgenden Unternehmungsformen handelt es sich bei der Compu AG?",
        answers: [
          "Einzelunternehmen",
          "Gesellschaft bürgerlichen Rechts",
          "Personengesellschaft",
          "Kapitalgesellschaft"
        ],
        correct: [3]
      },
      {
        category: "WiSo",
        question: "Wegen schlechter Auftragslage erwägt die Compu AG mehreren Mitarbeitern zu kündigen. Welche der folgenden Personengruppenkombination genießt einen besonderen gesetzlichen Kündigungsschutz?",
        answers: [
          "Handlungsbevollmächtigte",
          "Schwangere",
          "Mitglieder des Betriebsrates",
          "Mitarbeiter/-innen ab dem 50. Lebensjahr",
          "Prokuristen"
        ],
        correct: [0,1,2,3,4]
      },
      {
        category: "WiSo",
        question: "Bei welcher der folgenden Rechtsformen haften alle Gesellschafter mit Ihrem Privatvermögen?",
        answers: [
          "Offene Handelsgesellschaft (OHG)",
          "Gesellschaft mit beschränkter Haftung (GmbH)",
          "Aktiengesellschaft (AG)",
          "Kommanditgesellschaft (KG)"
        ],
        correct: [0]
      }
    ];
    
    const ap2Questions = [
      { category: "PlaceholderCat1", question: "Placeholder Frage 1 in Cat1", answers: ["Option A", "Option B", "Option C", "Option D"], correct: [0] },
      { category: "PlaceholderCat1", question: "Placeholder Frage 2 in Cat1", answers: ["Option E", "Option F", "Option G", "Option H"], correct: [1] }
    ];
    
    /* Für KomITIL-Fragen (in AP1) */
    const komITILQuestions = [
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zur Practice Service Request Management stimmen?",
        answers: [
          "Ein Service Request ist ein Gesuch für etwas anderes als die Lösung eines Incidents.",
          "Die Wiederverwendung bestehender Arbeitsabläufe ist bei neu zu definierenden Abläufen selten möglich.",
          "Die Erwartungen der Nutzer sollten hinsichtlich des Liefergegenstands gesteuert werden.",
          "Der Zweck der Practice ist die userfreundliche Bearbeitung von Service Requests.",
          "Wiederverwendung bereits bestehender Abläufe sollte wann immer möglich angestrebt werden."
        ],
        // Laut Screenshot: a), d), e) => Indizes [0, 3, 4]
        correct: [0, 3, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Level Management?",
        answers: [
          "Zielsetzung klarer unternehmerischer Ziele für das Level von Services und Sicherstellung ordnungsgemäßer Überwachung, Management und Abrechnung der Services.",
          "Annahme von Nachfragen nach Incident-Lösungen und Serviceanfragen als zentrale Anlaufstelle.",
          "Regelmäßige Erfassung von Zwischenfällen und Erstellung von Berichten für das Management.",
          "Überwachung aller CIs und deren Beziehungen im Servicenetz."
        ],
        // Korrekt: Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Configuration Management?",
        answers: [
          "Sicherstellung korrekter und verlässlicher Informationen über die Zusammensetzung der Services und CIs, die sie unterstützen, sowie deren Verfügbarkeit.",
          "Aufzeichnung aller Events und automatisierte Reaktionen auf Störungen.",
          "Zielsetzung klarer unternehmerischer Ziele für das Level von Services.",
          "Erstellung eines Servicekatalogs mit allen verfügbaren Services."
        ],
        // Korrekt: Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu einem Incident stimmen?",
        answers: [
          "Ein Incident beschreibt eine nicht geplante Unterbrechung.",
          "Es wird unterschieden nach Minimal Incidents und Major Incidents.",
          "Major Incidents sind vor der Aufnahme des Service mit dem Kunden zu definieren.",
          "Incidents sind nach Auftrittszeitpunkt abzuarbeiten, nicht nach Priorität.",
          "Swarming kann dabei helfen, komplexe Incidents schnell zu lösen."
        ],
        // Laut Screenshot: a), c), e) => Indizes [0, 2, 4]
        correct: [0, 2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Desk?",
        answers: [
          "Annahme von Nachfragen nach Incident-Lösungen und Serviceanfragen als zentrale Anlaufstelle (entry point) und Kontaktaufnahme (single point of contact) mit allen und für alle Nutzer.",
          "Zielsetzung klarer unternehmerischer Ziele für das Level von Services.",
          "Sicherstellung korrekter und verlässlicher Informationen über Services und CIs.",
          "Aufzeichnung aller Events und automatisierte Reaktionen auf Störungen."
        ],
        // Korrekt: Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu einem Incident stimmen?",
        answers: [
          "Ein Incident beschreibt eine nicht geplante Unterbrechung.",
          "Es wird unterschieden nach Minimal Incidents und Major Incidents.",
          "Major Incidents sind vor der Aufnahme des Service mit dem Kunden zu definieren.",
          "Incidents sind nach Auftrittszeitpunkt abzuarbeiten, nicht nach Priorität.",
          "Swarming kann dabei helfen, komplexe Incidents schnell zu lösen."
        ],
        // Im Screenshot markiert: a), c), e) → Indizes [0, 2, 4]
        correct: [0, 2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu einem Problem stimmen?",
        answers: [
          "In der Practice Problem Management gibt es drei Phasen im Umgang mit einem Problem.",
          "Problem Management soll die Wiederauftrittswahrscheinlichkeit von Incidents möglichst verhindern.",
          "Es empfiehlt sich, starre Prozesse im Problem Management einzusetzen.",
          "Ein Problem beschreibt eine unbekannte, mögliche Ursache für Incidents.",
          "Die Lösung eines Known Error kann von einem Change abhängen."
        ],
        // Im Screenshot markiert: a), b), d), e) → Indizes [0, 1, 3, 4]
        correct: [0, 1, 3, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Monitoring & Event Management?",
        answers: [
          "Überwachung von Services und deren Komponenten und Aufzeichnung von Events, um auf Basis kategorisierter Ereignisse Standardreaktionen zu implementieren.",
          "Regelmäßige Erfassung von Zwischenfällen und Erstellung von Berichten für das Management.",
          "Überprüfung aller Anbieter und Verträge auf ihre Einhaltung der SLAs.",
          "Aufbau einer Wissensdatenbank, in der alle Events kategorisiert werden."
        ],
        // Im Screenshot: Beschreibungstext → korrekte Antwort Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Service Design?",
        answers: [
          "Entwurf von Produkten und Services, die zum Zweck und zur Nutzung passen und von der Organisation bereitgestellt werden.",
          "Vorgabe von Prozessen zur Steuerung von Änderungen im IT-Umfeld.",
          "Sammlung von Kundenfeedback und Abbildung im Servicekatalog.",
          "Aufbau von Templates für den Betrieb der Services im Daily Business."
        ],
        // Im Screenshot: Beschreibungstext → korrekte Antwort Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Desk?",
        answers: [
          "Annahme von Nachfragen nach Incident-Lösungen und Serviceanfragen als zentrale Anlaufstelle (entry point) und Kontaktaufnahme (single point of contact) mit allen und für alle Nutzer.",
          "Erstellung eines Verfahrens zur kontinuierlichen Verbesserung von Services.",
          "Sicherstellung der Verfügbarkeit und Zuverlässigkeit aller Hardwarekomponenten.",
          "Optimierung von Lieferantenbeziehungen und Vertragssituationen."
        ],
        // Im Screenshot: Beschreibungstext → korrekte Antwort Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Desk?",
        answers: [
          "Annahme von Nachfragen nach Incident-Lösungen und Serviceanfragen als zentrale Anlaufstelle (entry point) und Kontaktaufnahme (single point of contact) mit allen und für alle Nutzer.",
          "Entwurf von Produkten und Services, die zum Zweck und zur Nutzung passen.",
          "Überwachung der Services und ihrer Komponenten zur Einleitung von Standardreaktionen.",
          "Festlegung und Überprüfung von Service Levels, die zwischen Kunden und Anbieter vereinbart werden."
        ],
        // Korrekt: Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zur Practice Service Request Management stimmen?",
        answers: [
          "Ein Service Request ist ein Gesuch für etwas anderes als die Lösung eines Incidents.",
          "Die Wiederverwendung bestehender Arbeitsabläufe ist bei neu zu definierenden Abläufen selten möglich.",
          "Die Erwartungen der Nutzer sollten hinsichtlich des Liefergegenstands gesteuert werden.",
          "Der Zweck der Practice ist die userfreundliche Bearbeitung von Service Requests.",
          "Wiederverwendung bereits bestehender Abläufe sollte wann immer möglich angestrebt werden."
        ],
        // Laut Screenshot: a), e) als korrekt → Indizes [0, 4]
        correct: [0, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Level Management?",
        answers: [
          "Zielsetzung klarer unternehmerischer Ziele für das Level von Services und Sicherstellung ordnungsgemäßer Überwachung, Management und Abrechnung der Services.",
          "Annahme und Dokumentation von Incidents als zentrale Anlaufstelle für alle Nutzer.",
          "Optimierung von Wertströmen und Prozessen durch agile Methoden.",
          "Steuerung aller Lieferanten und deren Verträge."
        ],
        // Korrekt: Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt die Practice Service Configuration Management?",
        answers: [
          "Ermöglichen der Planung von Meilensteinen im Projektverlauf.",
          "Sicherstellung korrekter und verlässlicher Informationen über die Zusammensetzung der Services und CIs, sowie deren Verfügbarkeit.",
          "Zielsetzung klarer unternehmerischer Ziele für das Level von Services.",
          "Überwachung von Services und ihrer Komponenten zur Einleitung von Standardreaktionen."
        ],
        // Korrekt: Index [1]
        correct: [1]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zur Practice 'Fortlaufende Verbesserung' stimmen?",
        answers: [
          "Verbesserungsideen liegen in der Verantwortung des Managements.",
          "Verbesserungspotenziale werden entweder abteilungsintern oder in der Business Excellence erarbeitet.",
          "Alle 4 Dimensionen müssen bei der Umsetzung von Verbesserungspotenzialen berücksichtigt werden.",
          "Neue Verbesserungsideen werden an bestehende Ideen hinten angereiht.",
          "Um die Koordination der Umsetzung von Verbesserungspotenzialen zu verbessern, können Teams etabliert werden."
        ],
        // Korrekt: c), e) => Indizes [2, 4]
        correct: [2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Schritt in der Practice 'Fortlaufende Verbesserung' gibt es nicht?",
        answers: [
          "Wo stehen wir jetzt?",
          "Wo wollen wir hin?",
          "Wer ist zu berücksichtigen?",
          "Haben wir unsere Ziele erreicht?",
          "Wie erhalten wir die Dynamik aufrecht?"
        ],
        // Korrekt (nicht vorhanden): c) => Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Was ist bei dem Schritt der Ist-Analyse zu berücksichtigen?",
        answers: [
          "Organisationskultur.",
          "Bestehende Services.",
          "Betroffene Personen und Prozesse.",
          "Möglichkeiten zur technischen Lösung.",
          "Einstellungen der Stakeholder(-gruppen)."
        ],
        // Korrekt: a), b), c), e) => Indizes [0, 1, 2, 4]
        correct: [0, 1, 2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu einem Incident stimmen?",
        answers: [
          "Ein Incident beschreibt eine nicht geplante Unterbrechung.",
          "Es wird unterschieden nach Minimal Incidents und Major Incidents.",
          "Major Incident ist vor der Aufnahme des Service mit dem Kunden zu definieren.",
          "Incidents sind nach Auftrittszeitpunkt abzuarbeiten, nicht nach Priorität.",
          "Swarming kann dabei helfen, komplexe Incidents schnell zu lösen."
        ],
        // Korrekt: a), e) => Indizes [0, 4]
        correct: [0, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu einem Problem stimmen?",
        answers: [
          "In der Practice Problem Management gibt es drei Phasen im Umgang mit einem Problem.",
          "Problem Management soll die Wiederauftrittswahrscheinlichkeit von Incidents möglichst verhindern.",
          "Es empfiehlt sich, starre Prozesse im Problem Management einzusetzen.",
          "Ein Problem beschreibt eine unbekannte, mögliche Ursache für Incidents.",
          "Die Lösung eines Known Error kann von einem Change abhängen."
        ],
        // Korrekt: a), d), e) => Indizes [0, 3, 4]
        correct: [0, 3, 4]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Monitoring & Event Management?",
        answers: [
          "Überwachung von Services und deren Komponenten und Aufzeichnung von Events, um auf Basis kategorisierter Ereignisse Standardreaktionen zu implementieren.",
          "Verhindern von Sicherheitslücken durch regelmäßige Audits.",
          "Abstimmung von Business-Strategie und IT-Strategie.",
          "Sicherstellung der Koordination von Incidents in einer Organisation."
        ],
        // Korrekt: a) => Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Service Design?",
        answers: [
          "Entwurf von Produkten und Services, die zum Zweck und zur Nutzung passen und von der Organisation bereitgestellt werden.",
          "Regelung der Lieferantenbeziehungen und Vertragsverhandlungen.",
          "Ziel der Vermeidung von Zwischenfällen durch strukturierte Prozesse.",
          "Erstellung von Prozessdokumentation in jeder Projektphase."
        ],
        // Korrekt: a) => Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Information Security Management?",
        answers: [
          "Sicherstellung der sicheren Aufbewahrung der für die Abwicklung von Geschäften relevanten Informationen.",
          "Sicherstellung in der effektiven, effizienten und bequemen Nutzung von Wissen innerhalb der Organisation.",
          "Herstellung und Verstärkung der Verbindungen zwischen Organisation und Stakeholdern.",
          "Sicherstellung der wertschöpfenden Zusammenarbeit mit relevanten Zulieferern."
        ],
        // Richtig: Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Wissensmanagement?",
        answers: [
          "Sicherstellung der sicheren Aufbewahrung der für die Abwicklung von Geschäften relevanten Informationen.",
          "Sicherstellung in der effektiven, effizienten und bequemen Nutzung von Wissen innerhalb der Organisation.",
          "Herstellung und Verstärkung der Verbindungen zwischen Organisation und Stakeholdern.",
          "Sicherstellung der wertschöpfenden Zusammenarbeit mit relevanten Zulieferern."
        ],
        // Richtig: Index [1]
        correct: [1]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Beziehungsmanagement?",
        answers: [
          "Sicherstellung der sicheren Aufbewahrung der für die Abwicklung von Geschäften relevanten Informationen.",
          "Sicherstellung in der effektiven, effizienten und bequemen Nutzung von Wissen innerhalb der Organisation.",
          "Herstellung und Verstärkung der Verbindungen zwischen Organisation und Stakeholdern.",
          "Sicherstellung der wertschöpfenden Zusammenarbeit mit relevanten Zulieferern."
        ],
        // Richtig: Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck verfolgt das Supplier Management?",
        answers: [
          "Sicherstellung der sicheren Aufbewahrung der für die Abwicklung von Geschäften relevanten Informationen.",
          "Sicherstellung in der effektiven, effizienten und bequemen Nutzung von Wissen innerhalb der Organisation.",
          "Herstellung und Verstärkung der Verbindungen zwischen Organisation und Stakeholdern.",
          "Sicherstellung der wertschöpfenden Zusammenarbeit mit relevanten Zulieferern und Lieferung der definierten Dinge."
        ],
        // Richtig: Index [3]
        correct: [3]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welchen Zweck hat IT-Governance?",
        answers: [
          "Abstimmung der IT- und Business-Strategie aufeinander.",
          "Ausrichtung der Unternehmens-IT auf Unternehmensstrategie.",
          "Optimierung von Nutzen, Kosten und Wissensmanagement der Unternehmens-IT.",
          "Verringerung der genutzten Systeme und Tools in der IT-Landschaft."
        ],
        // Korrekt: a), b), c) → Indizes [0, 1, 2]
        correct: [0, 1, 2]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zur SWK (Service-Wertschöpfungskette) stimmen?",
        answers: [
          "Die Schritte in der SWK sollen allesamt einen Mehrwert für den Kunden generieren.",
          "Die Schritte können in beliebiger Reihenfolge unternommen werden.",
          "Die 4 Dimensionen müssen bei Einhaltung aller Schritte nicht vollständig berücksichtigt werden.",
          "Die Durchführung aller Schritte lässt sich auch als Wertstrom bezeichnen."
        ],
        // Korrekt: a), b) → Indizes [0, 1]
        correct: [0, 1]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Wie erreichen wir einen hohen Grad an Engagement mit den Stakeholdern?",
        answers: [
          "Mithilfe eines hohen Grads an Kommunikation.",
          "Mithilfe transparenter und wertschaffender Zusammenarbeit.",
          "Dank klarem Verständnis der Stakeholderwünsche und -bedürfnisse.",
          "Dank Nutzung der in ITIL empfohlenen Kommunikationswege."
        ],
        // Korrekt: a), c) → Indizes [0, 2]
        correct: [0, 2]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu KPIs stimmen?",
        answers: [
          "KPIs legen die Bereiche fest, auf die sich für den Erfolg konzentriert werden muss.",
          "KPIs ermöglichen die Messung des Fortschritts eines angestrebten Ziels.",
          "KPIs können unabsichtlich unerwünschtes Verhalten fördern.",
          "KPIs sollten nicht automatisiert werden."
        ],
        // Korrekt: b) → Index [1]
        correct: [1]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Ordne die Begriffe bottleneck und constraint zu!",
        answers: [
          "Ein constraint begrenzt das Verbesserungspotenzial der gesamten Wertschöpfungskette.",
          "Ein bottleneck kann in Mehrzahl auftreten.",
          "Ein constraint kann sich bei Verbesserung der Leistung / des Ergebnisses verschieben.",
          "Ein constraint, in seiner Leistung / seinem Ergebnis zu verbessern, sollte mit Priorität behandelt werden."
        ],
        // Alle Aussagen sind korrekt (a), c), d) = constraint; b) = bottleneck) → Indizes [0, 1, 2, 3]
        correct: [0, 1, 2, 3]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Was stellt das Service-Wertschöpfungs-System dar?",
        answers: [
          "Zusammenhang von Disziplinen, die einen Service auf Basis von Kundenanforderungen wertvoll gestalten.",
          "Zusammenspiel von Nachfrage und Wert.",
          "Zusammenhang von Grundprinzipien, Dimensionen und Softwareentwicklung.",
          "Die Service-Wertschöpfungskette mit ihren Schritten, gestützt durch weitere Disziplinen."
        ],
        // Korrekt: a), d) => Indizes [0, 3]
        correct: [0, 3]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche der folgenden Punkte benennen ein ITIL-Grundprinzip?",
        answers: [
          "Bereitstellung und Support.",
          "Optimieren und automatisieren.",
          "Breites Wissen und Spezialisierung.",
          "Dort beginnen, wo man steht.",
          "Einfachheit und Sicherheit."
        ],
        // Korrekt: b), d) => Indizes [1, 3]
        correct: [1, 3]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche der folgenden Aussagen zum Prinzip der Wertorientierung ist falsch?",
        answers: [
          "Ein Wert ist ein wahrnehmbarer Vorteil, auch wenn dieser nicht in Geld messbar ist.",
          "Wertorientierung in ITIL umfasst Werte bei allen Stakeholdern, nicht nur dem Unternehmen.",
          "Das Grundprinzip der Wertorientierung soll im gesamten SWS beachtet werden.",
          "Die Wertorientierung besagt, dass Tätigkeiten ohne finanziell messbaren Nutzen zu unterlassen sind."
        ],
        // Korrekt (falsch) => d) => Index [3]
        correct: [3]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Die Abkürzung ITIL bedeutet …?",
        answers: [
          "Information Technology Infrastructure Library",
          "Implementation Technology Infrastructure Library",
          "Information Tools & Integration Library",
          "International Technology Infrastructure Lifecycle"
        ],
        // Korrekt: a) => Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu ITIL sind richtig?",
        answers: [
          "Die Begriffe ITIL und ITSM sind synonym verwendbar.",
          "ITIL wurde in den 1980er Jahren entwickelt und immer wieder überarbeitet (aktuell: 4. Version).",
          "ITIL wurde für den IT-Bereich entwickelt, wird mittlerweile aber auch in anderen Bereichen eingesetzt.",
          "Firmen können keine ITIL-Zertifizierungen erhalten.",
          "ITIL findet nur in wenigen Unternehmen als Ersatz der ISO 9000er Serie Anwendung.",
          "ITIL stellt ein Framework für das IT Service Management dar."
        ],
        // Korrekt: b), c), f) => Indizes [1, 2, 5]
        correct: [1, 2, 5]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Dimension gehört nicht zu den 4 Dimensionen?",
        answers: [
          "Partner & Lieferanten.",
          "Wertströme & Prozesse.",
          "Umwelt & Soziales.",
          "Informationen & Technologien.",
          "Organisationen & Menschen."
        ],
        // Korrekt: c) => Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "ITIL",
        question: "Welche Aussagen zu den 4 Dimensionen sind richtig?",
        answers: [
          "Externe Faktoren wirken von außen auf das Service Value System und seine 4 Dimensionen ein.",
          "Externe Faktoren können nicht von Organisationen gesteuert werden.",
          "Externe Faktoren können von der ITIL Foundation gesteuert werden.",
          "Die 4 Dimensionen sind in jeder Aktivität im ITSM zu berücksichtigen.",
          "Interne Faktoren können von der Organisation beeinflusst und gesteuert werden."
        ],
        // Korrekt: a), d), e) => Indizes [0, 3, 4]
        correct: [0, 3, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement", // Oder "Projektmanagement" – je nachdem
        question: "Bei welchen Normen handelt es sich um IT-spezifische Normen?",
        answers: [
          "ISO/IEC 27001. (Sicherheit)",
          "ISO/IEC 20000. (Systemadministration)",
          "ISO/IEC 25010. (Softwareentwicklung)",
          "ISO/IEC 9001. (Qualitätsmanagement)",
          "ISO/IEC 27013. (Service Management)"
        ],
        // Im Screenshot sind a), c), e) als richtig markiert → Indizes [0, 2, 4]
        correct: [0, 2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement", // Oder "Qualitätsmanagement" – je nachdem
        question: "Warum wird eine SWOT-Analyse angefertigt?",
        answers: [
          "Aufzeigen von Stärken und Chancen eines Unternehmens.",
          "Vermeidung von Fehlinterpretation durch Objektivität.",
          "Sicherstellung vollständiger und genauer Informationen und Daten.",
          "Aufzeigen von möglichen Risiken und das Unternehmen beeinträchtigenden Schwächen."
        ],
        // Im Screenshot sind a), d) als richtig markiert → Indizes [0, 3]
        correct: [0, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Arten von Audits in der ISO 9001 gibt es?",
        answers: [
          "Produktaudit.",
          "Personenaudit.",
          "Prozessaudit.",
          "Systemaudit.",
          "Rechtsaudit."
        ],
        // Korrekt: a), c), d) => Indizes [0, 2, 3]
        correct: [0, 2, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Aussagen zu Audits sind richtig?",
        answers: [
          "Interne Audits können von nicht-zertifizierten Mitarbeitern durchgeführt werden.",
          "Externe Audits haben immer das Ziel, die ISO-9001-Zertifizierung zu erneuern.",
          "Audits im Qualitätsmanagement sind branchenübergreifend.",
          "Folgeaudits sind grundsätzlich durchzuführen, bei Bedarf auch durch interne Mitarbeiter.",
          "Externe Auditoren müssen unabhängig und nach der ISO 9001 zertifiziert sein."
        ],
        // Korrekt: a), c), e) => Indizes [0, 2, 4]
        correct: [0, 2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Bei welcher Dokumentenart handelt es sich nicht um eine Nachweisdokumentation?",
        answers: [
          "Schulungsnachweis.",
          "Testprotokoll.",
          "QM-Handbuch.",
          "Änderungsdokumentation.",
          "Konfigurationsdokumentation."
        ],
        // Korrekt: c) => Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Maßnahmen reduzieren den Aufwand und können damit die Akzeptanz von Dokumentation erhöhen?",
        answers: [
          "Nutzung von Templates.",
          "Prozessautomatisierung.",
          "Schulung der Mitarbeiter.",
          "Zentralisierung der Dokumentenverwaltung."
        ],
        // Korrekt: a), b), d) => Indizes [0, 1, 3]
        correct: [0, 1, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Ordne die Begriffe Beschwerde und Reklamation richtig zu!",
        answers: [
          "Beschwerde: Allgemeines Feedback zu Produkt/Dienstleistung ohne rechtliche Folgen. Reklamation: Einwand wegen Sachmangels mit möglichen rechtlichen Folgen.",
          "Beschwerde: Einwand wegen Sachmangels mit rechtlichen Folgen. Reklamation: Allgemeines Feedback ohne rechtliche Folgen.",
          "Beschwerde: Allgemeines Feedback ohne rechtliche Folgen. Reklamation: Allgemeines Feedback ohne rechtliche Folgen.",
          "Beschwerde: Einwand wegen Sachmangels. Reklamation: Einwand wegen Sachmangels."
        ],
        // Korrekt: a) => Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Chancen ergeben sich aus Beschwerden?",
        answers: [
          "Chance zur Verbesserung und Optimierung von Produkt & Dienstleistung.",
          "Verbesserung der Kundenbeziehung.",
          "Vermeidung von Missverständnissen.",
          "Möglichkeit zur Verbesserung des Risikomanagements.",
          "Förderung der Akzeptanz anderer Lösungen."
        ],
        // Laut Screenshot: a), b), d) => Indizes [0, 1, 3]
        correct: [0, 1, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Wobei unterstützen systematische Fragen?",
        answers: [
          "Anregen der Selbstreflexion.",
          "Provokation neuer Sichtweisen.",
          "Lösen von Denkblockaden.",
          "Entwicklung eigener Lösungen."
        ],
        // Laut Screenshot: a), c), d) => Indizes [0, 2, 3]
        correct: [0, 2, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Bedeutungen schreibt die ISO 9001 dem Grundsatz Einbindung von Personen zu?",
        answers: [
          "Förderung von Vertrauen auf eigene Fähigkeiten.",
          "Förderung positiver Unternehmenskultur.",
          "Förderung des Vertrauens zwischen Mitarbeiter und Führungskraft.",
          "Vermeidung von Missverständnissen und Fehlinterpretationen.",
          "Sicherstellung zuverlässiger Lösungskompetenzen jedes einzelnen Mitarbeiters."
        ],
        // Laut Screenshot: b), c) => Indizes [1, 2]
        correct: [1, 2]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Wie viele Grundsätze des Qualitätsmanagements gibt es nach ISO 9001?",
        answers: [
          "5",
          "6",
          "7",
          "8"
        ],
        // Korrekt: c) => Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Aussagen zur Qualität sind falsch?",
        answers: [
          "Qualität ist individuell definierbar.",
          "Qualität ist über die Marke identifizierbar.",
          "Qualität ist über den Preis identifizierbar.",
          "Qualität setzt sich aus mehreren Merkmalen zusammen."
        ],
        // Laut Screenshot: b) und c) sind als „falsch“ markiert => Indizes [1, 2]
        correct: [1, 2]
      },
      {
        category: "KomITIL",
        subcategory: "Qualitätsmanagement",
        question: "Welche Funktionen hat das Qualitätsmanagement in einem Unternehmen?",
        answers: [
          "Sicherung der Erfüllung definierter Anforderungen an Produkt / Dienstleistung.",
          "Sammeln des Kundenfeedbacks zur Verbesserung von Produkt / Dienstleistung.",
          "Sicherstellung der Konformität von Produkt / Dienstleistung nach QM-Normen.",
          "Dokumentation und Entwickeln von Optimierungspotenzialen bei Prozessen & Abläufen."
        ],
        // Im Screenshot sind a), b), c) und d) markiert => alle richtig => Indizes [0, 1, 2, 3]
        correct: [0, 1, 2, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Wann wurde das Scrum Framework entwickelt?",
        answers: [
          "1990er.",
          "2001.",
          "2003.",
          "2000er."
        ],
        // Korrekt: a) → Index [0]
        correct: [0]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Welche Aufgaben sind nicht die der Developer?",
        answers: [
          "Pflege des Product Backlog.",
          "Mitbestimmung bei der Auswahl von Aufgaben aus dem Product Backlog für den aktuellen Sprint.",
          "Teilnahme am Daily Scrum Event.",
          "Coaching der Organisation zum Scrum Framework.",
          "Priorisierung der Aufgaben im Sprint Backlog."
        ],
        // Korrekt: a), d) → Indizes [0, 3]
        correct: [0, 3]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Welches Event entspricht nicht dem Scrum Framework?",
        answers: [
          "Sprint Planning.",
          "Sprint Retrospective.",
          "Product Backlog Refinement.",
          "Daily Scrum.",
          "Sprint Review."
        ],
        // Korrekt: c) → Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Was sind die zeitlichen Richtlinien für ein Daily Scrum?",
        answers: [
          "1x wöchentlich 30 Minuten.",
          "1x täglich mindestens 15 Minuten.",
          "1x täglich maximal 15 Minuten.",
          "1x täglich genau 15 Minuten."
        ],
        // Korrekt: c) → Index [2]
        correct: [2]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Welche Rollen hat der Projektmanager / -leiter im Teambildungsmodell nach Bruce Tuckman?",
        answers: [
          "Gastgeber.",
          "Moderator.",
          "Schlichter.",
          "Motivator.",
          "Berater."
        ],
        // Korrekt: a), b), e) => Indizes [0, 1, 4]
        correct: [0, 1, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Welche Ebenen der Kommunikation gibt es nach Schulz von Thun?",
        answers: [
          "Sachebene.",
          "Beziehungsebene.",
          "Aufforderungsebene.",
          "Selbstoffenbarungsebene.",
          "Appellebene."
        ],
        // Korrekt: a), b), d), e) => Indizes [0, 1, 3, 4]
        correct: [0, 1, 3, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Wie lassen sich Missverständnisse zuverlässig vermeiden?",
        answers: [
          "Indem sich Sender und Empfänger erstmal kennenlernen.",
          "Indem der Sender möglichst immer auf der Sachebene kommuniziert.",
          "Der Empfänger sollte das 4-Seiten-Modell kennen.",
          "Sender und Empfänger müssen das 4-Seiten-Modell kennen.",
          "Es gibt keine Zauberformel zum Vermeiden von Missverständnissen."
        ],
        // Korrekt: e) => Index [4]
        correct: [4]
      },
      {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Der kritische Pfad zeigt Arbeitspakete...?",
          answers: [
            "… mit einem besonders hohen Kostenrisiko.",
            "… mit keinem Gesamtpuffer.",
            "… mit keinem Freien Puffer.",
            "… deren Verzögerung zu einer Verzögerung des nächsten Arbeitspaketes führt.",
            "… deren Verzögerung zu einer Verzögerung des Gesamtprojektes führen kann."
          ],
          // Korrekt: b), c), e) => Indizes [1, 2, 4]
          correct: [1, 2, 4]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Wie viele Phasen hat das Teambildungsmodell?",
          answers: [
            "3",
            "4",
            "5",
            "6"
          ],
          // Korrekt: c) => Index [2]
          correct: [2]
        },
      {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Welche Aussagen zur Earned-Value-Analyse sind falsch?",
          answers: [
            "Die Earned-Value-Analyse stellt einen Teil des Projektcontrollings dar.",
            "Die Earned-Value-Analyse stellt den Status quo des Projektfortschritts den Kosten gegenüber.",
            "Die Prognosen der Earned-Value-Analyse beziehen sich auch auf den Projekt-Endtermin.",
            "Die Analyse zeigt den zukünftigen Verlauf des Earned Value voraus."
          ],
          // Laut Screenshot ist nur d) als falsch markiert → Index [3]
          correct: [3]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Welche Aussagen zum Gantt-Chart stimmen?",
          answers: [
            "Pufferzeiten sind sofort erkennbar.",
            "Meilensteine können eingetragen werden.",
            "Es stellt Anfangs- und Enddatum eines Projektes dar.",
            "Bei komplexen Projekten ist die Abbildung aller Projekttätigkeiten obligatorisch."
          ],
          // b), c) als korrekt markiert → Indizes [1, 2]
          correct: [1, 2]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Ordne die richtige Aussage dem Netzplan und Gantt-Chart zu!",
          answers: [
            "Gantt-Chart: Ermöglicht die Planung von Meilensteinen.",
            "Gantt-Chart: Zeigt den kritischen Pfad an.",
            "Netzplan: Ermöglicht die Planung von Meilensteinen.",
            "Netzplan: Zeigt den kritischen Pfad an."
          ],
          // Korrekte Zuordnung: Gantt-Chart → Meilensteine (Index 0), Netzplan → kritischer Pfad (Index 3)
          correct: [0, 3]
        },
      {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Worin unterscheiden sich Entscheidungsmatrix und Nutzwertanalyse?",
          answers: [
            "Die Entscheidungsmatrix führt zu objektiveren Entscheidungen.",
            "Die Entscheidungsmatrix gewichtet die gewählten Kriterien unterschiedlich.",
            "Die Entscheidungsmatrix lässt eine Gewichtung der Kriterien nicht zu.",
            "Die Entscheidungsmatrix ist ein essentieller Teil der Projektplanung."
          ],
          // Korrekt: c) => Index [2]
          correct: [2]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Wann findet das Kick-Off-Meeting statt?",
          answers: [
            "Zu Beginn der Planungsphase.",
            "Zum Ende der Planungsphase.",
            "Vor jedem Sprint.",
            "Vor Beginn der Umsetzungsphase."
          ],
          // Korrekt: b), d) => Indizes [1, 3]
          correct: [1, 3]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Was ermittelt der Earned Value / Fortschrittswert?",
          answers: [
            "Den bisher im Projekt erzielten Gewinn.",
            "Die bisher im Projekt gezahlten Mitarbeiterlöhne und -gehälter.",
            "Die Kosten, die für die bisher im Projekt geleistete Arbeit geplant war.",
            "Den Wert des im Projekt zu erstellenden Produktes."
          ],
          // Korrekt: c) => Index [2]
          correct: [2]
        },
      {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Was sind die Schritte zum Anfertigen einer Stakeholderanalyse?",
          answers: [
            "Identifizieren.",
            "Visualisieren.",
            "Priorisieren.",
            "Verstehen."
          ],
          // Korrekt: a), c), d) → Indizes [0, 2, 3]
          correct: [0, 2, 3]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Auf welche Bereiche eines Projektes können sich Risiken auswirken?",
          answers: [
            "Quantität.",
            "Kosten.",
            "Umwelt.",
            "Zeit.",
            "Umfeld.",
            "Qualität."
          ],
          // Korrekt: b), d), f) → Indizes [1, 3, 5]
          correct: [1, 3, 5]
        },
      {
      category: "KomITIL",
      subcategory: "Projektmanagement",
      question: "Wie wird der PDCA-Cycle noch genannt?",
      answers: [
        "Plankreis.",
        "Shewhart-Zyklus.",
        "Deming-Zyklus.",
        "Deming-Kreis.",
        "Shewhart-Kreis."
      ],
      // Korrekt: b), d) => Indizes [1, 3]
      correct: [1, 3]
    },
    {
      category: "KomITIL",
      subcategory: "Projektmanagement",
      question: "Was beschreibt am besten, wofür das C im PDCA-Cycle steht?",
      answers: [
        "Korrektur von Fehlern mit dem Ziel der Wiederherstellung des Normalbetriebs.",
        "Analyse der Prozessleistung und Zielerbringung.",
        "Checken, ob alle Aufgaben erledigt wurden.",
        "Erfassung des lessons learned und Best Practices."
      ],
      // Korrekt: b) => Index [1]
      correct: [1]
    },
    {
      category: "KomITIL",
      subcategory: "Projektmanagement",
      question: "Welche Attribute hat ein nach der S-M-A-R-T-Methodik ausformuliertes Ziel?",
      answers: [
        "Skalierbar, messbar, attraktiv, redundant, terminiert.",
        "Skalierbar, messbar, attraktiv, realistisch, terminiert.",
        "Spezifisch, messbar, agil, realistisch, terminiert.",
        "Spezifisch, messbar, attraktiv, realistisch, temporär.",
        "Spezifisch, messbar, attraktiv, realistisch, terminiert."
      ],
      // Korrekt: e) => Index [4]
      correct: [4]
    },
    {
      category: "KomITIL",
      subcategory: "Projektmanagement",
      question: "Welche Bereiche sind für Unternehmen die wichtigsten, für die sich S-M-A-R-Te Ziele entwickeln lassen?",
      answers: [
        "Produktanforderungen.",
        "Marktanforderungen.",
        "Kundenanforderungen.",
        "Prozesse & Abläufe.",
        "Recruitingansatz."
      ],
      // Korrekt: a), b), c), d) => Indizes [0, 1, 2, 3]
      correct: [0, 1, 2, 3]
    },
    {
      category: "KomITIL",
      subcategory: "Projektmanagement",
      question: "Welche Aussagen sind richtig?",
      answers: [
        "Das Lastenheft beantwortet die Frage, was geliefert wird.",
        "Das Lastenheft wird vom Auftragnehmer erstellt.",
        "Das Pflichtenheft beantwortet die Frage, warum etwas geliefert wird.",
        "Das Pflichtenheft wird von dem Auftragnehmer erstellt.",
        "Lasten- und Pflichtenheft sind rechtsverbindlich."
      ],
      // Korrekt: a), d) => Indizes [0, 3]
      correct: [0, 3]
    },
      {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Für welche Projekte / Produkte eignet sich das V-Modell besonders gut?",
          answers: [
            "Projekte / Produkte, die schnell wechselnden Marktbedingungen unterliegen.",
            "Komplexe Projekte / Produkte, die über einen Zeitraum von mind. 2 Jahren entwickelt werden.",
            "Projekte / Produkte, die besonders hohen Qualitätsanforderungen unterliegen.",
            "Projekte / Produkte, für die ein hoher Grad an Dokumentation wichtig ist."
          ],
          // Korrekt: c), d) → Indizes 2, 3
          correct: [2, 3]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Welche Aussagen sind richtig?",
          answers: [
            "Klassisches Projektmanagement ist stärker dokumenten- und plangetrieben als agiles.",
            "Agiles Projektmanagement findet in Phasen statt, die nach Freigabe final abgeschlossen sind.",
            "Agiles Projektmanagement ist inkrementell und begrüßt Veränderungen.",
            "Klassisches Projektmanagement forciert den Outcome (Mehrwert), während agile Methodiken den Output (Ergebnis) in den Vordergrund rücken."
          ],
          // Korrekt: a), c) → Indizes 0, 2
          correct: [0, 2]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Was ist in der Projektplanung zu berücksichtigen?",
          answers: [
            "Verfügbare Ressourcen.",
            "Umfang des Projektziels.",
            "Verfügbares Projektbudget.",
            "Ausfallzeiten.",
            "Definierte Verantwortlichkeiten."
          ],
          // Korrekt: a), b), c), e) → Indizes 0, 1, 2, 4
          correct: [0, 1, 2, 4]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "Was zeigt der Projektstrukturplan?",
          answers: [
            "Ziel des Projektes.",
            "Verantwortlichkeiten innerhalb des Projektteams.",
            "Verfügbares Projektbudget.",
            "Roadmap und Meilensteine.",
            "Einzelne Arbeitspakete."
          ],
          // Korrekt: b), e) → Indizes 1, 4
          correct: [1, 4]
        },
        {
          category: "KomITIL",
          subcategory: "Projektmanagement",
          question: "In welchem Dokument werden die Qualitätserwartungen ausführlich beschrieben?",
          answers: [
            "Projektstrukturplan.",
            "Arbeitspaketbeschreibung.",
            "Endproduktbeschreibung.",
            "Projeksteckbrief."
          ],
          // Korrekt: c) → Index 2
          correct: [2]
        },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Welche Merkmale treffen auf ein Projekt zu?",
        answers: [
          "Zeitlicher Rahmen sowie personelle und finanzielle Mittel sind unbestimmt.",
          "Projekte sind in sich geschlossene Vorhaben mit eigenem Ergebnis.",
          "Für jedes Projekt ist eine präzise Zielvorgabe erforderlich.",
          "Ein Projekt ist in der Gesamtheit der Bedingungen einmalig.",
          "Ein Projekt ist einzigartig und temporär befristet."
        ],
        correct: [1, 3, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "IT-Projektmanagement ist die Anwendung von…",
        answers: [
          "Wissen",
          "Techniken",
          "Werkzeugen",
          "Softwareentwicklung",
          "Fähigkeiten"
        ],
        correct: [0, 1, 2, 4]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Das magische Dreieck beschreibt Folgendes:",
        answers: [
          "Zeit, Qualität und Ressourcen bestimmen den Umfang / Scope des Projektes.",
          "Bei Änderung eines Parameters muss mindestens ein weiterer angepasst werden.",
          "Die Ressourcen bestimmen überproportional den Erfolg eines Projektes.",
          "Zeit, Ressourcen und Umfang bestimmen maßgeblich die Qualität des Projektergebnisses."
        ],
        correct: [1]
      },
      {
        category: "KomITIL",
        subcategory: "Projektmanagement",
        question: "Welche Rollen gibt es im klassischen Projektmanagement?",
        answers: [
          "Product Owner",
          "Projektleiter",
          "Projektmanager",
          "Developer",
          "Projektdesigner"
        ],
        correct: [1, 2]
      }
    ];
    