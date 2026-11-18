# Le Campus des Flocons — nouveau site de Douaa

Site éducatif indépendant pour la 4e année en Ontario, conçu pour Douaa. Nouvelle version du 18 novembre 2026.

## Contenu inclus

- 70 leçons originales, en 8 domaines (français et anglais séparés), avec notions, exemples, méthodes et 3 exercices corrigés par leçon : 210 questions.
- Examen du jour noté sur 20, questionnaire déterministe par date (7 mathématiques, 6 français, 3 anglais, 2 sciences, 2 études sociales).
- Corrections expliquées; conservation des essais, des scores et des cours explorés.
- Planning après l'école, missions du jour, tableau de bord familial, journal d'habitudes et export/import JSON.
- Base locale IndexedDB (ou localStorage si IndexedDB indisponible). Aucune donnée personnelle transmise à un serveur.
- Application responsive, installable sur certains appareils, utilisable hors connexion après la première visite compatible avec Service Worker.

## Utilisation

Ouvrir `index.html` dans un navigateur ou installer sur un hébergement statique HTTPS. Pour tester la sauvegarde hors connexion, utiliser un serveur HTTP local ou un hébergement HTTPS.

Le site public contient uniquement des contenus génériques et le prénom « Douaa ». Les scores, notes d'habitudes et observations appartiennent au navigateur local; ils ne sont **pas publics**, mais le tableau des parents n'est **pas authentifié**. Toute personne pouvant ouvrir ce navigateur peut consulter ces données.

**Il n'existe pas encore de synchronisation cloud automatique.** Sauvegarder un JSON régulièrement depuis l'onglet « Sauvegardes » et l'importer sur un autre appareil au besoin. Ne jamais placer ce fichier JSON dans un dépôt GitHub public.

Les exercices sont une aide pédagogique familiale et ne remplacent pas le programme et les évaluations de Mme Dinslye. Les compétences de 4e année sont sélectionnées d'après les plans AAM et les programmes ontariens; le contenu ne prétend pas reproduire l'intégralité de tous les programmes officiels.

## Publication GitHub Pages

L'ancien site est conservé à la racine du dépôt `bamraoui01/douaa-atelier-4e`. Cette version est publiée sous `public/campus/` du même dépôt ; le workflow existant publie `public/` automatiquement.

À vérifier après le premier déploiement : le workflow GitHub Actions, la page HTTPS, l'examen /20, une sauvegarde JSON et la restitution sur un deuxième appareil. Les résultats antérieurs de l'ancien site ne sont **pas** automatiquement importés dans cette nouvelle version.

## Fichiers

- `index.html` : structure de la page
- `style.css` : design responsive violet et neige
- `content.js` : matières, 70 cours et 210 questions
- `app.js` : navigation, quiz, examen /20, base de données locale, journal, export/import
- `sw.js` : cache de fichiers statiques pour le hors ligne
- `manifest.webmanifest`, `icon.svg` : installation et icône

Sources indicatives : https://www.ontario.ca/page/math-curriculum-grades-1-8 ; https://www.dcp.edu.gov.on.ca/fr/curriculum/elementaire-francais ; https://www.dcp.edu.gov.on.ca/en/long-range-plans-science-technology/g4 ; https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-sshg/grades/g6-ss/social-studies-grades-1-to-6 .
