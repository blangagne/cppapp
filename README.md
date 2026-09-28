# Code & Jeux — C++

334 exercices progressifs sur 28 chapitres, avec des scènes courtes, des explications et des exercices entrelacés, puis un défi final dans chaque chapitre : code à compléter (parfois plusieurs trous ou lignes), mots à placer, questions à cocher et notions à relier. Des indices, checkpoints, succès et sept examens à réaliser dans VS Code jalonnent le parcours. Le site compare les réponses attendues ; il ne compile pas le C++.

## Carte des notions pour fabriquer un jeu

- **C++** : types, portée, conditions, boucles, fonctions, collections, références, pointeurs, mémoire, classes, algorithmes, erreurs de compilation ; puis templates et gestion avancée des ressources.
- **Boucle du jeu** : input, simulation, rendu, temps réel, états, événements, pauses et transitions.
- **Monde et mouvement** : coordonnées, vecteurs, velocity, accélération, gravité, collisions, caméra, navigation sur grille ; puis physique et 3D plus avancées.
- **Personnages et règles** : PV, dégâts, armes, inventaire, quêtes, victoire, défaite, spawn, cooldowns, progression.
- **Stratégie** : unités, sélection, ordres, économie, production, bâtiments, construction, pathfinding ; plus tard brouillard de guerre et IA tactique.
- **FPS** : visée, tir, projectiles, hitbox, ennemis, feedback et niveaux ; plus tard caméra 3D et collisions avancées.
- **Présentation** : sprites, animations, son, particules, HUD, menus, boutons, options, surbrillance et lisibilité.
- **Données et qualité** : sauvegarde, format/version, débogage, tests, performance, organisation .h/.cpp et compilation.
- **Étapes futures** : réseau/multijoueur, génération procédurale, outils d’édition, accessibilité, localisation et publication.

Les 28 chapitres actuels couvrent surtout les bases C++ et un prototype 2D avec Raylib. Les éléments indiqués « plus tard » ne sont pas encore des cours.

## Mettre à jour GitHub Pages

Décompresse `cppapp.zip`. Place les **onze fichiers** `index.html`, `style.css`, `app.js`, `exercises.js`, `advanced.js`, `expansion.js`, `courses.js`, `pedagogy.js`, `flow.js`, `bosses.js` et `README.md` à la racine du même dépôt GitHub Pages, en remplaçant les versions précédentes. Ne charge pas seulement le ZIP dans le dépôt : GitHub Pages a besoin des fichiers décompressés. Si la page affiche l’ancien total, actualise avec Ctrl+F5 (ou vide le cache du site sur téléphone).

Pour un nouveau dépôt : crée un dépôt public, importe les onze fichiers avec **Add file → Upload files**, puis dans **Settings → Pages**, choisis **Deploy from a branch**, branche **main**, dossier **/(root)**. Sur Android, ouvre son URL dans Chrome, puis **⋮ → Ajouter à l’écran d’accueil**.

## Profils et progression

Le bouton du profil permet de créer un profil sans mot de passe et d’en changer. Chaque profil conserve ses réussites, réponses, brouillons, erreurs et examens sur ce navigateur. Le premier lancement récupère l’ancienne progression dans le profil Bebou. **Recommencer ce chapitre** efface les réponses, erreurs, examens liés et XP de ce chapitre pour le profil actif, après confirmation. Les XP et succès sont recalculés à partir des exercices terminés.

La progression est enregistrée dans le stockage local du navigateur : elle n’est pas synchronisée entre téléphone et PC. Effacer les données du site la supprimera. Les examens VS Code se valident manuellement après avoir écrit et testé le projet sur PC.

## Ajouter des exercices

Les exemples détaillés sont dans `courses.js`, les dialogues dans `flow.js`, les défis finaux dans `bosses.js`, et les propositions des premiers exercices dans `pedagogy.js`. Les chapitres 1–12 sont dans `exercises.js`, 13–20 dans `advanced.js`, 21–28 dans `expansion.js`. Chaque exercice a un identifiant stable basé sur son chapitre et sa position. Pour préserver la progression déjà enregistrée, ajoute les nouveaux exercices à la fin d’un chapitre ou crée un chapitre après les autres ; ne réordonne pas les exercices existants.
