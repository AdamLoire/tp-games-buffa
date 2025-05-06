# 🎮 Dreamworld Explorer – Babylon.js Game Project

Bienvenue dans **Dreamworld Explorer**, un projet Babylon.js réalisé dans le cadre du parcours *GamesOnWeb* pour apprendre la 3D et la programmation de jeu avec Babylon. Ce prototype vous plonge dans un musée onirique, où chaque tableau est une porte vers un rêve unique.

---

## 🎯 Objectif du jeu

Le joueur incarne un personnage qui explore un musée aux allures de monde sucré. En traversant des portraits suspendus, il est téléporté dans des rêves aux environnements variés. L’objectif est d’explorer ces rêves, découvrir les mondes, et expérimenter les mécaniques de déplacement et d’interaction conçues avec Babylon.js.

---

## 🕹️ Contrôles

| Action                               | Touche |
|--------------------------------------|--------|
| Avancer                              | `Z`    |
| Reculer                              | `S`    |
| Aller à gauche                       | `Q`    |
| Aller à droite                       | `D`    |
| Activer/désactiver la vue souris    | `J`    |
| Déplacement de la vue (souris)      | Bouger la souris |
| Entrer dans un rêve (téléportation) | Traverser un portrait |
| Verrouiller la souris               | Clic sur le canvas |

---

## ⚙️ Fonctionnement général

- **Caméra (ArcRotate)** : Le jeu utilise une `ArcRotateCamera` personnalisée. Par défaut, elle bloquait les mouvements verticaux (haut/bas), ce qui nuisait à l'immersion. Les limites de l’angle vertical (`beta`) ont été ajustées manuellement pour permettre un contrôle libre mais fluide. Le système de *pointer lock* permet ensuite un contrôle façon TPS/FPS via la souris.

- **Déplacements** : Le joueur est contrôlé via `moveWithCollisions()` selon les inputs clavier, avec une direction relative à la caméra. Le modèle GLB est attaché à une `root` invisible qui gère les collisions.

- **Gravité** : Appliquée manuellement à chaque frame (`Y = -0.1`), pour une descente réaliste et progressive sur les pentes ou escaliers. Cela contourne les limitations de la gravité native de Babylon.js.

- **Téléportation** : Chaque portrait du musée contient une metadata `teleportTo` qui permet de téléporter instantanément le joueur dans un rêve, lorsqu’il entre en collision avec le mesh correspondant.

- **Map (Lobby)** : Le musée est un bâtiment fermé avec un sol en gâteau, des murs en granite, des escaliers, des sucettes 3D et plusieurs portraits. Il sert de hub d’entrée vers les rêves.

- **Rêve 1** : Généré à partir d’une heightmap avec texture de neige, ce monde représente une colline enneigée praticable.

---

## ✨ Fonctionnalités

- ✅ Déplacements clavier avec collisions
- ✅ Caméra à rotation libre (arcCam personnalisée)
- ✅ Gravité personnalisée
- ✅ Téléportation via collisions sur tableaux
- ✅ Textures et objets décoratifs 3D
- ✅ Intégration de modèle GLB pour le joueur
- ✅ Carte de type lobby (musée) + plateformes de rêves
- ✅ Terrain par heightmap pour le rêve 1

---

## 🧪 Problèmes rencontrés

- **Gravité native Babylon.js** : Ne permettait pas une descente correcte sur des surfaces inclinées comme les escaliers ou pentes. Résolu avec une gravité appliquée manuellement.
- **ArcRotateCamera** : Limitée verticalement par défaut ; déblocage manuel des angles pour un contrôle plus fluide (entre 5° et 175°).
- **Collisions** : Ajustement du `ellipsoid` pour éviter de passer à travers le sol ou les objets. Ajout d’une boîte de débogage (`hitboxDebug`) pour visualiser.
- **Téléportation** : Passage d’un `ActionManager` à une détection directe via `intersectsMesh` pour plus de contrôle et moins de duplication.
- **Spawn** : Correction de la position de départ pour que le joueur ne se retrouve pas en dehors du musée.

---

## 🚧 Roadmap (prochaines features)

- 🔜 Animation des portraits lors de l’approche ou du passage
- 🔜 Menu de réglages (sensibilité, touches clavier)
- 🔜 Ajout d’un système de saut avec vérification du sol
- 🔜 UI en jeu (interface nom du rêve, carte miniature)
- 🔜 Collectibles / objectifs dans les rêves
- 🔜 Transitions visuelles entre les mondes (fade, fondu)
- 🔜 Sound design (musique d’ambiance, effets de téléportation)
- 🔜 Système de sauvegarde des rêves visités

---

## 🧰 Technologies utilisées

- [Babylon.js](https://www.babylonjs.com/)
- JavaScript ES Modules
- GLB models
- Textures haute résolution
- Heightmaps pour terrain
- Système de pointer lock

---