/* Le Campus des Flocons — contenus éducatifs originaux, niveau 4e année Ontario. */
(() => {
  const subjects = [
    {id:'fr', name:'Français',icon:'📖',desc:'Lire, comprendre, écrire et s’exprimer',group:'Langues'},
    {id:'math',name:'Mathématiques',icon:'🔢',desc:'Nombres, fractions, problèmes, mesures et logique',group:'STIM'},
    {id:'en',name:'English',icon:'🗣️',desc:'Reading, speaking, vocabulary and grammar',group:'Langues'},
    {id:'sci',name:'Sciences',icon:'🔬',desc:'Habitats, lumière, son, roches et mécanismes',group:'STIM'},
    {id:'soc',name:'Études sociales',icon:'🌎',desc:'Le Canada, ses régions et les sociétés anciennes',group:'Découverte'},
    {id:'arts',name:'Arts',icon:'🎨',desc:'Dessin, musique, théâtre et créativité',group:'Création'},
    {id:'sante',name:'Santé et mouvement',icon:'🤸',desc:'Bouger, dormir, manger et rester en sécurité',group:'Vie quotidienne'},
    {id:'orga',name:'Autonomie',icon:'⭐',desc:'Organisation, attention, méthode et confiance',group:'Vie quotidienne'}
  ];
  const modules=[]; let seq=0;
  const q=(ask,good,bad1,bad2,why)=>({ask,good,bad:[bad1,bad2],why});
  const add=(s,unit,title,learn,example,steps,questions)=>{
    const id=s+'-'+(++seq).toString().padStart(2,'0');
    modules.push({id,subject:s,unit,title,learn,example,steps,questions:questions.map(a=>q(...a))});
  };
  // FRANÇAIS — lire, comprendre, rédiger, maîtriser la langue.
  add('fr','Lecture','Faire une inférence','Une inférence est une idée que tu comprends grâce aux indices du texte, même si elle n’est pas écrite directement.','« Léa prend son parapluie et ses bottes. » On peut déduire qu’il risque de pleuvoir.','Lis → repère deux indices → formule une déduction → vérifie qu’elle est logique.',[
    ['Léa met des mitaines. Quel temps fait-il probablement ?','Il fait froid.','Il fait très chaud.','C’est forcément l’été.','Les mitaines sont utiles lorsqu’il fait froid.'],
    ['Une inférence s’appuie sur…','des indices du texte','une réponse inventée au hasard','le dernier mot uniquement','On déduit grâce à ce qui est écrit.'],
    ['« Le gâteau a disparu, il reste des miettes. » Que peut-on supposer ?','Quelqu’un en a mangé.','Il n’a jamais existé.','La table est neuve.','Les miettes sont un indice.']]);
  add('fr','Lecture','Prédire la suite d’un récit','Prédire, c’est imaginer ce qui pourrait arriver ensuite à partir des informations disponibles.','« Le ciel devient noir et le vent se lève. » On peut prédire l’arrivée d’un orage.','Cherche des indices, fais une hypothèse, puis compare-la à la suite du texte.',[
    ['Quelle prédiction est appuyée par un ciel très sombre ?','La pluie pourrait arriver.','Il ne pleuvra jamais.','Un chat va parler.','La météo fournit un indice.'],
    ['Une bonne prédiction est…','plausible et justifiée','toujours certaine','sans rapport avec le texte','Une prédiction peut être infirmée.'],
    ['Après avoir lu la suite, il faut…','vérifier sa prédiction','oublier les indices','changer le texte','Comparer hypothèse et réalité aide à comprendre.']]);
  add('fr','Écriture','Les cinq étapes d’un récit','Un récit comporte souvent une situation initiale, un élément déclencheur, des péripéties, un dénouement et une situation finale.','Inès joue au parc → elle perd sa gourde → elle cherche → la retrouve → retourne jouer.','Écris une phrase par étape avant de rédiger un paragraphe.',[
    ['Que présente la situation initiale ?','Les personnages et le contexte.','La solution finale.','Le titre seulement.','Elle indique le point de départ de l’histoire.'],
    ['Que fait l’élément déclencheur ?','Il lance le problème ou l’aventure.','Il termine l’histoire.','Il donne uniquement une date.','C’est ce qui change la situation.'],
    ['Le dénouement sert à…','résoudre le problème','introduire le héros','supprimer le récit','Le dénouement règle la principale difficulté.']]);
  add('fr','Écriture','Biographie et autobiographie','Une biographie raconte la vie de quelqu’un; dans une autobiographie, la personne raconte sa propre vie.','« Nora est née à Ottawa » : biographie. « Je suis née à Ottawa » : autobiographie.','Observe les pronoms et demande-toi qui raconte.',[
    ['« Je raconte mon enfance » est une…','autobiographie','recette','biographie d’une autre personne','Le « je » raconte sa propre vie.'],
    ['Une biographie présente…','la vie d’une personne','seulement des mesures','une liste de courses','Elle raconte des faits importants de la vie.'],
    ['Pour une biographie, on utilise souvent…','il ou elle','uniquement tu','aucun pronom','Le narrateur parle d’une autre personne.']]);
  add('fr','Grammaire','Sujet, prédicat, complément','Le sujet indique de qui ou de quoi on parle; le prédicat dit ce que le sujet fait ou est. Le complément de phrase ajoute souvent un lieu ou un temps.','« Ce matin, Douaa lit un livre. » Sujet : Douaa. Prédicat : lit un livre. Complément : Ce matin.','Trouve le verbe conjugué, puis demande « qui est-ce qui ? ».',[
    ['Dans « Le chat dort », quel est le sujet ?','Le chat','dort','Le','On parle du chat.'],
    ['Dans « Lina dessine une fleur », quel est le prédicat ?','dessine une fleur','Lina','une','Il précise ce que fait Lina.'],
    ['Dans « Demain, nous visiterons le musée », « Demain » est…','un complément de phrase','un sujet','un verbe','Il précise le moment.']]);
  add('fr','Grammaire','Classes de mots','Un nom désigne une personne, un lieu ou une chose. Un déterminant l’accompagne. Un adjectif précise le nom. Un verbe indique une action ou un état.','Dans « la jolie fleur pousse », la = déterminant, jolie = adjectif, fleur = nom, pousse = verbe.','Classe chaque mot en regardant son rôle dans la phrase.',[
    ['Dans « une grande maison », « grande » est…','un adjectif','un verbe','un déterminant','Il décrit le nom maison.'],
    ['Dans « le chien court », « chien » est…','un nom','un verbe','une préposition','Le chien est l’être dont on parle.'],
    ['Dans « trois livres », « trois » est ici…','un déterminant','un verbe','un pronom personnel','Il précise la quantité de livres.']]);
  add('fr','Orthographe','A, à et as','« a » vient du verbe avoir avec il/elle; « as » avec tu; « à » est une préposition. Essaie de remplacer a ou as par avait/avais.','« Elle a un vélo. Tu as un livre. Elle va à l’école. »','Repère le sujet et effectue le remplacement.',[
    ['Complète : « Lina ___ un crayon. »','a','à','as','Elle avait un crayon : verbe avoir.'],
    ['Complète : « Tu ___ raison. »','as','à','a','Avec tu, on écrit as.'],
    ['Complète : « Je vais ___ Ottawa. »','à','a','as','Ici « à » indique un lieu.']]);
  add('fr','Orthographe','Son et sont','« son » accompagne un nom; « sont » est le verbe être au pluriel. Remplace « sont » par « étaient » pour vérifier.','« Son sac est bleu. Les sacs sont bleus. »','Cherche si le mot désigne une possession ou un état.',[
    ['« Les enfants ___ contents. »','sont','son','sans','On peut dire : ils étaient contents.'],
    ['« Elle prend ___ cahier. »','son','sont','s’en','Le cahier lui appartient.'],
    ['« Les fleurs ___ rouges. »','sont','son','sa','On peut remplacer par étaient.']]);
  add('fr','Orthographe','Ce et se','« ce » est souvent un déterminant devant un nom; « se » accompagne un verbe pronominal.','« Ce matin, il se prépare. »','Observe si le mot accompagne un nom ou un verbe.',[
    ['« ___ garçon lit. »','Ce','Se','Ses','« Ce » accompagne le nom garçon.'],
    ['« Elle ___ lave les mains. »','se','ce','ses','Le verbe pronominal est se laver.'],
    ['« ___ livre est intéressant. »','Ce','Se','Ses','On montre ce livre.']]);
  add('fr','Conjugaison','Le présent des verbes en -er','Au présent, les verbes réguliers en -er prennent généralement -e, -es, -e, -ons, -ez, -ent.','Je danse, tu danses, elle danse, nous dansons, vous dansez, elles dansent.','Retire -er pour trouver le radical, puis ajoute la terminaison.',[
    ['Nous (chanter) au présent :','chantons','chantez','chantent','Nous + -ons.'],
    ['Elles (jouer) au présent :','jouent','joue','jouons','Elles + -ent.'],
    ['Tu (marcher) au présent :','marches','marchez','marche','Tu + -es.']]);
  add('fr','Conjugaison','L’imparfait des verbes en -er','L’imparfait sert souvent à décrire une habitude ou une situation passée. Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.','Quand j’étais petite, je dessinais chaque soir.','Prends le radical du verbe et ajoute la bonne terminaison.',[
    ['Je (jouer) à l’imparfait :','jouais','joue','jouerai','Je + -ais à l’imparfait.'],
    ['Nous (marcher) à l’imparfait :','marchions','marchons','marchaient','Nous + -ions.'],
    ['Ils (danser) à l’imparfait :','dansaient','dansent','dansait','Ils + -aient.']]);
  add('fr','Orthographe','Singulier, pluriel et accords','Le déterminant, le nom et l’adjectif s’accordent en nombre. Souvent, on ajoute s au pluriel. Le verbe s’accorde aussi avec son sujet.','« Le petit chien » devient « les petits chiens ».','Souligne le nom, puis vérifie déterminant, adjectif et verbe.',[
    ['Quel est le bon groupe nominal ?','les petites fleurs','les petite fleurs','le petites fleurs','Tous les mots s’accordent au pluriel.'],
    ['Complète : « Les enfants ___ »','jouent','joue','joues','Avec ils/elles, le verbe finit souvent par -ent.'],
    ['« Un grand arbre » au pluriel :','des grands arbres','des grand arbres','des grandes arbre','Arbres et grands prennent s.']]);
  add('fr','Écriture','Marqueurs de relation','Les marqueurs de relation relient les idées : d’abord, ensuite, cependant, parce que, enfin. Ils rendent le texte plus facile à suivre.','D’abord je prépare mon sac. Ensuite je pars. Enfin j’arrive à l’école.','Varie les connecteurs et relis pour vérifier la logique.',[
    ['Quel mot annonce la fin d’une suite d’actions ?','Enfin','D’abord','Parce que','Enfin signale la dernière étape.'],
    ['Quel mot indique une cause ?','Parce que','Ensuite','Puis','Il explique pourquoi.'],
    ['Quel mot signale une étape qui suit ?','Ensuite','Hier','Jamais','Ensuite indique la succession.']]);
  add('fr','Écriture','Écrire puis corriger un paragraphe','Un paragraphe clair présente une idée, donne des détails et se termine correctement. La relecture permet de corriger les accords et la ponctuation.','« J’aime la gymnastique. J’y apprends des mouvements. Je progresse avec de l’entraînement. »','Planifie → rédige 4 phrases → vérifie les majuscules, points, accords et sens.',[
    ['Avant d’écrire, il est utile de…','préparer ses idées','oublier la consigne','mettre des points au hasard','Un plan aide à organiser les phrases.'],
    ['Après avoir écrit, on doit…','relire pour corriger','fermer immédiatement le cahier','supprimer le titre','La relecture améliore la qualité.'],
    ['Une phrase commence généralement par…','une majuscule','une virgule','un point','La majuscule marque le début.']]);
  add('fr','Lecture','Comprendre une consigne','Les consignes utilisent des verbes d’action : souligne, compare, explique, justifie, classe. Chaque verbe demande une action différente.','« Compare deux personnages » : donne des ressemblances ET des différences.','Entoure le verbe de la consigne, puis vérifie que ta réponse fait ce qui est demandé.',[
    ['« Justifie ta réponse » signifie…','explique pourquoi avec une raison','écris un seul nombre','dessine au hasard','Justifier demande une explication.'],
    ['« Classe du plus petit au plus grand » signifie…','ordre croissant','ordre décroissant','ordre alphabétique','On commence par le plus petit.'],
    ['« Relève un mot » veut dire…','trouve et recopie un mot du texte','invente un mot nouveau','réécris tout le livre','Il faut sélectionner un mot présent.']]);
  // MATHÉMATIQUES — notions fondamentales 4e année.
  add('math','Nombres','Les nombres jusqu’à 10 000','Un nombre est composé d’unités, de dizaines, de centaines et de milliers. La position d’un chiffre détermine sa valeur.','4 582 = 4 000 + 500 + 80 + 2.','Lis les chiffres de gauche à droite, puis décompose chaque rang.',[
    ['Quelle est la valeur du 5 dans 5 248 ?','5 000','500','50','Il occupe le rang des milliers.'],
    ['Combien vaut 3 000 + 400 + 20 + 6 ?','3 426','3 246','3 462','On additionne chaque rang.'],
    ['Combien y a-t-il de dizaines dans 7 090 au rang des dizaines ?','9','7','0','Le chiffre des dizaines est 9.']]);
  add('math','Nombres','Comparer et ordonner','Pour comparer deux nombres, examine d’abord les milliers, puis les centaines, les dizaines et les unités.','4 321 < 4 512 car 3 centaines < 5 centaines.','Compare à partir du rang le plus élevé.',[
    ['Quel nombre est le plus grand ?','7 204','7 024','6 999','7 204 contient plus de centaines que 7 024.'],
    ['Range : 850, 805, 580. Quel est le plus petit ?','580','805','850','5 centaines est inférieur à 8 centaines.'],
    ['Que signifie « > » ?','est plus grand que','est plus petit que','est égal à','Le signe ouvre vers le plus grand nombre.']]);
  add('math','Régularités','Suites croissantes et décroissantes','Une suite suit une règle : +3, -10, ×2… Pour la trouver, compare deux nombres consécutifs.','12, 17, 22, 27 : on ajoute 5.','Calcule l’écart, teste la règle plusieurs fois, puis complète.',[
    ['Complète : 110, 120, 130, …','140','135','150','La règle est +10.'],
    ['Complète : 60, 55, 50, …','45','40','56','La règle est -5.'],
    ['Règle de 3, 6, 9, 12 :','+3','×3 chaque fois','-3','Chaque terme augmente de 3.']]);
  add('math','Régularités','Tables de valeurs','Une table de valeurs associe chaque position à un résultat obtenu selon une règle.','Avec +4 et 1→8, on obtient 2→12, 3→16, 4→20.','Trouve la relation entre position et valeur, puis vérifie.',[
    ['Suite : 8, 12, 16, …','20','18','24','On ajoute 4.'],
    ['Règle +25 : 100, 125, 150, …','175','160','200','On ajoute 25.'],
    ['Si on double 3, on obtient…','6','5','9','Doubler revient à multiplier par 2.']]);
  add('math','Calcul','Addition posée','Pour additionner, aligne les unités sous les unités, les dizaines sous les dizaines et pense aux retenues.','258 + 134 = 392. Unités 8+4=12 : on écrit 2 et retient 1.','Estime, pose l’addition, vérifie avec une opération inverse si possible.',[
    ['258 + 134 =','392','382','492','8+4=12, puis 5+3+1=9 dizaines.'],
    ['375 + 225 =','600','590','610','375 + 200 + 25 = 600.'],
    ['689 + 111 =','800','700','900','689+11=700 puis +100=800.']]);
  add('math','Calcul','Soustraction posée','Soustraire revient à trouver ce qui reste ou la différence. On peut échanger une dizaine contre 10 unités.','600 - 245 = 355.','Estime, aligne les chiffres et vérifie par addition.',[
    ['900 - 275 =','625','725','635','275 + 625 = 900.'],
    ['1 000 - 468 =','532','542','632','468 + 532 = 1 000.'],
    ['825 - 397 =','428','438','528','397 + 428 = 825.']]);
  add('math','Calcul','Tables de multiplication 1 à 6','Multiplier permet de compter des groupes égaux. En 4e année, on peut progressivement réviser toutes les tables jusqu’à 10.','4 × 6 = 24 : quatre groupes de six.','Dessine des groupes, utilise des additions répétées puis mémorise.',[
    ['6 × 4 =','24','20','28','6 groupes de 4 valent 24.'],
    ['5 × 6 =','30','25','35','5 groupes de 6 valent 30.'],
    ['3 × 7 =','21','18','24','7+7+7=21.']]);
  add('math','Calcul','Tables de multiplication 7 à 10','La multiplication est commutative : 7×8 = 8×7. Les doubles et les tables connues aident à calculer.','8 × 7 = (8 × 5) + (8 × 2) = 56.','Décompose un facteur, puis vérifie par une autre méthode.',[
    ['7 × 8 =','56','54','64','7 groupes de 8 font 56.'],
    ['9 × 6 =','54','48','64','10×6−6=54.'],
    ['10 × 9 =','90','19','99','Multiplier par 10 donne 90.']]);
  add('math','Calcul','Multiplier par un chiffre','Pour calculer 24 × 3, multiplie les unités, puis les dizaines : 20×3 + 4×3 = 72.','32 × 4 = 30×4 + 2×4 = 128.','Décompose le nombre en dizaines et unités, puis additionne les produits.',[
    ['23 × 3 =','69','63','78','20×3=60 et 3×3=9.'],
    ['40 × 6 =','240','46','24','4 dizaines fois 6 = 24 dizaines.'],
    ['12 × 4 =','48','36','52','10×4+2×4=48.']]);
  add('math','Calcul','Partager et diviser','Diviser, c’est répartir en groupes égaux. La multiplication permet de vérifier un quotient.','24 biscuits partagés entre 6 enfants : 24÷6=4 biscuits chacun.','Cherche la multiplication correspondante.',[
    ['28 ÷ 4 =','7','6','8','4×7=28.'],
    ['45 ÷ 5 =','9','8','10','5×9=45.'],
    ['36 objets en 6 groupes :','6 par groupe','5 par groupe','7 par groupe','36÷6=6.']]);
  add('math','Fractions','Comprendre les fractions','Une fraction représente des parts égales d’un tout. Dans 3/4, le 4 indique le nombre total de parts égales et le 3, les parts choisies.','Une pizza divisée en 4 parts égales dont 1 mangée : 1/4.','Dessine un rectangle en parts égales, colorie les parts demandées.',[
    ['Dans 3/5, quel est le dénominateur ?','5','3','8','C’est le nombre de parts égales du tout.'],
    ['La moitié s’écrit…','1/2','2/1','1/3','Une part sur deux.'],
    ['3 parts sur 4 s’écrit…','3/4','4/3','1/4','3 est le numérateur.']]);
  add('math','Fractions','Comparer des fractions','Avec le même dénominateur, la fraction qui a le plus grand numérateur est la plus grande. On peut aussi dessiner.','3/8 > 2/8. Mais 1/2 = 2/4.','Compare des dessins de parts égales et vérifie les dénominateurs.',[
    ['Quelle fraction est plus grande ?','3/4','1/4','2/4','Avec un même dénominateur, 3 parts > 2 ou 1.'],
    ['Quelle fraction vaut une moitié ?','2/4','1/4','3/4','Deux parts sur quatre = la moitié.'],
    ['1/8 est ___ que 1/4.','plus petite','plus grande','toujours égale','Une part sur huit est plus petite qu’une part sur quatre.']]);
  add('math','Fractions','Fractions équivalentes','Des fractions différentes peuvent représenter la même quantité. Multiplie ou divise le numérateur et le dénominateur par un même nombre non nul.','1/2 = 2/4 = 3/6.','Dessine des barres de fractions pour voir l’égalité.',[
    ['Quelle fraction équivaut à 1/2 ?','3/6','1/3','2/5','3 des 6 parts représentent une moitié.'],
    ['2/3 équivaut à…','4/6','2/6','3/4','On multiplie le haut et le bas par 2.'],
    ['3/9 se simplifie en…','1/3','1/9','3/3','On divise numérateur et dénominateur par 3.']]);
  add('math','Fractions','Une fraction d’un ensemble','Pour trouver 1/4 de 12 objets, partage les 12 objets en 4 groupes égaux : il y a 3 objets par groupe.','3/4 de 12 = 9, car un quart vaut 3 et trois quarts valent 9.','Commence par trouver une part, puis multiplie par le numérateur.',[
    ['1/3 de 15 =','5','3','10','15÷3=5.'],
    ['3/4 de 8 =','6','3','4','8÷4=2 puis 2×3=6.'],
    ['1/2 de 18 =','9','8','10','18÷2=9.']]);
  add('math','Fractions','Fractions impropres et mixtes','Une fraction impropre peut être plus grande qu’un tout. Un nombre mixte combine une partie entière et une fraction.','5/4 = 1 et 1/4, car 4/4 font un entier et il reste 1/4.','Compte les groupes entiers de dénominateurs, puis le reste.',[
    ['5/4 s’écrit…','1 et 1/4','4 et 1/5','5 et 4','4 quarts = 1 entier; reste un quart.'],
    ['7/3 s’écrit…','2 et 1/3','1 et 2/3','3 et 1/7','6/3 = 2, reste 1/3.'],
    ['Quel est un exemple de fraction impropre ?','6/5','2/5','1/8','Le numérateur dépasse le dénominateur.']]);
  add('math','Problèmes','Résoudre un problème en 4 étapes','Lis la question, repère les informations utiles, choisis l’opération puis vérifie la réponse. Une phrase-réponse doit répondre à la question.','Une bibliothèque possède 365 livres et en reçoit 128 : 365+128=493 livres.','1 Lire. 2 Souligner. 3 Calculer. 4 Vérifier et rédiger.',[
    ['Lina a 45 billes et en donne 12. Quelle opération ?','45 − 12','45 + 12','45 × 12','Elle en donne : la quantité diminue.'],
    ['3 boîtes de 8 crayons : quelle opération ?','3 × 8','8 − 3','8 ÷ 3','Il y a trois groupes de huit.'],
    ['Après un calcul, il faut…','relire la question et vérifier','effacer l’énoncé','écrire un nombre sans unité','Vérifier le sens fait partie de la réponse.']]);
  add('math','Données','Lire un tableau et un graphique','Un tableau organise les données. Dans un graphique à bandes, la longueur des bandes indique la quantité. Lis toujours le titre et les unités.','Livres lus : lundi 3, mardi 5, mercredi 2. Le maximum est mardi. Total : 10.','Lis le titre → les étiquettes → les valeurs → compare.',[
    ['Lundi 3, mardi 5, mercredi 2. Quel jour a le maximum ?','Mardi','Lundi','Mercredi','5 est le plus grand nombre.'],
    ['Quel est le total de 3, 5 et 2 ?','10','8','12','3+5+2=10.'],
    ['Un graphique à bandes sert à…','comparer des quantités','conjuguer des verbes','écrire une biographie','On compare visuellement les valeurs.']]);
  add('math','Mesures','Périmètre et aire','Le périmètre mesure le contour; l’aire mesure la surface. Pour un rectangle, périmètre = 2×(longueur+largeur); aire = longueur×largeur.','Rectangle de 5 cm par 3 cm : périmètre 16 cm, aire 15 cm².','Dessine, écris les mesures et n’oublie pas les unités.',[
    ['Périmètre d’un carré de 4 cm de côté :','16 cm','8 cm','16 cm²','Il a quatre côtés de 4 cm.'],
    ['Aire d’un rectangle 4 cm × 3 cm :','12 cm²','14 cm','7 cm²','Aire = longueur×largeur.'],
    ['Quelle unité convient à une aire ?','cm²','cm','minute','Une aire s’exprime en unités carrées.']]);
  add('math','Mesures','Temps et monnaie','Pour calculer une durée, compte les heures et minutes écoulées. Avec la monnaie, additionne les pièces et calcule la différence pour le rendu.','De 16 h 10 à 16 h 40 : 30 minutes. 5 $ − 3,25 $ = 1,75 $.','Utilise une ligne du temps ou pose une soustraction.',[
    ['De 15 h 20 à 16 h 00 :','40 minutes','20 minutes','80 minutes','De 15 h 20 à 16 h, 40 min passent.'],
    ['2 $ + 1,50 $ =','3,50 $','2,50 $','4,50 $','2+1,5=3,5.'],
    ['On paie 3 $ avec 5 $. Monnaie rendue :','2 $','8 $','3 $','5−3=2.']]);
  add('math','Géométrie','Angles et figures','Un angle droit mesure 90°. Un carré a 4 côtés égaux et 4 angles droits; un rectangle a aussi 4 angles droits.','Un coin de feuille est un angle droit.','Observe les côtés et utilise un coin de feuille comme modèle.',[
    ['Combien de côtés a un triangle ?','3','4','5','Triangle = 3 côtés.'],
    ['Combien d’angles droits a un rectangle ?','4','2','0','Chacun des quatre coins est droit.'],
    ['Un angle de 90° est…','droit','plat','nul','90° est la mesure de l’angle droit.']]);
  // ENGLISH — curriculum support for a francophone child.
  add('en','Speaking','Introducing yourself','Use short, clear sentences to introduce yourself: name, age, interests and a question.','“Hello! My name is Douaa. I am nine. I like gymnastics. What do you like?”','Speak slowly, look up and use keywords instead of reading every sentence.',[
    ['Choose the correct sentence:','My name is Douaa.','Me name Douaa.','I name am Douaa.','“My name is…” is correct.'],
    ['How do you say « J’aime la gymnastique »?','I like gymnastics.','I likes gymnastics.','I like gymnastic is.','Use “I like + activity”.'],
    ['A polite greeting is…','Hello!','Go away!','Never!','Hello is a friendly greeting.']]);
  add('en','Reading','Finding details','Read a short sentence and find who, where, when and what happened.','“Emma reads at the library on Monday.” Who? Emma. Where? At the library.','Underline keywords in the question and look for matching information.',[
    ['“Sam plays soccer on Friday.” When does he play?','On Friday.','On Monday.','At the library.','Friday tells us when.'],
    ['“Mia has a blue bag.” What color is the bag?','Blue.','Red.','Green.','Blue describes the bag.'],
    ['“They eat at home.” Where?','At home.','At school.','At the park.','At home tells us where.']]);
  add('en','Grammar','I am, you are, she is','The verb “to be” changes with the subject: I am, you are, he/she/it is, we/they are.','I am happy. She is ready. They are friends.','Look at the subject before choosing the verb.',[
    ['She ___ a student.','is','are','am','She takes is.'],
    ['They ___ at school.','are','am','is','They takes are.'],
    ['I ___ ready.','am','is','are','I takes am.']]);
  add('en','Grammar','Simple present','Use the simple present for habits and facts. For he/she/it, a regular verb often gets -s.','I play. She plays. We read.','Find the subject, then add -s for he or she when needed.',[
    ['She ___ gymnastics.','likes','like','liking','She likes gymnastics.'],
    ['I ___ books.','read','reads','reading is','I read books.'],
    ['He ___ to school.','walks','walk','walkes','He walks to school.']]);
  add('en','Grammar','Plural nouns','Many English nouns become plural with -s. Some take -es, and others are irregular.','One cat → two cats. One box → two boxes. One child → two children.','Read the word and check whether it has an irregular plural.',[
    ['Plural of “book”:','books','bookes','bookies','Add -s.'],
    ['Plural of “box”:','boxes','boxs','boxies','Add -es after x.'],
    ['Plural of “child”:','children','childs','childes','Children is irregular.']]);
  add('en','Speaking','Show and tell','A good show-and-tell presentation has an introduction, 2–3 facts and a conclusion. Maintain friendly eye contact and avoid reading every word.','“This is my medal. I earned it at gymnastics. I felt proud. Thank you!”','Prepare 4 keywords, look up between sentences and practice once aloud.',[
    ['For eye contact, you should…','look up at your listeners sometimes','only read your paper','look at the floor all the time','Looking up helps you connect.'],
    ['To speak naturally, use…','a few keywords','a full page to read quickly','no practice at all','Keywords support memory.'],
    ['How can you end politely?','Thank you for listening.','Go home now.','That is bad.','Thanking listeners is polite.']]);
  add('en','Vocabulary','Everyday school words','Learn useful words for your school day: notebook, pencil, classroom, homework, teacher, library.','“I put my notebook in my schoolbag.”','Say the word, point to the object and use it in a sentence.',[
    ['“Cahier” in English is…','notebook','window','table','Notebook is the schoolbook you write in.'],
    ['“Bibliothèque” in English is…','library','kitchen','garden','Library is where books are kept.'],
    ['“Devoirs” in English is…','homework','breakfast','playground','Homework is schoolwork done at home.']]);
  add('en','Writing','Writing a short paragraph','A paragraph needs a main idea, supporting details and an ending. Use capitals and periods.','“I love reading. My favorite books are adventures. I read every evening.”','Write 3 sentences, then check capitals, punctuation and spelling.',[
    ['A sentence starts with…','a capital letter','a comma','nothing','Capitalize the first word.'],
    ['What ends a statement?','a period','a capital letter','a slash','A period ends a statement.'],
    ['Which is correct?','I like gymnastics.','i like gymnastics','I like gymnastics','The sentence needs a capital and a period.']]);
  // SCIENCES — 2022 Ontario Grade 4 strands, AAM priorities.
  add('sci','Habitats','Habitat et besoins du vivant','Un habitat est le milieu où vit un organisme. Il lui fournit des ressources comme l’eau, la nourriture et un abri.','Une grenouille vit souvent près des étangs où elle trouve eau, nourriture et abri.','Pour chaque animal, nomme son habitat et deux besoins essentiels.',[
    ['Quel milieu est un habitat pour une grenouille ?','Un étang','Un four','Une route très chaude','L’étang offre des ressources.'],
    ['Un habitat fournit notamment…','eau, nourriture et abri','seulement des jouets','uniquement du bruit','Il répond aux besoins du vivant.'],
    ['Un désert est…','un habitat pour certaines espèces','sans vie par définition','une forêt tropicale','Des espèces sont adaptées au désert.']]);
  add('sci','Habitats','Chaînes alimentaires','Dans une chaîne alimentaire, l’énergie passe d’un producteur (plante) à des consommateurs. Les flèches vont vers celui qui mange.','Herbe → lapin → renard.','Repère le producteur et les consommateurs, puis relie-les.',[
    ['Dans herbe → lapin → renard, le producteur est…','l’herbe','le lapin','le renard','La plante fabrique sa matière par photosynthèse.'],
    ['Qui mange l’herbe dans cet exemple ?','Le lapin','Le renard','Le soleil','Le lapin consomme l’herbe.'],
    ['L’énergie d’une chaîne alimentaire vient d’abord généralement…','du Soleil','du plastique','des roches uniquement','Le Soleil permet la photosynthèse.']]);
  add('sci','Habitats','Protéger la biodiversité','La biodiversité est la variété des êtres vivants. La pollution et la destruction des habitats peuvent mettre des espèces en danger.','Planter des espèces indigènes et garder un parc propre soutient la vie locale.','Choisis une action concrète pour protéger un habitat près de chez toi.',[
    ['Quelle action aide un habitat ?','Ramasser les déchets','Jeter du plastique dans l’eau','Détruire les nids','Réduire les déchets limite la pollution.'],
    ['La biodiversité désigne…','la variété du vivant','la vitesse d’un train','la taille d’une pierre','Elle comprend différents êtres vivants.'],
    ['Pourquoi garder les milieux naturels ?','Pour protéger les organismes','Pour enlever toutes les plantes','Pour supprimer les insectes','Les organismes ont besoin de leur habitat.']]);
  add('sci','Lumière et son','La lumière et les ombres','La lumière se déplace généralement en ligne droite. Un objet opaque bloque la lumière et peut créer une ombre.','Une lampe éclaire une main : une ombre apparaît derrière la main.','Place une lampe, un objet et un écran; observe où l’ombre se forme.',[
    ['Quel objet laisse le moins passer la lumière ?','Un carton opaque','Une vitre transparente','De l’eau claire','Opaque signifie qu’il bloque la lumière.'],
    ['Une ombre apparaît quand…','un objet bloque la lumière','un objet émet du son','il n’y a aucun objet','La lumière est interceptée.'],
    ['Le Soleil est…','une source de lumière','un miroir','un objet opaque non lumineux','Le Soleil émet de la lumière.']]);
  add('sci','Lumière et son','Les sons et les vibrations','Le son est produit par une vibration et se propage dans un milieu matériel (air, eau, solides).','Une corde de guitare vibrante produit un son.','Observe un élastique qui vibre pour comprendre le son.',[
    ['Le son commence par…','une vibration','une ombre','un reflet','Une source vibre.'],
    ['Le son peut se propager dans…','l’air','le vide parfait','la lumière uniquement','L’air est un milieu matériel.'],
    ['Une guitare fait du son grâce à…','ses cordes vibrantes','sa couleur','son poids seulement','Les cordes produisent des vibrations.']]);
  add('sci','Mécanismes','Machines et mouvements','Un mécanisme transmet ou transforme un mouvement. Les engrenages sont des roues dentées; les poulies aident à soulever des charges.','Deux engrenages en contact tournent dans des sens opposés.','Observe une bicyclette : quelles pièces transmettent le mouvement ?',[
    ['Une poulie peut servir à…','soulever une charge','écrire un texte','mesurer la température','Une corde et une poulie facilitent le levage.'],
    ['Deux engrenages en contact tournent généralement…','en sens opposés','toujours dans le même sens','sans bouger','Les dents transmettent le mouvement inverse.'],
    ['Une bicyclette contient…','des mécanismes','seulement de la lumière','aucune pièce mobile','Les pédales et la chaîne transmettent le mouvement.']]);
  add('sci','Terre','Roches, minéraux et sols','Les roches sont constituées d’un ou plusieurs minéraux. L’érosion et les processus géologiques modifient les paysages.','Le granite contient plusieurs minéraux, souvent visibles sous forme de grains.','Observe la couleur, les grains et la texture d’une roche sans l’abîmer.',[
    ['Une roche peut contenir…','plusieurs minéraux','toujours du plastique','uniquement de l’eau','Le granite contient différents minéraux.'],
    ['L’érosion peut être causée par…','l’eau et le vent','les cahiers','la lumière d’écran','L’eau et le vent déplacent les matériaux.'],
    ['On peut comparer des roches par…','leur texture et couleur','leur nom uniquement','leur adresse','On observe leurs propriétés physiques.']]);
  // ÉTUDES SOCIALES.
  add('soc','Canada','Provinces et territoires','Le Canada est composé de dix provinces et de trois territoires. L’Ontario est une province; Ottawa est la capitale du Canada.','Le Québec, l’Ontario et la Colombie-Britannique sont des provinces. Le Yukon est un territoire.','Sur une carte, localise l’Ontario, le Québec et Ottawa.',[
    ['Combien de provinces compte le Canada ?','10','13','8','Le Canada compte 10 provinces et 3 territoires.'],
    ['Ottawa est…','la capitale du Canada','la capitale de l’Alberta','un territoire','Ottawa est la capitale fédérale.'],
    ['Le Yukon est…','un territoire','une province','une ville d’Ontario','Le Yukon est l’un des trois territoires.']]);
  add('soc','Canada','Régions physiques et politiques','Une région politique est une division administrative; une région physique désigne un ensemble de paysages ou de reliefs.','L’Ontario est une province; les montagnes Rocheuses forment une région physique importante.','Observe si une carte montre des frontières politiques ou des formes du relief.',[
    ['L’Ontario est…','une région politique (province)','un océan','une chaîne de montagnes','La province est une division administrative.'],
    ['Les montagnes décrivent surtout…','une région physique','un conseil municipal','une frontière scolaire','Le relief est un élément physique.'],
    ['Une carte avec les frontières provinciales montre surtout…','des divisions politiques','les chaînes alimentaires','les horaires de gym','Les provinces sont des divisions politiques.']]);
  add('soc','Géographie','Lire une carte','Une carte comporte souvent un titre, une légende, une échelle et une rose des vents. Les quatre points cardinaux sont nord, sud, est et ouest.','Sur une carte, la rose des vents t’aide à situer Toronto par rapport à Ottawa.','Commence par lire le titre et la légende, puis repère les directions.',[
    ['Quel outil montre le nord sur une carte ?','La rose des vents','Une gomme','Une loupe de laboratoire','La rose des vents indique les directions.'],
    ['Quel point cardinal est opposé au nord ?','Sud','Est','Ouest','Nord et sud sont opposés.'],
    ['La légende sert à…','expliquer les symboles','changer le climat','ajouter du son','Elle aide à décoder la carte.']]);
  add('soc','Environnement','Vivre et protéger les régions du Canada','Les activités humaines utilisent des ressources et peuvent modifier le milieu. Il faut équilibrer les besoins et la protection de l’environnement.','Un parc protège un espace naturel tout en accueillant les visiteurs.','Pour un projet, indique un avantage, un risque et une solution.',[
    ['Quelle action protège une rivière ?','Éviter d’y jeter des déchets','Y verser de l’huile','Enlever toutes les plantes','La pollution menace la qualité de l’eau.'],
    ['Une ressource naturelle est…','l’eau','un cahier fabriqué','une voiture','L’eau existe dans la nature.'],
    ['Un choix durable essaie de…','répondre aux besoins en protégeant le milieu','polluer davantage','épuiser toutes les ressources','Durable vise un équilibre.']]);
  add('soc','Histoire','Sociétés anciennes et vie quotidienne','Les sociétés anciennes avaient différentes façons de vivre, construire, se nourrir et s’organiser. On les étudie à partir de sources.','Une poterie ancienne peut nous renseigner sur la nourriture ou les usages d’une société.','Pose trois questions : Qui ? Où ? À quelle époque ?',[
    ['Une poterie ancienne peut être…','une source historique','un bulletin météo','une invention du futur','Les objets nous donnent des indices sur le passé.'],
    ['Pour étudier une société, on cherche…','des traces et des sources','seulement des rumeurs','un score de jeu','On utilise des preuves historiques.'],
    ['Quel élément aide à situer une société ?','L’époque et le lieu','La couleur préférée du lecteur','Le nom du professeur actuel','Lieu et temps sont essentiels.']]);
  // ARTS.
  add('arts','Arts visuels','Lignes, formes et couleurs','Les lignes peuvent être droites, courbes, ondulées ou brisées. Les couleurs et les formes servent à exprimer des idées et des émotions.','Dessine un autoportrait avec des lignes différentes pour les cheveux et les vêtements.','Observe les détails, choisis trois types de lignes, crée puis explique ton choix.',[
    ['Une ligne en zigzag est…','brisée','toujours un cercle','invisible','Elle change brusquement de direction.'],
    ['Un autoportrait représente…','soi-même','un paysage seulement','une carte du Canada','L’artiste se représente lui-même.'],
    ['Les couleurs peuvent servir à…','exprimer une ambiance','effectuer une soustraction','faire une division','Elles contribuent à l’expression artistique.']]);
  add('arts','Théâtre','Jouer un personnage','Au théâtre, la voix, les gestes et les expressions du visage donnent vie au personnage. Écouter son partenaire est aussi important que parler.','Joue une scène de deux minutes : une amie retrouve un objet perdu.','Choisis un lieu, deux personnages, un problème et une solution.',[
    ['Au théâtre, on exprime les émotions avec…','la voix et les gestes','seulement une calculatrice','des fractions','Le corps et la voix communiquent.'],
    ['Pendant la réplique d’un partenaire, il faut…','écouter','parler sans cesse','quitter la scène','Écouter permet de répondre naturellement.'],
    ['Une pièce courte peut avoir…','un début, un problème et une fin','uniquement un titre','aucun personnage','Une structure rend l’histoire compréhensible.']]);
  add('arts','Musique','Rythmes et pulsation','La pulsation est un battement régulier. Le rythme organise des sons longs et courts. On peut créer un motif avec des frappes de mains.','Tape : main, main, pause, main. Recommence le même motif.','Écoute un court extrait, bats la pulsation et invente un motif.',[
    ['La pulsation est…','un battement régulier','une couleur','un angle droit','Elle permet de garder le tempo.'],
    ['Un rythme peut comporter…','des sons et des silences','seulement des lettres','uniquement des cartes','Les pauses font partie du rythme.'],
    ['Pour jouer ensemble, il faut…','écouter et garder le tempo','aller tous à des vitesses aléatoires','ne pas se regarder','Le tempo commun aide le groupe.']]);
  add('arts','Créativité','Observer et décrire une œuvre','On peut parler d’une œuvre sans dire uniquement « j’aime » ou « je n’aime pas » : nommer les couleurs, les formes, les textures et les émotions.','« Je vois des lignes courbes violettes. Elles me font penser au vent. »','Décris 3 détails visibles puis explique ton impression.',[
    ['Quel commentaire est le plus précis ?','Je vois des lignes courbes bleues.','C’est quelque chose.','Ça existe.','Il nomme des détails observables.'],
    ['Une texture décrit…','l’aspect ou le toucher d’une surface','la durée d’un cours','un type de multiplication','Lisse, rugueux, doux sont des textures.'],
    ['L’observation d’une œuvre commence par…','regarder les détails','chercher une note','compter les devoirs','Il faut observer avant de juger.']]);
  // SANTÉ ET MOUVEMENT.
  add('sante','Équilibre','Sommeil et énergie','Un sommeil suffisant soutient l’apprentissage, l’humeur et la récupération. Un horaire régulier aide le corps.','De 21 h à 7 h, il y a dix heures possibles au lit; le sommeil réel dépend de l’endormissement.','Prépare les affaires la veille et évite les écrans de loisirs avant de dormir.',[
    ['De 21 h à 7 h, il y a…','10 heures','8 heures','12 heures','3 heures avant minuit + 7 heures après minuit.'],
    ['Une bonne routine du soir est…','calme et régulière','avec des vidéos jusqu’au coucher','sans horaire','Le calme aide l’endormissement.'],
    ['Le sommeil aide notamment…','la mémoire et l’attention','à oublier toutes les leçons','à devenir plus petit','Le sommeil soutient les apprentissages.']]);
  add('sante','Équilibre','Alimentation et hydratation','Manger des aliments variés et boire de l’eau aident à fournir de l’énergie pour grandir et bouger.','Pour une collation : un fruit, un yogourt ou une autre option adaptée aux besoins de la famille.','Écoute les signaux de faim et de satiété; prends une gourde d’eau.',[
    ['Quelle boisson hydrate généralement bien ?','L’eau','Une boisson énergisante','Aucune boisson','L’eau est un choix simple.'],
    ['Pourquoi varier les aliments ?','Pour obtenir différents nutriments','Pour éviter tous les légumes','Pour manger toujours pareil','Les aliments apportent différents nutriments.'],
    ['Après le sport, il est utile de…','boire de l’eau','ignorer sa soif','ne jamais se reposer','L’hydratation aide le corps.']]);
  add('sante','Sécurité','Être en sécurité à la maison','Une personne responsable connaît les consignes des adultes, les personnes à joindre et les gestes à éviter. En cas de danger immédiat au Canada, compose le 911.','Si quelqu’un inconnu frappe, ne déverrouille pas la porte sans l’autorisation d’un adulte.','Apprends les contacts d’urgence avec tes parents et répète une situation simple.',[
    ['En cas de danger immédiat au Canada, on appelle…','911','411','311','911 est le numéro d’urgence.'],
    ['Un inconnu sonne à la porte. Tu dois…','suivre les consignes de sécurité des parents','ouvrir tout de suite','donner ton adresse en ligne','Ne laisse pas entrer quelqu’un sans accord.'],
    ['Qui prépare les règles de sécurité à la maison ?','Les adultes responsables avec l’enfant','un jeu vidéo','une publicité','Les consignes doivent être adaptées à la famille.']]);
  add('sante','Mouvement','Gymnastique et activité physique','Bouger développe la coordination, l’équilibre, l’endurance et le plaisir. En gymnastique, l’échauffement et la sécurité sont essentiels.','Avant une séance, fais des mouvements simples adaptés au cours et aux consignes de l’entraîneur.','Choisis une activité que tu aimes et respecte les consignes du club.',[
    ['Avant la gymnastique, on commence par…','un échauffement adapté','une figure dangereuse sans aide','aucun mouvement','L’échauffement prépare le corps.'],
    ['Une nouvelle figure difficile doit être…','apprise avec une personne qualifiée','tentée seule sur un sol dur','faite les yeux fermés','L’encadrement réduit les risques.'],
    ['Le sport peut aider…','l’équilibre et la coordination','à supprimer le besoin de dormir','à éviter de boire','Le mouvement développe des habiletés.']]);
  add('sante','Numérique','Les écrans et la vie privée','Les écrans peuvent être utiles pour apprendre, mais il est important d’avoir du temps pour bouger, jouer et parler. En ligne, on ne partage pas ses informations personnelles.','Ne publie ni adresse, ni école, ni mot de passe; parle à un adulte en cas de message gênant.','Avant de publier, demande-toi : est-ce privé ? est-ce gentil ? est-ce nécessaire ?',[
    ['Un mot de passe doit être…','gardé privé','publié dans un commentaire','donné à tout le monde','Un mot de passe protège un compte.'],
    ['Si un message te met mal à l’aise…','parle à un adulte de confiance','réponds à l’inconnu','envoie ton adresse','Un adulte peut aider.'],
    ['Une bonne journée comprend…','des activités avec et sans écran','uniquement du défilement de vidéos','aucun mouvement','L’équilibre favorise le bien-être.']]);
  // ORGANISATION ET AUTORÉGULATION — objectifs individuels liés au bulletin.
  add('orga','Organisation','Préparer son espace de travail','Un bureau dégagé facilite la recherche du matériel et aide à concentrer son attention. Le bulletin recommande de ne garder que le nécessaire sur le pupitre.','Avant les maths : cahier de maths, crayon, gomme; la tablette de loisirs est rangée.','1 Je range. 2 Je sors 3 objets utiles. 3 Je commence. 4 Je remets les affaires.',[
    ['Pour commencer une dictée, je garde sur le bureau…','mon cahier et un crayon','tous les jouets','trois écrans ouverts','Moins de distractions aide à travailler.'],
    ['Quand je termine, je dois…','ranger le matériel','tout laisser éparpillé','perdre mes feuilles','Ranger prépare la prochaine séance.'],
    ['Un bureau organisé permet de…','retrouver ses affaires plus facilement','écrire moins clairement','oublier la consigne','C’est l’objectif signalé par l’enseignante.']]);
  add('orga','Attention','Un défi de dix minutes','La concentration peut s’entraîner : une seule petite tâche, un temps court, puis une pause. La qualité compte plus que la vitesse.','Je lis une page pendant dix minutes, puis j’explique ce que j’ai compris.','Choisis UNE mission, mets de côté les distractions et termine-la calmement.',[
    ['Pendant un bloc de concentration, je fais…','une seule tâche','trois vidéos et des devoirs','autre chose à chaque minute','Une tâche à la fois aide à se concentrer.'],
    ['Après un bloc de travail, je peux…','faire une courte pause','abandonner toute la semaine','me punir','Une pause courte aide à reprendre.'],
    ['La priorité est…','le travail compris et soigné','finir le plus vite possible','avoir toujours 20/20','La compréhension compte plus que la vitesse.']]);
  add('orga','Méthode','Relire avant de terminer','Relire consiste à vérifier qu’on a répondu à la question, noté les bonnes unités et corrigé les erreurs possibles.','Problème : « Combien de livres restent-ils ? » → répondre en livres, pas uniquement par un nombre.','1 Consigne respectée ? 2 Calcul exact ? 3 Phrase complète ? 4 Travail rangé ?',[
    ['Après un problème, je vérifie d’abord…','si ma réponse répond à la question','la couleur du cartable','mon score à Roblox','Le sens de la réponse est essentiel.'],
    ['En français, je relis pour…','corriger la ponctuation et les accords','ajouter des erreurs','enlever toutes les majuscules','La relecture améliore le texte.'],
    ['Quand une erreur est trouvée, c’est…','une occasion d’apprendre','une preuve que je suis nulle','interdit de recommencer','Se corriger fait progresser.']]);
  add('orga','Autonomie','Planifier et prioriser','Une liste de deux ou trois tâches réalistes permet de savoir par où commencer. On peut demander de l’aide si une consigne n’est pas comprise.','Aujourd’hui : 1 lecture 20 min, 2 problème de maths, 3 préparer le sac.','Écris tes 3 priorités, coche chacune et célèbre ton effort.',[
    ['Pour une journée, un bon plan est…','une courte liste de priorités','une liste de 50 devoirs','aucune organisation','Un plan réaliste donne des repères.'],
    ['Si je ne comprends pas, je peux…','demander une explication','cacher mon cahier','copier sans comprendre','Demander de l’aide est une stratégie.'],
    ['La première tâche choisie devrait être…','importante et réalisable','la plus longue au monde','choisie au hasard sans besoin','La priorité aide à avancer.']]);
  add('orga','Émotions','Faire face à une difficulté','Une erreur ou un exercice difficile n’enlève rien à ta valeur. Essaie une autre stratégie, respire calmement et demande de l’aide.','« Je n’y arrive pas encore » est plus utile que « je n’y arriverai jamais ».','Arrête-toi → respire → essaie une nouvelle approche → demande de l’aide.',[
    ['« Je n’y arrive pas encore » signifie…','je peux continuer à apprendre','je suis incapable pour toujours','je dois abandonner','Le mot « encore » invite à progresser.'],
    ['Quand une tâche semble difficile, je peux…','faire une pause puis réessayer','me traiter méchamment','déchirer le cahier','Changer de stratégie aide.'],
    ['Une erreur veut dire…','qu’on peut apprendre quelque chose','qu’on a échoué pour toujours','qu’il faut arrêter les études','Les erreurs font partie de l’apprentissage.']]);
  add('orga','Habitudes','Transition sans tablette','Une transition est plus facile avec une règle connue à l’avance et un avertissement avant la fin. Il faut aussi choisir une activité agréable sans écran.','« Dans dix minutes, je range la tablette puis je prends mon goûter. »','Préviens → termine le jeu au point prévu → pose la tablette → commence la prochaine activité.',[
    ['Une bonne transition commence par…','une annonce à l’avance','une surprise à chaque fois','une dispute obligatoire','Un avertissement aide à anticiper.'],
    ['Pendant le repas, je peux…','parler avec ma famille sans tablette','garder une vidéo devant moi','faire deux jeux à la fois','Des moments sans écran favorisent l’échange.'],
    ['Après une activité numérique, je peux choisir…','une activité physique ou créative','uniquement une autre vidéo','aucune pause','Varier les activités aide l’équilibre.']]);
  const weeklyPlan = [
    {day:1,name:'Lundi',focus:'Français : comprendre et écrire',targets:['Lecture 20 min','Une leçon de français','Bureau rangé']},
    {day:2,name:'Mardi',focus:'Mathématiques : calcul et fractions',targets:['Lecture 20 min','Une leçon de mathématiques','Relire la réponse']},
    {day:3,name:'Mercredi',focus:'English : speak with confidence',targets:['Lecture 20 min','English oral 5 min','Une courte activité']},
    {day:4,name:'Jeudi',focus:'Révisions et dictée',targets:['Lecture 20 min','Français : 10 min','Mathématiques : 10 min']},
    {day:5,name:'Vendredi',focus:'Découverte et bilan léger',targets:['Lecture 20 min','Sciences ou études sociales','Fierté de la semaine']},
    {day:6,name:'Samedi',focus:'Création et exploration',targets:['Lecture plaisir','Arts ou découverte','Jeux sans écran']},
    {day:0,name:'Dimanche',focus:'Gymnastique et préparation',targets:['Gymnastique au club','Préparer le cartable','Bilan familial']}
  ];
  const curriculumLinks = [
    ['Mathématiques 4e – Ontario','https://www.ontario.ca/page/math-curriculum-grades-1-8'],
    ['Français – programme de l’Ontario','https://www.dcp.edu.gov.on.ca/fr/curriculum/elementaire-francais'],
    ['Sciences 4e – Ontario','https://www.dcp.edu.gov.on.ca/en/long-range-plans-science-technology/g4'],
    ['Études sociales – Ontario','https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-sshg/grades/g6-ss/social-studies-grades-1-to-6']
  ];
  window.DOUAA_CONTENT = Object.freeze({subjects,modules,weeklyPlan,curriculumLinks});
})();
