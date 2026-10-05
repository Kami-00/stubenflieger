# Stubenflieger

Ein 3D-Webspiel mit acht wachsenden Leveln, Flugsternen und verbundenen Räumen, veröffentlicht über Cloudflare Workers Static Assets.

Die aktuelle Spielbasis stammt aus der am 29. September 2026 veröffentlichten Fassung. Sie ist vollständig in diesem Repository enthalten: `src/levels.js` definiert die Level, `src/physics.js` die Kollisionen und die Höhenbegrenzung, `src/scene.js` die Darstellung. Zehn Spieleinheiten entsprechen 2,8 Metern Raumhöhe. `src/vendor.js` enthält das ursprüngliche Three.js-/Cannon-Bundle samt Lizenzhinweisen. Änderungen werden hier gepflegt; `npm run build` erstellt daraus `dist/game.js`.

## Spielen

- iPhone: In Safari öffnen, Neigungssteuerung aktivieren und die Sensorfreigabe bestätigen. Beim Start wird die aktuelle Haltung zur neutralen Position. Seitlich neigen lenkt; vor/zurück neigen verändert den Steigflug. Bei Bedarf mit „Kalibrieren“ neu zentrieren.
- Start: Die gelbe Schleuderfläche gedrückt halten oder nach unten ziehen und loslassen. Seitlich ziehen ändert die Abschussrichtung.
- Touch: Während des Flugs den Steuerkreis ziehen. Oben bedeutet steigen, unten sinken.
- Tastatur: Leertaste halten und loslassen zum Start; WASD oder Pfeile zum Fliegen. Alle Tasten stehen unten und im Flugmenü.
- Türkisfarbene Wirbel geben Höhe und Geschwindigkeit. Holzklötze reagieren physikalisch auf Zusammenstöße. Wände, Möbel und Boden beenden den Flug.
- Ziel: Alle Flugsterne sammeln und das Klotz-Ziel des jeweiligen Levels erreichen. Danach führt „Nächstes Level“ in weitere Räume. Im Menü lassen sich alle acht Level auswählen.
- Die Raumhöhe beträgt 2,8 m. Eine Warnung zeigt die nahe Decke; Kollision und Höhenbegrenzung verhindern Flüge darüber. Die Höhenanzeige rechnet Spieleinheiten in Meter um.

## Vollständig mit Tastatur bedienen

Mit `Tab` die Spielfläche oder eine Schaltfläche auswählen; `Shift+Tab` geht zurück. Ein gelber Rahmen zeigt den Fokus. Die Spieltasten gelten auf der Spielfläche. Auf einer ausgewählten Schaltfläche lösen `Enter` oder `Leertaste` deren Aktion aus.

| Taste | Aktion |
| --- | --- |
| Leertaste halten, dann loslassen | Vor dem Start Schleuderstärke aufbauen und starten |
| A / D oder Pfeil links / rechts | Vor dem Start die Abschussrichtung ändern |
| Enter | Schnellstart |
| A / D oder Pfeil links / rechts | Im Flug nach links / rechts lenken |
| W / S oder Pfeil hoch / runter | Im Flug steigen / sinken |
| Esc oder P | Flug pausieren / weiterfliegen |
| R | Neuen Flug vorbereiten |
| M | Menü öffnen |
| B | Bestenliste öffnen |
| T | Ton ein- / ausschalten |

In jedem Dialog lassen sich alle Schaltflächen mit `Tab` und `Shift+Tab` erreichen und mit `Enter` oder `Leertaste` bedienen. Im Ergebnisdialog ist auch das Pilotnamenfeld erreichbar; „Eintragen“ oder Enter im Namensfeld speichert das Ergebnis. Während der Eingabe lösen Buchstaben und Leerzeichen keine Spielaktionen aus. Pause und Ergebnis bieten jeweils „Menü öffnen“ für den Zugang zu Drehung und Bestenliste.

Level wählen: `M` öffnet das Menü, `Tab` erreicht „Level wählen“. Mit den Pfeiltasten oder `Pos1` / `Ende` wird ein Level ausgewählt. Mit `Tab` zu „Gewähltes Level spielen“ wechseln und mit `Enter` bestätigen. Erst dann wird das Level geladen und die Schleuder fokussiert. Nach einem erfolgreichen Flug ist „Nächstes Level“ direkt mit `Enter` erreichbar.

`Tab` pausiert einen laufenden Flug, bevor du die Bedienelemente auswählst. Beim Wechsel in ein Menü, in einen anderen Tab oder in ein anderes Fenster werden gehaltene Tasten und ein gespannter Start abgebrochen. Zurückkehren allein startet keinen Flug.

