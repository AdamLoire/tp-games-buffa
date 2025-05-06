# 🎮 Rapport de conception – TP Jeux Web (Mahjong & Babylon.js)

## Sommaire

1. Mahjong Canvas Game  
2. Dreamworld Explorer ("DreamLanders") (Babylon.js)
3. Accès sites

---

## 🀄 1. Mahjong Canvas Game – Rapport de conception

### Présentation du jeu

**Nom** : Mahjong Canvas Game  
**Type** : Jeu de réflexion en solitaire, version numérique  
**Technologie** : JavaScript (Canvas 2D), HTML/CSS  
**Concept** : Reproduction interactive du Mahjong solitaire classique avec formes de plateau variées, reconnaissance de paires, scoring dynamique et options avancées.

---

### Objectifs du projet

- Apprendre à manipuler le `<canvas>` HTML pour créer une interface de jeu graphique
- Implémenter une logique de sélection, de paire et de suppression de tuiles
- Proposer une expérience complète avec score, timer, UI et gameplay fidèle

---

### Mécaniques de jeu

- Cliquer sur deux tuiles libres pour les faire disparaître si elles forment une paire valide
- Utiliser le bouton **Mélanger** pour remélanger les tuiles restantes (malus de points)
- Pause possible via bouton dans le canvas
- Aide visuelle automatique après 20s d’inactivité si aide activer
- Formes de plateau au choix : pyramide, goomba,...

---

### Architecture technique

- `index.html` : structure de page, canvas et UI
- `css/style.css` : styles généraux et affichage du popup des règles
- `js/` :
  - `script.js` : gestion des événements et de l’interface
  - `Game.js` : logique principale (timer, score, victoire, pause, aides)
  - `ObjectGraphique.js` : création des objets tuiles, dessin sur canvas
  - `Map.js` : chargement/génération des formes de plateau
  - `maps/` : définitions des différentes cartes
- `audio/background.mp3` : musique d’ambiance en boucle
- `images/` : assets pour les tuiles

---

### Direction artistique

- Représentation fidèle d’un Mahjong classique
- Design visuel plat et lisible (canvas 2D)
- Thèmes floraux et saisonniers pour les tuiles spéciales
- Contrastes marqués pour les sélections et aides visuelles

---

### Problèmes rencontrés & solutions

- **Empilement de tuiles incorrect** : difficulté à superposer proprement en 2D → chaque tuile a un niveau `z` et des coordonnées précises en grille
- **Détection de tuiles libres** : nécessité de vérifier visuellement les voisins gauche/droit et la couche supérieure
- **Rejouabilité faible** : ajout du mélange, des formes de cartes, des malus et du multiplicateur de score
- **Interface bloquée pendant pause** : système ajouté pour désactiver tous les clics et le timer simultanément

---

### Pistes d’évolution

- Animation des suppressions de tuiles
- Score en ligne / leaderboard local
- Thèmes graphiques (nuit, techno, pastel...)
- Mode défi quotidien avec plateau fixe

---

## 🌌 2. Dreamworld Explorer – Rapport de conception

### Présentation du jeu

**Nom** : Dreamworld Explorer  
**Type** : Prototype d’exploration 3D TPS/FPS  
**Technologie** : Babylon.js (JavaScript, WebGL)  
**Concept** : Le joueur explore un musée aux airs de rêve sucré. Chaque tableau agit comme un portail vers un monde imaginaire différent. Le projet ambitionne d’offrir une navigation fluide entre ces “rêves” et une expérience immersive simple à prototyper pour le Web.

---

### Objectifs du projet

- Découvrir et maîtriser Babylon.js
- Mettre en place des déplacements 3D fluides avec collisions
- Gérer des scènes, la caméra, la gravité, et les interactions
- Structurer un projet de jeu modulaire prêt à accueillir plusieurs niveaux

---

### Mécaniques de jeu

- Déplacement en `ZQSD` avec collisions
- Contrôle de la vue avec la souris (`J` pour activer pointer lock)
- Traverser un tableau = téléportation vers un rêve
- Gravité simulée pour descente naturelle sur les pentes
- Chargement de maps via heightmaps (ex : neige)

---

### Architecture technique

- `camera.js` : caméra ArcRotate custom (débloquage vertical)
- `controls.js` : entrées clavier, souris, gravité, téléportations
- `player.js` : modèle 3D GLB, collisions, gestion du déplacement
- `map.js` : génération du musée et des portraits
- `dream1.js` : map d’exemple via heightmap IA

---

### Direction artistique

- Style onirique, inspiration *Dreamland* (Mario 64, Ralph 2.0)
- Sol en gâteau, murs en granite, sucettes géantes
- Chaque rêve aura une DA distincte :
  - Montagne enneigée
  - Ruines volantes
  - Forêt géométrique
  - Plateformes célestes
- Heightmaps générées par IA pour terrain unique

---

### Problèmes rencontrés & solutions

#### 🌀 Gravité native

- **Problème** : avec `applyGravity`, le joueur tremblait sur les pentes.
- **Cause** : conflit entre gravité descendante et snap automatique de Babylon.
- **Solution** : suppression d’`applyGravity`, application manuelle du vecteur `(0, -0.1, 0)` avec `moveWithCollisions()`.

#### 🎥 Caméra bloquée verticalement

- **Problème** : l’ArcRotateCamera ne permettait pas le contrôle haut/bas une fois pointer lock activé.
- **Solution** : suppression des inputs, gestion manuelle de `beta` via `mousemove` + clamp vertical (5°–175°).

#### 🗺️ Map IA

- **Problème** : heightmaps IA trop chaotiques → collisions erratiques.
- **Solution** : vérification du `checkCollisions`, filtrage des maps viables, contrôle du relief.

#### 🧱 Collisions

- **Problème** : le joueur traversait certains objets ou tombait à travers le sol.
- **Solution** : création de `debugBox`, ajustement de l’ellipsoïde et `offset`, activation explicite de `checkCollisions` sur tous les objets.

---

### Pistes d’évolution

- Menu paramétrable (sensibilité, touches)
- Saut (avec détection du sol)
- Interface HUD
- Transitions animées (fade in/out)
- Musiques et effets sonores
- Collectibles, dialogues, objectifs
- Optimisation pour grosses maps

---

### Conclusion

Ces deux jeux illustrent deux approches opposées :

- **Mahjong** : réflexion, UI 2D et logique stricte
- **Dreamworld** : navigation libre, espace 3D, interactions physiques

Les deux projets partagent une volonté d’apprendre en créant, avec des systèmes complets, pensés pour évoluer.

---


## 🔗 3. Accès au site

- **Site global** : [https://bondetbudeanskiloiregames.vercel.app](https://bondetbudeanskiloiregames.vercel.app)  
- **Liste des jeux** : [https://bondetbudeanskiloiregames.vercel.app/html/games.html](https://bondetbudeanskiloiregames.vercel.app/html/games.html)
