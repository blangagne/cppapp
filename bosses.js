// One synthesis challenge at the end of every chapter. Append only: old IDs stay stable.
const bossTasks={
 bases:['Chargeur de pistolet','Tu as 3 balles de pistolet. Déclare le chargeur puis retire une balle après le tir.','___ ammo = 3;\nammo ___ 1;',['int','-=']],
 conditions:['La porte et Bernard','Ferme après 10 invités OU si Bernard se pointe.','if (currentPeople ___ 10 ___ guestName == "Bernard") {\n    isDoorClosed = true;\n}',['>','||']],
 boucles:['Vague de cinq','Fais apparaître exactement cinq ennemis, indices de 0 à 4.','for (int i = ___; i ___ 5; i++) {\n    spawnEnemy();\n}',['0','<']],
 fonctions:['Dégâts réutilisables','Écris une fonction qui renvoie deux fois les dégâts reçus.','___ doubleDamage(int damage) {\n    ___ damage * 2;\n}',['int','return']],
 structures:['Un soldat réel','Déclare son plan puis crée Bob avec 100 PV.','___ Soldier { int hp; };\nSoldier bob{___};',['struct','100']],
 jeu:['Clic sur la carte','Au clic gauche, récupère une position 2D de la souris.','if (IsMouseButtonPressed(MOUSE_BUTTON___)) {\n    Vector2 target = ___();\n}',['LEFT','GetMousePosition']],
 maths:['Déplacement stable','Ajoute un boost, puis déplace la voiture selon le temps.','speed ___ 10;\ncar.x += speed * ___();',['+=','GetFrameTime']],
 collections:['Horde sans crash','Ajoute un zombie, puis lis le premier uniquement si la liste n’est pas vide.','healths.___(100);\nif (!healths.___()) first = healths[0];',['push_back','empty']],
 references:['Soigner le vrai joueur','La fonction doit modifier les vrais PV, puis leur ajouter 20.','void heal(int___ hp) {\n    hp ___ 20;\n}',['&','+=']],
 states:['Patrouille puis attaque','Quand tu vois le joueur, passe à l’état attack.','if (canSeePlayer) state = State::___;\nif (state ___ State::attack) attack();',['attack','==']],
 collisions:['Mur solide','Teste le chevauchement et annule le déplacement.','if (___(playerBox, wallBox)) {\n    player.pos = ___;\n}',['CheckCollisionRecs','previousPos']],
 architecture:['Une fonction en deux fichiers','Annonce la fonction dans player.h, puis définis-la dans player.cpp.','// player.h\n___ movePlayer(Player& p);\n// player.cpp\nvoid ___(Player& p) { p.x += 1; }',['void','movePlayer']],
 coordinates:['Vers la cible','Calcule les deux écarts de la position vers la cible.','float dx = target.___ - player.x;\nfloat dy = target.y - player.___;',['x','y']],
 movement:['Velocity en action','Avance sur les deux axes sans dépendre des FPS.','position.x += velocity.x * ___;\nposition.y += velocity.___ * dt;',['dt','y']],
 physics:['Saut et chute','Lance le saut vers le haut, puis applique la gravité avec dt.','velocity.y = ___jumpSpeed;\nvelocity.y ___ gravity * dt;',['-','+=']],
 camera:['Monde puis HUD','Dessine le monde sous la caméra, puis le HUD à l’écran.','___(camera);\ndrawWorld();\n___();\ndrawHud();',['BeginMode2D','EndMode2D']],
 memory:['Pointeur prudent','Stocke l’adresse de hp et modifie la cible seulement si elle existe.','int* ptr = ___hp;\nif (ptr != nullptr) ___ptr -= 10;',['&','*']],
 algorithms:['Meilleur temps','Ne lis le premier temps que si la liste existe, puis parcours-la.','if (!times.___()) {\n    float best = times[___];\n}',['empty','0']],
 oop:['Constructeur du chargeur','Initialise le chargeur à 30, puis expose une méthode de tir.','class Gun {\npublic:\n    Gun() : ammo(___) {}\n    void ___();\nprivate:\n    int ammo;\n};',['30','fire']],
 systems:['Image et cadence','Actualise le délai avant le tir et dessine après la simulation.','cooldown ___ dt;\nupdateWorld(dt);\n___();',['-=','drawWorld']],
 hud:['Barre de PV','Calcule un ratio flottant puis la largeur affichée.','float ratio = static_cast<float>(hp) ___ maxHp;\nfloat filled = 200.0f ___ ratio;',['/','*']],
 menus:['Bouton Jouer','Démarre au clic ponctuel seulement si la souris survole le bouton.','if (hovered ___ IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) {\n    ___();\n}',['&&','startGame']],
 animation:['Sprite et son','Avance la frame en boucle et joue le son lors d’un tir.','frame = (frame + 1) ___ frameCount;\nif (firedThisFrame) ___(shot);',['%','PlaySound']],
 persistence:['Écrire puis vérifier','Ouvre la sauvegarde et écris les PV si le fichier est utilisable.','std::ofstream out("save.txt");\nif (___) out ___ hp;',['out','<<']],
 ai:['Priorité de fuite','Fuis si tes PV sont bas ; sinon attaque si le joueur est proche.','if (hp < 20) state = State::___;\nelse if (near) state = State::___;',['flee','attack']],
 pathfinding:['Une case visitée','Note que la case voisine est visitée et mémorise son parent.','visited[next] = ___;\nparent[next] = ___;',['true','current']],
 economy:['Payer sans dette','Vérifie le bois ET la pierre, puis retire les deux coûts.','if (wood >= costWood ___ stone >= costStone) {\n    wood ___ costWood;\n    stone -= costStone;\n}',['&&','-=']],
 finalsystems:['Boucle du prototype','Lis les commandes, mets à jour avec dt, puis dessine.','while (!WindowShouldClose()) {\n    ___();\n    updateWorld(___);\n    drawWorld();\n}',['readInput','GetFrameTime()']]
};
for(const chapter of chapters){const [title,prompt,snippet,answers]=bossTasks[chapter.id];const remaining=[...answers];const number=chapter.exercises.length+1,chapterIndex=chapters.indexOf(chapter);const challenge={id:`${chapter.id}-${number}`,chapter:chapter.id,chapterIndex,chapterName:chapter.name,number,type:'code',boss:true,title,prompt,snippet,answers,hint1:'Lis le code de haut en bas : chaque trou sert une action différente.',hint2:`Dans l’ordre : ${answers.join(' puis ')}.`,solution:snippet.replace(/___/g,()=>remaining.shift())};challenge.answers=[...bossTasks[chapter.id][3]];chapter.exercises.push(challenge)}
// Rebuild the flat list so the challenge sits before the next chapter.
const oldExercises=new Map(exercises.map(ex=>[ex.id,ex]));
exercises.splice(0,exercises.length,...chapters.flatMap(ch=>ch.exercises.map((item,i)=>oldExercises.get(`${ch.id}-${i+1}`)||item)));