`Esc` schließt Menü und Bestenliste, setzt einen pausierten Flug fort und bereitet im Ergebnisdialog einen neuen Flug vor. Die Platzierungsliste ist selbst mit `Tab` erreichbar: Bei einer langen Liste scrollen die Pfeiltasten sowie `Bild auf` und `Bild ab`. Im Fehlerdialog lässt sich „Erneut versuchen“ per Tastatur auslösen.

## Entwicklung

`npm ci` installiert die gesperrten Abhängigkeiten.

`npm run build` bündelt das Spiel nach `dist/game.js`.

`npm run dev` startet Wrangler lokal. Sensoren auf einem echten iPhone benötigen HTTPS.

`npm test` prüft alle acht Level, Raumverbindungen, Flugsterne, die 2,8-m-Höhenbegrenzung, Physik, Punkte und Levelbindung der Bestenliste sowie Tastaturaktionen, Formularschutz und das Abbrechen gehaltener Tasten.

`npm run deploy` führt zuerst die Tests aus, baut und veröffentlicht auf dem in `wrangler.jsonc` konfigurierten Cloudflare-Konto.

## Prüfung

Die Veröffentlichung vom 29. September 2026 (`cdd8041e-89af-458a-a39f-560617804263`) ist die Ausgangsbasis für Level, Flugsterne, Höhe und Bestenliste. Die Tastaturbedienung wurde am 5. Oktober auf diese Fassung übertragen. Der zuvor importierte Einraum-Spielstand ist damit ersetzt.

Geprüft am 5. Oktober: 28 automatisierte Tests, Produktionsbuild, Wrangler-Veröffentlichungssimulation und echte lokale Worker-/D1-Integration einschließlich 156 Klötzen, 96 Sternen, Punkteberechnung und wiederholtem Speichern. Die produktive Datenbank meldete keine ausstehenden Migrationen. Im Browser wurden ausschließlich per Tastatur Level 3 und 8 ausgewählt, gestartet und pausiert. Ein echter Testflug sammelte einen Stern; Höhe und Ergebnis zeigten die korrekten Meter-/Sternwerte. Das Ergebnis wurde mit Enter nur in der lokalen Bestenliste gespeichert. Menü-/Bestenlistenrückwege blieben pausiert und es traten keine Browserfehler auf.

Das Halten, Wiederholen und Loslassen von Tasten sowie Fokus- und Sichtbarkeitsverlust sind zusätzlich durch automatisierte Regressionstests abgedeckt. Der Fehlerdialog wurde strukturell geprüft; ein WebGL-Ausfall wurde im Browser nicht künstlich ausgelöst. Die tatsächliche Sensorreaktion und Bildrate müssen auf einem physischen iPhone geprüft werden. Die zuvor dokumentierte Sichtprüfung in iPhone-Hoch- und Querformat wurde bei dieser Tastaturänderung nicht wiederholt.

## Domain, Bestenliste und manuelle Drehung

- Live: https://stubenflieger.8e4.de.
- Menü → „Ansicht um 90° drehen“ rotiert die komplette Darstellung. Die Wahl wird auf diesem Gerät gespeichert; Touch-Koordinaten und Sensorachsen werden mitgedreht. Die iPhone-Rotationssperre schaltet der Spieler selbst im Kontrollzentrum ein.
- Nach einem Flug lässt sich das Ergebnis mit einem öffentlichen Pilotnamen speichern. Die Top 20 werden aus Cloudflare D1 geladen. Punkte: 100 pro Klotz, 150 pro Flugstern und 10 pro Flugsekunde (auf Zehntelsekunden abgerundet).
- Neue Datenbanken mit `npx wrangler d1 migrations apply stubenflieger-leaderboard --remote` initialisieren. Für lokale Tests `--local` verwenden.
- Beide Migrationen bleiben erhalten: `0001_leaderboard.sql` für ursprüngliche Einträge und die am 29. September bereits veröffentlichte additive `0001_flights_v2.sql` für Sterne und Level. Keine Produktionstabellen zurücksetzen. `test/integration.mjs` prüft ausschließlich die lokale Worker-/D1-Instanz auf Port 8796.
- Die API berechnet Punkte, prüft Werte und Laufzeiten und verhindert doppelte Einträge desselben Flugs. Die eigentliche Spielsimulation läuft im Browser; dies ist keine manipulationssichere Turnierwertung.
- Testdaten wurden nur in der lokalen Entwicklungsdatenbank angelegt.
