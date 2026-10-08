# Stubenflieger

Ein 3D-Papierflieger-Spiel mit einem zusammenhängenden Haus: Keller, Erdgeschoss, Obergeschoss, Dachspitz und Garten. Die neue Fassung ersetzt die acht Level durch einzelne Haus-Runs.

## Spielablauf

- Start im Wohnzimmer. Das ganze Gebäude ist bereits eingerichtet; 22 Türen sind zunächst geschlossen.
- 96 Sterne öffnen nach und nach Türen. Sterne werden dabei nicht ausgegeben. Türschilder zeigen die erforderliche Gesamtzahl.
- Ein Run ist geschafft, sobald alle Sterne gesammelt sind. Es gibt keine Klotzpflicht.
- Der Standardflieger hat rund 43 cm Spannweite und fliegt mit 1,65 m/s. Sein Wenderadius liegt unter einem Meter; das langsame Sinken lässt Zeit für die ersten Kurven im Wohnzimmer. Die Größenprozente im Shop beziehen sich auf diese kompakte Grundform.
- Küche und Esszimmer sind direkt verbunden. Wohn- und Esszimmer besitzen Terrassentüren, dazu kommen Haustür, drei offene Seitenfenster und ein Dachfenster.
- Türkise Aufwinde führen durchs Treppenhaus und außen nach oben. Im Wirbel hält Steigen oder Sinken den Flieger zur Mitte; seitliches Lenken verlässt ihn.
- Sterne liegen auch unter Tischen und Stühlen. Tischplatten, Sitzflächen und Beine haben getrennte Kollisionsformen.
- Goldene, funkelnde Sterne sind dauerhafte Erstfunde; bereits entdeckte Sterne erscheinen silberblau. Ein Ring kennzeichnet einen Wertbonus, zwei Ringe beide Boni. Der Entdeckungszähler bleibt über Runs hinweg erhalten. Jeder Stern zählt weiterhin genau einmal für Türen und erscheint im nächsten Run wieder.
- Jeder erstmals betretene Raum bringt 250 Extrapunkte pro Run. Der Startraum zählt nicht, Teilrechtecke desselben Raums und wiederholtes Betreten ebenfalls nicht. Bereits gekaufte Türen bezahlen keinen Bonus beim Neustart.

## Privates Online-Duell

Über **Online spielen · bis zu 5 Piloten** oder `/duel` einen Raum erstellen und den Link mit bis zu vier Freunden teilen. Zwei bis fünf Piloten spielen jeder gegen jeden. Der Link enthält nur die zufällige Raumkennung; die persönlichen Zugangsschlüssel bleiben in der jeweiligen Browsersitzung. Alle bestätigen ihre Bereitschaft, anschließend startet der Gastgeber den Countdown. So kann die Gruppe auf weitere Freunde warten. Nach einer Runde können die verbundenen Teilnehmer eine Revanche wählen und gemeinsam in der Lobby erneut starten.

- Alle fliegen den Standardflieger bei 100 % mit 100 Lebenspunkten. Flugzeugformen, Größenupgrades und Boosts verändern den Mehrspielerflug nicht. Eigene Farben und gekaufte Effekte aus dem Solospiel sind vor dem Beitritt und in der Lobby auswählbar und für alle sichtbar. Ohne eigene Farbe gelten die bisherigen Spielerfarben; Lebensanzeigen und Schüsse behalten ihre feste Spielerfarbe.
- Während einer Runde bleibt das gewählte Aussehen fest; Wiederverbindung und Revanche erhalten es. Jeder Pilot kann ausschließlich sein eigenes Aussehen ändern. Die Auswahl im Duell überschreibt die Solo-Ausrüstung nicht.
- Die Startplätze liegen an vier weit getrennten Gartenpositionen und im Flur zur Haustür. Der kleinste Abstand beträgt etwa 14,57 Meter; die ersten beiden Spieler starten rund 30 Meter voneinander entfernt. Die ersten drei Flugsekunden sind ohne Hinderniskontakt möglich.
- WASD/Pfeile steuern, die Leertaste feuert. Auf Touchgeräten gibt es einen Steuerknüppel und einen Feuerknopf.
- Papiergeschosse verursachen 20 Schaden, Hindernisse 10 mit kurzer Erholung. Wände und geschlossene Türen halten Schüsse auf.
- Bei 0 Leben scheidet ein Pilot aus und schaut einem verbliebenen Flieger zu. Die Runde endet, wenn höchstens ein Flieger übrig ist. Nach drei Minuten gewinnt der Flieger mit den meisten Leben; geteilter Höchststand oder gleichzeitiges letztes K. o. ergibt ein Unentschieden.
- Geschlossen bleiben alle Türen zum Treppenhaus, Garderobe, Gäste-WC, Abstellraum, alle Kellertüren sowie Bad und Schlafzimmer. Die übrigen Türen sind offen. Offene Fenster und Außenaufwinde bleiben nutzbar; Arbeitszimmer, Kinderzimmer und Dachspitz sind darüber erreichbar.
- Kurze Verbindungsabbrüche erlauben die Rückkehr in denselben Platz. Solange noch aktive Piloten fehlen, pausiert die Runde für höchstens 20 Sekunden. Danach scheiden die fehlenden Piloten aus und die übrigen spielen weiter. Ausgeschiedene Zuschauer blockieren die Runde nicht. Verlassene Lobbyplätze werden freigegeben; bei Bedarf übernimmt ein anderer Pilot die Gastgeberrolle.

