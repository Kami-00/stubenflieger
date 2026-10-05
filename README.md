# Stubenflieger

Ein 3D-Webspiel mit Three.js und Cannon ES, veröffentlicht über Cloudflare Workers Static Assets.

## Spielen

- iPhone: In Safari öffnen, Neigungssteuerung aktivieren und die Sensorfreigabe bestätigen. Beim Start wird die aktuelle Haltung zur neutralen Position. Seitlich neigen lenkt; vor/zurück neigen verändert den Steigflug. Bei Bedarf mit „Kalibrieren“ neu zentrieren.
- Start: Die gelbe Schleuderfläche gedrückt halten oder nach unten ziehen und loslassen. Seitlich ziehen ändert die Abschussrichtung.
- Touch: Während des Flugs den Steuerkreis ziehen. Oben bedeutet steigen, unten sinken.
- Tastatur: Leertaste halten/loslassen zum Start, WASD oder Pfeile zum Fliegen, Escape für Pause, R für Neustart.
- Türkisfarbene Wirbel geben Höhe und Geschwindigkeit. Holzklötze reagieren physikalisch auf Zusammenstöße. Wände, Möbel und Boden beenden den Flug.
- Ziel: 18 Klötze umwerfen. Danach kann bis zum Absturz weitergeflogen werden.

## Entwicklung

`npm ci` installiert die gesperrten Abhängigkeiten.

`npm run build` bündelt das Spiel nach `dist/game.js`.

`npm run dev` startet Wrangler lokal. Sensoren auf einem echten iPhone benötigen HTTPS.

`npm test` prüft Schleuderstärke, Kalibrierung, Aufwind und den Einsturz mit anschließendem Reset.

`npm run deploy` baut und veröffentlicht auf dem in `wrangler.jsonc` konfigurierten Cloudflare-Konto.

## Prüfung

Start, Kollision/Einsturz, Ergebnis, Neustart und Pause wurden im Browser geprüft. Hoch- und Querformat wurden mit iPhone-Abmessungen visuell geprüft. Die tatsächliche Sensorreaktion und Bildrate müssen auf dem physischen iPhone geprüft werden.

## Domain, Bestenliste und manuelle Drehung

- Live: https://stubenflieger.8e4.de.
- Menü → „Ansicht um 90° drehen“ rotiert die komplette Darstellung. Die Wahl wird auf diesem Gerät gespeichert; Touch-Koordinaten und Sensorachsen werden mitgedreht. Die iPhone-Rotationssperre schaltet der Spieler selbst im Kontrollzentrum ein.
- Nach einem Flug lässt sich das Ergebnis mit einem öffentlichen Pilotnamen speichern. Die Top 20 werden aus Cloudflare D1 geladen. Punkte: 100 pro Klotz plus 10 pro Flugsekunde (auf Zehntelsekunden abgerundet).
- Neue Datenbanken mit `npx wrangler d1 migrations apply stubenflieger-leaderboard --remote` initialisieren. Für lokale Tests `--local` verwenden.
- Die API berechnet Punkte, prüft Werte und Laufzeiten und verhindert doppelte Einträge desselben Flugs. Die eigentliche Spielsimulation läuft im Browser; dies ist keine manipulationssichere Turnierwertung.
- Testdaten wurden nur in der lokalen Entwicklungsdatenbank angelegt.
