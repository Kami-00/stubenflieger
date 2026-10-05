# Stubenflieger

Ein 3D-Webspiel mit Three.js und Cannon ES, veröffentlicht über Cloudflare Workers Static Assets.

## Spielen

- iPhone: In Safari öffnen, Neigungssteuerung aktivieren und die Sensorfreigabe bestätigen. Beim Start wird die aktuelle Haltung zur neutralen Position. Seitlich neigen lenkt; vor/zurück neigen verändert den Steigflug. Bei Bedarf mit „Kalibrieren“ neu zentrieren.
- Start: Die gelbe Schleuderfläche gedrückt halten oder nach unten ziehen und loslassen. Seitlich ziehen ändert die Abschussrichtung.
- Touch: Während des Flugs den Steuerkreis ziehen. Oben bedeutet steigen, unten sinken.
- Tastatur: Leertaste halten und loslassen zum Start; WASD oder Pfeile zum Fliegen. Alle Tasten stehen unten und im Flugmenü.
- Türkisfarbene Wirbel geben Höhe und Geschwindigkeit. Holzklötze reagieren physikalisch auf Zusammenstöße. Wände, Möbel und Boden beenden den Flug.
- Ziel: 18 Klötze umwerfen. Danach kann bis zum Absturz weitergeflogen werden.

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

`Tab` pausiert einen laufenden Flug, bevor du die Bedienelemente auswählst. Beim Wechsel in ein Menü, in einen anderen Tab oder in ein anderes Fenster werden gehaltene Tasten und ein gespannter Start abgebrochen. Zurückkehren allein startet keinen Flug.

`Esc` schließt Menü und Bestenliste, setzt einen pausierten Flug fort und bereitet im Ergebnisdialog einen neuen Flug vor. Die Platzierungsliste ist selbst mit `Tab` erreichbar: Bei einer langen Liste scrollen die Pfeiltasten sowie `Bild auf` und `Bild ab`. Im Fehlerdialog lässt sich „Erneut versuchen“ per Tastatur auslösen.

## Entwicklung

`npm ci` installiert die gesperrten Abhängigkeiten.

`npm run build` bündelt das Spiel nach `dist/game.js`.

`npm run dev` startet Wrangler lokal. Sensoren auf einem echten iPhone benötigen HTTPS.

`npm test` prüft Schleuderstärke, Kalibrierung, Aufwind, Einsturz mit anschließendem Reset sowie Tastaturaktionen, Formularschutz und das Abbrechen gehaltener Tasten.

`npm run deploy` baut und veröffentlicht auf dem in `wrangler.jsonc` konfigurierten Cloudflare-Konto.

## Prüfung

Am 5. Oktober 2026 wurden 20 automatisierte Tests und der Produktionsbuild erfolgreich ausgeführt. In einer lokalen Wrangler-Instanz mit lokaler D1-Datenbank wurden ohne Mausklick Start, Schnellstart, Pause, Tab-Pause, Menü, Ansichtsdrehung, Ton, Bestenliste, Aktualisieren und Neustart geprüft. Der Weg Pause → Menü → Bestenliste → zurück blieb korrekt pausiert. Tab und Shift+Tab hielten den Fokus im jeweiligen Dialog. Ein Pilotname mit Leerzeichen und Spieltasten wurde eingegeben und mit Enter gespeichert; der Fokus wechselte danach zur Bestenliste. Die Tastaturhilfe ließ sich mit Bild ab scrollen, und die Platzierungsliste war per Tab erreichbar. In diesen Abläufen traten keine Browserfehler auf.

Das Halten, Wiederholen und Loslassen von Tasten sowie Fokus- und Sichtbarkeitsverlust sind zusätzlich durch automatisierte Regressionstests abgedeckt. Der Fehlerdialog wurde strukturell geprüft; ein WebGL-Ausfall wurde im Browser nicht künstlich ausgelöst. Die tatsächliche Sensorreaktion und Bildrate müssen auf einem physischen iPhone geprüft werden. Die zuvor dokumentierte Sichtprüfung in iPhone-Hoch- und Querformat wurde bei dieser Tastaturänderung nicht wiederholt.

## Domain, Bestenliste und manuelle Drehung

- Live: https://stubenflieger.8e4.de.
- Menü → „Ansicht um 90° drehen“ rotiert die komplette Darstellung. Die Wahl wird auf diesem Gerät gespeichert; Touch-Koordinaten und Sensorachsen werden mitgedreht. Die iPhone-Rotationssperre schaltet der Spieler selbst im Kontrollzentrum ein.
- Nach einem Flug lässt sich das Ergebnis mit einem öffentlichen Pilotnamen speichern. Die Top 20 werden aus Cloudflare D1 geladen. Punkte: 100 pro Klotz plus 10 pro Flugsekunde (auf Zehntelsekunden abgerundet).
- Neue Datenbanken mit `npx wrangler d1 migrations apply stubenflieger-leaderboard --remote` initialisieren. Für lokale Tests `--local` verwenden.
- Die API berechnet Punkte, prüft Werte und Laufzeiten und verhindert doppelte Einträge desselben Flugs. Die eigentliche Spielsimulation läuft im Browser; dies ist keine manipulationssichere Turnierwertung.
- Testdaten wurden nur in der lokalen Entwicklungsdatenbank angelegt.