Ein SQLite-basiertes Cloudflare Durable Object verwaltet jeweils einen Raum. Positionen, Hinderniskollisionen, Schüsse, Schaden und Ergebnis werden auf dem Server berechnet. Der Browser zeichnet die Welt, glättet empfangene Zustände und sagt nur die eigene Darstellung kurz voraus. Wartende Räume verwenden WebSocket-Hibernation; die Spielsimulation läuft nur während einer aktiven Runde. Die Free-Kontingente für Laufzeit, Nachrichten, Speicher und vorgeschaltete Workers gelten weiterhin.

Die Veröffentlichung benötigt zusätzlich die in `wrangler.jsonc` deklarierte Durable-Objects-Migration. Sie ist von den bestehenden D1-Migrationen getrennt. Ein Deployment im Free-Tarif verwendet SQLite-Durable-Objects und erfordert keine Umstellung auf Workers Paid.

## Dauerhafter Shop

Alles wird einmal mit erspielten Punkten gekauft und bleibt freigeschaltet:

- **Türen:** gekaufte Türen können in jedem Run von Anfang an offen sein. Ein Schalter ermöglicht weiterhin Runs mit allen Türen geschlossen.
- **Größe:** nach dem Upgrade zwischen 55 und 150 Prozent einstellbar. Groß sinkt langsamer und gleitet weiter; klein kurvt enger und passt durch kleinere Lücken.
- **Flugzeuge:** Klassiker, Gleiter, Pfeil und Kunstflieger mit unterschiedlichen Flugeigenschaften.
- **Boosts:** Aufwind, Turbo, Sternmagnet und Luftpolster. Höchstens zwei ausrüsten, jeden einmal pro Run nutzen; der Kauf selbst wird nie verbraucht.
- **Effekte:** Minzspur, Sternenstaub und Konfettispur.
- **Farben:** Einmalig 2.000 Punkte für den Farbwähler. Danach beliebig viele kostenlose Farbwechsel mit Vorschau und Rückkehr zur ursprünglichen Papierfarbe. Gekauft wird die Funktion, keine einzelne Farbe.

Guthaben, persönlicher Rekord, Käufe und Ausrüstung liegen im Browser auf diesem Gerät. Sie werden nicht mit anderen Geräten synchronisiert; gelöschte Website-Daten löschen auch das Profil. Schreibfehler werden angezeigt, ohne einen Kauf abzuziehen oder als gespeichert auszugeben. Run-Abrechnungen sind gegen doppelte Gutschrift geschützt. Ein in diesem Tab neu geladenes Spiel rechnet den letzten Zwischenstand aus dem Sitzungsspeicher ab; es setzt den Flug nicht fort.

| Stern | Erstfund | Spätere Runs |
| --- | ---: | ---: |
| Normal | 300 | 150 |
| Unter Möbeln | 600 | 300 |
| Keller oder Treppenhaus | 600 | 300 |
| Unter Möbeln und im Keller/Treppenhaus | 900 | 450 |

