// A chapter course is read once at the start, and can be reopened from every exercise.
const courses={
 bases:{title:'Le C++ sans cérémonie',lead:'Une variable, c’est une information que ton jeu garde en mémoire. Le programme doit savoir quel genre d’information tu lui donnes : un nombre, du texte, ou vrai/faux. Rien de mystique, juste des étiquettes sur des boites.',steps:[
  ['Type, nom, valeur','Lis la ligne de gauche à droite : int annonce un entier, zombies est le nom, 3 est la valeur rangée dedans. Le point-virgule termine l’instruction.','int ammo = 3;'],
  ['Les types qu’on va croiser','int pour compter, float pour une valeur à virgule (2.5f), bool pour true/false, std::string pour du texte. Si le code contient déjà le 3, inutile de le retaper : regarde où est le trou.','int ammo = 30;\nfloat speed = 2.5f;\nbool hidden = true;'],
  ['Changer la valeur','Le signe = met une valeur dans une variable. Il ne demande pas « est-ce égal ? » ; ça, on le verra avec ==. Après cette ligne, ammo vaut 29. La munition n’a pas disparu dans un trou noir, promis.','ammo = 29;']
 ],remember:'Avant de répondre : repère le trou. Est-il à la place du type, du nom ou de la valeur ?'},
 conditions:{title:'Le jeu décide quoi faire',lead:'Imagine une porte qui s’ouvre seulement si tu as 10 pièces. Le programme évalue une question qui vaut vrai ou faux, puis exécute les lignes entre accolades uniquement si c’est vrai.',steps:[
  ['Un if complet','Ici, currentPeople > 10 est la question. À 10, la porte reste ouverte ; à 11, elle se ferme. Les parenthèses contiennent le test ; les accolades contiennent l’action.','if (currentPeople > 10) {\n    isDoorClosed = true;\n}'],
  ['= et == ont des boulots différents','= donne une valeur : coins = 10 met 10 pièces dans coins. == pose une question : coins == 10 demande si le nombre actuel est exactement 10. Dans un if on veut une question, donc == pour vérifier l’égalité.','currentPeople = 10; // change la valeur\nif (currentPeople == 10) { // compare\n    cheer();\n}'],
  ['Et, ou, contraire','&& veut dire « les deux doivent être vrais ». || veut dire « au moins un des deux ». ! inverse vrai et faux : !visible est vrai quand visible vaut false. Tu peux lire le test en français avant de choisir le symbole.','if (armed && health > 0) {\n    attack();\n}']
 ],remember:'Lis chaque condition comme une question. >= inclut la limite ; > l’exclut. == compare ; = affecte.'},
 boucles:{title:'Faire répéter sans copier-coller',lead:'Faire apparaître cinq ennemis avec cinq lignes identiques, c’est possible. Faire apparaître cinq mille ennemis comme ça, c’est une punition. Une boucle répète un bloc.',steps:[
  ['Le compteur for','La boucle démarre avec i = 0. Elle continue tant que i < 3. Après chaque passage, i++ ajoute 1. Elle tourne donc avec i = 0, puis 1, puis 2 : exactement trois fois.','for (int i = 0; i < 3; i++) {\n    spawnEnemy();\n}'],
  ['La borne est exclue','Avec i < 5, les valeurs sont 0, 1, 2, 3, 4. Il y a bien cinq tours. Si tu écris i <= 5, tu en obtiens six, le petit piège de bâtard.','for (int i = 0; i < 5; i++) {\n    updateEnemy(i);\n}'],
  ['while : tant que','while vérifie sa condition avant chaque tour. Attention : quelque chose dans la boucle doit finir par rendre la condition fausse, sinon elle ne s’arrête jamais.','while (health > 0) {\n    health -= 10;\n}']
 ],remember:'for quand tu comptes les tours ; while quand tu répètes tant qu’une condition reste vraie.'},
 fonctions:{title:'Des actions qu’on peut rappeler',lead:'Une fonction donne un nom à un morceau de programme. Tu peux l’appeler plusieurs fois sans recopier son contenu, et lui transmettre des valeurs entre parenthèses.',steps:[
  ['Entrée, travail, résultat','Dans doubleDamage, int amount est un paramètre reçu. La fonction calcule amount * 2 puis return renvoie le résultat. Le premier int annonce le type du résultat ; le second celui du paramètre.','int doubleDamage(int amount) {\n    return amount * 2;\n}'],
  ['void : aucune valeur renvoyée','Une fonction qui dessine ou affiche peut ne rien renvoyer. Elle s’appelle quand même, mais on ne range pas son appel dans un int.','void showScore(int score) {\n    DrawText(TextFormat("%d", score), 10, 10, 20, WHITE);\n}'],
  ['Les variables ne se téléportent pas','Une variable créée dans main n’existe pas automatiquement dans showScore. Tu lui donnes la valeur en appelant showScore(score). Le paramètre de la fonction la reçoit sous le nom écrit dans sa déclaration.','int main() {\n    int score = 42;\n    showScore(score);\n}']
 ],remember:'Avant le nom : ce que la fonction renvoie. Entre parenthèses : ce qu’elle reçoit.'},
 structures:{title:'Le plan d’un personnage',lead:'Une struct décrit ce que possède chaque personnage. Ce n’est pas encore un personnage précis : c’est son plan. On crée ensuite des instances distinctes, avec chacune leurs propres PV.',steps:[
  ['Le type','Ici Player décrit deux champs. La définition se termine par ;. Un type tout seul ne fait apparaître aucun joueur.','struct Player {\n    int hp;\n    int score;\n};'],
  ['L’instance','bob est une vraie variable du type Player. On lit ou modifie ses champs avec un point. Si alice est un autre Player, baisser bob.hp ne touche pas alice.hp.','Player bob{100, 0};\nbob.hp -= 10;'],
  ['Un choix nommé','enum class donne des valeurs limitées et lisibles. Un état peut être idle, moving ou dead : il ne peut pas être les trois à la fois. :: indique à quel enum appartient la valeur.','enum class State { idle, moving, dead };\nState state = State::idle;']
 ],remember:'Player est le type ; bob est l’instance ; bob.hp est le champ de cette instance.'},
 jeu:{title:'Ton code réagit aux commandes',lead:'Raylib te donne les touches, les clics et la position de la souris. À chaque tour de la boucle du jeu, tu lis l’input, tu mets à jour le monde, puis tu dessines.',steps:[
  ['La souris est un point','GetMousePosition renvoie un Vector2 : deux nombres x et y. On peut s’en servir comme destination. À l’écran, x augmente vers la droite et y vers le bas.','Vector2 mouse = GetMousePosition();\nunit.destination = mouse;'],
  ['Un clic ou une touche tenue','IsMouseButtonPressed est vrai à l’instant du clic. IsKeyDown est vrai à toutes les images où la touche est tenue. Choisis selon l’action : sélectionner une fois ou déplacer tant qu’on appuie.','if (IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) {\n    selectUnit();\n}'],
  ['Dessiner après mise à jour','Une unité est une donnée, DrawCircle ne fait que la représenter à sa position actuelle. Changer sa couleur de dessin ne modifie pas tout seul son état de jeu.','updateUnit(unit, dt);\nDrawCircleV(unit.position, unit.radius, unit.color);']
 ],remember:'Input → update → dessin. Une position Vector2 contient x et y.'},
 maths:{title:'Les chiffres au service du jeu',lead:'Les maths servent à rendre le jeu cohérent : vitesse, timers, rebonds, hasard. On fait des petits calculs concrets, pas une thèse sur le cosmos.',steps:[
  ['Raccourcis utiles','speed += 5 ajoute 5 à speed. speed -= 5 en retire 5. Ce sont des affectations, pas des comparaisons.','speed += 5;\nhealth -= 10;'],
  ['Le temps réel','GetFrameTime() dit combien de secondes la dernière image a duré. Multiplier une vitesse par cette durée rend le déplacement indépendant du nombre d’images par seconde.','position.x += speed * GetFrameTime();'],
  ['Reste et limites','% donne le reste d’une division entière : 7 % 2 vaut 1. std::min choisit la plus petite valeur : pratique pour empêcher une vitesse de dépasser un maximum.','int side = randomNumber % 2;\nspeed = std::min(speed, maxSpeed);']
 ],remember:'Une vitesse en pixels/seconde devient un déplacement en pixels en la multipliant par des secondes.'},
 collections:{title:'Plusieurs objets dans une liste',lead:'Un std::vector garde plusieurs éléments du même type et peut grandir. C’est parfait pour une horde, des voitures ou des bâtiments. Ne lis jamais son premier élément sans vérifier qu’il existe.',steps:[
  ['Créer et ajouter','Le type entre < > indique ce que la liste contient. push_back ajoute à la fin. Après ces lignes, scores contient 10 puis 20.','std::vector<int> scores;\nscores.push_back(10);\nscores.push_back(20);'],
  ['Indices à partir de zéro','scores[0] est le premier, scores[1] le deuxième. size() vaut 2. scores[2] serait hors de la liste : le C++ ne met pas des coussins sous tes pieds.','int first = scores[0];\nauto count = scores.size();'],
  ['Parcourir et vérifier','Une boucle for peut lire chaque élément. empty() permet de vérifier que la liste est vide avant d’accéder à [0].','if (!scores.empty()) {\n    for (int score : scores) drawScore(score);\n}']
 ],remember:'push_back ajoute ; size compte ; [0] lit le premier ; empty protège la lecture.'},
 references:{title:'L’objet original ou une copie ?',lead:'Quand tu donnes une valeur à une fonction, le C++ peut faire une nouvelle variable locale. Une référence & permet à la fonction de travailler sur l’objet original. Ça évite qu’un ennemi perde 10 PV « pour de faux » pendant qu’il garde toute sa vie dans le vector.',steps:[
  ['Sans & : un autre objet','Dans hit, enemy est une valeur locale. Changer ses PV ne change pas l’ennemi passé à l’appel. Ça peut servir pour un calcul temporaire, mais pas pour les vrais dégâts.','void hit(Enemy enemy) {\n    enemy.hp -= 10;\n}'],
  ['Avec & : le même objet','Enemy& est une référence. enemy.hp agit alors sur l’ennemi d’origine. Dans for (Enemy& e : enemies), chaque e désigne un élément réel du vector.','void hit(Enemy& enemy) {\n    enemy.hp -= 10;\n}'],
  ['const & : lire sans modifier','Si tu veux seulement dessiner, const Enemy& évite une copie et t’empêche de changer l’ennemi par accident. Le & ne signifie pas « modifier » à lui seul : const précise ce qu’on autorise.','void drawEnemy(const Enemy& enemy) {\n    DrawCircleV(enemy.pos, 10, RED);\n}']
 ],remember:'Valeur : variable locale indépendante ; & : même objet ; const & : même objet en lecture seule.'},
 states:{title:'Un état à la fois',lead:'Un PNJ peut patrouiller, poursuivre ou attaquer. Un enum class évite quatre booléens qui seraient tous vrais par accident. À chaque image, on regarde l’état actuel puis on choisit son comportement.',steps:[
  ['La liste des possibilités','Ces noms sont les états autorisés. State::idle désigne précisément l’une des valeurs de State.','enum class State { idle, running, talking };\nState state = State::idle;'],
  ['Une transition','Quand le joueur donne un ordre, on change la valeur stockée dans state. À l’image suivante, l’update peut faire autre chose.','if (moveOrder) state = State::running;'],
  ['Un comportement par état','switch choisit le bloc correspondant. break empêche de continuer dans le bloc suivant. Pense à un aiguillage, pas à trois actions déclenchées ensemble.','switch (state) {\ncase State::running: move(); break;\ncase State::idle: rest(); break;\ndefault: break;\n}']
 ],remember:'Événement → changement d’état → comportement du nouvel état.'},
 collisions:{title:'Qui touche qui ?',lead:'Une image peut être tordue comme un pirate après trois rhums ; une hitbox simple peut quand même approcher sa forme. Rectangle pour une boite, cercle pour une zone ronde, ou plusieurs petites formes ensemble.',steps:[
  ['Définir la zone','Rectangle contient x, y, largeur et hauteur. Il faut l’actualiser quand l’objet bouge, sinon le dessin et la collision ne sont plus au même endroit.','Rectangle box{player.x, player.y, width, height};'],
  ['Tester le contact','CheckCollisionRecs renvoie true si deux rectangles se chevauchent. Ce bool peut déclencher une action : dégâts, score, rebond.','if (CheckCollisionRecs(playerBox, wallBox)) {\n    stopPlayer();\n}'],
  ['La souris et les cercles','CheckCollisionPointRec teste un clic dans une boite. CheckCollisionCircles teste deux cercles avec position et rayon pour chacun.','bool clicked = CheckCollisionPointRec(mouse, box);']
 ],remember:'La hitbox suit l’objet ; le test de collision renvoie vrai ou faux ; l’action vient après.'},
 architecture:{title:'Ranger son projet sans le casser',lead:'Quand le jeu grandit, un seul main.cpp devient une soupe de nouilles. Un .h annonce les types et les fonctions ; un .cpp définit le travail réel. On garde les noms et types cohérents entre les deux.',steps:[
  ['Déclaration puis définition','Dans le header, la déclaration se termine par ;. Dans le .cpp, la définition contient des accolades et le code.','// player.h\nvoid movePlayer(Player& p);\n// player.cpp\nvoid movePlayer(Player& p) { p.x += 1; }'],
  ['Méthode et constructeur','Une méthode appartient à un type, d’où Player::move. Le constructeur Player() initialise une instance au moment où on la crée.','struct Player {\n    int hp;\n    Player() : hp(100) {}\n    void move();\n};'],
  ['Séparer les responsabilités','Input lit les commandes, update change les données, draw affiche. Si draw change les PV par surprise, retrouver le bug devient une chasse au trésor sans carte.','readInput();\nupdateWorld(dt);\ndrawWorld();']
 ],remember:'Le header annonce ; le .cpp définit ; les noms et paramètres doivent correspondre.'},
 coordinates:{title:'Se repérer dans un monde 2D',lead:'Un point sur l’écran a deux coordonnées. x va vers la droite ; dans Raylib, y va vers le bas. Si tu connais départ et arrivée, leur différence donne une direction et une distance.',steps:[
  ['Arrivée moins départ','Si tu passes de x=20 à x=35, dx vaut +15. De x=35 à x=20, dx vaut -15 : le signe indique le sens. Même calcul pour y.','float dx = target.x - player.x;\nfloat dy = target.y - player.y;'],
  ['Pythagore pour la distance','Un déplacement de 3 sur x et 4 sur y mesure 5 au total : √(3²+4²). Pour comparer deux distances, on peut même comparer les carrés et éviter sqrtf.','float d = sqrtf(dx*dx + dy*dy);'],
  ['Centre, angle, zoom','Le centre d’un sprite est son coin plus la moitié de sa taille. Un angle donne une direction avec cosf sur x et sinf sur y. Un zoom multiplie les distances dessinées, pas les coordonnées du monde.','float centerX = x + width / 2.0f;']
 ],remember:'x avec x, y avec y. Pour une direction : cible moins départ.'},
 movement:{title:'La velocity sans migraine',lead:'Position = où tu es. Velocity = dans quel sens et à quelle vitesse tu te déplaces. Une velocity (120, 0) signifie 120 pixels vers la droite chaque seconde, pas 120 pixels à chaque image.',steps:[
  ['Transformer la vitesse en déplacement','dt est la durée de l’image en secondes. À 120 px/s, une image de 1/60 seconde avance de 2 px. Une image de 1/30 seconde avance de 4 px : après une seconde, le total reste autour de 120 px.','position.x += velocity.x * dt;'],
  ['Deux axes, une direction','Une destination donne une direction : destination - position sur x et sur y. Normaliser ramène cette direction à une longueur de 1, puis on la multiplie par la vitesse voulue. Sans ça, la diagonale peut aller plus vite.','Vector2 direction = Vector2Normalize(Vector2Subtract(target, pos));\nvelocity = Vector2Scale(direction, speed);'],
  ['S’arrêter au bon endroit','À chaque update, calcule ce qu’il reste jusqu’à la destination. Quand tu es assez proche, mets la position exactement sur la cible et arrête la vitesse ; sinon tu peux osciller autour comme une mouche bourrée.','if (Vector2Distance(pos, target) < 2.0f) {\n    pos = target;\n    velocity = {0, 0};\n}']
 ],remember:'Position += velocity × dt. La vitesse décrit le mouvement ; la position décrit le lieu.'},
 physics:{title:'Accélérer, sauter, retomber',lead:'Une accélération change la vitesse ; la vitesse change la position. Dans cet ordre, à chaque image. La gravité est simplement une accélération vers le bas. Rien à voir avec un bouton « tomber » caché dans le PC.',steps:[
  ['Deux mises à jour','Si gravity vaut 900 pixels/seconde², chaque seconde la vitesse verticale augmente de 900. Chaque image, on ajoute gravity × dt à velocity.y, puis velocity.y × dt à position.y.','velocity.y += gravity * dt;\nposition.y += velocity.y * dt;'],
  ['Sauter dans Raylib','L’axe y augmente vers le bas. Pour partir vers le haut, donne une velocity.y négative. Quand le joueur touche le sol, replace-le sur le sol et remets sa vitesse verticale à zéro.','if (pressedJump && onGround) {\n    velocity.y = -jumpSpeed;\n    onGround = false;\n}'],
  ['Frein et rebond','La friction réduit progressivement la vitesse ; un rebond inverse son signe. Un rebond à 80 % multiplie aussi sa taille par 0.8.','velocity.y = -velocity.y * 0.8f;']
 ],remember:'Accélération → velocity → position. Vers le haut = y négatif à l’écran.'},
 camera:{title:'Monde, écran et couches',lead:'Une caméra choisit quelle partie du monde est visible. Le HUD doit rester accroché à l’écran, même si la caméra suit le joueur. Et l’ordre de dessin décide qui passe devant.',steps:[
  ['Dessiner le monde','BeginMode2D(camera) applique la caméra aux dessins suivants. EndMode2D la retire. Ensuite seulement, dessine le HUD à des coordonnées fixes de l’écran.','BeginMode2D(camera);\ndrawWorld();\nEndMode2D();\ndrawHud();'],
  ['Sprites et textures','Charge une texture une seule fois avant la boucle. Dessine-la autant que tu veux, puis libère-la à la fin. Le dernier dessin apparaît par-dessus les précédents.','Texture2D ship = LoadTexture("ship.png");\nDrawTexture(ship, 20, 30, WHITE);'],
  ['Souris et caméra','GetMousePosition donne des coordonnées écran. Pour cliquer sur une unité du monde quand la caméra bouge, convertis cette position avec GetScreenToWorld2D. Sinon ta sélection tire à côté, et le jeu t’accuse à tort.','Vector2 mouseWorld = GetScreenToWorld2D(GetMousePosition(), camera);']
 ],remember:'Monde dans Begin/EndMode2D ; HUD après ; dernier dessin devant.'},
 memory:{title:'Références, adresses et pointeurs',lead:'Ici, on distingue trois choses : un objet, son adresse, et la valeur rangée à cette adresse. Les symboles & et * changent de rôle selon qu’ils sont dans une déclaration ou devant une variable. On y va doucement, sans photocopieuse imaginaire.',steps:[
  ['Référence : un autre nom','int& ref = hp donne à ref accès au même entier hp. Changer ref change hp. Ce n’est pas « & sert à modifier » : const int& permet justement de lire le même objet sans le changer.','int hp = 100;\nint& ref = hp;\nref -= 10; // hp vaut 90'],
  ['Adresse et pointeur','&hp dans une expression récupère l’adresse de hp. int* ptr déclare une variable qui stocke cette adresse. ptr peut valoir nullptr : vérifie-le avant d’y toucher.','int* ptr = &hp;\nif (ptr != nullptr) { /* adresse valide */ }'],
  ['Lire la cible avec * ou ->','*ptr lit ou modifie l’entier visé. Pour un objet pointé, ptr->hp est plus lisible que (*ptr).hp. Ne renvoie jamais l’adresse d’une variable locale qui disparaît à la fin de la fonction.','*ptr += 5;\nenemyPtr->hp -= 10;']
 ],remember:'int& ref : même objet ; &hp : son adresse ; int* ptr : adresse stockée ; *ptr : valeur ciblée.'},
 algorithms:{title:'Chercher sans faire n’importe quoi',lead:'Un algorithme est une méthode précise pour résoudre un problème. Pour trouver un ennemi vivant parmi n ennemis, une boucle peut en visiter jusqu’à n : on note O(n). Deux boucles imbriquées peuvent faire n × m vérifications.',steps:[
  ['Parcourir une foule','Cette boucle visite tous les ennemis. continue ignore ceux qui sont morts ; break pourrait arrêter la recherche dès qu’on a trouvé la bonne cible.','for (const Enemy& e : enemies) {\n    if (e.hp <= 0) continue;\n    draw(e);\n}'],
  ['Trier n’est pas toujours nécessaire','std::sort réorganise tout le vector. Si tu veux seulement le meilleur temps, un seul passage qui garde le minimum suffit. C’est moins de travail et souvent plus clair.','float best = times[0];\nfor (float t : times) if (t < best) best = t;'],
  ['Ne lis pas [0] à vide','Avant times[0], vérifie !times.empty(). Sinon tu demandes au C++ le premier élément d’une liste qui n’en a aucun : il ne va pas t’inventer un champion.','if (!times.empty()) {\n    float best = times[0];\n}']
 ],remember:'Une boucle sur n objets ≈ O(n) ; deux groupes testés par paires ≈ O(n × m).'},
 oop:{title:'Objets, méthodes et constructeurs',lead:'Un type peut contenir des données ET des actions. Chaque Car a son propre fuel ; la méthode drive change le fuel de la voiture sur laquelle on l’appelle.',steps:[
  ['Constructeur : état de départ','Car() se lance à la création d’une Car. Il n’a pas de type de retour. La liste : fuel(100) initialise le champ directement.','struct Car {\n    int fuel;\n    Car() : fuel(100) {}\n};'],
  ['Public et private','public expose les actions que les autres utilisent. private empêche l’accès direct aux détails internes. Une méthode const promet de ne pas modifier l’objet.','class Gun {\npublic: void fire();\nprivate: int ammo = 30;\n};'],
  ['Héritage, seulement si utile','Enemy : public Character dit qu’un ennemi est un personnage. virtual permet à plusieurs types de donner leur propre version de draw ; override vérifie que tu redéfinis bien une méthode. Pour deux objets sans vraie relation, la composition est souvent plus simple.','class Enemy : public Character {\npublic: void draw() override;\n};']
 ],remember:'Constructeur initialise ; méthode agit sur l’instance ; public expose ; private protège.'},
 systems:{title:'Une boucle de jeu qui tient debout',lead:'À chaque image, lis ce que veut le joueur, change le monde, puis affiche le résultat. Un cooldown est un compteur de temps. Une sauvegarde garde les données importantes pour le prochain lancement.',steps:[
  ['Ordre de l’image','readInput découvre les commandes. updateWorld(dt) fait avancer personnages et timers. drawWorld affiche l’état déjà calculé. Ne retire pas des PV dans draw : tu le ferais à chaque image.','readInput();\nupdateWorld(GetFrameTime());\ndrawWorld();'],
  ['Un tir à cadence limitée','Chaque image retire dt au cooldown. Si le joueur tire et que le compteur est terminé, on crée une balle et on remet le délai. IsKeyPressed convient à un événement unique ; IsKeyDown à une action maintenue.','cooldown -= dt;\nif (pressed && cooldown <= 0) {\n    fire();\n    cooldown = fireInterval;\n}'],
  ['Sauvegarder des valeurs','Écris score et PV dans un fichier, puis vérifie qu’ils se lisent correctement avant de les appliquer. Une texture est une ressource à recharger, pas une donnée de sauvegarde.','std::ofstream file("save.txt");\nif (file) file << hp << " " << score;']
 ],remember:'Input → update → collisions → rendu. Sauve les données, pas les objets graphiques bruts.'},
 hud:{title:'Un HUD qui raconte la partie',lead:'Le HUD montre ce que le joueur doit savoir maintenant : PV, munitions, ressources ou objectif. Il doit rester à l’écran pendant que la caméra bouge et réagir immédiatement aux événements.',steps:[
  ['Le ratio d’une barre','Avec 50 PV sur 100, ratio vaut 0,5. Une barre de 200 pixels en remplit alors 100. Convertis en float avant de diviser deux entiers, sinon 50/100 risque de devenir 0.','float ratio = static_cast<float>(hp) / maxHp;\nfloat filled = 200.0f * ratio;'],
  ['Protéger et limiter','Si maxHp vaut zéro, ne divise pas. Puis limite ratio entre 0 et 1 avec std::clamp pour que la barre ne déborde pas, même si une sauvegarde contient 999 PV.','if (maxHp > 0) ratio = static_cast<float>(hp) / maxHp;\nratio = std::clamp(ratio, 0.0f, 1.0f);'],
  ['L’ordre visuel','Dessine d’abord le fond, puis la portion remplie. Dessine le HUD après EndMode2D pour qu’il ne parte pas se balader avec la caméra.','DrawRectangle(x, y, 200, 20, DARKGRAY);\nDrawRectangle(x, y, filled, 20, RED);']
 ],remember:'Barre = largeur × (valeur actuelle / maximum), avec maximum non nul.'},
 menus:{title:'Des boutons qui font vraiment quelque chose',lead:'Menu, partie et pause sont des états différents. Un bouton est une zone à l’écran, un aspect visuel et une action quand on clique. Si sa hitbox est à côté de son dessin, le joueur va traiter ton menu de tous les noms, à raison.',steps:[
  ['Survol puis clic','CheckCollisionPointRec dit si la souris est dans le rectangle. IsMouseButtonPressed détecte le début du clic : l’action part une fois, pas 60 fois par seconde.','bool hovered = CheckCollisionPointRec(mouse, playButton);\nif (hovered && IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) startGame();'],
  ['La pause est un état','Quand screen vaut paused, on dessine le menu de pause mais on n’appelle plus updateWorld. Le monde attend ; la fenêtre continue à se dessiner.','if (screen == Screen::playing) updateWorld(dt);\nif (screen == Screen::paused) drawPauseMenu();'],
  ['Retour visuel','Le bouton change de couleur au survol, son texte dit ce qu’il fait, sa zone cliquable correspond à la forme visible. Le ternaire choisit une des deux couleurs.','Color color = hovered ? YELLOW : GRAY;']
 ],remember:'Un clic ponctuel : Pressed. Une touche tenue : Down. Menu et pause ont leurs états.'},
 animation:{title:'Des sprites vivants et du son au bon moment',lead:'Une animation est une suite d’images dans une texture. Un timer décide quand passer à la suivante. Un son de tir se joue une fois au déclenchement, pas à chaque image, sinon l’audio devient une perceuse dans une boite de conserve.',steps:[
  ['Timer indépendant des FPS','Ajoute dt au timer. Quand il atteint frameDuration, avance d’une image. Le modulo % ramène la frame à zéro après la dernière.','timer += dt;\nif (timer >= frameDuration) {\n    timer = 0;\n    frame = (frame + 1) % frameCount;\n}'],
  ['Afficher un morceau de la texture','Le Rectangle source désigne la frame dans la sprite sheet. Sa coordonnée x vaut frame × frameWidth. DrawTextureRec affiche ce morceau, pas toute la feuille.','Rectangle source{frame * frameWidth, 0, frameWidth, frameHeight};\nDrawTextureRec(sheet, source, pos, WHITE);'],
  ['Charger et jouer un son','LoadSound au démarrage ; PlaySound lors de l’événement ; UnloadSound à la fin. Ne recharge pas le fichier à chaque tir.','Sound shot = LoadSound("shot.wav");\nif (firedThisFrame) PlaySound(shot);']
 ],remember:'Les animations utilisent dt ; les sons se déclenchent sur un événement ponctuel.'},
 persistence:{title:'Sauvegarder sans croire le fichier sur parole',lead:'Une sauvegarde est une liste de valeurs nécessaires pour reprendre : PV, score, ressources, position. Un fichier peut manquer, être incomplet ou contenir une vieille version. Le jeu doit pouvoir redémarrer proprement dans ces cas.',steps:[
  ['Écrire et relire','ofstream écrit avec << ; ifstream lit avec >>. Écris et lis les champs dans le même ordre. Vérifie que l’opération a réussi avant d’utiliser les résultats.','std::ofstream out("save.txt");\nout << hp << " " << score;'],
  ['Valider les valeurs','Une lecture peut réussir avec hp = -400. Teste les bornes avant d’appliquer la sauvegarde. Si ça échoue, garde un état sûr et dis au joueur ce qui s’est passé.','if (hp >= 0 && hp <= maxHp) {\n    player.hp = hp;\n}'],
  ['Numéro de version','Écris une version en tête. Quand tu ajouteras des champs, tu sauras distinguer une ancienne sauvegarde d’une nouvelle au lieu de lire la pierre comme si c’étaient des PV.','out << 2 << "\\n";\nout << hp << " " << score;']
 ],remember:'Ouvrir → lire → valider → appliquer. Les adresses mémoire et textures ne sont pas des données sauvegardables.'},
 ai:{title:'Un ennemi avec un cerveau raisonnable',lead:'Une IA simple observe le monde et choisit un comportement. L’ennemi n’a pas besoin de lire dans tes pensées : distance, visibilité et PV suffisent pour patrouiller, poursuivre, attaquer ou fuir.',steps:[
  ['Perception','Calcule la distance et éventuellement si un obstacle coupe la vue. Les valeurs perçues servent à décider, elles ne déplacent pas encore l’ennemi.','bool near = distance < sightRange;'],
  ['Priorité des décisions','L’ordre des if compte. Si l’ennemi manque de PV, il fuit avant de penser à attaquer. Sinon il attaque à portée, poursuit s’il voit le joueur, ou reprend sa patrouille.','if (hp < 20) state = State::flee;\nelse if (distance < attackRange) state = State::attack;\nelse if (canSeePlayer) state = State::chase;'],
  ['Comportement','Après avoir choisi state, un switch appelle l’action correspondante. Garde la décision et l’action séparées : c’est plus facile à déboguer quand un zombie décide de fuir un mur.','switch (state) {\ncase State::chase: followPlayer(); break;\ncase State::attack: tryAttack(); break;\ndefault: patrol(); break;\n}']
 ],remember:'Observer → choisir l’état → agir. Les priorités des conditions changent le comportement.'},
 pathfinding:{title:'Trouver une route sans traverser les murs',lead:'Dans une grille, chaque case est libre ou bloquée. Pour aller d’un bâtiment à un autre, on examine les cases voisines jusqu’à la destination, puis on reconstruit le chemin.',steps:[
  ['Coordonnées de grille','Avec width cases par ligne, l’indice linéaire vaut row × width + column. L’inverse utilise division entière pour row et modulo % pour column.','int index = row * width + column;\nint row = index / width;\nint column = index % width;'],
  ['BFS, étape par étape','Place le départ dans une file. Sors une case, regarde ses voisins libres encore non visités, marque-les et note leur parent. Répète. Quand tu trouves la cible, remonte les parents pour obtenir le trajet.','visited[next] = true;\nparent[next] = current;\nfrontier.push(next);'],
  ['Quand A* sert','BFS trouve un plus court chemin en nombre de pas si chaque case coûte pareil. A* utilise en plus une estimation de la distance restante pour explorer en priorité les cases prometteuses. Ce n’est pas un passe-muraille magique : les obstacles restent interdits.','bool usable = walkable[next] && !visited[next];']
 ],remember:'Ne revisite pas une case ; garde son parent ; reconstruis le chemin depuis la destination.'},
 economy:{title:'Une économie qui ne vole pas le joueur',lead:'Une caserne coûte bois et pierre. Si la pierre manque, ne retire pas d’abord le bois en espérant que ça passe. Vérifie toutes les ressources, puis paie et lance le chantier.',steps:[
  ['Vérifier avant de payer','canBuild est vrai seulement si les deux stocks suffisent. >= accepte le prix exact. L’interface peut afficher combien il manque pour rendre un bouton grisé compréhensible.','bool canBuild = wood >= costWood && stone >= costStone;'],
  ['Paiement cohérent','Dans le même if, retire les deux coûts. Si canBuild est faux, rien ne change. Une file peut ensuite garder les bâtiments en attente.','if (canBuild) {\n    wood -= costWood;\n    stone -= costStone;\n    buildQueue.push_back(BuildingType::barrack);\n}'],
  ['Production et temps','Une scierie qui produit 2 bois par seconde ajoute 2 × dt chaque image. std::min empêche de dépasser la capacité.','wood = std::min(wood + 2.0f * dt, maxWood);']
 ],remember:'Tout vérifier → tout payer → lancer la construction. Production = taux × dt.'},
 finalsystems:{title:'Assembler un vrai petit jeu',lead:'Un prototype jouable n’est pas 500 fonctions collées dans main. Les systèmes ont chacun une responsabilité : commandes, simulation, collisions, affichage, son et sauvegarde. Quand quelque chose casse, on reproduit le bug et on cherche l’étape fautive.',steps:[
  ['L’ordre de l’image','Lis les commandes, mets à jour, résous les collisions, puis dessine le monde et le HUD. Le rendu n’invente pas de nouvelles données de gameplay.','readInput();\nupdateWorld(dt);\nresolveCollisions();\ndrawWorld();\ndrawHud();'],
  ['Déboguer avant d’optimiser','Un ennemi traverse le mur ? Affiche sa position et sa hitbox, reproduis le cas et vérifie quand la collision est testée. Changer dix fonctions au hasard transforme un bug en dix bugs.','if (enemy.hp <= 0) continue;'],
  ['Mesurer le coût','100 balles × 500 ennemis = jusqu’à 50 000 tests de collision par image. Commence par ignorer les balles hors carte et les ennemis morts, puis mesure de nouveau.','if (bullet.outsideWorld) continue;\nif (enemy.hp <= 0) continue;']
 ],remember:'Un système = une responsabilité. Reproduire → observer → corriger → mesurer.'}
};
const courseJokes={
 bases:'Le premier boss du C++ reste le point-virgule. Il a l’air petit, le fourbe.',
 conditions:'La porte avec 9 pièces ne fait pas de crédit, même si tu demandes gentiment.',
 boucles:'Copier-coller 500 fois, c’est du sport pour les doigts et un crime pour le cerveau.',
 fonctions:'Une fonction nommée fait le boulot. Une fonction nommée truc2finalV3 mérite une discussion.',
 structures:'Bob et Alice ont chacun leurs PV. Sinon Bob tombe et Alice appelle un avocat.',
 jeu:'Le clic gauche choisit, le clic droit ordonne. La souris est officiellement promue général.',
 maths:'T’inquiète, Pythagore ne viendra pas corriger ton code en sandales.',
 collections:'Le vector grandit ; ton envie de tout écrire à la main, normalement, diminue.',
 references:'Les PV doivent baisser sur le vrai ennemi, pas sur son sosie en carton.',
 states:'Un PNJ idle et dead en même temps, c’est soit un bug, soit un lundi.',
 collisions:'Une hitbox qui reste derrière le sprite, c’est un fantôme avec des problèmes de GPS.',
 architecture:'main.cpp ne doit pas devenir un roman de 8 000 lignes sans chapitres.',
 coordinates:'La carte au trésor marche mieux quand x et y ne se disputent pas les axes.',
 movement:'Velocity n’est pas un nom de groupe métal, même si ça sonne presque bien.',
 physics:'La gravité gagne toujours. Sauf si tu oublies de multiplier par dt.',
 camera:'Si le HUD part avec la caméra, tes PV sont en voyage scolaire.',
 memory:'Un pointeur nul est une adresse vers nulle part. N’y va pas en courant.',
 algorithms:'Le meilleur algorithme n’est pas forcément celui qui a le nom le plus intimidant.',
 oop:'N’utilise pas l’héritage juste parce que le mot fait classe au dîner.',
 systems:'Si draw retire des PV, ton rendu est devenu un assassin payé à l’image.',
 hud:'La barre de vie à 900 % a l’air héroïque, mais elle ment comme un arracheur de dents.',
 menus:'Un bouton dessiné ici et cliquable là-bas, c’est un tour de magie nul.',
 animation:'Un son de tir rejoué 144 fois par seconde, c’est une perceuse possédée.',
 persistence:'Une sauvegarde qui annonce -900 PV doit passer un contrôle à l’entrée.',
 ai:'Le zombie peut être bête ; son code, lui, doit être prévisible.',
 pathfinding:'Un mur reste un mur. Même si ton soldat insiste très très fort.',
 economy:'Une caserne ne peut pas te voler du bois quand il manque la pierre. Syndicat des bûcherons oblige.',
 finalsystems:'Si ça rame, mesure avant de sacrifier trois fichiers au dieu de l’optimisation.'
};
