const chapters = [
  {id:'bases', name:'01 · Les fondations', tag:'Variables et types', exercises:[
    ['Premières balles','Tu as 3 balles de pistolet dans ton chargeur. Choisis le type qui compte ces balles entières.','___ ammo = 3;','int','Le type se place avant le nom de la variable.','Pour compter un nombre entier, on utilise int.','int ammo = 3;','Le 3 est déjà dans le code. Le trou avant ammo attend le type int, pas le nombre de balles.'],
    ['Pièces de GTA','Tu ramasses 25 pièces. Le type int est déjà écrit : quelle valeur mets-tu après le signe = ?','int coins = ___;','25','La partie après = est la valeur de départ.','Le nombre de pièces est dans la consigne.','int coins = 25;','Cette fois, int est déjà écrit. Le blanc après = attend le nombre de pièces annoncé dans la consigne.'],
    ['Nom de ton pirate','Complète le type pour stocker le nom du pirate.','#include <string>\nstd::___ pirate = "BarbeBebou";','string','Le texte en C++ utilise std::string.','Il manque le mot après std::.','std::string pirate = "BarbeBebou";'],
    ['La vie en décimal','Choisis un type pour une vitesse à virgule.','___ speed = 2.5f;','float','Le suffixe f indique un float.','Écris float.','float speed = 2.5f;'],
    ['Mode furtif','Le joueur est caché. Complète son type vrai/faux et sa valeur de départ.','___ hidden = ___;',['bool','true'],'Le premier trou est le type, le second sa valeur.','bool représente vrai/faux ; « caché » vaut true.','bool hidden = true;']
  ]},
  {id:'conditions', name:'02 · Décider', tag:'Conditions', exercises:[
    ['La porte après dix','La porte se ferme seulement s’il y a PLUS de 10 personnes : à 10 elle reste ouverte.','if (currentPeople ___ 10) {\n    isDoorClosed = true;\n}','>','Le signe > exclut 10.','À 10 tu laisses ouvert ; à 11 tu fermes.','if (currentPeople > 10) { isDoorClosed = true; }'],
    ['Dix invités pile','Autorise l’entrée tant qu’il y a 10 personnes ou moins.','if (currentPeople ___ 10) {\n    canEnter = true;\n}','<=','Le signe <= inclut 10.','Autorise 10, mais pas 11.','if (currentPeople <= 10) { canEnter = true; }'],
    ['Équipe adverse','Vérifie que team vaut Team::enemy.','if (team ___ Team::enemy) {\n    shoot();\n}','==','Une comparaison utilise deux signes égal.','Un seul = affecte une valeur.','if (team == Team::enemy) { shoot(); }'],
    ['Invisible ou pas','Vérifie que visible est faux.','if (___visible) {\n    showEnemy();\n}','!','! inverse un booléen.','Le signe est placé devant visible.','if (!visible) { showEnemy(); }'],
    ['Deux conditions','Le joueur doit être armé ET avoir plus de 0 PV. Complète les deux comparaisons.','if (armed ___ health ___ 0) {\n    attack();\n}',['&&','>'],'Il faut ET entre les conditions, puis vérifier les PV.','&& relie les conditions ; > compare les PV à zéro.','if (armed && health > 0) { attack(); }']
  ]},
  {id:'boucles', name:'03 · Répéter', tag:'Boucles', exercises:[
    ['Cinq adversaires','Complète la limite pour parcourir 5 indices (0 à 4).','for (int i = 0; i < ___; i++) {\n    spawnEnemy();\n}','5','La boucle commence à 0 et s’arrête avant la limite.','0, 1, 2, 3, 4 : cinq passages.','for (int i = 0; i < 5; i++) { spawnEnemy(); }'],
    ['Avancer le compteur','Incrémente i après chaque tour.','for (int i = 0; i < 5; ___) {\n    spawnWorker();\n}','i++','i++ ajoute 1 à i.','Le compteur s’appelle i.','for (int i = 0; i < 5; i++) { spawnWorker(); }'],
    ['Encore un tour','Teste si i reste sous 5.','for (int i = 0; i ___ 5; i++) {\n    drive();\n}','<','La boucle continue tant que i est inférieur à 5.','Il faut exclure 5.','for (int i = 0; i < 5; i++) { drive(); }'],
    ['Trois tours de piste','Complète le départ du compteur.','for (int lap = ___; lap < 3; lap++) {\n    race();\n}','0','On compte ici 0, 1, 2.','L’indice initial est zéro.','for (int lap = 0; lap < 3; lap++) { race(); }'],
    ['Tant que vivant','Répète le combat tant que les PV sont supérieurs à zéro.','___ (health ___ 0) {\n    fight();\n}',['while','>'],'Il faut le mot-clé de répétition puis une comparaison.','while signifie tant que ; > signifie supérieur à.','while (health > 0) { fight(); }']
  ]},
  {id:'fonctions', name:'04 · Organiser', tag:'Fonctions et portée', exercises:[
    ['Spawn sans résultat','Complète le type de retour d’une fonction qui ne renvoie rien.','___ spawnWorker() {\n    // création\n}','void','void signifie aucun résultat renvoyé.','Ce n’est ni int ni bool.','void spawnWorker() { }'],
    ['Peut récolter ?','Complète le type de retour d’une question vrai/faux.','___ canGather(UnitType type) {\n    return type == UnitType::worker;\n}','bool','La comparaison renvoie true ou false.','Le type des valeurs true et false.','bool canGather(UnitType type) { return type == UnitType::worker; }'],
    ['Point d’apparition','Complète le type du paramètre de position Raylib.','void spawnWorker(___ pos) {\n    DrawCircleV(pos, 12, BLUE);\n}','Vector2','Raylib représente une position 2D avec Vector2.','Deux coordonnées x et y dans un Vector2.','void spawnWorker(Vector2 pos) { DrawCircleV(pos, 12, BLUE); }'],
    ['Renvoyer une valeur','Complète le mot-clé qui renvoie les dégâts calculés.','int damage() {\n    int result = 10;\n    ___ result;\n}','return','return transmet le résultat à l’appelant.','Le mot-clé est return.','int damage() { return result; }'],
    ['Variable du main','Donne à la fonction un paramètre entier nommé score.','void showScore(___ ___) {\n    // ...\n}',['int','score'],'Un paramètre a un type et un nom.','Le type entier est int, le nom est score.','void showScore(int score) { }']
  ]},
  {id:'structures', name:'05 · Les unités', tag:'Structs, enums et instances', exercises:[
    ['Plan d’un personnage','Complète le mot-clé qui regroupe les données.','___ UnitInstance {\n    int health;\n    Vector2 pos;\n};','struct','Une struct définit la forme d’une unité.','Le mot commence par str.','struct UnitInstance { int health; Vector2 pos; };'],
    ['Types d’unité','Complète la déclaration d’une énumération typée.','enum ___ UnitType { worker, soldier };','class','enum class évite les noms globaux.','Il manque class.','enum class UnitType { worker, soldier };'],
    ['Personnage nommé Bob','Crée une instance nommée bob du type UnitInstance.','UnitInstance ___{};','bob','UnitInstance est le type, bob est son identifiant.','Il manque le nom de la variable.','UnitInstance bob{};'],
    ['Lire ses PV','Accède au champ health de bob.','int hp = bob.___;','health','Le point lit un membre d’une instance.','Le champ est nommé health.','int hp = bob.health;'],
    ['Le bon état','Référence la valeur moving de l’énumération UnitState.','unit.state = UnitState::___;','moving',':: permet de nommer une valeur de enum class.','L’état demandé est moving.','unit.state = UnitState::moving;']
  ]},
  {id:'jeu', name:'06 · Monde interactif', tag:'Raylib et mouvements', exercises:[
    ['Bouton qui tire','Détecte une touche maintenue dans Raylib.','if (IsKeyDown(KEY___)) {\n    fire();\n}','SPACE','KEY_SPACE représente la barre espace.','Écris SPACE.','if (IsKeyDown(KEY_SPACE)) { fire(); }'],
    ['Position du clic','Lis la position de la souris dans Raylib.','Vector2 mouse = ___();','GetMousePosition','Raylib fournit GetMousePosition().','La fonction contient MousePosition.','Vector2 mouse = GetMousePosition();'],
    ['Clic gauche','Détecte un appui sur le bouton gauche.','if (IsMouseButtonPressed(MOUSE_BUTTON___)) {\n    showEnemy();\n}','LEFT','Raylib utilise MOUSE_BUTTON_LEFT.','Écris LEFT.','if (IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) { showEnemy(); }'],
    ['Clic droit','Détecte un appui sur le bouton droit.','if (IsMouseButtonPressed(MOUSE_BUTTON___)) {\n    moveSelected();\n}','RIGHT','Raylib utilise MOUSE_BUTTON_RIGHT.','Écris RIGHT.','if (IsMouseButtonPressed(MOUSE_BUTTON_RIGHT)) { moveSelected(); }'],
    ['Distance au clic','Complète la fonction Raylib de distance entre deux Vector2.','float d = Vector2___(unit.pos, mouse);','Distance','Vector2Distance(a, b) renvoie la distance.','Il manque Distance.','float d = Vector2Distance(unit.pos, mouse);'],
    ['Destination','Donne à l’unité sélectionnée la position du clic.','unit.destination = ___;','mouse','mouse est le Vector2 lu avec GetMousePosition().','La variable créée au clic s’appelle mouse.','unit.destination = mouse;'],
    ['Avancer en douceur','Multiplie la vitesse par le temps écoulé entre deux images.','unit.pos.x += speed * ___();','GetFrameTime','GetFrameTime() renvoie la durée de l’image en secondes.','La fonction Raylib contient FrameTime.','unit.pos.x += speed * GetFrameTime();']
  ]}
,
  {id:'maths', name:'07 · Physique de jeu', tag:'Calculs, temps et aléatoire', exercises:[
    ['Boost de voiture','Augmente la vitesse de 15.','speed ___ 15;','+=','+= ajoute et réaffecte.','C’est plus court que speed = speed + 15.','speed += 15;'],
    ['Frein moteur','Diminue la vitesse de 8.','speed ___ 8;','-=','-= retire et réaffecte.','Le signe moins vient avant égal.','speed -= 8;'],
    ['FPS régulier','Déplace la voiture selon le temps écoulé.','car.x += speed * ___();','GetFrameTime','La durée de la dernière image est donnée par Raylib.','Ça s’appelle GetFrameTime.','car.x += speed * GetFrameTime();'],
    ['Pile ou face','Garde le reste d’une division par 2.','int side = randomNumber ___ 2;','%','% calcule le reste de la division.','Un entier pair donne 0.','int side = randomNumber % 2;'],
    ['Bord de piste','Empêche x de dépasser 800 avec std::min.','#include <algorithm>\nx = std::min(x, ___);','800','std::min choisit la plus petite des deux valeurs.','Le maximum autorisé est 800.','x = std::min(x, 800);'],
    ['Spawn aléatoire','Tire un entier Raylib entre 0 et 10.','int lane = GetRandomValue(0, ___);','10','GetRandomValue inclut les deux bornes.','La borne haute est 10.','int lane = GetRandomValue(0, 10);'],
    ['Le temps passe','Accumule le temps entre deux images.','timer += ___();','GetFrameTime','On additionne chaque durée d’image.','Une fonction Raylib renvoie le delta en secondes.','timer += GetFrameTime();']
  ]},
  {id:'collections', name:'08 · Des foules', tag:'Vectors et parcours', exercises:[
    ['Une horde de zombies','Déclare un vector de points de vie entiers.','#include <vector>\nstd::vector<___> healths;','int','Un vector stocke plusieurs valeurs d’un même type.','Les PV sont des entiers.','std::vector<int> healths;'],
    ['Nouveau zombie','Ajoute 100 PV à la horde.','healths.push_back(___);','100','push_back ajoute une nouvelle valeur.','Chaque nouveau zombie démarre à 100 PV.','healths.push_back(100);'],
    ['Combien de zombies ?','Récupère le nombre d’éléments.','auto count = healths.___();','size','size() donne la taille actuelle.','Écris le nom sans parenthèses.','auto count = healths.size();'],
    ['Le premier','Accède au premier élément.','int first = healths[___];','0','Les indices commencent à zéro.','Le premier n’est pas à l’indice 1.','int first = healths[0];'],
    ['La horde complète','Parcours chaque valeur sans la modifier.','for (int hp ___ healths) {\n    drawBar(hp);\n}',' :','Une boucle for-each utilise le signe deux-points.','Il faut deux-points entre hp et healths.', 'for (int hp : healths) { drawBar(hp); }'],
    ['Dernier retiré','Supprime le dernier élément du vector.','healths.___();','pop_back','pop_back enlève le dernier élément.','Inverse de push_back.','healths.pop_back();'],
    ['Horde vide','Teste si le vector ne contient plus personne.','if (healths.___()) {\n    win();\n}','empty','empty() renvoie true quand le vector est vide.','Le mot anglais pour vide.','if (healths.empty()) { win(); }']
  ]},
  {id:'references', name:'09 · Modifier sans copier', tag:'Références et const', exercises:[
    ['Vraie voiture','Crée une référence à car, pas une copie.','Car___ current = car;','&','& déclare une référence sur l’objet existant.','Le symbole se place après le type.','Car& current = car;'],
    ['Dégâts réels','Passe le personnage par référence à la fonction.','void hit(Player___ player) {\n    player.hp -= 10;\n}','&','Sans &, player serait une copie locale.','Il faut modifier le joueur original.','void hit(Player& player) { player.hp -= 10; }'],
    ['Lecture sans copie','Passe une grande ville en référence constante.','void drawCity(const City___ city) {\n    // lecture seule\n}','&','const & évite la copie et interdit les modifications.','Ajoute le signe de référence.','void drawCity(const City& city) { }'],
    ['Chaque ennemi réel','Parcours les ennemis en pouvant les modifier.','for (Enemy___ enemy : enemies) {\n    enemy.hp -= 1;\n}','&','Sans &, chaque enemy est une copie temporaire.','Ajoute & après Enemy.','for (Enemy& enemy : enemies) { enemy.hp -= 1; }'],
    ['Caméra en lecture','Parcours sans copie et sans modification.','for (const Camera___ camera : cameras) {\n    draw(camera);\n}','&','const Camera& évite une copie.','Même symbole, avec const devant.','for (const Camera& camera : cameras) { draw(camera); }'],
    ['Nom du joueur','Interdis la modification du nom dans ce paramètre.','void greet(___ std::string& name) {\n    // ...\n}','const','const protège une valeur lue seulement.','Le mot est placé devant le type.','void greet(const std::string& name) { }'],
    ['Retour de spawn','Le spawn fabrique et renvoie une instance.','___ spawnCar() {\n    return Car{};\n}','Car','Le type de retour est celui de la valeur renvoyée.','return renvoie Car{}.','Car spawnCar() { return Car{}; }']
  ]},
  {id:'states', name:'10 · États du jeu', tag:'enum class et transitions', exercises:[
    ['États du pirate','Complète le mot-clé qui définit des choix nommés.','___ class PirateState { idle, sailing, fighting };','enum','enum class donne un ensemble de valeurs possibles.','Il manque enum.','enum class PirateState { idle, sailing, fighting };'],
    ['Prendre la mer','Change l’état du pirate vers sailing.','pirate.state = PirateState::___;','sailing','La valeur est dans PirateState.','Le nom de l’état signifie naviguer.','pirate.state = PirateState::sailing;'],
    ['Encore vivant ?','Compare l’état avec dead.','if (enemy.state ___ EnemyState::dead) {\n    respawn();\n}','==','== compare, = affecte.','Deux signes égal.','if (enemy.state == EnemyState::dead) { respawn(); }'],
    ['Choix de l’état','Complète l’instruction de sélection.','___ (npc.state) {\n    case State::idle: break;\n    default: break;\n}','switch','switch choisit un bloc selon une valeur.','Le mot commence par sw.','switch (npc.state) { case State::idle: break; default: break; }'],
    ['Éviter la chute','Termine le case une fois traité.','case State::running:\n    updateRun();\n    ___;','break','break sort du case.','Sans ça, le prochain case risque de s’exécuter.','case State::running: updateRun(); break;'],
    ['Revenir au calme','Si la vitesse est nulle, repasse à idle.','if (speed == 0) state = State::___;','idle','idle signifie au repos.','L’état sans mouvement.','if (speed == 0) state = State::idle;'],
    ['Fin du dialogue','Le dialogue ne doit avancer que dans l’état talking.','if (npc.state == State::___) {\n    nextLine();\n}','talking','Le nom de l’état correspond à parler.','Écris talking.','if (npc.state == State::talking) { nextLine(); }']
  ]},
  {id:'collisions', name:'11 · Contacts', tag:'Hitbox et collisions Raylib', exercises:[
    ['Rectangle de voiture','Complète le type de la hitbox rectangulaire.','___ carBox{x, y, width, height};','Rectangle','Raylib utilise Rectangle pour une boite.','C’est le mot anglais pour rectangle.','Rectangle carBox{x, y, width, height};'],
    ['Choc entre voitures','Détecte deux rectangles qui se touchent.','if (CheckCollision___(carBox, wallBox)) {\n    crash();\n}','Recs','CheckCollisionRecs teste deux Rectangle.','La fin abrège rectangles.','if (CheckCollisionRecs(carBox, wallBox)) { crash(); }'],
    ['Clic sur la carte','Vérifie que mouse est dans la hitbox.','if (CheckCollisionPointRec(___, mapBox)) {\n    openMap();\n}','mouse','Le premier argument est le point Vector2.','Il s’appelle mouse.','if (CheckCollisionPointRec(mouse, mapBox)) { openMap(); }'],
    ['Disque d’Agario','Détecte le contact entre deux cercles.','if (CheckCollisionCircles(a.pos, a.radius, b.pos, ___)) {\n    eat();\n}','b.radius','La fonction prend position et rayon pour chaque cercle.','Le second rayon appartient à b.','if (CheckCollisionCircles(a.pos, a.radius, b.pos, b.radius)) { eat(); }'],
    ['Masque de sprite','Associe une hitbox à la position du personnage.','Rectangle box{player.x, player.y, player.width, ___};','player.height','Un rectangle a x, y, largeur, hauteur.','Il manque la hauteur du joueur.','Rectangle box{player.x, player.y, player.width, player.height};'],
    ['Centre du cercle','Utilise la position du personnage comme centre.','DrawCircleV(___, 18, RED);','player.pos','DrawCircleV attend un Vector2.','La position est stockée dans player.pos.','DrawCircleV(player.pos, 18, RED);'],
    ['Collision et état','Passe en état crash après contact.','if (CheckCollisionRecs(carBox, wallBox)) {\n    car.state = CarState::___;\n}','crashed','Une collision déclenche l’état crashed.','Écris crashed.','car.state = CarState::crashed;']
  ]},
  {id:'architecture', name:'12 · Construire plus grand', tag:'Fichiers, méthodes et classes', exercises:[
    ['Un fichier protégé','Évite l’inclusion multiple d’un header.','___ once\nstruct Player { int hp; };','#pragma','#pragma once protège le fichier d’en-tête.','Le mot commence par #.','#pragma once'],
    ['Déclaration de fonction','Déclare une fonction sans écrire son corps.','void spawnEnemy(int x, int y)___',';','Une déclaration se termine par un point-virgule.','Pas d’accolades ici.','void spawnEnemy(int x, int y);'],
    ['Méthode du joueur','Déclare une méthode nommée update dans la struct.','struct Player {\n    void ___();\n};','update','Une méthode est une fonction associée à un type.','Le nom demandé est update.','struct Player { void update(); };'],
    ['Définition séparée','Définis Player::update hors de la struct.','void Player___update() {\n    // ...\n}','::',':: relie le nom de la classe et de la méthode.','Ce sont deux deux-points.','void Player::update() { }'],
    ['Constructeur simple','Donne 100 PV dès la création.','struct Player {\n    int hp;\n    Player() : hp(___) {}\n};','100','La liste d’initialisation donne une valeur au champ.','Les PV de départ sont 100.','Player() : hp(100) {}'],
    ['Visibilité','Rends la méthode accessible de l’extérieur.','class Player {\n___:\n    void move();\n};','public','Dans une class, les membres sont privés par défaut.','La section ouverte s’appelle public.','class Player { public: void move(); };'],
    ['Plusieurs joueurs','Déclare une collection de Player.','#include <vector>\nstd::vector<___> players;','Player','Le type entre chevrons est celui d’un élément.','Chaque élément est un Player.','std::vector<Player> players;']
  ]}

];
const exercises = chapters.flatMap((chapter, ci) => chapter.exercises.map((row, ei) => ({id:`${chapter.id}-${ei+1}`, chapter:chapter.id, chapterName:chapter.name, chapterIndex:ci, number:ei+1, title:row[0], prompt:row[1], snippet:row[2], answer:row[3], answers:Array.isArray(row[3])?row[3]:[row[3]], hint1:row[4], hint2:row[5], solution:row[6], error:row[7]})));
const lessons = {
 bases: ['Une variable, c’est une petite boite','Elle a un type, un nom et une valeur. int garde un entier, float un nombre à virgule, bool vrai ou faux, std::string du texte. On commence par changer une seule pièce de code à la fois.','int score = 10;   // type, nom, valeur'],
 conditions: ['Le jeu prend une décision','if exécute un bloc quand sa condition est vraie. == compare deux valeurs ; = change une valeur. && signifie « et », ! inverse vrai et faux.','if (score >= 10) { unlock(); }'],
 boucles: ['Faire plusieurs fois sans recopier','Une boucle for répète un bloc avec un compteur. Avec i = 0 et i < 3, i vaut successivement 0, 1, 2. while recommence tant qu’une condition reste vraie.','for (int i = 0; i < 3; i++) { spawn(); }'],
 fonctions: ['Des actions avec un nom','Une fonction regroupe du code. Son type de retour vient avant son nom ; void ne renvoie rien. Ses paramètres sont les données qu’on lui donne. Une variable créée dans main n’existe pas directement dans une autre fonction : il faut la passer.','int doubleScore(int score) { return score * 2; }'],
 structures: ['Un plan, puis des personnages','Une struct décrit les champs que possèdent tous les personnages. Chaque variable de ce type est une instance distincte. Le point accède à ses champs. enum class sert à nommer un choix parmi plusieurs.','struct Cat { int hp; };\nCat minou{100};\nminou.hp -= 5;'],
 jeu: ['Une boucle de jeu concrète','Raylib lit les clics et la position de la souris. Un Vector2 contient x et y. Un std::vector rassemble plusieurs objets. On calcule le mouvement image après image avec le temps écoulé.','Vector2 mouse = GetMousePosition();\n// mouse.x et mouse.y sont des coordonnées'],
 maths: ['Rendre les actions indépendantes des FPS','Chaque image peut durer plus ou moins longtemps. Multiplier une vitesse par GetFrameTime() donne un déplacement proportionnel au temps. += et -= modifient directement une valeur.','position += vitesse * GetFrameTime();'],
 collections: ['Gérer beaucoup d’objets','Un std::vector est une liste qui grandit. push_back ajoute, size compte, [0] lit le premier élément et empty vérifie s’il n’y a plus rien. Une boucle peut parcourir tout le groupe.','std::vector<int> scores;\nscores.push_back(42);'],
 references: ['Copie ou objet original ?','Par défaut, un paramètre est copié. Une référence (&) permet de travailler sur l’objet original. const & lit le même objet sans le modifier. C’est utile pour les gros objets et les personnages à blesser.','void heal(Player& p) { p.hp += 10; }'],
 states: ['Un personnage change de comportement','Au lieu de plusieurs booléens qui se contredisent, un enum class donne un état précis : idle, running, dead… Une transition change cet état quand un événement arrive.','if (hp <= 0) state = State::dead;'],
 collisions: ['Détecter ce qui se touche','Une hitbox peut être un Rectangle ou un cercle simple autour d’un sprite. Raylib fournit les tests de contact. Pour une forme irrégulière, on peut combiner plusieurs hitbox simples.','if (CheckCollisionRecs(a, b)) { crash(); }'],
 architecture: ['Quand le projet grandit','Un header annonce les types et fonctions. Le .cpp contient leurs définitions. Une méthode appartient à une struct ou class. Un constructeur initialise l’objet quand on le crée.','// player.h : void move();\n// player.cpp : void Player::move() { }']
};