Keller und Treppenhaus ergeben zusammen nur einen Ortsbonus. Dazu kommen 250 pro neu erreichtem Raum und 10 pro Flugsekunde für maximal 60 Sekunden. Der zusätzliche Erstfundbonus und die dauerhafte Sternmarkierung werden beim Aufsammeln gemeinsam gespeichert. Basis-, Raum- und Zeitpunkte werden beim Beenden oder Neustarten gutgeschrieben. Scheitert das Speichern eines Erstfunds, bleibt der Stern sammelbar. Alte Profile behalten ihr Geld, Käufe und Ausrüstung; weil bisher keine Stern-IDs gespeichert wurden, beginnt ihre Entdeckungshistorie mit diesem Update. Die Wertungsfunktion unterstützt weiterhin 100 Punkte pro Klotz; im Haus stehen derzeit keine Klotztürme.

Persönlicher Rekord und öffentliche Bestenliste verwenden die festen Werte der rechten Spalte, ohne Erstfundbonus. Die öffentliche Rangliste trennt die neue Sternwertung von historischen Einträgen. Bestehende Einträge und alte, noch offene Flugtickets bleiben erhalten.

## Steuerung

| Taste / Eingabe | Aktion |
| --- | --- |
| Leertaste halten und loslassen / gelbe Startfläche ziehen | Startstärke wählen und abheben |
| Enter auf der Spielfläche | Schnellstart |
| A/D oder links/rechts | Vor dem Start ausrichten, im Flug lenken |
| W/S oder hoch/runter | Steigen und sinken |
| 1 / 2 | Ausgerüsteten Boost aktivieren |
| Esc / P | Pausieren, fortsetzen oder Dialog schließen |
| R | Run abrechnen und neu vorbereiten |
| M / G / B / T | Menü / Shop vor oder nach dem Run / Bestenliste / Ton |
| V / Schaltfläche Außen bzw. FPV | Zwischen Verfolgerkamera und Sicht aus dem Flugzeug wechseln, auch im Mehrspieler und beim Zuschauen |
| Touch-Kreis | Ziehen zum Lenken und Steigen/Sinken |
| Neigung | Nach Sensorfreigabe seitlich lenken, vor/zurück die Höhe steuern |

Tab und Shift+Tab navigieren durch Schaltflächen. Dialoge halten den Fokus; Eingabefelder lösen keine Spielkürzel aus. Tab, Fokusverlust und versteckte Browserfenster pausieren einen laufenden Flug. Sensoren erfordern auf einem echten iPhone HTTPS und die ausdrückliche Browserfreigabe. Die Ansicht kann im Menü um jeweils 90° gedreht werden, unabhängig von der iPhone-Rotationssperre.

FPV folgt Blickrichtung, Steigen/Sinken und Schräglage des Flugzeugs. Die echte Flugzeugspitze bleibt im unteren Bildbereich sichtbar, auch mit eigener Papierfarbe und bei veränderter Größe. Beide Kameraansichten halten Abstand zu Hindernissen; Wände und Böden bleiben auch bei nahen Vorbeiflügen deckend. Die Kamera ändert keine Trefferflächen und behält ihre gewählte Ansicht beim Neuladen sowie beim Wechsel zwischen Solo und Mehrspieler.

## Aufbau

- `src/house.js`: Maßstab in Metern, Räume, Türanschläge, Öffnungen, Möbelteile, Sterne und Aufwinde.
- `src/aircraft.js`: gemeinsame sichtbare Geometrie und Kollisionsgeometrie mit geschlossener Mitte. Klassiker mit geraden Flügelenden, spitzer Pfeil, gerundeter Gleiter und rechteckiger Kunstflieger; der Shop zeigt die tatsächlichen Konturen.
- `src/physics.js`: kontinuierliche Kollisionsprüfung, gedrehte Türblätter, großzügiger Sternfang über die Flügel und den zurückgelegten Flugweg; Wände und geschlossene Türen blockieren auch den Magneten.
- `src/scene.js`: Darstellung der Hausgeometrie und Effekte. Kamerakorrekturen ändern keine Kollisionen.
- `src/house-surface-geometry.js`: gemeinsame Außenflächen der Wände, Böden und Dächer ohne doppelte Flächen an Etagen- und Wandstößen. Die ursprünglichen Haus- und Kollisionskörper bleiben erhalten.
- `src/camera.js` / `src/view-mode.js`: gemeinsame Außen-/FPV-Kamera und gespeicherte Ansicht.
- `src/cosmetics.js` / `src/aircraft-appearance.js` / `src/aircraft-effects.js`: geprüfte Farbwerte, Papierfaltung und voneinander unabhängige Flugspuren.
- `src/run.js` / `src/flight.js`: Run-Fortschritt, Räume, Boostladungen und bidirektionale Aufwindhilfe.
- `src/progression.js` / `src/shop.js`: dauerhaftes Profil und Shop.
- `src/star-rewards.js`: stabile Sternidentitäten und gemeinsame Wertung für Browser und Server.
- `src/duel-arena.js` / `src/duel-flight.js` / `src/duel-simulation.js`: feste Duell-Arena, Flugmodell und verbindliche Trefferberechnung.
- `src/duel-client.js` / `src/duel-view.js`: Einladung, Steuerung, Lebensbalken und Darstellung von bis zu fünf Fliegern.
- `src/duel-appearance.js`: Auswahl bereits freigeschalteter Farben/Effekte für den Mehrspieler.
- `worker/duel-api.mjs` / `worker/duel-room.mjs`: geschützte Räume, WebSockets, Runden und Wiederverbindung.
- `worker/index.mjs`: Haus-Bestenliste, Duell-Routen und unveränderte historische Level-API.

Die neue Spielszene verwendet die installierten Three.js- und Cannon-Abhängigkeiten. `src/vendor.js` und `src/levels.js` bleiben für die dokumentierte historische Fassung beziehungsweise deren Bestenlistenvalidierung erhalten.

## Entwicklung und Prüfung

`npm ci` installiert die festgeschriebenen Abhängigkeiten. `npm run build` erzeugt `dist/game.js` und `dist/duel.js`, `npm run dev` startet den lokalen Worker. `npm test` prüft Hausaufbau, Fortschritt, Fliegergeometrie, Türen/Fenster, Sternaufnahme, Profil, Steuerung, beide Bestenlisten-APIs sowie Duellsimulation und Raumverwaltung.

`test/integration.mjs` prüft eine echte lokale Worker-/D1-Instanz auf Port 8796. `test/house-browser.cjs` verwendet Playwright mit Edge gegen denselben lokalen Server; `NODE_PATH` kann auf eine vorhandene Playwright-Installation zeigen. Es nutzt einen isolierten Browserkontext mit Testguthaben und lehnt entfernte Server ab.

`test/duel-integration.cjs` prüft fünf echte WebSocket-Verbindungen gegen den lokalen Worker: Sitzplätze, Ablehnung eines sechsten Spielers, Zugangsschutz, Gastgeberstart, Startabstände, Schüsse, Verbindungsabbruch, Rückkehr und Ausscheiden mit Weiterlauf der Runde. `test/duel-browser.cjs` prüft standardmäßig fünf getrennte Browserkontexte; mit `DUEL_QA_PLAYERS=2` oder `3` lassen sich kleinere Gruppen prüfen. Es deckt Einladung, Neuladen, Lebensbalken, Tastatur- und Touchsteuerung sowie Ansichten bei 320/390 Pixel Breite und im Querformat ab. Beide Tests lehnen entfernte Server ab. Simulationstests prüfen Treffer gegen mehrere Flieger, gleichzeitiges K. o., Timeout und sichere Startstrecken; Servertests zusätzlich Revanche und Gastgeberwechsel. Ein duplizierter Tab wurde separat geprüft: Der ältere Tab gibt seinen Platz ohne erneuten Verbindungsversuch frei.

`test/duel-client-states.cjs` prüft mit kontrollierten Spielständen und vollständig gesperrter echter Netzwerkverbindung den Wechsel zum Zuschauen, unterbundene Eingaben nach Ausscheiden, Siegeranzeigen sowie eine Revanche mit den verbliebenen IDs p1/p3/p5.

`test/star-browser.cjs` prüft mit einem echten Tastaturflug Erstfund, Wiederholungsfund, Entdeckungszähler, Sofortbonus, Reload-Abrechnung und einen fehlgeschlagenen Speichervorgang. `test/stairwell-continuity.test.mjs` prüft geschlossene Wandübergänge und freie Auf-/Abstiege aller Fliegerformen bei maximaler Größe.

`test/scene-browser.cjs` rendert die echte Szene in einem isolierten lokalen Prüfaufbau: Alle drei Effekte müssen über tatsächlich beschattetem Rasen sichtbar bleiben und hinter einer deckenden Wand verschwinden. Bildvergleiche prüfen Gold/Silberblau und die Wertringe. Die Etagenwände reichen bis zum nächsten Stockwerk; der Flugschacht bleibt offen. Effekte behalten die Tiefenprüfung und werden nach dem Boden gezeichnet.

`test/color-shop-browser.cjs` prüft den einmaligen Kauf des Farbwählers, die gemeinsame Papierfarbe von Vorschau und Modell, kostenlose Wechsel, Profilübernahme und Speicherfehler. `test/duel-cosmetics-browser.cjs` prüft mit getrennten Browsern die freigeschaltete Auswahl, gegenseitig sichtbare Lobbyfarben, bestätigte Rundendaten, einen verlorenen Farbwechsel mit Wiederverbindung, FPV-Schalter und mobile Layouts. `test/camera-render.test.mjs` prüft Blickrichtung, Kamerakollision, Zuschauerwechsel sowie getrennte Farben und Effektpuffer aller fünf Flugzeuge.

`test/camera-effects-browser.cjs` prüft den ausgelieferten Solo-Perspektivwechsel und rendert zusätzlich fünf unabhängige Flugzeuge, das FPV-Zuschauen nach K. o. sowie eine Revanche mit den verbleibenden Spielern. Testzugriffe entstehen ausschließlich im lokalen Test-Bundle; die ausgelieferten Dateien enthalten keine Debugschnittstelle.

`test/house-surface-geometry.test.mjs` vergleicht die sichtbare Außenhaut mit den ursprünglichen Hauskörpern und prüft Flächenüberdeckungen, Tür-/Fensteröffnungen und den Treppenschacht. `test/house-surfaces-browser.cjs` vergleicht feste Blicke auf Boden-, Wand- und Dachanschlüsse und prüft ihre Stabilität bei kleinen Kamerabewegungen. Der Kameratest rendert außerdem die echte FPV-Spitze für alle vier Formen, drei Größen und vier Farbvarianten.

Geprüft für die Hausfassung: alle 22 offenen Türen in beide Richtungen, drei offene Seitenfenster, freie Sammelpositionen für alle 96 Sterne auch mit dem kostenlosen Standardflieger, Untertisch-/Stuhlflug, schmale Lücken bei unterschiedlichen Größen, schnelle Wandkontakte, Auf- und Abstieg im Treppenschacht, dauerhafte Käufe, Speicherfehler, Größenregler, zwei Boostplätze, Reload-Abrechnung und Tastaturfokus. Shopdarstellung wurde bei 320 und 390 Pixel Breite, im Querformat und am Desktop geprüft.

Diese Prüfungen ersetzen keinen vollständigen manuell geflogenen Haus-Run. Sensorverhalten und tatsächliche Bildrate auf einem physischen iPhone sind noch separat zu prüfen.

Nach der Tempokorrektur prüft `test/intro-flight.test.mjs` eine echte Flugroute bei 30, 60 und 120 FPS: Der kostenlose Standardflieger sammelt zwei Wohnzimmersterne, öffnet die Flurtür und passiert sie vollständig ohne Kollision. Dieselbe Tastenfolge wurde zusätzlich in der gebauten Browserfassung bis in den Flur gespielt (drei Sterne einschließlich Flurstern).

## Bestenliste und Veröffentlichung

Die Haus-Runs verwenden `/api/house-runs` und `/api/house-leaderboard`. Die bisherige Level-Bestenliste bleibt erhalten. Der Server prüft Ergebnisse, Laufzeiten, Räume und doppelte Einreichungen und berechnet die Punkte selbst. Die Flugsimulation und das Shopguthaben liegen im Browser; dies ist keine manipulationssichere Turnierwertung.

Neue Hausflüge senden `scoreVersion: 2` und die eindeutigen `starIds`; die Rangliste wird mit `?scoreVersion=2` geladen. Fehlende Version bedeutet weiterhin die historische Hauswertung. Tickets sind an ihre Wertung gebunden. Der Server prüft IDs und Sternanzahl und ignoriert clientseitige Erstfundboni.

Die additiven Migrationen bis einschließlich `migrations/0003_house_score_versions.sql` müssen vor der Veröffentlichung auf der produktiven Datenbank angewendet werden. Alte Migrationen und Tabellen bleiben erhalten. Lokale Vorbereitung:

```sh
npx wrangler d1 migrations apply stubenflieger-leaderboard --local
npm run build
npm run dev
```

`npm run deploy` prüft, baut und veröffentlicht auf das konfigurierte Cloudflare-Konto. Eine Veröffentlichung und die produktive Migration sind getrennte Schritte; lokale Änderungen allein aktualisieren die öffentliche Website nicht.
